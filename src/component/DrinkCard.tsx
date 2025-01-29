import { drinksSchema } from "../types/dataType";
import { useAppStore } from "../useAppStore";
type DrinkProps = {
  drink: drinksSchema;
};

export const DrinkCard = ({ drink }: DrinkProps) => {
    const  searchIngredientById = useAppStore((state)=>state.searchIngredientById)
    const handleSeeDrinkRecipe =(idDrink:string)=>{
        searchIngredientById(idDrink)
    }
  return (
    <div className=" border shadow-lg rounded-md">
      <div className=" overflow-hidden">
       <img className=" hover:scale-125 transition hover:-rotate-45" src={drink.strDrinkThumb} alt={`Image of ${drink.strDrink}`} />
       </div>
      <div className="p-5">
        <h2 className=" truncate font-black text-2xl">{drink.strDrink}</h2>
        <button
        className="bg-orange-400 hover:bg-amber-500 hover:cursor-pointer
         border-none rounded-md p-3 text-white text-center text-lg w-full"
        type="button"
        onClick={()=>handleSeeDrinkRecipe(drink.idDrink)}
        >See Recipe</button>
      </div>
    </div>
  );
};
