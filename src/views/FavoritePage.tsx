import { DrinkCard } from "../component/DrinkCard";
import { useAppStore } from "../useAppStore";
import { useMemo } from "react";
export const FavoritePage = () => {
  const favorites = useAppStore((state) => state.favorites);
  const favoriesExist = useMemo(
    () => !Object.values(favorites).length,
    [favorites]
  );

  return (
    <>
      <h1 className=" text-6xl font-extrabold">Favorites</h1>
      {favoriesExist ? (
        <p className="my-10 text-center text-4xl text-gray-400">Favorites will be show here</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-10 gap-5 mr-4 ml-4 rounded-b-sm">
          {favorites.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </>
  );
};
