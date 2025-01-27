import { create } from "zustand"
import {devtools} from 'zustand/middleware'
import { categoryRecipesSlice,StateCategories } from "./store/sliceRecipe"

//Creando el store
export const useAppStore = create<StateCategories >()(devtools((...a)=>({
  ...categoryRecipesSlice(...a)
})))