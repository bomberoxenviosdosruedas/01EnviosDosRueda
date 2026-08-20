import React from "react";
export function NavItem({label,icon,active=false,hasDropdown=false,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return <a onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{position:"relative",display:"inline-flex",alignItems:"center",gap:"var(--space-2)",
      padding:"var(--space-5) var(--space-7)",borderRight:"1px solid var(--border-on-invert)",
      fontFamily:"var(--font-headline)",fontSize:"var(--text-base)",textTransform:"uppercase",
      letterSpacing:"var(--tracking-widest)",textDecoration:"none",cursor:"pointer",
      color:hover||active?"#fff":"rgba(255,255,255,0.8)",background:hover?"rgba(255,255,255,0.05)":"transparent",
      transition:"all var(--dur) var(--ease-out)",...style}} {...rest}>
    {icon&&<span style={{color:"var(--brand-yellow)",display:"inline-flex"}}>{icon}</span>}
    <span>{label}</span>
    {hasDropdown&&<span style={{color:"rgba(255,255,255,0.6)",fontSize:11,
      transform:hover?"rotate(180deg)":"none",transition:"transform var(--dur-fast) var(--ease-out)"}}>▾</span>}
    <span style={{position:"absolute",bottom:0,left:0,width:"100%",height:4,background:"var(--brand-yellow)",
      transform:(hover||active)?"scaleX(1)":"scaleX(0)",transformOrigin:"left",
      transition:"transform var(--dur) var(--ease-out)"}}/>
  </a>;
}
