import { HiOutlinePlay } from "react-icons/hi2";
import { useEffect, useState } from "react";

const SingleVideo = ({ video }) => {
  const { image, video_files } = video;
  const [isplaying, setisPlaying] = useState(false);
  let playtime;

  const sdVideo = video_files.find(
    (item) => item.quality === "sd" && item.width < 1000
  );
  const { file_type, link } = sdVideo;

  const pointEnter = (e) => {
    playtime = setTimeout(() => {
      e.target
        .play()
        .then((res) => {
          setisPlaying(true);
        })
        .catch((err) => {
          setisPlaying(false);
        });
    }, 500);
  };

  const pointLeave = (e) => {
    playtime && clearTimeout(playtime);
    if (isplaying) e.target.pause();
    setisPlaying(false);
  };

  return (
    <article
      className="group rounded-md relative  bg-gray-950 hover:brightness-75 transition duration-500 ease-in-out"
      onMouseEnter={pointEnter}
      onMouseLeave={pointLeave}
    >
      <video
        className="banner_video rounded-md"
        // autoPlay
        poster={image}
        muted
        loop
        preload="none"
      >
        <source src={link} type={file_type} />
      </video>
      <div className="absolute p-3   top-0 left-0">
        {!isplaying && (
          <button className="w-12  h-8 rounded-lg   bg-yellow-100/75 grid place-items-center">
            <HiOutlinePlay className="text-2xl" />
          </button>
        )}
      </div>
    </article>
  );
};
export default SingleVideo;
