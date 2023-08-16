import { AiOutlinePicture, AiOutlinePlaySquare } from "react-icons/ai";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { useFilterContext } from "../../context/FilterContext";
import { activeFilterMode } from "../../utils/data";
import Searchdropdown from "./Searchdropdown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFetch } from "../../utils/useFetch";

const Search = () => {
  const { activeFilter, query, setQuery, setActiveFilter, searchData } =
    useFilterContext();
  const { getdata } = useFetch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    searchData();

    setTimeout(() => {
      navigate("/search");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center search-box bg-slate-100 rounded-lg relative"
    >
      <div className="group flex gap-2 items-center cursor-default p-2 md:px-8 px-3 relative">
        {activeFilter === "photos" ? (
          <AiOutlinePicture className="text-lg" />
        ) : (
          <AiOutlinePlaySquare className="text-lg" />
        )}
        <h2 className="text-lg sm:block hidden font-medium capitalize">
          {activeFilter}
        </h2>
        <FiChevronDown className="group-hover:rotate-180" />

        <div className="drop-down absolute z-20 bg-white py-3 border rounded-lg top-11 shadow-lg hidden group-hover:block">
          <ul>
            {activeFilterMode.map((filter, i) => {
              return (
                <li
                  onClick={() => setActiveFilter(filter.text)}
                  key={i}
                  className={`flex capitalize items-center gap-2 p-1 font-medium  px-8 left-0 cursor-pointer hover:bg-slate-100 ${
                    activeFilter === filter.text ? "text-green-700" : ""
                  }`}
                >
                  {filter.icon}
                  {filter.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <input
        id="search"
        type="search"
        autoComplete="off"
        value={query}
        onChange={handleChange}
        placeholder={`Search for free ${activeFilter}`}
        className="p-2 appearance-none search-input peer  focus:border-slate-500 transition-all duration-200 sm:w-96   w-full border-l border-r border-transparent focus:outline-none bg-transparent"
      />

      <button className="p-2 md:px-8 px-3 group search-button">
        <FiSearch className="group-hover:text-green-700 transition-colors" />
      </button>

      {/* <Searchdropdown /> */}
    </form>
  );
};
export default Search;
