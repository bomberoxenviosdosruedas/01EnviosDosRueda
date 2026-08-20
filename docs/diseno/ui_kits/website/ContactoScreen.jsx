const { Button, Badge, Input, Textarea, Label, Checkbox, Select, Toast } = window.EnviosDosruedasDesignSystem_a2df0d;

const CHANNELS=[
 {t:"WhatsApp Comercial",d:"Respuestas y cotizaciones de envíos en tiempo real.",i:"message-square"},
 {t:"Llamada de Coordinación",d:"Para hablar directamente con un coordinador logístico.",i:"phone"},
 {t:"Solicitar Cotización B2B",d:"Envianos tu base de envíos para un plan personalizado.",i:"mail"}];

function ContactoScreen(){
  const [sent,setSent]=React.useState(false);
  return (
    <main style={{padding:"var(--space-16) var(--space-6)"}}>
      <section style={{position:"relative",overflow:"hidden",maxWidth:1152,margin:"0 auto",borderRadius:"var(--radius-4xl)",
        padding:"var(--space-16)",background:"var(--surface-tint-blue)",border:"1px solid rgba(6,54,165,0.05)",
        boxShadow:"var(--shadow-panel)"}}>
        <div style={{position:"absolute",top:-128,left:-128,width:384,height:384,borderRadius:"50%",background:"var(--brand-yellow)",opacity:.4,filter:"blur(100px)"}}/>
        <div style={{position:"absolute",bottom:-160,right:-128,width:500,height:500,borderRadius:"50%",background:"var(--brand-blue)",opacity:.3,filter:"blur(130px)"}}/>
        <div style={{position:"relative",display:"grid",gridTemplateColumns:"7fr 5fr",gap:"var(--space-16)",alignItems:"center"}}>
          <div style={{display:"grid",gap:"var(--space-10)"}}>
            <span style={{justifySelf:"start",display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",
              borderRadius:"var(--radius-full)",border:"1px solid rgba(6,54,165,0.10)",background:"rgba(255,255,255,0.5)",
              backdropFilter:"blur(8px)",color:"var(--brand-blue)",fontFamily:"var(--font-body)",fontSize:10,fontWeight:700,
              textTransform:"uppercase",letterSpacing:"var(--tracking-mega)"}}>
              <span style={{width:10,height:10,borderRadius:"50%",background:"var(--brand-yellow)",boxShadow:"var(--glow-yellow)"}}/>
              Conexión Directa Mar del Plata</span>
            <h1 style={{fontSize:"9rem",fontStyle:"italic",lineHeight:.8,letterSpacing:"var(--tracking-tighter)",color:"var(--brand-blue)"}}>
              ¿Hablamos<br/><span style={{color:"transparent",WebkitTextStroke:"2px #0636A5"}}>ahora?</span></h1>
            <p style={{margin:0,maxWidth:460,fontFamily:"var(--font-body)",fontSize:"var(--text-xl)",
              lineHeight:"var(--leading-tight)",color:"rgba(6,54,165,0.7)"}}>
              Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce.</p>
            <div style={{paddingTop:"var(--space-8)",borderTop:"1px solid rgba(6,54,165,0.10)",display:"flex",gap:"var(--space-8)"}}>
              {[["Oficina Central","Friuli 1972, Mar del Plata"],["Operación","Lunes a Sábado"]].map(([l,v])=>(
                <div key={l} style={{display:"grid",gap:4}}>
                  <span style={{fontFamily:"var(--font-subheading)",fontSize:10,textTransform:"uppercase",
                    letterSpacing:"var(--tracking-widest)",color:"rgba(6,54,165,0.4)"}}>{l}</span>
                  <span style={{fontFamily:"var(--font-body)",fontWeight:700,fontSize:"var(--text-sm)",color:"var(--brand-blue)"}}>{v}</span></div>))}
            </div>
          </div>
          <div style={{display:"grid",gap:"var(--space-5)"}}>
            {CHANNELS.map(c=>(
              <a key={c.t} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--space-7)",
                borderRadius:"var(--radius-3xl)",border:"1px solid rgba(6,54,165,0.05)",background:"rgba(255,255,255,0.6)",
                backdropFilter:"blur(12px)",cursor:"pointer",transition:"all var(--dur-slow) var(--ease-out)"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.03)";e.currentTarget.style.background="#fff";e.currentTarget.style.boxShadow="var(--shadow-2xl)";e.currentTarget.style.borderColor="var(--brand-yellow)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.background="rgba(255,255,255,0.6)";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor="rgba(6,54,165,0.05)";}}>
                <span style={{display:"flex",alignItems:"center",gap:"var(--space-6)"}}>
                  <span style={{padding:16,borderRadius:"var(--radius-2xl)",background:"rgba(6,54,165,0.05)",display:"inline-flex"}}>{ICON(c.i,24)}</span>
                  <span><span style={{display:"block",fontFamily:"var(--font-headline)",fontSize:"var(--text-xl)",
                    textTransform:"uppercase",letterSpacing:"var(--tracking-wide)",color:"var(--brand-blue)",lineHeight:1,marginBottom:8}}>{c.t}</span>
                    <span style={{display:"block",fontFamily:"var(--font-body)",fontSize:"var(--text-xs)",color:"rgba(6,54,165,0.5)"}}>{c.d}</span></span>
                </span>
                <span style={{color:"rgba(6,54,165,0.2)"}}>{ICON("chevron-right",20)}</span>
              </a>))}
          </div>
        </div>
      </section>

      <section style={{maxWidth:1152,margin:"var(--space-24) auto 0",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-16)",alignItems:"start"}}>
        <div style={{display:"grid",gap:"var(--space-4)"}}>
          <h2 style={{fontSize:"var(--text-5xl)",color:"var(--text-heading)",letterSpacing:"var(--tracking-tighter)"}}>Pedí un plan a medida</h2>
          <p style={{margin:0,fontFamily:"var(--font-body)",color:"var(--text-muted)",lineHeight:"var(--leading-relaxed)"}}>
            Contanos cuántos envíos hacés por semana y armamos una tarifa por volumen. Respondemos el mismo día hábil.</p>
          <img src="../../assets/img/card_moto01.webp" alt="" style={{width:"100%",height:220,objectFit:"cover",
            borderRadius:"var(--radius-3xl)",boxShadow:"var(--shadow-xl)",marginTop:"var(--space-4)"}}/>
        </div>
        <div style={{display:"grid",gap:"var(--space-4)",padding:"var(--space-8)",borderRadius:"var(--radius-3xl)",
          background:"var(--surface-card)",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-xl)"}}>
          <div><Label>Nombre y empresa</Label><Input placeholder="Matías · Tienda MDQ"/></div>
          <div><Label>Email</Label><Input placeholder="hola@tutienda.com"/></div>
          <div><Label>Servicio de interés</Label><Select placeholder="Elegí un servicio"
            options={[{value:"exp",label:"Envíos Express"},{value:"low",label:"Envíos LowCost"},{value:"flex",label:"Envíos Flex (MeLi)"},{value:"3pl",label:"E-Commerce & 3PL"}]}/></div>
          <div><Label>Mensaje</Label><Textarea placeholder="Hacemos ~40 envíos por semana en zona centro."/></div>
          <Checkbox label="Quiero recibir novedades de cobertura" defaultChecked/>
          <Button size="xl" onClick={()=>setSent(true)}>Enviar consulta</Button>
          {sent&&<Toast variant="invert" title="Consulta enviada" description="Te respondemos hoy mismo por email." onClose={()=>setSent(false)} style={{width:"100%"}}/>}
        </div>
      </section>
    </main>);
}
window.ContactoScreen=ContactoScreen;
