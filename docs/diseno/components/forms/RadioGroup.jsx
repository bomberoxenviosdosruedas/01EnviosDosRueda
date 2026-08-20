import React from "react";
export function RadioGroup({options=[],value,defaultValue,onValueChange,style,...rest}){
  const [val,setVal]=React.useState(defaultValue??options[0]?.value);
  const cur=value===undefined?val:value;
  return <div role="radiogroup" style={{display:"grid",gap:"var(--space-2)",fontFamily:"var(--font-body)",fontSize:"var(--text-sm)",...style}} {...rest}>
    {options.map(o=>(
      <span key={o.value} onClick={()=>{if(value===undefined)setVal(o.value);onValueChange&&onValueChange(o.value);}}
        style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",cursor:"pointer"}}>
        <span style={{width:16,height:16,borderRadius:"var(--radius-full)",border:"1px solid "+(cur===o.value?"var(--action-primary)":"var(--border-subtle)"),
          display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
          {cur===o.value&&<span style={{width:8,height:8,borderRadius:"var(--radius-full)",background:"var(--action-primary)"}}/>}
        </span>{o.label}</span>))}
  </div>;
}
