import React from "react";
export function Select({options=[],placeholder,style,...rest}){
  return <select style={{height:"var(--control-h)",width:"100%",borderRadius:"var(--radius-md)",
    border:"1px solid var(--border-subtle)",background:"var(--surface-card)",padding:"0 var(--space-3)",
    fontSize:"var(--text-sm)",fontFamily:"var(--font-body)",color:"var(--text-body)",outline:"none",...style}} {...rest}>
    {placeholder&&<option value="">{placeholder}</option>}
    {options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
  </select>;
}
