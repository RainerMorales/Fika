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
        className="card text-white rounded-2xl bg-amber-700 h-40 w-80 shadow">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-light">{props.title}</h2>
            <div className="text-xs opacity-80">{props.comment}</div>
          </div>
        </BlurFade>
      </>
    );
}

export default Card