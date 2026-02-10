import CTA from "./components/CTA";
import Header from "./components/Header";
import HeroDesktop from "./components/HeroDesktop";
import HeroMobile from "./components/HeroMobile";

function App() {
  return (
    <div className="min-h-screen w-screen max-md:bg-[hsl(0,100%,96%)] md:grid md:grid-cols-[2fr_1.25fr]">
      <div className="md:bg-[url('/images/bg-pattern-desktop.svg')] md:bg-cover md:center md:bg-no-repeat">
        <Header />
        <HeroMobile />
        <CTA />
      </div>
      <HeroDesktop />
    </div>
  );
}

export default App;