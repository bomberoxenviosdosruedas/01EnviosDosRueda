import React from "react";
export function Checkbox({checked,defaultChecked=false,disabled=false,onCheckedChange,label,style,...rest}){
  const [on,setOn]=React.useState(defaultChecked);
  const val=checked===undefined?on:checked;
  const toggle=()=>{if(disabled)return;const n=!val;if(checked===undefined)setOn(n);onCheckedChange&&onCheckedChange(n);};
  return <span style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",opacity:disabled?0.5:1,
    cursor:disabled?"not-allowed":"pointer",fontFamily:"var(--font-body)",fontSize:"var(--text-sm)",...style}} onClick={toggle} {...rest}>
    <span style={{width:16,height:16,borderRadius:4,display:"inline-flex",alignItems:"center",justifyContent:"center",
      border:"1px solid "+(val?"var(--action-primary)":"var(--border-subtle)"),
      background:val?"var(--action-primary)":"transparent",color:"var(--action-primary-fg)",fontSize:11,lineHeight:1,
      transition:"background var(--dur-fast) var(--ease-out)"}}>{val?"✓":""}</span>
    {label}</span>;
}
