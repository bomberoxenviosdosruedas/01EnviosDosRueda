import React from "react";

export function Card({elevation="sm",accent=false,style,children,...rest}){
  const shadow={sm:"var(--shadow-sm)",xl:"var(--shadow-xl)","2xl":"var(--shadow-2xl)"}[elevation];
  return <div style={{borderRadius:"var(--radius-lg)",background:"var(--surface-card)",color:"var(--text-body)",
    border:accent?"4px solid var(--brand-yellow)":"1px solid var(--border-subtle)",boxShadow:shadow,overflow:"hidden",...style}} {...rest}>{children}</div>;
}
export function CardHeader({invert=false,style,children,...rest}){
  return <div style={{display:"flex",flexDirection:"column",gap:"var(--space-1-5)",padding:"var(--space-6)",
    background:invert?"var(--brand-blue)":"transparent",color:invert?"var(--text-on-invert)":"inherit",...style}} {...rest}>{children}</div>;
}
export function CardTitle({style,children,...rest}){
  return <div style={{fontFamily:"var(--font-headline)",textTransform:"uppercase",fontSize:"var(--text-2xl)",
    lineHeight:"var(--leading-none)",letterSpacing:"var(--tracking-tight)",...style}} {...rest}>{children}</div>;
}
export function CardDescription({style,children,...rest}){
  return <div style={{fontSize:"var(--text-sm)",color:"var(--text-muted)",fontFamily:"var(--font-body)",...style}} {...rest}>{children}</div>;
}
export function CardContent({style,children,...rest}){
  return <div style={{padding:"var(--space-6)",paddingTop:0,...style}} {...rest}>{children}</div>;
}
export function CardFooter({style,children,...rest}){
  return <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-6)",paddingTop:0,...style}} {...rest}>{children}</div>;
}
