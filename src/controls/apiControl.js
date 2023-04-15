import axios from 'axios';

const apiURL = 'https://www.thecocktaildb.com/api/json/v1/1';

class apiControl { 
    constructor () {
        this.api = axios.create({baseURL: apiURL});
    }

    async getAcoolicDrinks () {
        try {
            const { data } = await this.api.get('/filter.php?a=Alcoholic');
            return data.drinks;
        } catch (error) {
            throw error;
        }
    }

    async getNonAcoolicDrinks () {
        try {
            const { data } = await this.api.get('/filter.php?a=Non_Alcoholic');
            return data.drinks;
        } catch (error) {
            throw error;
        }
    }
    
    async getDrinkRecipe (idDrink) {
        try {
            const { data } = await this.api.get(`/lookup.php?i=${idDrink}`);
            return data.drinks[0];
        } catch (error) {
            throw error;
        }
    }
    
    async getDrinkByName (search) {
        try {
            const { data } = await this.api.get(`search.php?s=${search}`);
            return data.drinks;
        } catch (error) {
            throw error;
        }
    }

    async getRandomDrink () {
        try {
            const { data } = await this.api.get('/random.php');
            return data.drinks[0];
        } catch (error) {
            throw error;
        }
    }
}

const api = new apiControl();
export default api;