import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [openItem, setOpenItem] = useState(null);

  const handleFAQToggle = (id) =>
    setOpenItem((prev) => (prev === id ? null : id));

  return (
    <main className="h-screen w-screen flex items-center md:justify-center bg-[hsl(275,100%,97%)] bg-[url('/images/background-pattern-mobile.svg')] md:bg-[url('/images/background-pattern-desktop.svg')] bg-contain bg-no-repeat bg-top">
      <Card openItem={openItem} handleFAQToggle={handleFAQToggle} />
    </main>
  );
}

export default App;
