import { lazy,Suspense } from 'react'
import {BrowserRouter,Route,Routes}from'react-router-dom'
import { IndexPage } from './views/IndexPage'
import { Layout } from './layout/Layout'

const FavoritePage= lazy(()=> import('./views/FavoritePage').then(module => ({ default: module.FavoritePage })))
export const AppRouter = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route element={<Layout/>}>
      <Route  path='/' element={<IndexPage/>} index/>
      <Route  path='/favorite' element={<Suspense fallback='Cargando...'>
        <FavoritePage/>
      </Suspense> } 
       
      />
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}
