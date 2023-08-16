// import { useFetch } from "./useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useFetch } from "./utils/useFetch";
import {
  DetailPage,
  Error,
  Landing,
  SearchInfoResults,
  SharedLayout,
  Videos,
} from "./pages";

function App() {
  useFetch();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Landing />} />
            <Route path="/search" element={<SearchInfoResults />} />
            {/* <Route path="/:id" element={<DetailPage />} /> */}
            <Route path="/videos" element={<Videos />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
