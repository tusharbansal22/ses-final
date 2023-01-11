import React from "react"; 
import Home from "./pages/home";
import Navbar from "./components/Navbar";

function App() {
  return <div>
    <Navbar style={{zIndex:'10'}}/>
    <Home />
  </div>
}

export default App;
