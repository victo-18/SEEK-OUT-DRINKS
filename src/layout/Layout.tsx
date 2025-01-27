import { Outlet } from "react-router-dom";
import { Header } from "../component/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
