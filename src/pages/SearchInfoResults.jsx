import Filter from "../components/SearchInfo/Filter";
import Photocontainer from "../components/SearchInfo/Photocontainer";
import SearchResult from "../components/SearchInfo/SearchResult";
import Navbar from "../layouts/header/Navbar";

const SearchInfoResults = () => {
  return (
    <main>
      <Navbar />
      <Filter />
      <SearchResult />
    </main>
  );
};
export default SearchInfoResults;
