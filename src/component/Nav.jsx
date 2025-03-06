import { motion } from "motion/react";
import { useState } from "react";
function Nav() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed flex justify-between lg:justify-around md:justify-around items-center bg-white text-white w-full p-4 top-0 z-50 shadow-lg">
        <div className="text-3xl font-extrabold w-32 text-center text-green-950">Fika</div>
        <div className="hidden sm:block">
          <ul className="text-green-950 flex justify-center gap-9">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Price</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
          </ul>
        </div>
        <div className="w-14 block sm:hidden">
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            <img src="menu.svg" alt="" />
          </button>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed bg-zinc-100 text-green-950 w-52 h-full right-0 top-0  font-medium flex flex-col justify-around ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center gap-9">
              <a href="">
                <li>Dashboard</li>
              </a>
              <a href="">
                <li>Pricelist</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
