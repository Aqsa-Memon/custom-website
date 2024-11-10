import Header from "@/components/header";
import Hero from "@/components/hero";
import Shop from "./shop/page";
import About from "./about/page";
import Footer from "@/components/footer";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
