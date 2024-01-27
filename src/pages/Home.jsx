import Banner from "../components/Banner";
import BlogPosts from "../components/BlogPosts";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import FeaturedAgents from "../components/FeaturedAgents";

function Home() {
  return (
    <div class="text-sm">
      <Banner />
      <FeaturedAgents />
      <BlogPosts />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
