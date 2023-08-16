import VideoContaner from "../components/videos/VideoContaner";
import Navbar from "../layouts/header/Navbar";

const Videos = () => {
  return (
    <main className="py-4 lg:px-16 px-3">
      <Navbar />
      <h1 className="primary_head">Trending Free Videos</h1>
      <VideoContaner />
    </main>
  );
};
export default Videos;
