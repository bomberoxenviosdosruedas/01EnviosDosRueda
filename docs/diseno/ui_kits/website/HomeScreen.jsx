const { Button, Badge, Card, CardHeader, CardTitle, CardContent, Tabs, Accordion, Table, StatBlock } = window.EnviosDosruedasDesignSystem_a2df0d;

const FEATURES=[
 {t:"Mensajería Express",d:"Servicio premium de entrega inmediata en el área metropolitana. Tus documentos y paquetes en minutos.",i:"bike",inv:true},
 {t:"Seguridad Garantizada",d:"Cada envío cuenta con póliza de cumplimiento y rastreo satelital activo durante todo el trayecto.",i:"shield-check",inv:false},
 {t:"Compromiso de Tiempo",d:"Si no llegamos a la hora acordada, el costo de tu envío corre por nuestra cuenta. Sin excusas.",i:"clock",inv:true},
 {t:"Cobertura Nacional",d:"Llegamos a cada rincón del país gracias a nuestra red de aliados estratégicos y flota propia.",i:"globe",inv:false}];

function HomeScreen({go}){
  return (<main>
    {/* Hero */}
    <section style={{position:"relative",overflow:"hidden",background:"var(--surface-page)",padding:"var(--space-24) var(--space-6)"}}>
      <div style={{position:"absolute",top:-400,right:-400,width:800,height:800,borderRadius:"50%",
        background:"var(--brand-yellow)",filter:"blur(120px)",opacity:.10,pointerEvents:"none"}}/>
      <div style={{position:"relative",maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",
        gridTemplateColumns:"1fr 1fr",gap:"var(--space-16)",alignItems:"center"}}>
        <div style={{display:"grid",gap:"var(--space-8)"}}>
          <h1 style={{fontSize:"var(--text-8xl)",lineHeight:1,letterSpacing:"var(--tracking-tighter)",color:"var(--text-heading)"}}>
            Tu Solución<br/><span style={{color:"var(--brand-yellow)",background:"var(--brand-blue)",padding:"0 10px",
              display:"inline-block",transform:"rotate(-1deg)"}}>Confiable</span></h1>
          <p style={{margin:0,maxWidth:600,fontFamily:"var(--font-body)",fontWeight:300,fontSize:"var(--text-xl)",
            lineHeight:"var(--leading-relaxed)",color:"var(--text-muted)"}}>
            Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.</p>
          <div style={{display:"flex",gap:"var(--space-4)"}}>
            <Button size="xl" onClick={()=>go("cotizar")}>Cotizar Envío</Button>
            <Button size="xl" variant="outline" onClick={()=>go("servicio")}>Ver Tarifas</Button></div>
          <div style={{display:"flex",gap:"var(--space-8)",opacity:.7,filter:"grayscale(1)"}}>
            {[["package","+1M Envíos"],["map-pin","Cobertura Total"],["fast-forward","Express 24h"]].map(([i,t])=>
              <span key={t} style={{display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-subheading)",
                fontSize:"var(--text-sm)",textTransform:"uppercase",letterSpacing:"var(--tracking-wide)"}}>{ICON(i,20)}{t}</span>)}</div>
        </div>
        <div style={{position:"relative",height:520,borderRadius:"var(--radius-3xl)",overflow:"hidden",
          boxShadow:"var(--shadow-2xl)",transform:"rotate(2deg)"}}>
          <img src="../../assets/img/card_mapa.webp" alt="Mapa de cobertura" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          <div style={{position:"absolute",inset:0,background:"rgba(6,54,165,0.10)",mixBlendMode:"multiply"}}/>
          <div style={{position:"absolute",bottom:32,left:32,background:"var(--brand-yellow)",color:"var(--brand-blue)",
            padding:"var(--space-4) var(--space-6)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-xl)",
            borderLeft:"8px solid var(--brand-blue)"}}>
            <p style={{margin:0,fontFamily:"var(--font-headline)",fontSize:"var(--text-3xl)",lineHeight:1,textTransform:"uppercase"}}>
              Entregas en<br/><span style={{background:"var(--brand-blue)",color:"#fff",padding:"0 4px"}}>Menos de 60m</span></p></div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section style={{padding:"var(--space-24) var(--space-6)",background:"var(--surface-muted)"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto"}}>
        <div style={{textAlign:"center",display:"grid",gap:"var(--space-4)",marginBottom:"var(--space-16)"}}>
          <h2 style={{fontSize:"var(--text-6xl)",letterSpacing:"var(--tracking-tighter)",color:"var(--text-heading)"}}>
            Nuestros <span style={{textDecoration:"underline",textDecorationColor:"var(--brand-yellow)",textDecorationThickness:6}}>Servicios</span></h2>
          <p style={{margin:"0 auto",maxWidth:700,fontFamily:"var(--font-body)",fontSize:"var(--text-lg)",color:"var(--text-muted)"}}>
            Diseñamos soluciones logísticas que se adaptan a las necesidades de tu empresa o envíos personales.</p></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"var(--space-8)"}}>
          {FEATURES.map(f=>(
            <Card key={f.t} elevation="xl" style={{border:"none"}}>
              <CardContent style={{padding:"var(--space-8)",display:"grid",gap:"var(--space-4)"}}>
                <div style={{width:56,height:56,borderRadius:"var(--radius-2xl)",display:"flex",alignItems:"center",justifyContent:"center",
                  background:f.inv?"var(--brand-blue)":"var(--brand-yellow)",marginBottom:"var(--space-2)"}}>{ICON(f.i,28,f.inv)}</div>
                <CardTitle style={{fontSize:"var(--text-2xl)",color:"var(--text-heading)"}}>{f.t}</CardTitle>
                <p style={{margin:0,fontFamily:"var(--font-body)",lineHeight:"var(--leading-relaxed)",color:"var(--text-muted)"}}>{f.d}</p>
              </CardContent></Card>))}
        </div>
      </div>
    </section>

    {/* Tariffs + FAQ */}
    <section style={{padding:"var(--space-24) var(--space-6)"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"var(--space-16)"}}>
        <div style={{display:"grid",gap:"var(--space-6)",alignContent:"start"}}>
          <h2 style={{fontSize:"var(--text-5xl)",color:"var(--text-heading)",letterSpacing:"var(--tracking-tighter)"}}>Tarifas de referencia</h2>
          <Tabs tabs={[
            {value:"exp",label:"Express",content:<Table caption="IVA incluido · Mar del Plata" columns={["Zona","Hasta 5 kg","Hasta 10 kg"]}
              rows={[["Centro","$4.600","$5.200"],["Puerto","$4.800","$5.400"],["Los Troncos","$5.300","$5.900"]]}/>},
            {value:"low",label:"LowCost",content:<Table caption="Entrega en el día por zonas" columns={["Zona","Hasta 5 kg","Hasta 10 kg"]}
              rows={[["Centro","$3.900","$4.400"],["Puerto","$4.100","$4.600"],["Los Troncos","$4.500","$5.000"]]}/>},
            {value:"flex",label:"Flex",content:<Table caption="Socios MercadoLibre Flex" columns={["Volumen diario","Precio por paquete"]}
              rows={[["1 – 20","$3.400"],["21 – 60","$3.100"],["60 +","A convenir"]]}/>}]}/>
        </div>
        <div style={{display:"grid",gap:"var(--space-6)",alignContent:"start"}}>
          <h2 style={{fontSize:"var(--text-5xl)",color:"var(--text-heading)",letterSpacing:"var(--tracking-tighter)"}}>Preguntas frecuentes</h2>
          <Accordion items={[
            {title:"¿Cuánto tarda un envío Express?",content:"Hasta 2 horas desde la confirmación, dentro del ejido urbano de Mar del Plata."},
            {title:"¿Trabajan con MercadoLibre Flex?",content:"Sí, somos socios Flex con retiros programados de lunes a sábado."},
            {title:"¿Necesito contrato?",content:"No. Trabajás sin contrato ni mínimos mensuales; pagás por envío."}]}/>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{position:"relative",overflow:"hidden",background:"var(--brand-blue)",color:"#fff",padding:"var(--space-24) var(--space-6)"}}>
      <div style={{position:"absolute",top:0,right:0,height:"100%",width:"33%",background:"rgba(255,236,1,0.10)",transform:"skewX(-12deg) translateX(50%)"}}/>
      <div style={{position:"relative",maxWidth:"var(--container-max)",margin:"0 auto"}}>
        <div style={{maxWidth:840,display:"grid",gap:"var(--space-8)"}}>
          <h2 style={{fontSize:"var(--text-7xl)",lineHeight:1,letterSpacing:"var(--tracking-tighter)"}}>
            ¿Listo para enviar<br/>con <span style={{color:"var(--brand-yellow)"}}>Los Mejores?</span></h2>
          <p style={{margin:0,fontFamily:"var(--font-body)",fontWeight:300,fontSize:"var(--text-xl)",color:"rgba(255,255,255,0.8)"}}>
            Empieza hoy mismo y descubre por qué miles de empresas confían en Envios Dosruedas para su logística diaria.</p>
          <div style={{display:"flex",gap:"var(--space-4)"}}>
            <Button size="hero" variant="secondary" onClick={()=>go("cotizar")}>Crear Cuenta →</Button>
            <Button size="hero" variant="ghost" style={{border:"2px solid rgba(255,255,255,0.6)",color:"#fff"}} onClick={()=>go("servicio")}>Ver Tarifas</Button></div>
          <div style={{display:"flex",gap:"var(--space-12)",paddingTop:"var(--space-8)",borderTop:"1px solid var(--border-on-invert)"}}>
            <StatBlock onInvert label="Envíos entregados" value="+1M"/>
            <StatBlock onInvert label="Tiempo promedio" value="42" unit="MIN"/>
            <StatBlock onInvert label="Operación" value="Lun – Sáb"/></div>
        </div>
      </div>
    </section>
  </main>);
}
window.HomeScreen=HomeScreen;
