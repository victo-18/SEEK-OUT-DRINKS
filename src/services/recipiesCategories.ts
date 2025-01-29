import axios from "axios";
import {
  filterSearchSchema,
  ingredients,
  responseApiCategoriesSchema,
} from "../schema/recipies-Categories";
import { drinksSchema, SearchRecipy } from "../types/dataType";

export const getCategories = async () => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const { data } = await axios.get(URL);
  //Checking data type fetch from api
  const result = responseApiCategoriesSchema.safeParse(data);
  //verifying that api response have been success
  if (result.success) {
    return result.data;
  }
};
// Function to fetche the recipies for make drinks

export const fetchRecipies = async (search: SearchRecipy) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`;
  const { data } = await axios.get(URL);
  //Checking data type fetch from api
  const result = filterSearchSchema.safeParse(data);
  //verifying that api response have been success
  if (result.success) {
    return result.data;
  }
};

export const getDrinkIngrdient = async (idDrink: drinksSchema["idDrink"]) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  const { data } = await axios.get(URL);
  const result = ingredients.safeParse(data);
  if (result.success) {
    return result.data.drinks[0];
  }
};
