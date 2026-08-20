import React from "react";

const V={
  default:{background:"var(--action-primary)",color:"var(--action-primary-fg)",borderColor:"transparent"},
  secondary:{background:"var(--action-accent)",color:"var(--action-accent-fg)",borderColor:"transparent"},
  destructive:{background:"var(--action-danger)",color:"var(--action-danger-fg)",borderColor:"transparent"},
  outline:{background:"transparent",color:"var(--text-body)",borderColor:"var(--border-subtle)"},
  glass:{background:"rgba(255,255,255,0.10)",color:"#fff",borderColor:"rgba(255,255,255,0.15)"}
};

export function Badge({variant="default",dot=false,style,children,...rest}){
  return <span style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",borderRadius:"var(--radius-full)",
    borderWidth:1,borderStyle:"solid",padding:"0.125rem 0.625rem",fontSize:"var(--text-xs)",fontWeight:"var(--weight-semibold)",
    fontFamily:"var(--font-body)",...V[variant],...style}} {...rest}>
    {dot&&<span style={{width:10,height:10,borderRadius:"var(--radius-full)",background:"var(--brand-yellow)",boxShadow:"var(--glow-yellow)"}}/>}
    {children}</span>;
}
