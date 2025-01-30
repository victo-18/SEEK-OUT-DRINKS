import { StateCreator } from "zustand";
import { FavoriesPropsStore } from "./sliceFavorites";

 type Notification={
    text:string,
    error:boolean,
    show: boolean,
 }
export type NotificationProps={
  notification:Notification,
  closeNotification:()=>void,
  showNotification:( payload:Pick<Notification, 'text'| 'error'>)=>void
}

//Store for notification error or interaction with the users make some error actions
export const notification: StateCreator <NotificationProps & FavoriesPropsStore,[],[], NotificationProps> = (set,get)=>({
  notification:{
    text:'',
    error:false,
    show: false,
  },
  closeNotification:()=>{
    set(({
       notification:{
        text:'',
        error:false,
        show:false
       }
    }))
  },
  
  showNotification(payload) {
      set(({
        notification:{
            text:payload.text,
            error:payload.error,
            show:true
        }
      }))
      setTimeout(()=>{
       get().closeNotification()
      },1000)
  },
 
})