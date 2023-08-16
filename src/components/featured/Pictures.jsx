import { Suspense, lazy, useRef } from "react";
import { useGlobalContext } from "../../context/context";
import SinglePics from "./SinglePics";
import InfiniteScroll from "react-infinite-scroll-component";
import CardLoader from "../loader/CardLoader";
const Pictures = () => {
  const { featured, loading, error } = useGlobalContext();

  if (loading) {
    return (
      <section className="grid sm:grid-cols-3 mt-8 grid-cols-2  md:gap-6 gap-2">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </section>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <section className=" mt-8 grid featured_container   sm:grid-cols-3  grid-cols-2  md:gap-6 gap-2">
      {featured.map((photo) => {
        return <SinglePics key={photo.id} {...photo} photo={photo} />;
      })}
    </section>
  );
};
export default Pictures;
