
function Nav() {
  return (
    <>
      <header className=" sticky top-0 justify-around p-4 flex items-center w-full bg-white z-50 ">
        <a href=""> 
          <div className="flex gap-2 items-center text-xl cal-sans-regular cursor-pointer ">
           <img src="coffee-cup.png" className="w-8" alt="" />
           <div>Coffee</div>
          </div>
        </a>
        <div className="lg:visible md:visible invisible">
          <ul className="flex gap-6 cal-sans-regular  text-zinc-600 text-lg">
            <li className="lg:tooltip cursor-pointer" data-tip="Home">
              Home
            </li>
            <li className="lg:tooltip cursor-pointer" data-tip="Services">
              Services
            </li>
            <li className="lg:tooltip cursor-pointer" data-tip="About">
              About
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Nav;
