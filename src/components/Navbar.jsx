const Navbar = () => {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-purple-500 h-[65px] flex items-center justify-between">
      <div className="flex  items-center">
        <img src="./meme.svg" className="w-[32px] h-[36px] m-1" alt="" />
        <span className="text-white text-xl p-1 text-[20.748px]">
          Meme Generator
        </span>
      </div>
      <div className="text-white text-xl p-1 text-[20.748px]">
        React Project 3
      </div>
    </div>
  );
};

export default Navbar;
