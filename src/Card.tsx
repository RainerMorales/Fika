import { ReactElement } from "react";

interface card{
    title:String
    comment:ReactElement
    name:string
}

function Card(props:card){
    return (
      <>
        <div className="card border border-zinc-900  bg-zinc-950 text-black w-80 shadow-sm">
          <div className="avatar avatar-placeholder self-center p-2">
            <div className="bg-black text-white w-24 rounded-full">
              <span className="text-3xl">{props.name}</span>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-zinc-200">{props.title}</h2>
            <div className="text-zinc-400">{props.comment}</div>
          </div>
        </div>
      </>
    );
}

export default Card