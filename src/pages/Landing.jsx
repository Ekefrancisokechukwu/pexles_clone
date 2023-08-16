import Hero from "../components/Hero";
import FeaturedContainer from "../components/featured/FeaturedContainer";
import Navbar from "../layouts/header/Navbar";

const Landing = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <FeaturedContainer />
    </>
  );
};
export default Landing;
