import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState(false);
  return (
    <div style={{
      backgroundColor: mode ? "white" : "#21253a",
      color: mode ? "black" : "white",
    }}>
      <Navbar darkfunc={setmode} darkModeswithch={mode} />
      <Body darkModeswithch={mode} />
      <Footer darkModeswithch={mode}/>
    </div>
  );
}

export default App;
