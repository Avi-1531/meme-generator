import { useEffect, useState } from "react";
// import memedata from "../assets/memedata";

const Hero = () => {
  const [meme, setmeme] = useState({
    toptext: "",
    bottomtext: "",
    randomimage: "https://i.imgflip.com/21uy0f.jpg",
  });

  const [allmemeimg, setallmemeimage] = useState([]);

  // useEffect(() => {
  //   console.log("effect running");
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setallmemeimage(data.data.memes));
  // }, []);
  // console.log(allmemeimg);
  useEffect(() => {
    const getmemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setallmemeimage(data.data.memes);
    };
    getmemes();
  }, []);

  const handlechange = (event) => {
    // console.log(event.target.name);
    const { name, value } = event.target;
    setmeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(meme.toptext);
  const getmemeimg = () => {
    const random = Math.floor(Math.random() * allmemeimg.length);

    setmeme((prevmeme) => ({
      ...prevmeme,

      randomimage: allmemeimg[random].url,
    }));
  };

  return (
    <div className="h-[485px] brdr">
      <div className="flex justify-evenly pt-[40px] ">
        <input
          type="text"
          placeholder="Top text"
          name="toptext"
          value={meme.toptext}
          onChange={handlechange}
          className="w-[230px] h-[35px] rounded-[5px] brdr indent-2 "
          id=""
        />
        <input
          type="text"
          placeholder="Bottom text"
          value={meme.bottomtext}
          onChange={handlechange}
          name="bottomtext"
          className="w-[230px] h-[35px] rounded-[5px] brdr indent-2"
          id=""
        />
      </div>
      <div className="m-auto">
        <button
          onClick={getmemeimg}
          type="submit"
          className="w-[477px] h-[40px] rounded-[5px] bg-gradient-to-br from-purple-500 to-purple-600 m-9"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <section className="m-auto relative">
        <div className="text-white text-2xl font-extrabold absolute left-[9rem] top-4">
          {meme.toptext}
        </div>

        <img
          src={meme.randomimage}
          className="m-auto max-w-[100%] h-[290px]"
          alt=""
        />
        <div className="text-white text-2xl absolute font-extrabold left-[10rem] top-[15rem]">
          {meme.bottomtext}
        </div>
      </section>
    </div>
  );
};

export default Hero;
