import { create } from "zustand"
import {devtools} from 'zustand/middleware'
import { categoryRecipesSlice,StateCategories } from "./store/sliceRecipe"
import { favoritesStore,FavoriesPropsStore } from "./store/sliceFavorites"
import { notification, NotificationProps } from "./store/sliceNotification"

//Creando el store
export const useAppStore = create<StateCategories & FavoriesPropsStore & NotificationProps >()(devtools((...a)=>({
  ...categoryRecipesSlice(...a),
  ...favoritesStore(...a),
  ...notification (...a)
})))