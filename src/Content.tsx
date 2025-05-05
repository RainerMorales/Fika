import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import Card from "./Card";
function Content() {
  return (
    <>
      <section className="">
        <div className="flex flex-col lg:flex-row mt-8 gap-6 lg:m-20">
          <div className="p-4 space-y-8 text-center m-auto lg:w-[50%]">
            <BlurFade
              delay={0.25}
              inView
              className="lg:text-7xl text-5xl cal-sans-regular  "
            >
              <AuroraText>Fika</AuroraText> is a concept, a state of mind
            </BlurFade>
            <BlurFade
              delay={0.25 * 2}
              inView
              className="lg:text-lg text-zinc-600"
            >
              Slowing down, getting in touch with yourself, and connecting with
              the people around you. Sip coffee. Chat with loved ones. Repeat
              again tomorrow.
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView className="space-y-4">
              <button className="btn bg-black text-white">Get Started</button>
            </BlurFade>
          </div>
          <BlurFade delay={0.25 * 3} inView className="m-auto">
            <img
              className="rounded w-[100%] h-100 object-cover"
              src="main.jpg"
              alt=""
            />
          </BlurFade>
        </div>
      </section>
      <section className="bg-black text-white">
        <div>
          <TextAnimate
            startOnView={true}
            animation="blurIn"
            as="h1"
            className="text-2xl lg:text-center lg:p-30 text-center p-16"
          >
            We want to bring FIKA closer to you.Share a cup of happiness among
            family and friends. To make occasions more special.
          </TextAnimate>
        </div>
      </section>
      <BlurFade delay={0.25 * 5} inView>
        <img
          className="w-[100%] h-100 object-cover m-auto"
          src="cover.jpg"
          alt=""
        />
      </BlurFade>
      <section className=" bg-black p-10">
        <div className="text-2xl text-white text-center p-10 cal-sans-regular">
          What Our Customer Say
        </div>
        <div className="grid items-center lg:grid-cols-3 place-self-center gap-6 ">
          <Card
            name={"Jeng"}
            title={"Jeng Sabino"}
            comment={
              <TextAnimate animation="blurIn" delay={0.5}>
                "we really enjoy their coffee and sweets... 😍"
              </TextAnimate>
            }
          ></Card>
          <Card
            name={"Rico"}
            title={"Rico Ellivera"}
            comment={
              <TextAnimate animation="blurIn" delay={0.5}>
                "It's always relaxing here at Fika when you had a coffee freshly
                brewed."
              </TextAnimate>
            }
          ></Card>
          <Card
            name={"Tyche"}
            title={"Tyche Clothing Co. "}
            comment={
              <TextAnimate animation="blurIn">
                "nice place to avoid stress and think clearly and also the
                pastries and coffee so yummy"
              </TextAnimate>
            }
          ></Card>
        </div>
      </section>
      <section className="lg:flex justify-center items-center  bg-zinc-100">
        <div className="lg:w-[50%]">
          <img
            className="w-[100%] h-70 object-cover m-auto"
            src="barista.jpg"
            alt=""
          />
        </div>
        <div className="p-10 lg:w-[50%]">
          <div className="flex text-center text-xl p-10 lg:p-10 ">
            We offer an aesthetic coffee cart operated by well-trained fully
            vaccinated baristas. We use high grade imported coffee beans that
            makes our signature blends stand out.
          </div>
          <label className="floating-label  flex items-center justify-center">
            <input
              type="text"
              placeholder="Email us here"
              className="input input-md bg-white border border-zinc-400"
            />
          </label>
        </div>
      </section>
    </>
  );
}
export default Content;

/* */
