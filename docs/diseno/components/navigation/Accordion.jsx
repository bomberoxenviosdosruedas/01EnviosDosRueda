import React from "react";
export function Accordion({items=[],defaultOpen=0,style,...rest}){
  const [open,setOpen]=React.useState(defaultOpen);
  return <div style={{fontFamily:"var(--font-body)",borderTop:"1px solid var(--border-subtle)",...style}} {...rest}>
    {items.map((it,i)=>(
      <div key={i} style={{borderBottom:"1px solid var(--border-subtle)"}}>
        <button onClick={()=>setOpen(open===i?-1:i)} style={{width:"100%",display:"flex",alignItems:"center",
          justifyContent:"space-between",gap:"var(--space-4)",background:"none",border:"none",cursor:"pointer",
          padding:"var(--space-4) 0",textAlign:"left",fontFamily:"var(--font-subheading)",fontSize:"var(--text-lg)",
          textTransform:"uppercase",letterSpacing:"var(--tracking-wide)",color:"var(--brand-blue)"}}>
          {it.title}<span style={{color:"var(--brand-yellow)",transform:open===i?"rotate(180deg)":"none",
            transition:"transform var(--dur-fast) var(--ease-out)"}}>▾</span></button>
        {open===i&&<div style={{paddingBottom:"var(--space-4)",fontSize:"var(--text-sm)",color:"var(--text-muted)",
          lineHeight:"var(--leading-relaxed)"}}>{it.content}</div>}
      </div>))}
  </div>;
}
