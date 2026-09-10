import Hero from "./Hero";
import CustomerHero from "./CustomerHero";

function HeroButtons({ mode }) {
  return mode === "developer" ? <Hero /> : <CustomerHero />;
}

export default HeroButtons;
