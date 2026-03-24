import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import SuccessPage from "./components/SuccessPage";

function App () {
  return (
    <main className="bg-[hsl(216,12%,8%)] min-h-screen w-screen font-['Overpass',sans-serif] flex justify-center items-center p-4">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </main>
  );
}

export default App