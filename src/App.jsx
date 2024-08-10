import { useState } from "react";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full font-code overflow-x-hidden">
        <Navbar />
      </div>
    </>
  );
}

export default App;
