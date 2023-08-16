import { useState } from "react";
import { RiEqualizerLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useFilterContext } from "../../context/FilterContext";

const Filter = () => {
  const [openfilter, setopenfilter] = useState(false);
  const {
    $scape,
    setOriented,
    oriented,
    updateFilter,
    searchPhotos,
    searchVideos,
    filters: { scape },
  } = useFilterContext();

  return (
    <div className="mt-7 lg:px-16 px-3">
      <div className=" flex flex-wrap justify-between items-center">
        <div className="flex gap-4">
          <button className="py-2 px-4 hover:bg-black/80  rounded-3xl bg-black text-white">
            Photos
            <span className="ml-2">{searchPhotos?.length || 0}</span>
          </button>
          <button className="py-2 px-4  hover:bg-black/80 rounded-3xl bg-black text-white">
            videos
            <span className="ml-2">{searchVideos.length || 0}</span>
          </button>
        </div>

        <button
          onClick={() => setopenfilter(!openfilter)}
          className="flex items-center  justify-between border gap-2 border-gray-400 rounded-md hover:border-gray-600 sm:p-2 p-1"
        >
          <RiEqualizerLine
            className={`text-2xl transition duration-500 ${
              openfilter ? " rotate-90 " : ""
            }`}
          />

          <span className="text-xl">Filters</span>
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div
          className={`grid items-center transition-all md:grid-cols-3 grid-cols-1 gap-3 mt-1 justify-between ${
            openfilter
              ? "md:mt-8 opacity-100 visible"
              : "md:-mt-8 -mt-40 opacity-0 invisible"
          }`}
        >
          <div className="border z-10 border-gray-400 relative hover:border-gray-600  rounded-md">
            <button className="flex peer capitalize f items-center menu-item text-lg justify-between py-3 px-4 rounded-md w-full">
              <span>{scape}</span>
              <BiChevronDown className="transition-transform " />
            </button>
            <div
              className="absolute origin-top peer-focus-within:scale-100
            peer-focus-within:visible scale-95 invisible transition-transform duration-150
             ease-in-out bg-white w-full left-0 top-[110%] border
           border-gray-400 shadow-lg rounded-md"
            >
              {$scape.map((value, i) => (
                <button
                  key={i}
                  name="scape"
                  onClick={() => updateFilter(value)}
                  className={`flex items-center capitalize text-lg justify-between py-3 px-4 rounded-md w-full ${
                    value === scape ? "text-black" : ""
                  }`}
                >
                  <span>{value}</span> {value === scape ? <TiTick /> : null}
                </button>
              ))}
            </div>
          </div>
          <div className="border border-gray-400 hover:border-gray-600  rounded-md">
            <button className="flex items-center text-lg justify-between py-3 px-4 rounded-md w-full">
              <span>All sizes</span> <BiChevronDown />
            </button>
          </div>
          <div className="border border-gray-400 hover:border-gray-600  rounded-md">
            <button className="flex items-center  text-lg justify-between py-3 sm:px-4 rounded-md w-full ">
              <div className="flex items-center gap-1">
                {" "}
                <span
                  style={{ background: "" }}
                  className="min-w-[1.6rem]  h-[1.6rem] inline-block p-2 shadow-inner shadow-black/30 rounded-full"
                ></span>{" "}
                Colors
              </div>{" "}
              <BiChevronDown />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Filter;
