import React from "react";
export function Tooltip({content,children,style,...rest}){
  const [open,setOpen]=React.useState(false);
  return <span style={{position:"relative",display:"inline-flex",...style}}
    onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} {...rest}>
    {children}
    {open&&<span style={{position:"absolute",bottom:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)",
      background:"var(--brand-blue)",color:"#fff",fontFamily:"var(--font-body)",fontSize:"var(--text-xs)",
      padding:"var(--space-1-5) var(--space-2-5)",borderRadius:"var(--radius-md)",whiteSpace:"nowrap",
      boxShadow:"var(--shadow-lg)",zIndex:50}}>{content}</span>}
  </span>;
}
