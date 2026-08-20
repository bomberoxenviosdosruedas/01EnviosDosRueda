const { Button, Badge, Card, CardContent, CardTitle, Table, Accordion, Alert, Progress, StatBlock, Separator } = window.EnviosDosruedasDesignSystem_a2df0d;

const PLANS=[
 {t:"Express",d:"Entrega inmediata en hasta 2 horas dentro de Mar del Plata.",p:"$4.600",img:"fondo_express.webp",rec:false},
 {t:"LowCost",d:"Económico e inteligente: entrega en el día agrupada por zonas.",p:"$3.900",img:"fondo_lowcost.webp",rec:true},
 {t:"Flex (MeLi)",d:"Socios MercadoLibre Flex con retiro programado diario.",p:"$3.400",img:"fondo_flex.webp",rec:false}];

function ServicioScreen({go}){
  return (<main>
    <section style={{position:"relative",overflow:"hidden",minHeight:420,display:"flex",alignItems:"flex-end",
      padding:"var(--space-16) var(--space-6)",background:"var(--brand-blue)"}}>
      <img src="../../assets/img/hero_express.webp" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",
        objectFit:"cover",opacity:.35}}/>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(6,54,165,0.95),rgba(6,54,165,0.35))"}}/>
      <div style={{position:"relative",maxWidth:"var(--container-max)",margin:"0 auto",width:"100%",display:"grid",gap:"var(--space-6)"}}>
        <Badge variant="glass" dot>Servicios · Mar del Plata</Badge>
        <h1 style={{fontSize:"var(--text-8xl)",lineHeight:.85,letterSpacing:"var(--tracking-tighter)",color:"#fff"}}>
          Envíos <span style={{color:"var(--brand-yellow)"}}>Express</span></h1>
        <p style={{margin:0,maxWidth:640,fontFamily:"var(--font-body)",fontWeight:300,fontSize:"var(--text-xl)",color:"rgba(255,255,255,0.8)"}}>
          Retiramos en minutos y entregamos en menos de dos horas. Rastreo activo, seguro de cumplimiento y coordinación por WhatsApp.</p>
        <div style={{display:"flex",gap:"var(--space-4)"}}>
          <Button size="xl" variant="secondary" onClick={()=>go("cotizar")}>Cotizar Ahora</Button>
          <Button size="xl" variant="ghost" style={{border:"2px solid rgba(255,255,255,0.6)",color:"#fff"}} onClick={()=>go("contacto")}>Hablar con ventas</Button></div>
      </div>
    </section>

    <section style={{padding:"var(--space-24) var(--space-6)"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",gap:"var(--space-16)"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--space-8)"}}>
          {PLANS.map(p=>(
            <Card key={p.t} elevation="2xl" accent={p.rec} style={{position:"relative"}}>
              {p.rec&&<div style={{background:"var(--brand-yellow)",color:"var(--brand-blue)",textAlign:"center",
                fontFamily:"var(--font-subheading)",fontSize:"var(--text-xs)",textTransform:"uppercase",
                letterSpacing:"var(--tracking-tight)",padding:"4px 0"}}>Servicio Recomendado</div>}
              <img src={"../../assets/img/"+p.img} alt="" style={{width:"100%",height:150,objectFit:"cover"}}/>
              <CardContent style={{padding:"var(--space-8)",display:"grid",gap:"var(--space-4)"}}>
                <CardTitle style={{color:"var(--text-heading)",fontSize:"var(--text-3xl)"}}>{p.t}</CardTitle>
                <p style={{margin:0,fontFamily:"var(--font-body)",color:"var(--text-muted)",lineHeight:"var(--leading-relaxed)"}}>{p.d}</p>
                <StatBlock label="Desde" value={p.p} unit="ARS"/>
                <Button variant={p.rec?"secondary":"default"} onClick={()=>go("cotizar")}>Elegir {p.t}</Button>
              </CardContent></Card>))}
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:"var(--space-16)",alignItems:"start"}}>
          <div style={{display:"grid",gap:"var(--space-6)"}}>
            <h2 style={{fontSize:"var(--text-5xl)",color:"var(--text-heading)",letterSpacing:"var(--tracking-tighter)"}}>Seguimiento del envío</h2>
            <Alert variant="accent" title="En camino" icon={ICON("bike",20)}>El cadete retiró el paquete a las 14:20 en Friuli 1972.</Alert>
            <div style={{display:"grid",gap:8}}><Progress value={62}/>
              <div style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--font-subheading)",
                fontSize:"var(--text-xs)",textTransform:"uppercase",letterSpacing:"var(--tracking-widest)",color:"var(--text-muted)"}}>
                <span>Retirado</span><span>En tránsito</span><span>Entregado</span></div></div>
            <Table columns={["Hora","Evento","Zona"]} rows={[["14:20","Retiro confirmado","Centro"],["14:38","En tránsito","Av. Colón"],["—","Entrega estimada 15:05","Los Troncos"]]}/>
          </div>
          <div style={{display:"grid",gap:"var(--space-6)"}}>
            <h2 style={{fontSize:"var(--text-5xl)",color:"var(--text-heading)",letterSpacing:"var(--tracking-tighter)"}}>Detalles del servicio</h2>
            <Accordion items={[
              {title:"Cobertura",content:"Todo el ejido urbano de Mar del Plata; zonas periféricas con recargo por distancia."},
              {title:"Seguro y responsabilidad",content:"Póliza de cumplimiento incluida y rastreo satelital activo durante el trayecto."},
              {title:"Formas de pago",content:"Transferencia, efectivo o contra entrega. Sin contrato ni mínimos mensuales."}]}/>
            <img src="../../assets/img/box_card.jpeg" alt="" style={{width:"100%",height:200,objectFit:"cover",borderRadius:"var(--radius-3xl)",boxShadow:"var(--shadow-xl)"}}/>
          </div>
        </div>
      </div>
    </section>
  </main>);
}
window.ServicioScreen=ServicioScreen;
