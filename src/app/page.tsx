import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import Highlights from "../components/sections/Highlights";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Location from "../components/sections/Location";
import AboutDetails from "../components/sections/AboutDetails";

export default function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <Highlights />

      <Testimonials />

      <CTA />

      <Location /> 

      <AboutDetails />

    </>
  );
}