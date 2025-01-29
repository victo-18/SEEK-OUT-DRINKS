import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../useAppStore";
import { Ingredient } from "../types/dataType";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const ingredient = useAppStore((state) => state.ingredient);
  const closeModal = useAppStore((state) => state.closeModal);
  const addFavorites = useAppStore((state)=> state.addToFavorites)
  const favoriteExist= useAppStore((state)=> state.favoriteExist)

  // function to for ward the element in the object and show in a component later
  const renderIngredients = () => {
    
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const selectIngredient =
        ingredient[`strIngredient${i}` as keyof Ingredient];
      const measure = ingredient[`strMeasure${i}` as keyof Ingredient];

      if (selectIngredient && measure) {
        ingredients.push(
          <li key={i} className="font-normal text-lg">
            {selectIngredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
         
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <Dialog.Panel className="flex justify-end mr-8">
            <i className="bi bi-box-arrow-right text-orange-400 text-3xl hover:text-orange-600 hover:cursor-pointer"
            onClick={closeModal}
            >
            </i>
          </Dialog.Panel>
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {ingredient.strDrink}
                  </Dialog.Title>
                  <img
                    src={ingredient.strDrinkThumb}
                    alt={`Image of ${ingredient.strDrink}`}
                    className="mx-auto w-96  rounded-lg"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    {renderIngredients()}
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    <p className="text-lg font-light">
                      {" "}
                      {ingredient.strInstructions}
                    </p>
                    <div className=" flex justify-between gap-4">
                      <button 
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-500 p-2 w-full border-none 
                      text-white hover:bg-gray-800 cursor-pointer rounded-md">Close</button>

                     <button
                     onClick={()=> {
                      addFavorites(ingredient)
                      closeModal()
                     }} 
                    
                     className="bg-orange-500 p-2 w-full border-none 
                     
                      text-white hover:bg-orange-800 cursor-pointer rounded-md">{favoriteExist(ingredient.idDrink)? "Delete Recipe":" Add to favorites"}</button>
                    </div>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
