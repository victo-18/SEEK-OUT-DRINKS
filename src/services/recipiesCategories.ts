import axios from "axios";
import { filterSearchSchema, responseApiCategoriesSchema } from "../schema/recipies-Categories";
import { SearchRecipy } from "../types/dataType";

export const getCategories = async()=>{
     const URL =`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
     const {data}= await axios.get(URL)
     //Checking data type fetch from api
   const result = responseApiCategoriesSchema.safeParse(data)
   //verifying that api response have been success
   if(result.success){
    return result.data
   }
}
// Function to fetche the recipies for make drinks

export const fetchRecipies = async (search:SearchRecipy)=>{
    const URL=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`
    const {data}= await axios.get(URL)
    //Checking data type fetch from api
  const result = filterSearchSchema.safeParse(data)
  //verifying that api response have been success
  if(result.success){
   return result.data
  }

}