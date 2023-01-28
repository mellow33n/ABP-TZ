import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit/";



/* export const getMoviesBySearchFetch = createAsyncThunk('movies/getMoviesBySearchFetch', async ({ defaultPage = 1, genres = false, lang = false }) => {
    const data = await getMoviesBySearh(defaultPage, genres, lang);

    return data;
}); */


export const vinSlice = createSlice({
    name: 'VIN',
    initialState: {
        vinState: {
            loaded: false,
            loading: false,
            error: null,
        },
    },
    reducers: {

        /* getFetchStringID: (state, action) => {
            state.movies_sect.fetchStrID = state.movies_sect.genres
                .map((value) => value.selected ? (value.id + '') : false)
                .filter((value) => value)
                .join()
        }, */
        
    },
    extraReducers: (builder) => {
        // movies
        /* builder.addCase(getMoviesFetch.pending, (state, action) => {
            state.movies_sect.loading = true;
            state.movies_sect.loaded = false;
            state.movies_sect.error = false;
            state.movies_sect.movies = [];
        }).addCase(getMoviesFetch.fulfilled, (state, action) => {
            state.movies_sect.loading = false;
            state.movies_sect.loaded = true;
            state.movies_sect.error = null;
            state.movies_sect.movies = action.payload.data.results.map((value) => Object.assign({}, value, { isFavorites: false }));
            for (let card of state.movies_sect.movies) {
                for (let favCard of state.movies_sect.favoritesMovies) {
                    if (card.id === favCard.id) {
                        card.isFavorites = true;
                    }
                }
            };
            state.movies_sect.total_pages = action.payload.data.total_pages;
            state.movies_sect.page_num = action.payload.data.page;
        }).addCase(getMoviesFetch.rejected, (state, action) => {
            state.movies_sect.loading = false;
            state.movies_sect.loaded = true;
            state.movies_sect.error = action.error;
        }) */
    }
});
export const { a } = vinSlice.actions;
export default vinSlice.reducer;