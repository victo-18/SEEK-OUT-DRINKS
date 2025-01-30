import { Outlet } from "react-router-dom";
import { Header } from "../component/Header";
import Modal from "../component/Modal";
import { useAppStore } from "../useAppStore";
import { useEffect } from "react";
import Notification from "../component/Notification";

export const Layout = () => {
  const loadFronLocalStorage = useAppStore((state)=>state.loadFronLocalStorage)

  useEffect(()=>{
    loadFronLocalStorage()
  },[])
  return (
    <>
      <Header />
      <main className=" container mx-auto py-16">
      <Outlet />
      </main>
      <Modal/>
      <Notification/>
    </>
  );
};
