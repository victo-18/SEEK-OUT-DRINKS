import { StateCreator } from "zustand"
import { fetchRecipies, getCategories, getDrinkIngrdient } from "../services/recipiesCategories"
import {type Caterories,FilterSerarch,Ingredient,SearchRecipy,drinksSchema} from "../types/dataType"



export type StateCategories ={
    categories:Caterories
    recipies:FilterSerarch
    ingredient:Ingredient
    modal:boolean
    fetchCategores: () => void
    searchRecipe: (data:SearchRecipy) => Promise<void>
    searchIngredientById: (drinkId:drinksSchema['idDrink']) => Promise<void>
    closeModal:()=> void
}
//Creating the stor for drinks  Categories
export const categoryRecipesSlice:StateCreator<StateCategories> =(set)=>({

    categories:{
        drinks:[]
    }, 
    recipies:{
        drinks:[]
    },
    ingredient:{} as Ingredient,
    modal:false,
    fetchCategores:async()=>{
        const result = await getCategories()
        set(({
            categories:result
        }))
    },
    searchRecipe:async(data)=>{
         const result = await fetchRecipies(data)
         //writing data in the state 
     set(({
        recipies:result
     }))
    },
    //Search drinks ingredinet by id
     searchIngredientById: async(drinkId)=>{
       const result = await getDrinkIngrdient(drinkId)
     set(({
        ingredient:result,
        modal:true
     }))
     },
     closeModal:()=>{
      set(({
        modal:false,
        ingredient:{} as Ingredient,
      }))
     }
})


