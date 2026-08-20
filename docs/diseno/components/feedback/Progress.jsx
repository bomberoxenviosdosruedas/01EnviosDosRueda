import React from "react";
export function Progress({value=0,accent=false,style,...rest}){
  return <div style={{height:8,width:"100%",borderRadius:"var(--radius-full)",background:"var(--surface-muted)",overflow:"hidden",...style}} {...rest}>
    <div style={{height:"100%",width:Math.max(0,Math.min(100,value))+"%",
      background:accent?"var(--brand-yellow)":"var(--action-primary)",
      transition:"width var(--dur) var(--ease-out)"}}/></div>;
}
