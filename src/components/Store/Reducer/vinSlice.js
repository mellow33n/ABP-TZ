import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit/";

import { getVIN, getVinList } from "../../../api/vinAPI";



export const getVinFetch = createAsyncThunk('getVinByUser', async (vin) => {
    const data = await getVIN(vin);

    return data
});

export const getVinListFetch = createAsyncThunk('getVinListbyUser', async () => {
    const data = await getVinList();

    return data
})


export const vinSlice = createSlice({
    name: 'VIN',
    initialState: {
        loaded: false,
        loading: false,
        error: null,
        searchResults: {
            results: [],
            errors: [],
        },
        searchCriteria: '',
        lastFiveSearch: [],
        vinList: [],

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getVinFetch.pending, (state, action) => {
            state.loading = true;
            state.loaded = false;
            state.error = false;
        }).addCase(getVinFetch.fulfilled, (state, action) => {
            state.loading = false;
            state.loaded = true;
            state.error = null;
            const errorsID = [143, 156, 191];
            state.searchResults.results = action.payload.data.Results.filter((value) => value.Value && !errorsID.includes(value.VariableId) ? value : null)
            state.searchResults.errors = action.payload.data.Results.filter((value) => value.Value && errorsID.includes(value.VariableId) ? value : null);
            state.searchCriteria = action.payload.data.SearchCriteria;
            // lastFiveSearch
            // добавляю первый запрос
            if (!state.lastFiveSearch.length) {
                state.lastFiveSearch.push(state.searchCriteria);
            } else {
                // если запросы были, проверяю новый на наличие копии в массиве
                const isIncludes = state.lastFiveSearch.includes(state.searchCriteria);

                // если новый запрос уникальный - добавляю его в начало массива
                if (!isIncludes) {
                    state.lastFiveSearch.unshift(state.searchCriteria);
                }

                // если длина массива больше 5 - обрезаю его
                if (state.lastFiveSearch.length > 5) {
                    state.lastFiveSearch = state.lastFiveSearch.slice(0, 5);
                }
            }
        }).addCase(getVinFetch.rejected, (state, action) => {
            state.loading = false;
            state.loaded = true;
            state.error = action.error;
        }).addCase(getVinListFetch.pending, (state, action) => {
            state.loading = true;
            state.loaded = false;
            state.error = false;
        }).addCase(getVinListFetch.fulfilled, (state, action) => {
            state.loading = false;
            state.loaded = true;
            state.error = null;
            state.vinList = action.payload.data.Results.sort((a, b) => {
                if (a.Name > b.Name) {
                    return 1
                }
                if (a.Name < b.Name) {
                    return -1
                }
                return 0
            })
        }).addCase(getVinListFetch.rejected, (state, action) => {
            state.loading = false;
            state.loaded = true;
            state.error = action.error;
        })
    }
});
export default vinSlice.reducer;