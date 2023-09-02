// import { useEffect, useState } from "react";
// import { useState } from "react";
import "./App.css";
// import Windowtracker from "./components/Windowtracker";
// import Boxes from "./components/Boxes";
// import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  // const [jokesdata, setjokesdata] = useState({});
  // const [count, setcount] = useState(1);
  // // 1 get the data from api using fetch
  // // 2 save the data to state
  // console.log("component rendered");
  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then((res) => res.json())
  //     .then((data) => setjokesdata(data));
  //   console.log("useffect");
  // }, [count]);
  // const [show, setshow] = useState(true);
  // const toggle = () => {
  //   setshow((prev) => !prev);
  // };
  return (
    <>
      <div className="w-[550px] h-[550px] m-auto mt-2">
        <Navbar />
        <Hero />
        {/* <Card />
        {/* <Boxes darkmode={false} /> */}

        {/* {JSON.stringify(jokesdata, null, 2)}
        {count}
        <br />
        <button onClick={() => setcount(count + 1)}>add</button> */}

        {/* <button className="brdr" onClick={toggle}>
          Toggle window tracker
        </button>
        {show && <Windowtracker />} */}
      </div>
    </>
  );
}

export default App;
