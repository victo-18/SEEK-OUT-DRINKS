import { NavLink } from "react-router-dom";
import logo from "../../public/logo.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useAppStore } from "../useAppStore";
import { ErrorMessage } from "./ErrorMessage";
import { SearchRecipy } from "../types/dataType";


export const Header = () => {
  const [category,setCategory]=useState<SearchRecipy>({
    ingredient:'',
    category:'',
  })
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  //Definding our store to  use the state
  const fetchCategores = useAppStore((state)=>state.fetchCategores)
  const categories = useAppStore((state)=>state.categories)
  const searchRecipe = useAppStore((state)=>state.searchRecipe)
  //State to show a error message to user when form have a filed  is empty
  const [errorMessage, setErrorMessage]= useState('')

  //Using the function fetchCategories to fect categories fron the api when the component be ready
  useEffect(()=>{
    fetchCategores()
  },[])
 const handleChage =(e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>
 )=>{
  setCategory({
    ...category,
    [e.target.name]:e.target.value
  })
 }
const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
 e.preventDefault()
 //ToDo
 if(Object.values(category).includes("")){
setErrorMessage('Dear User all filed are required')
return
 }
 searchRecipe(category)
 setErrorMessage('')
}
  return (
    <header className={isHome? "bg-[url('./public/bg.jpg')] bg-center bg-cover":" bg-slate-800"}>
      <div className=" mx-auto container px-5 py-4">
        <div className=" flex justify-between items-center">
          <div>
            <NavLink to={"/"}>
              <img className=" w-20" src={logo} alt="page-logo" />
            </NavLink>
          </div>
          <nav className="flex items-center gap-12">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to={"/"}
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to={"/favorite"}
            >
              Favorites
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to={"/generateAI"}
            >
              Generate with AI
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="md:w-1/2 lg:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-16"
            onSubmit={handleSubmit}
            >
              {errorMessage &&(<ErrorMessage>{errorMessage}</ErrorMessage>)}
            <div className=" space-y-4 mb-4">
              <label
                className=" text-white block uppercase font-extrabold text-lg"
                htmlFor="ingredient"
              >
                {" "}
                Name or Ingrdients
              </label>
              <input
                className=" p-3 w-full rounded-lg focus:outline-none bg-white "
                type="text"
                id="ingredient"
                name="ingredient"
                placeholder="Type your ingredient example Vodka,Tequila,Coffe"
                value={category.ingredient}
                onChange={handleChage}
              />
            </div>
            <div className=" space-y-4 mb-4">
              <label
                className=" text-white block uppercase font-extrabold text-lg"
                htmlFor="category"
              >
                {" "}
                Category
              </label>
              <select
                className=" p-3 w-full rounded-lg focus:outline-none bg-white "
                id="category"
                name="category"
                value={category.category}
                onChange={handleChage}
              >
                <option value={""}>-- Select the Catecory --</option>
                {categories.drinks.map((category,index)=>(
                  <option value={category.strCategory} key={index}>{category.strCategory}</option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              className="bg-orange-900 hover:bg-orange-800 text-center
               text-white uppercase rounded-lg border-none w-full p-2 font-bold
               hover:cursor-pointer 
               "
               value={"Busacar recetas"}
            />
          </form>
        )}
      </div>
    </header>
  );
};
