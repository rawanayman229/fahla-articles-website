import LatestArticles from "../components/LatestArticles";
import Hero from "../components/Hero"
import PopularPosts from "@/components/PopularPosts";
import OurAuthors from "@/components/OurAuthors";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <LatestArticles />
      <PopularPosts />
      <OurAuthors />
    </div>
  );
};

export default Home;