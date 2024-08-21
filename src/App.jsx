import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full font-code overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
