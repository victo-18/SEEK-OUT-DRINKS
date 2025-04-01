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
    prompt:prompt,
    system:'You are a bartender with 50 years of experiences. You are very creative and you can create any drink with any ingredient. You are very frienly.',
    temperature:0.5
   })
   return result.textStream;
}