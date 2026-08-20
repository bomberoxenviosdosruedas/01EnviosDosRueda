import React from "react";
export function Textarea({rows=4,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return <textarea rows={rows} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={{
    width:"100%",minHeight:80,borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)",
    background:"var(--surface-card)",padding:"var(--space-2) var(--space-3)",fontSize:"var(--text-sm)",
    fontFamily:"var(--font-body)",color:"var(--text-body)",outline:"none",resize:"vertical",
    boxShadow:focus?"0 0 0 2px var(--surface-page),0 0 0 4px var(--focus-ring)":"none",...style}} {...rest}/>;
}
