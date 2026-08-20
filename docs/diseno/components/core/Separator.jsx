import React from "react";
export function Separator({orientation="horizontal",onInvert=false,style,...rest}){
  const c=onInvert?"var(--border-on-invert)":"var(--border-subtle)";
  return <div role="separator" style={orientation==="vertical"
    ?{width:1,alignSelf:"stretch",background:c,...style}
    :{height:1,width:"100%",background:c,...style}} {...rest}/>;
}
