import { BlurFade } from "./components/magicui/blur-fade";

function Nav() {
  return (
    <>
      <BlurFade
        duration={0.5}
        delay={1}
        className="sticky top-0 justify-around p-4 flex items-center w-full z-50 bg-white shadow "
      >
        <a href="">
          <div className="flex gap-2 items-center cursor-pointer ">
            <img src="coffee-cup.png" className="w-5" alt="" />
            <div className="font-bold text-lg text-zinc-700">Fika</div>
          </div>
        </a>
        <div className="lg:visible md:visible invisible">
          <ul className="flex text-sm gap-10  text-zinc-500 ">
            <li data-tip="Home">Home</li>
            <li data-tip="Services">Services</li>
            <li data-tip="About">About</li>
            <li data-tip="About">Contact</li>
          </ul>
        </div>
      </BlurFade>
    </>
  );
}

export default Nav;
