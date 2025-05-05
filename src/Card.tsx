import { ReactElement } from "react";

interface card{
    title:String
    comment:ReactElement
    name:string
}

function Card(props:card){
    return (
      <>
        <div className="card border bg-zinc-100 text-black w-80 shadow-sm">
          <div className="avatar avatar-placeholder self-center p-2">
            <div className="bg-black text-white w-24 rounded-full">
              <span className="text-3xl">{props.name}</span>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.comment}</p>
           
          </div>
        </div>
      </>
    );
}

export default Card