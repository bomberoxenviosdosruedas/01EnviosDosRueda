import React from "react";
export function Tabs({tabs=[],defaultValue,onValueChange,style,...rest}){
  const [cur,setCur]=React.useState(defaultValue??tabs[0]?.value);
  const active=tabs.find(t=>t.value===cur);
  return <div style={{fontFamily:"var(--font-body)",...style}} {...rest}>
    <div style={{display:"flex",gap:"var(--space-1)",borderBottom:"1px solid var(--border-subtle)"}}>
      {tabs.map(t=>(
        <button key={t.value} onClick={()=>{setCur(t.value);onValueChange&&onValueChange(t.value);}}
          style={{background:"none",border:"none",cursor:"pointer",padding:"var(--space-2-5) var(--space-4)",
            fontFamily:"var(--font-subheading)",fontSize:"var(--text-base)",textTransform:"uppercase",
            letterSpacing:"var(--tracking-wider)",color:cur===t.value?"var(--brand-blue)":"var(--text-muted)",
            borderBottom:"3px solid "+(cur===t.value?"var(--brand-yellow)":"transparent"),marginBottom:-1,
            transition:"color var(--dur-fast) var(--ease-out)"}}>{t.label}</button>))}
    </div>
    <div style={{paddingTop:"var(--space-4)",fontSize:"var(--text-sm)"}}>{active&&active.content}</div>
  </div>;
}
