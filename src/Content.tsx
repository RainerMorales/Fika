import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import List from "./List";
import { BlurFade } from "@/components/magicui/blur-fade";
function Content() {
  return (
    <>
      <section className="">
        <div className="flex flex-col lg:flex-row mt-8 gap-6 lg:m-20">
          <div className="p-6 space-y-8 text-center">
            <BlurFade delay={0.25} inView className="lg:text-7xl text-5xl  ">
              <AuroraText>Fika</AuroraText> is a concept, a state of mind
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView className="lg:text-lg opacity-60">
              Slowing down, getting in touch with yourself, and connecting with
              the people around you. Sip coffee. Chat with loved ones. Repeat
              again tomorrow.
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView className="space-y-4">
              <button className="btn btn-primary">Get Started</button>
            </BlurFade>
          </div>
          <BlurFade delay={0.25 * 3} inView className="">
            <img className="rounded" src="main.jpg" alt="" />
          </BlurFade>
        </div>
      </section>
      <section className="">
        <List></List>
      </section>
   
    </>
  );
}
export default Content;
