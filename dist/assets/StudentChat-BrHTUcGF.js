import{r as i,j as e,D as g,N as x}from"./index-t3TyDbTL.js";/* empty css                         */function j({onNavigate:o}){var h;const[t,p]=i.useState(null),[r,c]=i.useState(""),l=i.useRef(null),d=i.useRef(null),n=[{id:1,name:"Lucía Martínez",role:"Enfermera Escolar",avatar:"👩‍⚕️",unread:2,lastActive:"Hace 10 min",messages:[{from:"nurse",text:"Hola, ¿cómo te encuentras hoy?",time:"10:30"},{from:"student",text:"Tengo algunas dudas sobre métodos anticonceptivos y no sé a quién preguntar.",time:"10:32"},{from:"nurse",text:"Gracias por confiar en mí. Es un tema importante y perfectamente normal tener dudas. ¿Qué te gustaría saber específicamente?",time:"10:33"},{from:"nurse",text:"Recuerda que toda nuestra conversación es confidencial.",time:"10:34"}]},{id:2,name:"Carlos Ruiz",role:"Trabajador Social",avatar:"🧑‍🏫",unread:0,lastActive:"Hace 1 día",messages:[{from:"social",text:"Estamos aquí para apoyarte.",time:"09:15"},{from:"student",text:"Gracias, me siento mucho mejor después de nuestra charla de ayer.",time:"09:20"},{from:"social",text:"Me alegra escuchar eso. Recuerda las técnicas de respiración que practicamos si vuelves a sentir ansiedad.",time:"09:22"}]}];i.useEffect(()=>{var a;t&&((a=l.current)==null||a.scrollIntoView({behavior:"smooth"}))},[t,(h=n.find(a=>a.id===t))==null?void 0:h.messages]);const m=()=>{r.trim()&&(console.log("Mensaje enviado:",r),c(""),setTimeout(()=>{var a;(a=d.current)==null||a.focus()},0))},f=a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),m())},u=`
    /* Estilos básicos garantizados para móviles */
    .app-chat-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      background-color: #F5FBFD;
      overflow: hidden;
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
    }
    
    .app-message-list-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 60px; /* Espacio para NavBar */
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      width: 100%;
      max-width: 100%;
      padding: 0;
    }
    
    .app-message-header {
      padding: 16px;
      text-align: center;
      background-color: white;
      position: sticky;
      top: 0;
      z-index: 2;
      width: 100%;
    }
    
    .app-message-title {
      margin: 0;
      font-size: 1.2rem;
      color: #002D3A;
    }
    
    .app-message-subtitle {
      margin: 4px 0 0 0;
      font-size: 0.9rem;
      color: #4A6572;
    }
    
    .app-message-info {
      margin: 12px;
      padding: 12px;
      background-color: #fff9c4;
      border-radius: 8px;
      text-align: center;
    }
    
    .app-message-info-title {
      margin: 0;
      font-weight: 500;
      font-size: 0.9rem;
      color: #002D3A;
    }
    
    .app-message-info-desc {
      margin: 4px 0 0 0;
      font-size: 0.8rem;
      color: #4A6572;
    }
    
    .app-message-list {
      padding: 12px;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 60px;
    }
    
    .app-message-item {
      background-color: white;
      border-radius: 12px;
      padding: 12px;
      margin-bottom: 12px;
      display: flex;
      width: 100%;
      box-sizing: border-box;
    }
    
    .app-message-item.unread {
      border-left: 4px solid #00B7D8;
    }
    
    .app-message-avatar {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      background-color: #F5FBFD;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      font-size: 1.5rem;
    }
    
    .app-message-avatar.unread {
      background-color: rgba(0,183,216,0.1);
    }
    
    .app-message-content {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }
    
    .app-message-header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    }
    
    .app-message-name {
      margin: 0;
      font-weight: 500;
      font-size: 1rem;
      color: #002D3A;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-message-name.unread {
      font-weight: 600;
    }
    
    .app-message-role {
      margin: 2px 0 0 0;
      font-size: 0.8rem;
      color: #4A6572;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-message-meta {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    
    .app-message-time {
      font-size: 0.75rem;
      color: #4A6572;
    }
    
    .app-message-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background-color: #00B7D8;
      color: white;
      border-radius: 50%;
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 4px;
    }
    
    .app-message-preview {
      margin: 8px 0 0 0;
      font-size: 0.85rem;
      color: #4A6572;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-message-preview.unread {
      color: #002D3A;
    }
    
    /* Chat individual */
    .app-chat-header {
      display: flex;
      align-items: center;
      padding: 12px;
      background: white;
      box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    }
    
    .app-chat-back {
      font-size: 1.5rem;
      color: #00B7D8;
      margin-right: 12px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }
    
    .app-chat-profile {
      display: flex;
      align-items: center;
      flex: 1;
    }
    
    .app-chat-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #F5FBFD;
      margin-right: 12px;
      font-size: 1.5rem;
    }
    
    .app-chat-info {
      flex: 1;
      min-width: 0;
    }
    
    .app-chat-name {
      margin: 0;
      font-weight: 600;
      font-size: 1rem;
      color: #002D3A;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-chat-role {
      margin: 2px 0 0 0;
      font-size: 0.8rem;
      color: #4A6572;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .app-chat-privacy {
      padding: 12px;
      background-color: #ffebee;
      border-left: 4px solid #d32f2f;
      display: flex;
      align-items: center;
    }
    
    .app-chat-privacy-icon {
      color: #d32f2f;
      font-size: 1.5rem;
      margin-right: 8px;
    }
    
    .app-chat-privacy-content {
      flex: 1;
    }
    
    .app-chat-privacy-title {
      margin: 0;
      font-weight: 600;
      font-size: 0.9rem;
      color: #d32f2f;
    }
    
    .app-chat-privacy-text {
      margin: 4px 0 0 0;
      font-size: 0.8rem;
      color: #002D3A;
    }
    
    .app-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 76px;
    }
    
    .app-chat-message {
      display: flex;
      margin-bottom: 12px;
      align-items: flex-end;
    }
    
    .app-chat-message-avatar {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      background-color: #F5FBFD;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      font-size: 1.2rem;
    }
    
    .app-chat-message.outgoing {
      flex-direction: row-reverse;
    }
    
    .app-chat-bubble {
      padding: 8px 12px;
      border-radius: 18px;
      max-width: 75%;
      word-break: break-word;
    }
    
    .app-chat-bubble.incoming {
      background: white;
      color: #002D3A;
      border-bottom-left-radius: 4px;
    }
    
    .app-chat-bubble.outgoing {
      background: #00B7D8;
      color: white;
      border-bottom-right-radius: 4px;
    }
    
    .app-chat-time {
      font-size: 0.7rem;
      color: #4A6572;
      margin-top: 4px;
    }
    
    .app-chat-message.outgoing .app-chat-time {
      text-align: right;
    }
    
    .app-chat-input-area {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 60px;
      background: white;
      padding: 8px;
      display: flex;
      align-items: center;
      box-shadow: 0 -1px 4px rgba(0,0,0,0.1);
    }
    
    .app-chat-input {
      flex: 1;
      border: none;
      padding: 8px 12px;
      background: #F5FBFD;
      border-radius: 20px;
      font-size: 0.9rem;
      resize: none;
      outline: none;
      font-family: inherit;
    }
    
    .app-chat-send {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #00B7D8;
      color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
      cursor: pointer;
      font-size: 1.2rem;
    }
    
    .app-chat-send:disabled {
      background-color: #e0e0e0;
      cursor: default;
    }
    
    /* Hack para iOS */
    @supports (-webkit-touch-callout: none) {
      .app-chat-container, .app-chat-list-container {
        height: -webkit-fill-available;
      }
    }
  `;if(i.useEffect(()=>{const a=document.createElement("style");return a.textContent=u,document.head.appendChild(a),()=>{document.head.removeChild(a)}},[]),!t)return e.jsxs("div",{className:"app-chat-container",children:[e.jsx(g,{}),e.jsxs("div",{className:"app-message-list-container",children:[e.jsxs("div",{className:"app-message-header",children:[e.jsx("h1",{className:"app-message-title",children:"Mensajes"}),e.jsx("p",{className:"app-message-subtitle",children:"Consulta con profesionales sanitarios"})]}),e.jsxs("div",{className:"app-message-info",children:[e.jsx("p",{className:"app-message-info-title",children:"Horario de atención: Lunes - Viernes, 08:00 - 15:00"}),e.jsx("p",{className:"app-message-info-desc",children:"Recibirás una respuesta dentro del horario de atención."})]}),e.jsx("div",{className:"app-message-list",children:n.map(a=>e.jsxs("div",{className:`app-message-item ${a.unread?"unread":""}`,onClick:()=>p(a.id),children:[e.jsx("div",{className:`app-message-avatar ${a.unread?"unread":""}`,children:a.avatar}),e.jsxs("div",{className:"app-message-content",children:[e.jsxs("div",{className:"app-message-header-row",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`app-message-name ${a.unread?"unread":""}`,children:a.name}),e.jsx("p",{className:"app-message-role",children:a.role})]}),e.jsxs("div",{className:"app-message-meta",children:[e.jsx("span",{className:"app-message-time",children:a.lastActive}),a.unread>0&&e.jsx("div",{className:"app-message-badge",children:a.unread})]})]}),a.messages.length>0&&e.jsx("p",{className:`app-message-preview ${a.unread?"unread":""}`,children:a.messages[a.messages.length-1].text})]})]},a.id))})]}),e.jsx(x,{active:"chat",onNavigate:o,userType:"student"})]});const s=n.find(a=>a.id===t);return e.jsxs("div",{className:"app-chat-container",children:[e.jsx(g,{}),e.jsxs("div",{className:"app-chat-header",children:[e.jsx("button",{className:"app-chat-back",onClick:()=>p(null),children:"←"}),e.jsxs("div",{className:"app-chat-profile",children:[e.jsx("div",{className:"app-chat-avatar",children:s==null?void 0:s.avatar}),e.jsxs("div",{className:"app-chat-info",children:[e.jsx("h3",{className:"app-chat-name",children:s==null?void 0:s.name}),e.jsx("p",{className:"app-chat-role",children:s==null?void 0:s.role})]})]})]}),e.jsxs("div",{className:"app-chat-privacy",children:[e.jsx("div",{className:"app-chat-privacy-icon",children:"🔒"}),e.jsxs("div",{className:"app-chat-privacy-content",children:[e.jsx("p",{className:"app-chat-privacy-title",children:"Consulta confidencial y anónima"}),e.jsx("p",{className:"app-chat-privacy-text",children:"Tu privacidad está protegida. Nadie más tendrá acceso a esta conversación."})]})]}),e.jsxs("div",{className:"app-chat-messages",children:[s==null?void 0:s.messages.map((a,v)=>e.jsxs("div",{className:`app-chat-message ${a.from==="student"?"outgoing":"incoming"}`,children:[a.from!=="student"&&e.jsx("div",{className:"app-chat-message-avatar",children:s==null?void 0:s.avatar}),e.jsxs("div",{children:[e.jsx("div",{className:`app-chat-bubble ${a.from==="student"?"outgoing":"incoming"}`,children:a.text}),e.jsx("div",{className:"app-chat-time",children:a.time})]})]},v)),e.jsx("div",{ref:l})]}),e.jsxs("div",{className:"app-chat-input-area",children:[e.jsx("textarea",{ref:d,className:"app-chat-input",value:r,onChange:a=>c(a.target.value),onKeyPress:f,placeholder:"Escribe un mensaje...",rows:1}),e.jsx("button",{className:"app-chat-send",onClick:m,disabled:!r.trim(),children:"↑"})]}),e.jsx(x,{active:"chat",onNavigate:o,userType:"student"})]})}export{j as default};
