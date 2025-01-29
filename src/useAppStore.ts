import { create } from "zustand"
import {devtools} from 'zustand/middleware'
import { categoryRecipesSlice,StateCategories } from "./store/sliceRecipe"
import { favoritesStore,FavoriesPropsStore } from "./store/sliceFavorites"

//Creando el store
export const useAppStore = create<StateCategories & FavoriesPropsStore >()(devtools((...a)=>({
  ...categoryRecipesSlice(...a),
  ...favoritesStore(...a)
})))