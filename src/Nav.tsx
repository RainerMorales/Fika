// import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";

import { CiCoffeeCup } from "react-icons/ci";
function Nav() {
  return (
    <>
      <header className="fixed top-0 justify-around p-4 flex items-center w-full bg-white shadow-2xl z-50 ">
        <div className="flex items-center text-2xl">
          <CiCoffeeCup size={40} />
          Coffee
        </div>
        <div>
          <ul className="flex gap-6 font-light opacity-80">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>
      </header>
      <main>

      </main>
    </>
  );
}

export default Nav;
