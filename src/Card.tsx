import { ReactElement } from "react";
import { BlurFade } from "./components/magicui/blur-fade";
interface card{
    title:String
    comment:ReactElement
    name:string
}

function Card(props:card){
    return (
      <>
        <BlurFade 
        inView
        direction="up"
        delay={2}
        className="card  h-70 w-80 shadow-2xl">
          <div className="avatar avatar-placeholder self-center p-2">
            <div className="bg-blue-900 text-white  w-24 rounded-full">
              <span className="text-xl">{props.name}</span>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-zinc-800 text-light">{props.title}</h2>
            <div className="text-zinc-800">{props.comment}</div>
          </div>
        </BlurFade>
      </>
    );
}

export default Card