import React from "react";
export function Label({eyebrow=false,onInvert=false,style,children,...rest}){
  const base=eyebrow
    ?{fontFamily:"var(--font-subheading)",fontSize:"var(--text-2xs)",textTransform:"uppercase",letterSpacing:"var(--tracking-mega)",fontWeight:"var(--weight-bold)"}
    :{fontFamily:"var(--font-body)",fontSize:"var(--text-sm)",fontWeight:"var(--weight-semibold)"};
  return <label style={{display:"block",color:onInvert?"rgba(255,255,255,0.4)":"var(--text-muted)",...base,...style}} {...rest}>{children}</label>;
}
