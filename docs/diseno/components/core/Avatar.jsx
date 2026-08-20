import React from "react";
export function Avatar({src,alt="",initials="",size=40,style,...rest}){
  return <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:size,height:size,
    borderRadius:"var(--radius-full)",overflow:"hidden",background:"var(--surface-muted)",color:"var(--brand-blue)",
    fontFamily:"var(--font-subheading)",fontSize:size*0.42,letterSpacing:"var(--tracking-wide)",...style}} {...rest}>
    {src?<img src={src} alt={alt} style={{width:"100%",height:"100%",objectFit:"cover"}}/>:initials}</span>;
}
