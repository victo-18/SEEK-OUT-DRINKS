import { StateCreator } from "zustand";
import { Ingredient } from "../types/dataType";
export type FavoriesPropsStore = {
  favorites: Ingredient[];
  addToFavorites: (recipe: Ingredient) => void;
  favoriteExist: (id: Ingredient['idDrink']) => boolean
  loadFronLocalStorage: () => void
};

export const favoritesStore: StateCreator<FavoriesPropsStore> = (set, get) => ({
  favorites: [],
  addToFavorites: (recipe) => {
   
    if (
        get().favoriteExist(recipe.idDrink)
    ) {
      set((state) => ({
        favorites: state.favorites.filter(
          (item) => item.idDrink !== recipe.idDrink
        ),
      }));
    } else {
      set({
        favorites: [...get().favorites, recipe]
      });
      localStorage.setItem("favorite", JSON.stringify(get().favorites))
    }
   
  },
  favoriteExist:(id)=>{
    
    return get().favorites.some((favorites) => favorites.idDrink ===id)
},
loadFronLocalStorage:()=>{
    const storeFavorites = localStorage.getItem('favorite')
    if(storeFavorites){
        set(({
            favorites:JSON.parse(storeFavorites)
        }))
    }
}
});
