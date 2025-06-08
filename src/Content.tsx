import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";
import Card from "./Card";
function Content() {
  return (
    <>
      <section className="mt-10">
        <div className="flex flex-col gap-6">
          <div className="p-2 space-y-8 text-center m-auto">
            <BlurFade
              delay={0.25}
              inView
              className="text-6xl font-extrabold"
            >
              <AuroraText>Fika</AuroraText> is a concept, <br /> a state of mind
            </BlurFade>
            <BlurFade delay={0.25} inView className="lg:text-lg text-zinc-600 ">
              Slowing down, getting in touch with yourself, and connecting with
              the people around you. <br /> Sip coffee. Chat with loved ones.
              Repeat again tomorrow.
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView className="space-y-4">
              <InteractiveHoverButton className="font-light border-2 border-black">
                Get Started
              </InteractiveHoverButton>
            </BlurFade>
          </div>
          <BlurFade delay={0.25 * 3} inView className="">
            <img
              className="rounded w-full h-100 object-cover"
              src="main.jpg"
              alt=""
            />
          </BlurFade>
        </div>
      </section>

      <section className=" bg-black">
        <div className="text-2xl text-white text-center p-10 cal-sans-regular">
          What Our Customer Say
        </div>
        <div className="grid items-center lg:grid-cols-3 place-self-center gap-6 ">
          <Card
            name={"Jeng"}
            title={"Jeng Sabino"}
            comment={<div>"we really enjoy their coffee and sweets... 😍"</div>}
          ></Card>
          <Card
            name={"Rico"}
            title={"Rico Ellivera"}
            comment={
              <div>
                "It's always relaxing here at Fika when you had a coffee freshly
                brewed."
              </div>
            }
          ></Card>
          <Card
            name={"Tyche"}
            title={"Tyche Clothing Co. "}
            comment={
              <div>
                "nice place to avoid stress and think clearly and also the
                pastries and coffee so yummy"
              </div>
            }
          ></Card>
        </div>
        <div className="relative mt-10">
          <img
            className="w-[100%] h-100 object-cover  opacity-20"
            src="cover.jpg"
            alt=""
          />
          <BlurFade
            delay={0.25}
            inView
            className="text-white font-light w-full lg:text-3xl lg:p-18 md:text-3xl  text-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          >
            We want to bring FIKA closer to you.Share a cup of happiness among
            family and friends. To make occasions more special.
          </BlurFade>
        </div>
      </section>
    </>
  );
}
export default Content;
