import type { HTMLAttributes } from "react"

interface Iprops extends HTMLAttributes<HTMLSpanElement>{
color:string


}
const CircleColor = ({color,...rest}:Iprops) => {
  return (
        <span className="w-5 h-5 cursor-pointer  rounded-full" style={{backgroundColor:color}} {...rest}    ></span>

  )
}

export default CircleColor