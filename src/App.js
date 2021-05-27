import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
function App() {
  let employees = [];
  const [nav, seTnav] = useState(true);
  useEffect(() => {
    employees = [
      { name: "juan", id: 1 },
      { name: "tomas", id: 2 },
    ];
    console.log(employees);
  }, []);
  const click = () => {
    seTnav(!nav);
  };
  return (
    <div>
      <h1>chau</h1>
      {nav ? <Navbar /> : null}
      <button onClick={click}>click</button>
    </div>
  );
}

export default App;
