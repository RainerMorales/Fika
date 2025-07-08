import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";
import { TextAnimate } from "./components/magicui/text-animate";
import Card from "./Card";
function Content() {
  return (
    <>
      <section className="m-40">
        <div className=" space-y-8 text-center">
          <BlurFade
            duration={0.5}
            direction="up"
            delay={0.25}
            inView
            className="text-5xl font-bold"
          >
            <AuroraText>Fika</AuroraText> is a concept,a state of mind
          </BlurFade>
          <BlurFade
            duration={0.5}
            direction="up"
            delay={0.25 * 1.5}
            inView
            className="text-zinc-600 text-sm "
          >
            Slowing down, getting in touch with yourself, and connecting with
            the people around you.<br/>Sip coffee. Chat with loved ones. Repeat again
            tomorrow.
          </BlurFade>
          <BlurFade
            duration={0.5}
            direction="up"
            delay={2}
            inView
            className="space-y-4"
          >
            <InteractiveHoverButton className="bg-zinc-200">
              Get Started
            </InteractiveHoverButton>
          </BlurFade>
        </div>
      </section>
      <BlurFade
        duration={0.5}
        direction="up"
        delay={0.25 * 2 }
        className="mt-20 mb-20 h-80"
      >
        <img
          className="h-[100%] w-[100%] object-cover"
          src="/main.jpg"
          alt=""
        />
      </BlurFade>
      <section className="">
        <div className=" text-center p-10 cal-sans-regular">
          <TextAnimate className="text-3xl text-black" animation="slideUp" by="text">
            What Our Customer Say
          </TextAnimate>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-center gap-4 ">
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
            comment={<div>"nice place to avoid stress and think clearly"</div>}
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
