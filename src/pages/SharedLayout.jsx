import { Outlet } from "react-router";
import Header from "../layouts/header/Header";
import SliderNav from "../layouts/SliderNav";
// import Navbar from "../layouts/header/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <SliderNav />
      <Outlet />
    </>
  );
};
export default SharedLayout;
