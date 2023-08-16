import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useUserContext } from "../../context/UserContext";
import Search from "./Search";
import logo from "../../assets/img/logo.png";
import logowhite from "../../assets/img/logo white.png";
import { useEffect, useRef } from "react";

const Header = () => {
  const { isDarkTheme, ToggleDarkTheme, setIsSidebarOpen } = useUserContext();
  const header = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        header.current.style.backgroundColor = "white";
        header.current.style.position = "fixed";
      } else {
        header.current.style.backgroundColor = "transparent";
        header.current.style.position = "relative";
      }
    });

    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 300) {
        header.current.style.backgroundColor = "white";
        header.current.style.position = "fixed";
      } else {
        header.current.style.backgroundColor = "transparent";
        header.current.style.position = "relative";
      }
    });
  }, []);

  return (
    <header
      className="flex justify-between gap-2 py-3 md:px-8 px-3 items-center transition-all duration-500  w-full top-0 left-0 z-20"
      ref={header}
    >
      <div className="cursor-pointer">
        <img src={logo} alt="logo" className="md:block hidden w-40 " />

        <img
          src="https://seeklogo.com/images/P/pexels-logo-EFB9232709-seeklogo.com.png"
          alt="logo"
          className="md:hidden block w-10 h-10"
        />
      </div>
      <Search />
      <button
        type="button"
        className="h-10 w-10 hidden place-items-center md:grid  rounded-full hover:bg-slate-300/50 transition-all duration-300"
        onClick={ToggleDarkTheme}
      >
        {isDarkTheme ? (
          <FaSun className={isDarkTheme ? "text-slate-400" : ""} />
        ) : (
          <BsMoonStarsFill />
        )}
      </button>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden grid h-10  min-w-[2.5rem] place-items-center rounded-full bg-slate-300/50 transition-all duration-300"
      >
        <LuMenu className="text-2xl" />
      </button>
    </header>
  );
};
export default Header;
