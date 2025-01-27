import { StateCreator } from "zustand"
import { fetchRecipies, getCategories } from "../services/recipiesCategories"
import {type Caterories,FilterSerarch,SearchRecipy} from "../types/dataType"


export type StateCategories ={
    categories:Caterories
    recipies:FilterSerarch
    fetchCategores: () => void
    searchRecipe: (data:SearchRecipy) => Promise<void>
   
}    
export const categoryRecipesSlice:StateCreator<StateCategories> =(set)=>({

    categories:{
        drinks:[]
    }, 
    recipies:{
        drinks:[]
    },
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
    }
})


