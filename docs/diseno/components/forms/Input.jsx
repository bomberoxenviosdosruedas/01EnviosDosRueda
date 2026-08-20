import React from "react";
export function Input({invalid=false,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={{
    display:"flex",height:"var(--control-h)",width:"100%",borderRadius:"var(--radius-md)",
    border:"1px solid "+(invalid?"var(--action-danger)":"var(--border-subtle)"),
    background:"var(--surface-card)",padding:"0 var(--space-3)",fontSize:"var(--text-sm)",
    fontFamily:"var(--font-body)",color:"var(--text-body)",outline:"none",
    boxShadow:focus?"0 0 0 2px var(--surface-page),0 0 0 4px var(--focus-ring)":"none",...style}} {...rest}/>;
}
