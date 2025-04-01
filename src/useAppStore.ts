import { create } from "zustand"
import {devtools} from 'zustand/middleware'
import { categoryRecipesSlice,StateCategories } from "./store/sliceRecipe"
import { favoritesStore,FavoriesPropsStore } from "./store/sliceFavorites"
import { notification, NotificationProps } from "./store/sliceNotification"
import { AISlice, createSliceAI } from "./store/aiSliceGenerator"

//Creando el store para el manejo global de los slices
//El store es una forma de manejo global del estado de la aplicacion
export const useAppStore = create<StateCategories & FavoriesPropsStore & NotificationProps & AISlice >()(devtools((...a)=>({
  ...categoryRecipesSlice(...a),
  ...favoritesStore(...a),
  ...notification (...a),
  ...createSliceAI(...a)
})))