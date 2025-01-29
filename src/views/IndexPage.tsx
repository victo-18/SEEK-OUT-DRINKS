import { useMemo } from "react";
import { useAppStore } from "../useAppStore";
import { DrinkCard } from "../component/DrinkCard";

export const IndexPage = () => {
  const recipesDrinks = useAppStore((state)=>state.recipies)

// watch if there are recipes in the state
  const haveRecipesDrinks = useMemo(()=> recipesDrinks.drinks.length >0 ,[recipesDrinks])

  return (
    <>
   <div>
   <h1 className="text-5xl font-extrabold m-4">Recipes</h1>
    {haveRecipesDrinks ? ( 
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-10 gap-5 mr-4 ml-4 rounded-b-sm">
      {recipesDrinks.drinks.map((drink)=>(
       <DrinkCard  key={drink.idDrink} drink ={drink}  />
      ))}
      </div>
    ):(
      <p className="my-10 text-center text-2xl">There is any recipes. Please use the form to look for a recipes drinks</p>
    )}
   </div>
    </>
  );
};
