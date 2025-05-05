import { FaBagShopping } from "react-icons/fa6";
function Nav() {
  return (
    <>
      <header className=" sticky top-0 justify-around p-4 flex items-center w-full bg-white z-50 ">
        <div className="flex gap-2 items-center text-2xl cal-sans-regular ">
          <FaBagShopping size={30} />
          Coffee
        </div>
        <div className="lg:visible md:visible invisible">
          <ul className="flex gap-6 cal-sans-regular  text-zinc-600 text-lg">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Nav;
