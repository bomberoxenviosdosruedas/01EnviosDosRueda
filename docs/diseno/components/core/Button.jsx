import React from "react";

const VARIANTS={
  default:{background:"var(--action-primary)",color:"var(--action-primary-fg)",border:"1px solid transparent"},
  secondary:{background:"var(--action-accent)",color:"var(--action-accent-fg)",border:"1px solid transparent"},
  outline:{background:"var(--surface-card)",color:"var(--text-body)",border:"1px solid var(--border-subtle)"},
  ghost:{background:"transparent",color:"var(--text-body)",border:"1px solid transparent"},
  destructive:{background:"var(--action-danger)",color:"var(--action-danger-fg)",border:"1px solid transparent"},
  link:{background:"transparent",color:"var(--action-primary)",border:"1px solid transparent",textDecoration:"underline",textUnderlineOffset:"4px"}
};
const SIZES={
  sm:{height:"var(--control-h-sm)",padding:"0 var(--space-3)",fontSize:"var(--text-sm)"},
  default:{height:"var(--control-h)",padding:"0 var(--space-4)",fontSize:"var(--text-sm)"},
  lg:{height:"var(--control-h-lg)",padding:"0 var(--space-8)",fontSize:"var(--text-sm)"},
  xl:{height:"var(--control-h-xl)",padding:"0 var(--space-10)",fontSize:"var(--text-xl)",fontFamily:"var(--font-subheading)",letterSpacing:"var(--tracking-widest)",textTransform:"uppercase"},
  hero:{height:"var(--control-h-2xl)",padding:"0 2.5rem",fontSize:"var(--text-xl)",fontFamily:"var(--font-subheading)",letterSpacing:"var(--tracking-widest)",textTransform:"uppercase",fontWeight:"var(--weight-bold)"},
  icon:{height:"var(--control-h)",width:"var(--control-h)",padding:0}
};

export function Button({variant="default",size="default",disabled=false,square=false,style,children,...rest}){
  const [hover,setHover]=React.useState(false),[active,setActive]=React.useState(false);
  const s={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",whiteSpace:"nowrap",
    borderRadius:square?"0":"var(--radius-md)",fontFamily:"var(--font-body)",fontWeight:"var(--weight-semibold)",
    cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.5:1,
    transition:"background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)",
    transform:active&&!disabled?"scale(var(--press-scale))":"none",
    filter:hover&&!disabled?"brightness(0.92)":"none",
    ...VARIANTS[variant],...SIZES[size],...style};
  if(variant==="ghost"&&hover&&!disabled){s.background="var(--action-accent)";s.color="var(--action-accent-fg)";s.filter="none";}
  if(variant==="outline"&&hover&&!disabled){s.background="var(--action-accent)";s.color="var(--action-accent-fg)";s.filter="none";}
  return <button disabled={disabled} style={s}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setActive(false);}}
    onMouseDown={()=>setActive(true)} onMouseUp={()=>setActive(false)} {...rest}>{children}</button>;
}
