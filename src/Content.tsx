import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";
import { TextAnimate } from "./components/magicui/text-animate";
import Card from "./Card";
function Content() {
  return (
    <>
      {/* <section className="pt-16 pb-20 ">
        <div className=" space-y-4 text-center">
          <BlurFade
            duration={0.5}
            direction="up"
            delay={0.25}
            inView
            className="text-3xl text-center font-bold"
          >
            <AuroraText>Fika</AuroraText> is a concept, <br />a state of mind
          </BlurFade>
          <BlurFade
            duration={0.5}
            direction="up"
            delay={0.25 * 1.5}
            inView
            className="text-zinc-600 text-xs p-4 "
          >
            Slowing down, getting in touch with yourself, and connecting with
            the people around you. Sip coffee. Chat with loved ones. Repeat
            again tomorrow.
          </BlurFade>
          <BlurFade
            duration={0.5}
            direction="up"
            delay={1.25}
            inView
            className="space-y-4"
          >
            <InteractiveHoverButton className="bg-amber-500 text-white text-xs">
              Get Started
            </InteractiveHoverButton>
          </BlurFade>
        </div>
      </section> */}
      <BlurFade
        duration={0.5}
        direction="up"
        delay={1}
        className="relative h-90"
      >
        <img
          className="h-[100%] w-[100%] object-cover "
          src="/main.jpg"
          alt=""
        />
        <BlurFade
          duration={1}
          delay={1.50}
          inView
          className=" space-y-4 text-center absolute top-0 flex flex-col justify-center items-center backdrop-blur-md bg-black/20 w-[100%] h-[100%]"
        >
          <BlurFade
            direction="up"
            duration={0.50}
            delay={2 *1.15}
            inView
            className="text-4xl text-center font-bold text-amber-100"
          >
            <AuroraText>Fika</AuroraText> is a concept, <br />a state of mind
          </BlurFade>
          <BlurFade
            duration={0.55}
            direction="up"
            delay={2 * 1.25}
            inView
            className="text-amber-100 text-xs p-4 "
          >
            Slowing down, getting in touch with yourself, and connecting with
            the people around you. Sip coffee. Chat with loved ones. Repeat
            again tomorrow.
          </BlurFade>
          <BlurFade
            duration={0.55}
            direction="up"
            delay={2*1.50}
            inView
            className="space-y-4"
          >
            <InteractiveHoverButton className="border-none bg-amber-500 text-white text-xs">
              Get Started
            </InteractiveHoverButton>
          </BlurFade>
        </BlurFade>
      </BlurFade>
      {/* <section className="bg-black">
        <div className="relative">
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
      </section> */}
      <section className="bg-zinc-100">
        <div className=" text-center p-10 cal-sans-regular">
          {/* <Badge className="bg-amber-900">Feedback</Badge> */}
          <TextAnimate
            delay={2}
            duration={10}
            className="text-2xl text-amber-900"
            animation="fadeIn"
            by="text"
          >
            What Our Customer Say
          </TextAnimate>
          <TextAnimate
            delay={2.25}
            animation="fadeIn"
            duration={2}
            by="text"
            className="mt-4 text-xs text-gray-600"
          >
            We deeply value every story, insight, and honest feedback our users
            share, as it helps us grow and deliver even better experiences.
          </TextAnimate>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-center gap-4 p-10 ">
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
      </section>
      <section className="bg-black">
        <div className="relative">
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
