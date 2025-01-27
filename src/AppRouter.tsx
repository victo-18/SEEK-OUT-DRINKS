import {BrowserRouter,Route,Routes}from'react-router-dom'
import { IndexPage } from './views/IndexPage'
import { Layout } from './layout/Layout'
import { FavoritePage } from './views/FavoritePage'
export const AppRouter = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route element={<Layout/>}>
      <Route  path='/' element={<IndexPage/>} index/>
      <Route  path='/favorite' element={<FavoritePage/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}
