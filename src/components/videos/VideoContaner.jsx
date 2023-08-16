import { useGlobalContext } from "../../context/context";
import CardLoader from "../loader/CardLoader";
import SingleVideo from "./SingleVideo";

const VideoContaner = () => {
  const { videos, loading } = useGlobalContext();

  if (loading) {
    return (
      <section className="grid sm:grid-cols-3 mt-8 grid-cols-2  md:gap-6 gap-2">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </section>
    );
  }

  return (
    <section className="grid sm:grid-cols-3 mt-8 grid-cols-2  md:gap-6 gap-2">
      {videos.map((video) => {
        return <SingleVideo key={video.id} video={video} />;
      })}
    </section>
  );
};
export default VideoContaner;
