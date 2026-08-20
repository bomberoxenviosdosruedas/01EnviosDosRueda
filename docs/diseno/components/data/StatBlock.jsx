import React from "react";
export function StatBlock({label,value,unit,onInvert=false,style,...rest}){
  return <div style={{display:"grid",gap:2,...style}} {...rest}>
    <span style={{fontFamily:"var(--font-subheading)",fontSize:"var(--text-2xs)",textTransform:"uppercase",
      letterSpacing:"var(--tracking-mega)",fontWeight:"var(--weight-bold)",
      color:onInvert?"rgba(255,255,255,0.4)":"var(--text-muted)"}}>{label}</span>
    <span style={{fontFamily:"var(--font-headline)",fontSize:"var(--text-4xl)",lineHeight:"var(--leading-none)",
      letterSpacing:"var(--tracking-tight)",color:onInvert?"#fff":"var(--text-heading)"}}>{value}
      {unit&&<span style={{fontFamily:"var(--font-subheading)",fontSize:"var(--text-xs)",fontWeight:"var(--weight-bold)",
        marginLeft:6,opacity:0.4}}>{unit}</span>}</span>
  </div>;
}
