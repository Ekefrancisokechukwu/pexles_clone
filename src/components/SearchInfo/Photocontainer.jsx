// import SinglePics from "../featured/SinglePics";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFilterContext } from "../../context/FilterContext";
import SinglePics from "../featured/SinglePics";
import SpinnerLoader from "../loader/SpinnerLoader";

const Photocontainer = () => {
  const { searchPhotos, loading } = useFilterContext();

  if (searchPhotos.length < 1) {
    return (
      <section className="grid place-items-center py-10 ">
        <h1 className="text-3xl capitalize">Sorry Nothing found!</h1>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="grid place-items-center py-10 ">
        <SpinnerLoader />
      </section>
    );
  }

  return (
    <section className="mt-4 lg:px-16 px-3 grid md:grid-cols-3 grid-cols-2 gap-3 py-6">
      {searchPhotos.map((photo) => {
        return <SinglePics key={photo.id} {...photo} photo={photo} />;
      })}
    </section>
  );
};
export default Photocontainer;
