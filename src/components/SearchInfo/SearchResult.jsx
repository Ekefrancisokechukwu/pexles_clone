import { useFilterContext } from "../../context/FilterContext";
import Photocontainer from "./Photocontainer";
import Videoscontainer from "./Videoscontainer";

const SearchResult = () => {
  const { activeFilter } = useFilterContext();

  const render = () => {
    if (activeFilter === "photos") {
      return <Photocontainer />;
    } else {
      return <Videoscontainer />;
    }
  };

  return <main>{render()}</main>;
};
export default SearchResult;
