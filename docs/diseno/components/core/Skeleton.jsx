import React from "react";
export function Skeleton({width="100%",height=16,radius="var(--radius-md)",style,...rest}){
  return <div style={{width,height,borderRadius:radius,background:"var(--surface-muted)",
    animation:"dr-pulse 1.6s var(--ease-out) infinite",...style}} {...rest}>
    <style>{"@keyframes dr-pulse{0%,100%{opacity:1}50%{opacity:.5}}"}</style></div>;
}
