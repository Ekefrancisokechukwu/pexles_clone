import { createContext, useContext, useReducer, useState } from "react";
import {
  API_PHOTO_ENDPIONT,
  API_VIDEO_ENDPIONT,
  authFetch,
} from "../utils/useFetch";

const FilterContext = createContext();

const UPDATE_FILTER = "UPDATE_FILTER";
const UPDATE_BYCOLOR = "UPDATE_BYCOLOR";

const initialState = {
  clear: false,
  $scape: ["all orientations", "horizontal", "vertical", "square"],
  $colors: [
    "#4D7C0F",
    {
      hax: "#C2410C",
      text: "orange",
    },

    "#2563EB",
    "#3730A3",
    "#B91C1C",
    "#831843",
    "#86198F",
    "#881337",
    "#EAB308",
    "#000",
    "#71717A",
  ],

  filters: {
    search: "",
    scape: "all orientations",
    color: "",
  },
};

const reducer = (state, action) => {
  if (action.type === UPDATE_FILTER) {
    return { ...state, filters: { ...state.filters, scape: action.payload } };
  }

  if (action.type === UPDATE_BYCOLOR) {
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

  console.log(state);

  const searchData = async () => {
    setLoading(true);
    try {
      const searchPhotos = await authFetch
        .get(`${API_PHOTO_ENDPIONT}/search?query=${query}e&per_page=30`)
        .then((photos) => {
          return photos.data.photos;
        });

      const searchVideos = await authFetch
        .get(`${API_VIDEO_ENDPIONT}/search?query=${query}e&per_page=30`)
        .then((video) => {
          return video.data.videos;
        });
      setSearchPhotos(searchPhotos);
      setSearchVideos(searchVideos);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  const filterFetch = async () => {
    setLoading(true);
    try {
      const searchPhotos = await authFetch
        .get(
          `${API_PHOTO_ENDPIONT}/search?query=${state.filters.color}e&per_page=30`
        )
        .then((photos) => {
          return photos.data.photos;
        });

      const searchVideos = await authFetch
        .get(
          `${API_VIDEO_ENDPIONT}/search?query=${state.filters.color}e&per_page=30`
        )
        .then((video) => {
          return video.data.videos;
        });
    } catch (error) {}
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
