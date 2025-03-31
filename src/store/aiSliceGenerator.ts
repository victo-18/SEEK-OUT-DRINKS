import{StateCreator}from 'zustand'
import { aiGenerator } from '../services/aiGenerator'


export type AISlice ={
    recipe:string,
    isGenerating:boolean
    generateRecipe:(prompt:string)=>Promise<void>
}
//Store para manejar el estado de la inteligencia artificial
export const createSliceAI :StateCreator<AISlice,[],[],AISlice>=(set)=>({
recipe:'',
isGenerating:false,
//funcion para la implementacion de inteligencia artificial
generateRecipe: async(prompt)=>{
 const data =await aiGenerator(prompt)
 //limpia la respuesta a cada llamado
 set({recipe:'',isGenerating:true})
 //continua iterando mientras la ai siga generando informacion
  for await(const textPart of data){
    
    set((state =>({
        recipe:state.recipe+textPart
    })))
  }
  set({isGenerating:false})
}
})