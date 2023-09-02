import { useEffect, useState } from "react";

const Windowtracker = () => {
  const [windowwidth, setwindowwidth] = useState(window.innerWidth);
  useEffect(() => {
    const watchwidth = () => {
      console.log("setting up");
      setwindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", watchwidth);
    return function () {
      console.log("removing off");
      window.removeEventListener("resize", watchwidth);
    };
  }, []);
  return (
    <div>
      <h1 className="text-xl">Window width:{windowwidth}</h1>
    </div>
  );
};

export default Windowtracker;
