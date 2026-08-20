import React from "react";
export function Dialog({open=true,title,description,footer,onClose,style,children,...rest}){
  if(!open)return null;
  return <div style={{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",
    background:"rgba(6,54,165,0.45)",backdropFilter:"blur(4px)"}} onClick={onClose}>
    <div onClick={e=>e.stopPropagation()} style={{width:"min(480px,92vw)",background:"var(--surface-card)",
      borderRadius:"var(--radius-2xl)",boxShadow:"var(--shadow-2xl)",padding:"var(--space-6)",
      fontFamily:"var(--font-body)",...style}} {...rest}>
      {title&&<h3 style={{fontSize:"var(--text-2xl)",color:"var(--text-heading)",marginBottom:"var(--space-2)"}}>{title}</h3>}
      {description&&<p style={{margin:0,color:"var(--text-muted)",fontSize:"var(--text-sm)"}}>{description}</p>}
      {children&&<div style={{marginTop:"var(--space-4)"}}>{children}</div>}
      {footer&&<div style={{marginTop:"var(--space-6)",display:"flex",justifyContent:"flex-end",gap:"var(--space-3)"}}>{footer}</div>}
    </div></div>;
}
