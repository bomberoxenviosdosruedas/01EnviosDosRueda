import React from "react";
export function Toast({title,description,variant="default",onClose,style,...rest}){
  const inv=variant==="invert";
  return <div style={{display:"flex",alignItems:"flex-start",gap:"var(--space-4)",width:360,
    borderRadius:"var(--radius-lg)",padding:"var(--space-4)",boxShadow:"var(--shadow-2xl)",fontFamily:"var(--font-body)",
    background:inv?"var(--brand-blue)":"var(--surface-card)",color:inv?"#fff":"var(--text-body)",
    border:"1px solid "+(inv?"var(--border-on-invert)":"var(--border-subtle)"),...style}} {...rest}>
    <span style={{flex:1}}>
      <strong style={{display:"block",fontFamily:"var(--font-subheading)",textTransform:"uppercase",
        letterSpacing:"var(--tracking-wider)",fontSize:"var(--text-base)"}}>{title}</strong>
      {description&&<span style={{fontSize:"var(--text-sm)",opacity:0.7}}>{description}</span>}
    </span>
    <button onClick={onClose} aria-label="Cerrar" style={{background:"none",border:"none",cursor:"pointer",
      color:"inherit",opacity:0.5,fontSize:16,lineHeight:1}}>×</button>
  </div>;
}
