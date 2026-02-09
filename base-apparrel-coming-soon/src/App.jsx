import CTA from "./components/CTA";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App () {
  return (
    <div className="bg-[hsl(0,100%,96%)]">
      <Header />
      <Hero />
      <CTA />
    </div>
  );
}

export default App