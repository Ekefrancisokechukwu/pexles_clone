import Filter from "../components/SearchInfo/Filter";
import Photocontainer from "../components/SearchInfo/Photocontainer";
import Navbar from "../layouts/header/Navbar";

const SearchInfoResults = () => {
  return (
    <main>
      <Navbar />
      <Filter />
      <Photocontainer />
    </main>
  );
};
export default SearchInfoResults;
