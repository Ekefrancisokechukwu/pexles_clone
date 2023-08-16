import { createContext, useContext, useReducer, useState } from "react";
import { client, useFetch } from "../utils/useFetch";

const FilterContext = createContext();

const UPDATE_FILTER = "UPDATE_FILTER";

const initialState = {
  clear: false,
  $scape: ["all orientations", "horizontal", "vertical", "square"],

  filters: {
    search: "",
    scape: "all orientations",
  },
};

const reducer = (state, action) => {
  if (action.type === UPDATE_FILTER) {
    return { ...state, filters: { ...state.filters, scape: action.payload } };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

const FilterProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState("photos");
  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [oriented, setOriented] = useState("all orientations");
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchPhotos, setSearchPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchData = async () => {
    setLoading(true);
    try {
      const searchPhotos = await client.photos
        .search({ query, per_page: 30 })
        .then((photos) => {
          return photos;
        });

      const searchVideos = await client.videos
        .search({ query, per_page: 30 })
        .then((photos) => {
          return photos;
        });
      setSearchPhotos(searchPhotos.photos);
      setSearchVideos(searchVideos.videos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFilter = (parem) => {
    dispatch({ type: UPDATE_FILTER, payload: parem });
  };

  return (
    <FilterContext.Provider
      value={{
        activeFilter,
        query,
        setQuery,
        setActiveFilter,
        updateFilter,
        ...state,
        oriented,
        setOriented,
        loading,
        searchPhotos,
        searchVideos,
        searchData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
