import CTA from "./components/CTA";
import Header from "./components/Header";
import HeroDesktop from "./components/HeroDesktop";
import HeroMobile from "./components/HeroMobile";

function App() {
  return (
    <div className="min-h-screen w-screen md:grid md:grid-cols-[2fr_1.25fr]">
      <div className="bg-[linear-gradient(135deg,hsl(0,0%,100%),hsl(0,100%,98%))]  md:bg-[linear-gradient(135deg,hsl(0,0%,100%),hsl(0,100%,98%)),url('/images/bg-pattern-desktop.svg')] md:bg-cover md:bg-blend-color md:bg-no-repeat">
        <Header />
        <HeroMobile />
        <CTA />
      </div>
      <HeroDesktop />
    </div>
  );
}

export default App;