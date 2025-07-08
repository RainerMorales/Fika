
function Nav() {
  return (
    <>
      <header className="sticky top-0 justify-around p-4 flex items-center w-full backdrop-blur-sm bg-white/20 z-50 border-b ">
        <a href=""> 
          <div className="flex gap-2 items-center cursor-pointer ">
           <img src="coffee-cup.png" className="w-6" alt="" />
           <div className="font-bold">Coffee</div>
          </div>
        </a>
        <div className="lg:visible md:visible invisible">
          <ul className="flex gap-6  text-zinc-600 ">
            <li data-tip="Home">
              Home
            </li>
            <li data-tip="Services">
              Services
            </li>
            <li data-tip="About">
              About
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Nav;
