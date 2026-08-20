const { Button, Badge, NavItem, Separator } = window.EnviosDosruedasDesignSystem_a2df0d;
const ICON = (n,size=20,yellow=false)=>(<img src={"https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/"+n+".svg"} width={size} height={size} alt=""
  style={{filter:yellow?"invert(89%) sepia(72%) saturate(3000%) hue-rotate(3deg) brightness(105%)":"none"}}/>);

const NAV=[{label:"Inicio",icon:"house",screen:"home"},
 {label:"Servicios",icon:"bike",dropdown:[
   {label:"Envíos Express",desc:"Rápido, en 2 horas",icon:"zap"},
   {label:"Envíos LowCost",desc:"Económico e inteligente",icon:"trending-down"},
   {label:"Envíos Flex (MeLi)",desc:"Socio MercadoLibre Flex",icon:"clock"},
   {label:"E-Commerce & 3PL",desc:"Logística para PyMEs",icon:"shopping-bag"}]},
 {label:"Nosotros",icon:"info",dropdown:[
   {label:"Sobre Nosotros",desc:"Quiénes somos",icon:"info"},
   {label:"Preguntas Frecuentes",desc:"Todas tus dudas resueltas",icon:"circle-help"},
   {label:"Nuestras Redes",desc:"Comunidad en movimiento",icon:"share-2"}]},
 {label:"Contacto",icon:"mail",screen:"contacto"}];

function Navbar({screen,go}){
  const [open,setOpen]=React.useState(null);
  return (
    <header style={{position:"sticky",top:0,zIndex:40,background:"rgba(6,54,165,0.95)",backdropFilter:"blur(12px)",
      borderBottom:"1px solid var(--border-on-invert)",padding:"0 var(--space-6)",boxShadow:"var(--shadow-lg)"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a onClick={()=>go("home")} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",cursor:"pointer",padding:"var(--space-3) 0"}}>
          <img src="../../assets/logo_envios.webp" alt="Envios Dosruedas" style={{height:40}}/>
          <span style={{fontFamily:"var(--font-headline)",fontSize:"var(--text-3xl)",letterSpacing:"var(--tracking-tighter)",
            textTransform:"uppercase",color:"#fff",lineHeight:1}}>Envios <span style={{color:"var(--brand-yellow)"}}>Dosruedas</span></span>
        </a>
        <nav style={{display:"flex",borderLeft:"1px solid var(--border-on-invert)"}}>
          {NAV.map((it,i)=>(
            <div key={i} style={{position:"relative"}} onMouseEnter={()=>setOpen(it.dropdown?i:null)} onMouseLeave={()=>setOpen(null)}>
              <NavItem label={it.label} icon={ICON(it.icon,16,true)} hasDropdown={!!it.dropdown}
                active={screen===it.screen} onClick={()=>it.screen&&go(it.screen)}/>
              {it.dropdown&&open===i&&(
                <div style={{position:"absolute",left:0,top:"100%",width:320,paddingTop:4,zIndex:50}}>
                  <div style={{background:"rgba(6,54,165,0.97)",backdropFilter:"blur(12px)",borderRadius:"var(--radius-xl)",
                    border:"1px solid var(--border-on-invert)",boxShadow:"var(--shadow-2xl)",padding:8,display:"grid",gap:6}}>
                    {it.dropdown.map((dd,j)=>(
                      <a key={j} onClick={()=>go("servicio")} style={{display:"flex",alignItems:"center",gap:18,padding:12,
                        borderRadius:"var(--radius-lg)",cursor:"pointer",textDecoration:"none"}}
                        onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"}
                        onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                        <span style={{padding:10,borderRadius:"var(--radius-lg)",background:"rgba(255,255,255,0.05)",display:"inline-flex"}}>{ICON(dd.icon,20,true)}</span>
                        <span>
                          <span style={{display:"block",fontFamily:"var(--font-headline)",fontSize:"var(--text-sm)",
                            textTransform:"uppercase",letterSpacing:"var(--tracking-wider)",color:"#fff",lineHeight:1}}>{dd.label}</span>
                          <span style={{display:"block",marginTop:4,fontFamily:"var(--font-body)",fontSize:"var(--text-xs)",color:"rgba(255,255,255,0.6)"}}>{dd.desc}</span>
                        </span>
                      </a>))}
                  </div>
                </div>)}
            </div>))}
        </nav>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
          <a href="tel:+542236602699" style={{display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-code)",
            fontSize:"var(--text-sm)",color:"rgba(255,255,255,0.8)",textDecoration:"none"}}>{ICON("phone",16,true)}223 660-2699</a>
          <Button square variant="secondary" onClick={()=>go("cotizar")}
            style={{height:"var(--control-h-lg)",fontFamily:"var(--font-body)",textTransform:"uppercase",letterSpacing:"var(--tracking-wider)",fontWeight:700}}>
            Cotizar Ya →</Button>
        </div>
      </div>
    </header>);
}

const FOOT=[["Empresa",["Nosotros","Nuestra Red","Trabaja con nosotros","Sostenibilidad"]],
 ["Servicios",["Mensajería Urbana","E-commerce Logística","Envíos Nacionales","Trámites Legales"]]];

function Footer(){
  return (
    <footer style={{background:"var(--brand-blue)",color:"#fff",padding:"var(--space-16) var(--space-6) var(--space-8)"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"var(--space-12)"}}>
        <div style={{display:"grid",gap:"var(--space-6)",alignContent:"start"}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <img src="../../assets/logo_envios.webp" alt="" style={{height:44}}/>
            <span style={{fontFamily:"var(--font-headline)",fontSize:"var(--text-2xl)",textTransform:"uppercase",letterSpacing:"var(--tracking-tighter)"}}>
              Envios <span style={{color:"var(--brand-yellow)"}}>Dosruedas</span></span>
          </div>
          <p style={{margin:0,fontFamily:"var(--font-body)",fontSize:"var(--text-sm)",lineHeight:"var(--leading-relaxed)",color:"rgba(255,255,255,0.7)"}}>
            Líderes en mensajería express y logística urbana sobre dos ruedas. Innovación, rapidez y seguridad en cada entrega.</p>
          <div style={{display:"flex",gap:"var(--space-4)"}}>{["facebook","twitter","instagram"].map(n=>
            <span key={n} style={{filter:"invert(1)",opacity:.85}}>{ICON(n,20)}</span>)}</div>
        </div>
        {FOOT.map(([h,items])=>(
          <div key={h} style={{display:"grid",gap:"var(--space-6)",alignContent:"start"}}>
            <h4 style={{fontFamily:"var(--font-headline)",fontSize:"var(--text-xl)",letterSpacing:"var(--tracking-wider)",color:"var(--brand-yellow)"}}>{h}</h4>
            <ul style={{margin:0,padding:0,listStyle:"none",display:"grid",gap:"var(--space-4)",fontFamily:"var(--font-body)",
              fontSize:"var(--text-sm)",color:"rgba(255,255,255,0.7)"}}>{items.map(t=><li key={t}>{t}</li>)}</ul>
          </div>))}
        <div style={{display:"grid",gap:"var(--space-6)",alignContent:"start"}}>
          <h4 style={{fontFamily:"var(--font-headline)",fontSize:"var(--text-xl)",letterSpacing:"var(--tracking-wider)",color:"var(--brand-yellow)"}}>Contacto</h4>
          <ul style={{margin:0,padding:0,listStyle:"none",display:"grid",gap:"var(--space-4)",fontFamily:"var(--font-body)",
            fontSize:"var(--text-sm)",color:"rgba(255,255,255,0.7)"}}>
            {[["map-pin","Friuli 1972, Mar del Plata"],["phone","223 660-2699"],["mail","hola@enviosdosruedas.com"]].map(([i,t])=>
              <li key={t} style={{display:"flex",gap:12}}>{ICON(i,20,true)}{t}</li>)}
          </ul>
        </div>
      </div>
      <div style={{maxWidth:"var(--container-max)",margin:"var(--space-16) auto 0",paddingTop:"var(--space-8)",
        borderTop:"1px solid rgba(255,255,255,0.1)",textAlign:"center",fontFamily:"var(--font-body)",
        fontSize:"var(--text-xs)",color:"rgba(255,255,255,0.4)"}}>
        © 2026 Envios Dosruedas. Todos los derechos reservados. Diseñado para la velocidad.</div>
    </footer>);
}
Object.assign(window,{Navbar,Footer,ICON,NAV});
