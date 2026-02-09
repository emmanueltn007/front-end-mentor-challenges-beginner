import CTA from "./components/CTA";
import Header from "./components/Header";
import HeroDesktop from "./components/HeroDesktop";
import HeroMobile from "./components/HeroMobile";

function App() {
  return (
    <div className="min-h-screen w-screen bg-[hsl(0,100%,96%)] md:grid md:grid-cols-[2fr_1.25fr]">
      <div>
        <Header />
        <HeroMobile />
        <CTA />
      </div>
      <HeroDesktop />
    </div>
  );
}

export default App;