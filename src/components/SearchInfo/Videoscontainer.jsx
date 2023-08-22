import { useFilterContext } from "../../context/FilterContext";
import SpinnerLoader from "../loader/SpinnerLoader";
import SingleVideo from "../videos/SingleVideo";

const Videoscontainer = () => {
  const { searchVideos, loading } = useFilterContext();

  if (searchVideos.length === 0) {
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
    <section className="grid px-2 py-4 sm:grid-cols-3 mt-8 grid-cols-2  md:gap-6 gap-2">
      {searchVideos.map((video) => {
        return <SingleVideo key={video.id} video={video} />;
      })}
    </section>
  );
};
export default Videoscontainer;
