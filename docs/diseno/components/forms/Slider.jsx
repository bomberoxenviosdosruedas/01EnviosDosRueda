import React from "react";
export function Slider({min=0,max=100,defaultValue=50,onValueChange,style,...rest}){
  const [v,setV]=React.useState(defaultValue);
  return <input type="range" min={min} max={max} value={v}
    onChange={e=>{const n=Number(e.target.value);setV(n);onValueChange&&onValueChange(n);}}
    style={{width:"100%",accentColor:"var(--brand-blue)",...style}} {...rest}/>;
}
