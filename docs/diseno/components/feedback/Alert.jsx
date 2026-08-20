import React from "react";
const V={default:{background:"var(--surface-card)",color:"var(--text-body)",border:"1px solid var(--border-subtle)"},
  accent:{background:"var(--brand-yellow)",color:"var(--action-accent-fg)",border:"1px solid transparent"},
  destructive:{background:"var(--surface-card)",color:"var(--action-danger)",border:"1px solid var(--action-danger)"}};
export function Alert({variant="default",title,icon,style,children,...rest}){
  return <div role="alert" style={{display:"flex",gap:"var(--space-3)",borderRadius:"var(--radius-lg)",
    padding:"var(--space-4)",fontFamily:"var(--font-body)",fontSize:"var(--text-sm)",...V[variant],...style}} {...rest}>
    {icon&&<span style={{lineHeight:1}}>{icon}</span>}
    <span>{title&&<strong style={{display:"block",fontFamily:"var(--font-subheading)",textTransform:"uppercase",
      letterSpacing:"var(--tracking-wider)",fontSize:"var(--text-base)",marginBottom:2}}>{title}</strong>}{children}</span>
  </div>;
}
