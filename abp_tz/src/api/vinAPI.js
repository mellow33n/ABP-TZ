import axios from "axios";

const apiBaseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/';
const apiJSON = '?format=json';

const vinDbAxios = axios.create({
    baseURL: apiBaseURL,
});


export const getVIN = (vin) => vinDbAxios.get(('decodevin/' + vin + apiJSON));
export const getVinList = () => vinDbAxios.get(('getvehiclevariablelist/' + apiJSON));
