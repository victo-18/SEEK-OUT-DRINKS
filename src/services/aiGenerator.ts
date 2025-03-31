import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';
export const aiGenerator = async(prompt:string)=>{
   const  openrouter = createOpenRouter({
        apiKey:`${import.meta.env.VITE_OPEROUTE_AI_KEY}`
    })
   const result =  streamText({
    model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
   // model: openrouter('google/gemini-2.5-pro-exp-03-25:free'),
   // model: openrouter('deepseek/deepseek-chat-v3-0324:free'),
    prompt:prompt
   })
   return result.textStream;
}