import { Link } from "react-router-dom";
import { links } from "../utils/links";
import { useUserContext } from "../context/UserContext";

const SliderNav = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useUserContext();
  return (
    <aside
      className={`transition-transform duration-300 bg-white fixed top-0 left-0 z-30 w-full h-full p-4 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="text-2xl p-2 mb-3"
      >
        x
      </button>
      <ul>
        {links.map((link) => (
          <li
            key={link.text}
            className=""
            onClick={() => setIsSidebarOpen(false)}
          >
            <Link
              to={link.url}
              className="text-xl  inline-block capitalize w-full p-2 border border-gray-200"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default SliderNav;
