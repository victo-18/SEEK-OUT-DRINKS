import { create } from "zustand"
import {devtools} from 'zustand/middleware'
import { categoryRecipesSlice,StateCategories } from "./store/sliceRecipe"
import { favoritesStore,FavoriesPropsStore } from "./store/sliceFavorites"
import { notification, NotificationProps } from "./store/sliceNotification"
import { AISlice, createSliceAI } from "./store/aiSliceGenerator"

//Creando el store
export const useAppStore = create<StateCategories & FavoriesPropsStore & NotificationProps & AISlice >()(devtools((...a)=>({
  ...categoryRecipesSlice(...a),
  ...favoritesStore(...a),
  ...notification (...a),
  ...createSliceAI(...a)
})))