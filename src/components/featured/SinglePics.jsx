import { useState } from "react";
import img from "../../assets/img/card-media-6.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

const SinglePics = ({
  photo,
  alt,
  id,
  avg_color,
  height,
  width,
  liked,
  photographer: name,
  src: { large },
}) => {
  const [isFavourite, setIsFavourite] = useState(liked);
  const { loading, FavoriteHanlder } = useGlobalContext();

  return (
    <article
      className="group rounded-md relative"
      style={{ background: avg_color }}
    >
      {/* <Link to={`/${id}`} className="   h-min  bg-slate-700 rounded-md"> */}
      <img
        src={large}
        alt={alt}
        // loading="lazy"
        className="rounded-md object-cover w-full"
      />
      <figure className="absolute opacity-0 flex flex-col justify-between invisible group-hover:visible group-hover:opacity-100 bg-gradient-to-b rounded-md from-black/60 via-transparent to-black/60 transition-all ease-in-out duration-300 left-0 top-0 w-full h-full p-3">
        <button
          className="bg-gray-200 h-10 w-10 grid place-items-center rounded-md ms-auto"
          onClick={() => {
            setIsFavourite(!isFavourite);
            FavoriteHanlder(id, photo);
          }}
        >
          {isFavourite ? (
            <span>
              <AiFillHeart
                className="text-3xl text-[#1db945] transition-transform duration-200 ease-in-out scale-110"
                data-favourite
              />
            </span>
          ) : (
            <span>
              <AiOutlineHeart className="text-3xl" />
            </span>
          )}
        </button>
        <h1 className="text-white text-xl">Photo by {name}</h1>
      </figure>
      {/* </Link> */}
    </article>
  );
};
export default SinglePics;
