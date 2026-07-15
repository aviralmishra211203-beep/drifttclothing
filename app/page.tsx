import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import FeaturedCollection from "../components/home/FeaturedCollection";
import NewArrivals from "../components/home/NewArrivals";
import BrandStory from "../components/home/BrandStory";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <FeaturedCollection />
  <NewArrivals />
  <BrandStory />
  <Newsletter />
  <Footer />
</>
  );
}