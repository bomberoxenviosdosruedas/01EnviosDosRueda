import React from "react";
export function Switch({checked,defaultChecked=false,disabled=false,onCheckedChange,style,...rest}){
  const [on,setOn]=React.useState(defaultChecked);
  const val=checked===undefined?on:checked;
  return <button type="button" role="switch" aria-checked={val} disabled={disabled}
    onClick={()=>{const n=!val;if(checked===undefined)setOn(n);onCheckedChange&&onCheckedChange(n);}}
    style={{width:44,height:24,borderRadius:"var(--radius-full)",border:"1px solid transparent",padding:2,
      background:val?"var(--action-primary)":"var(--border-subtle)",cursor:disabled?"not-allowed":"pointer",
      opacity:disabled?0.5:1,transition:"background var(--dur-fast) var(--ease-out)",display:"inline-flex",alignItems:"center",...style}} {...rest}>
    <span style={{width:18,height:18,borderRadius:"var(--radius-full)",background:"#fff",boxShadow:"var(--shadow-sm)",
      transform:val?"translateX(20px)":"translateX(0)",transition:"transform var(--dur-fast) var(--ease-out)"}}/>
  </button>;
}
