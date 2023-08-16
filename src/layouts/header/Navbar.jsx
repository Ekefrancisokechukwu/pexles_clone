import { NavLink } from "react-router-dom";
import { links } from "../../utils/links";

const Navbar = () => {
  return (
    <nav className=" justify-center p-5 sm-md:flex hidden">
      <ul className="flex items-center gap-5">
        {links.map((link, i) => (
          <li key={i} className="text-lg capitalize">
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white py-3 px-4 hover:bg-black/80 transition-all duration-300 rounded-3xl"
                  : "hover:text-zinc-900 py-3 px-4 dark:hover:text-white transition-all rounded-3xl"
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
