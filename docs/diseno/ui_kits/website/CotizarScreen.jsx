const { Button, Badge, Label, StatBlock, Separator } = window.EnviosDosruedasDesignSystem_a2df0d;

const ROUTES=[
 {id:"ruta1",origen:"Centro",destino:"Terminal Ferroautomotora",distancia:"3.7 km",tarifa:"$4.600",tipo:"Express"},
 {id:"ruta2",origen:"Plaza Mitre",destino:"Av. Constitución 5500",distancia:"5.8 km",tarifa:"$5.300",tipo:"LowCost"},
 {id:"ruta3",origen:"Puerto",destino:"Los Troncos",distancia:"4.2 km",tarifa:"$4.800",tipo:"Express"}];

function CotizarScreen(){
  const [sel,setSel]=React.useState(ROUTES[0]);
  return (
    <section style={{position:"relative",minHeight:"90vh",display:"flex",alignItems:"center",justifyContent:"center",
      background:"var(--brand-blue)",padding:"var(--space-16) var(--space-6)",borderTop:"1px solid var(--border-on-invert)"}}>
      <div style={{maxWidth:"var(--container-max)",width:"100%",margin:"0 auto",display:"grid",
        gridTemplateColumns:"1fr 1fr",gap:"var(--space-12)",alignItems:"center"}}>
        <div style={{display:"grid",gap:"var(--space-6)"}}>
          <Badge variant="glass" dot>Cotizador de Entregas al Instante</Badge>
          <h2 style={{fontSize:"var(--text-7xl)",fontStyle:"italic",lineHeight:.9,color:"#fff"}}>
            Cotizá tu envío<br/><span style={{color:"var(--brand-yellow)"}}>sin registro</span></h2>
          <p style={{margin:0,fontFamily:"var(--font-body)",fontWeight:300,fontSize:"var(--text-base)",
            lineHeight:"var(--leading-relaxed)",color:"rgba(255,255,255,0.6)"}}>
            Elegí una de nuestras rutas más solicitadas para calcular la distancia y la tarifa final en el acto. Rápido, transparente y sin sorpresas.</p>
          <div style={{display:"grid",gap:"var(--space-3)"}}>
            {ROUTES.map(r=>{const on=sel.id===r.id;return (
              <button key={r.id} onClick={()=>setSel(r)} style={{textAlign:"left",padding:"var(--space-4)",
                borderRadius:"var(--radius-xl)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",
                background:"rgba(255,255,255,0.05)",backdropFilter:"blur(8px)",
                border:"1px solid "+(on?"var(--brand-yellow)":"rgba(255,255,255,0.10)"),
                boxShadow:on?"0 0 0 1px var(--brand-yellow)":"none",transition:"all var(--dur) var(--ease-out)"}}>
                <span>
                  <span style={{display:"block",fontFamily:"var(--font-headline)",fontSize:"var(--text-xs)",
                    textTransform:"uppercase",letterSpacing:"var(--tracking-wider)",color:"#fff"}}>{r.origen} ➜ {r.destino}</span>
                  <span style={{display:"block",fontFamily:"var(--font-body)",fontSize:11,color:"rgba(255,255,255,0.4)"}}>
                    Servicio {r.tipo} optimizado de última milla.</span></span>
                <span style={{display:"flex",alignItems:"center",gap:8,color:"var(--brand-yellow)"}}>
                  <span style={{fontFamily:"var(--font-code)",fontSize:11}}>{r.distancia}</span><span style={{fontSize:18,opacity:on?1:.4}}>➜</span></span>
              </button>);})}
          </div>
        </div>
        <div style={{maxWidth:440,width:"100%",margin:"0 auto",position:"relative",overflow:"hidden",
          borderRadius:"var(--radius-3xl)",border:"1px solid rgba(255,255,255,0.10)",background:"rgba(255,255,255,0.05)",
          backdropFilter:"blur(20px)",padding:"var(--space-8)",boxShadow:"var(--shadow-2xl)"}}>
          <div style={{position:"absolute",top:-96,right:-96,width:192,height:192,borderRadius:"50%",
            background:"rgba(255,236,1,0.10)",filter:"blur(60px)"}}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)",
            paddingBottom:"var(--space-4)",borderBottom:"1px solid rgba(255,255,255,0.10)"}}>
            <div>
              <h3 style={{fontFamily:"var(--font-subheading)",fontSize:"var(--text-lg)",letterSpacing:"var(--tracking-wide)",color:"#fff"}}>Cálculo Automático</h3>
              <p style={{margin:"2px 0 0",fontFamily:"var(--font-body)",fontSize:10,textTransform:"uppercase",
                letterSpacing:"var(--tracking-widest)",color:"rgba(255,255,255,0.4)"}}>Sistema Dosruedas Maps</p></div>
            <span style={{filter:"invert(1)",opacity:.8}}>{ICON("map-pin",24)}</span>
          </div>
          <div style={{display:"grid",gap:"var(--space-4)"}}>
            <div><Label eyebrow onInvert>Origen</Label><span style={{fontFamily:"var(--font-subheading)",fontSize:"var(--text-sm)",color:"#fff"}}>{sel.origen}</span></div>
            <div><Label eyebrow onInvert>Destino</Label><span style={{fontFamily:"var(--font-subheading)",fontSize:"var(--text-sm)",color:"#fff"}}>{sel.destino}</span></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-4)"}}>
              <div><Label eyebrow onInvert>Distancia</Label><span style={{fontFamily:"var(--font-body)",fontWeight:700,fontSize:"var(--text-sm)",color:"#fff"}}>{sel.distancia}</span></div>
              <div><Label eyebrow onInvert>Tipo de Envío</Label><span style={{fontFamily:"var(--font-body)",fontWeight:700,fontSize:"var(--text-sm)",color:"#fff",textTransform:"uppercase"}}>{sel.tipo}</span></div></div>
            <div style={{paddingTop:"var(--space-6)",borderTop:"1px solid rgba(255,255,255,0.10)",display:"flex",
              justifyContent:"space-between",alignItems:"flex-end"}}>
              <div><Label eyebrow onInvert>Tarifa Final</Label>
                <span style={{display:"block",fontFamily:"var(--font-body)",fontSize:9,fontWeight:300,color:"var(--brand-yellow)"}}>Precios con IVA incluido</span></div>
              <span style={{fontFamily:"var(--font-headline)",fontStyle:"italic",fontSize:"var(--text-4xl)",
                letterSpacing:"var(--tracking-tight)",color:"#fff"}}>{sel.tarifa}
                <span style={{fontFamily:"var(--font-subheading)",fontSize:"var(--text-xs)",fontWeight:700,color:"rgba(255,255,255,0.4)",marginLeft:6}}>ARS</span></span>
            </div>
          </div>
          <Button variant="secondary" style={{width:"100%",marginTop:"var(--space-6)",height:"var(--control-h-xl)",
            borderRadius:"var(--radius-2xl)",fontFamily:"var(--font-subheading)",textTransform:"uppercase",
            letterSpacing:"var(--tracking-widest)",fontSize:"var(--text-lg)",boxShadow:"var(--shadow-accent)"}}>
            Confirmar por WhatsApp ➜</Button>
        </div>
      </div>
    </section>);
}
window.CotizarScreen=CotizarScreen;
