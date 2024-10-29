
import Hero from "@/components/Hero";
import { Tours } from "@/components/Tours";
import { Hotel } from "@/components/Hotels";
import  {Testimonial} from "@/components/Testimonial";
import About from "@/app/about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
  <main>
    <Hero />
    <Tours />
    <Hotel />
    <Testimonial />
    <About />
    <Contact />
  </main>
  );
}
