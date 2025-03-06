function Contents() {
  return (
    <>
      <section className="max-w-7xl bg-white m-auto pt-30 rounded-xl  ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-auto shadow-lg">
          <div className=" flex flex-col justify-center items-center m-auto text-green-950 p-10 w-sm">
            <div className="text-8xl border-b-3 font-extrabold">Fika</div>
            <div>Coffee Shop</div>
            <div className="mb-6"> SIP · CHAT · REPEAT</div>
            <div className="flex justify-center items-center gap-1 w-full space-x-2">
              <p className="font-medium text-green-950 border-r-2 border-r-green-900 pr-2">
                Follow us on!
              </p>
              <a href="">
                <img className="w-6" src="facebook.png" alt="" />
              </a>
              <a href="">
                <img className="w-6" src="instagram.png" alt="" />
              </a>
              <a href="">
                <img className="w-6" src="twitter.png" alt="" />
              </a>
            </div>
          </div>
          <div className="">
            <img className="" src="cup.jpg" alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 bg-green-950 text-white">
          <div className="font-light p-10">
            <div className="font-extrabold text-xl mb-4">About</div>
            <span className="font-bold">FIKA</span> is a concept, a state of
            mind. Slowing down, getting in touch with yourself, and connecting
            with the people around you. Sip coffee. Chat with loved ones. Repeat
            again tomorrow.
          </div>
          <div className="font-light p-10">
            <div className="font-extrabold text-xl mb-4">Location</div>
            <div className=" font-light text-md text-white mb-4">
              Kitang 1, National Road, Limay, Bataan, Limay, Philippines
            </div>
            <div className="font-light text-1xl text-white mb-2">
              Open Hours: 12pm - 9pm
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contents;
