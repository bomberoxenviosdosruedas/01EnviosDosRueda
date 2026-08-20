import React from "react";
export function Table({columns=[],rows=[],caption,style,...rest}){
  return <div style={{width:"100%",overflowX:"auto",...style}} {...rest}>
    <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"var(--font-body)",fontSize:"var(--text-sm)"}}>
      {caption&&<caption style={{captionSide:"bottom",paddingTop:"var(--space-4)",color:"var(--text-muted)",
        fontSize:"var(--text-xs)",textAlign:"left"}}>{caption}</caption>}
      <thead><tr>{columns.map((c,i)=><th key={i} style={{textAlign:"left",padding:"var(--space-3) var(--space-4)",
        borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-subheading)",textTransform:"uppercase",
        letterSpacing:"var(--tracking-wider)",color:"var(--text-muted)",fontWeight:"var(--weight-normal)"}}>{c}</th>)}</tr></thead>
      <tbody>{rows.map((r,i)=><tr key={i} style={{background:i%2?"var(--surface-muted)":"transparent"}}>
        {r.map((cell,j)=><td key={j} style={{padding:"var(--space-3) var(--space-4)",
          borderBottom:"1px solid var(--border-subtle)"}}>{cell}</td>)}</tr>)}</tbody>
    </table></div>;
}
