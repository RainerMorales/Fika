import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
function Content() {
  return (
    <>
      <section className="">
        <div className="flex flex-col lg:flex-row mt-8 gap-6 lg:m-20">
          <div className="p-6 space-y-8 text-center m-auto">
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
          <BlurFade delay={0.25 * 3} inView className="m-auto">
            <img
              className="rounded h-[80%] w-[80%] m-auto"
              src="main.jpg"
              alt=""
            />
          </BlurFade>
        </div>
      </section>
      <section className="bg-zinc-800 text-white">
        <div className="p-20">
          <TextAnimate
            duration={2}
            animation="blurIn"
            as="h1"
            className="text-3xl lg:text-center lg:p-30 "
          >
            We want to bring FIKA closer to you.Share a cup of happiness among
            family and friends. To make occasions more special.
          </TextAnimate>
        </div>
      </section>
      <div>
        <img className="w-[100%] h-100 object-cover m-auto" src="cover.jpg" alt="" />
      </div>
      <div>
        
      </div>
    </>
  );
}
export default Content;
