var me=Object.defineProperty;var pe=(e,t,r)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var v=(e,t,r)=>pe(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();class G{constructor(){this.listeners={}}addListener(t,r){return this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(r),()=>this.removeListener(t,r)}removeListener(t,r){this.listeners[t]&&(this.listeners[t]=this.listeners[t].filter(i=>i!==r))}dispatch(t,r){this.listeners[t]&&this.listeners[t].forEach(i=>i(r))}}class ge{constructor(t){this.prefix="",this.events=new G,this.data={},this.prefix=t}delete(t,r){r!=null&&r.skipStore||localStorage.removeItem(`${this.prefix}${t}`),delete this.data[t]}get(t,r){if(!(r!=null&&r.skipStore)){const i=localStorage.getItem(`${this.prefix}${t}`);if(i!==null)return JSON.parse(i)}if(this.data.hasOwnProperty(t))return this.data[t]}set(t,r,i=!1,n){if(i){let s=null;n!=null&&n.skipStore?s=null:s=localStorage.getItem(`${this.prefix}${t}`),s!==null?this.data[t]=JSON.parse(s):this.data.hasOwnProperty(t)||(this.data[t]=r)}else this.data[t]=r;n!=null&&n.skipStore||localStorage.setItem(`${this.prefix}${t}`,JSON.stringify(this.data[t])),this.events.dispatch(t,this.data[t])}update(t,r,i){const n=this.get(t,i);if(n===void 0)throw new Error(`"${t}" not found, use \`set\``);this.set(t,r(n),!1,i)}listen(t,r,i=!1,n){if(i){const s=this.get(t,n);s!==void 0&&setTimeout(()=>r(s))}return this.events.addListener(t,r)}}function ye(e,t){let r=null;async function i(n){var s,a;if(r!==null&&(((s=r.template)==null?void 0:s.onDestroy)!==void 0&&r.template.onDestroy(),r.onDestroy!==void 0&&r.onDestroy()),r=n,r.title!==void 0){const o=document.querySelector("head > title");o!==null&&(o.innerHTML=r.title)}if((r==null?void 0:r.href)!==void 0&&e){const o=await(await fetch(r.href)).text();e.innerHTML=o,r.scripts!==void 0&&r.scripts.forEach(c=>{const l=document.createElement("script");l.setAttribute("data-template",r.href),l.src=c.src,e.appendChild(l)})}if((r==null?void 0:r.onMount)!==void 0&&r.onMount(),r!=null&&r.template){let o=e;if(r.template.target!==void 0&&(o=document.querySelector(r.template.target)),r.template.selector&&o){const c=document.querySelector(r.template.selector);if(!c)throw`${r.template.selector} not found`;c instanceof HTMLTemplateElement?(o.innerHTML="",o.appendChild(c.content.cloneNode(!0))):o.innerHTML=c.innerHTML}((a=r.template)==null?void 0:a.onMount)!==void 0&&r.template.onMount()}}window.addEventListener("hashchange",()=>{const n=window.location.hash.replace("#","");let s="";for(const a of Object.keys(t))n.startsWith(a)&&a>s&&(s=a);if(!s){const a=t["/"];if(a===void 0){console.warn(`Window location “${n}” is missing in routes, and the fallback route “/“ is also missing.`);return}i(a);return}i(t[s])}),window.dispatchEvent(new Event("hashchange"))}function be(e,t){let r;if(e?r=`?${Object.entries(e).map(([i,n])=>`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&")}`:r="",!t&&!r){location.hash="";return}location.hash=`#${encodeURIComponent(t)}`+(r?`&${r}`:"")}function ve(){const e={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(t=>{t.split("&").forEach(r=>{const[i,n]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)})}),e}const we=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:ve,goTo:be,init:ye},Symbol.toStringTag,{value:"Module"})),Z=Object.freeze(Object.defineProperty({__proto__:null,hash:we},Symbol.toStringTag,{value:"Module"})),Se="modulepreload",ke=function(e){return"/shift-scheduler.github.io/"+e},X={},U=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(r.map(c=>{if(c=ke(c),c in X)return;X[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Se,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((u,p)=>{h.addEventListener("load",u),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};function Te(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:n,onRegisteredSW:s,onRegisterError:a}=e;let o,c,l;const d=async(u=!0)=>{await c,l==null||l()};async function h(){if("serviceWorker"in navigator){if(o=await U(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:u}},[]).then(({Workbox:u})=>new u("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(u=>{a==null||a(u)}),!o)return;l=()=>{o==null||o.messageSkipWaiting()};{let u=!1;const p=()=>{u=!0,o==null||o.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()}),r==null||r()};o.addEventListener("installed",m=>{typeof m.isUpdate>"u"?typeof m.isExternal<"u"&&m.isExternal?p():!u&&(i==null||i()):m.isUpdate||i==null||i()}),o.addEventListener("waiting",p)}o.register({immediate:t}).then(u=>{s?s("/shift-scheduler.github.io/sw.js",u):n==null||n(u)}).catch(u=>{a==null||a(u)})}}return c=h(),d}function Q(){return ee().innerText}function P(e){ee().innerText=e}function ee(){return document.querySelector(".ui-app-bar .center .title")}const xe="shift-scheduler:",f=(()=>{var i;const e=new ge(xe),t=new Date;e.set("datePicker",new Date(t.getFullYear(),t.getMonth(),1).getTime(),!1),e.set("weekStart",0,!0),e.set("shifts",[],!0),e.set("rhythm",[],!0),e.set("startDate",0,!0),e.set("editMode",{open:!1,active:0},!1);const r={version:"0.0.0",build:1};switch((i=e.get("version"))==null?void 0:i.build){case void 0:const n=e.get("startDate");n&&e.set("startDate",new Date(n).getTime());break}return e.set("version",r),e})();async function Ee(e,t,r){const i=[],n=f.get("weekStart");for(let s=0;s<e;s++){const a=new Date(t,r,s+1-De(t,r,n));i.push({year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),shift:te(a),note:""})}return i}function De(e,t,r){const n=new Date(e,t,1).getDay();return r===0?n:n===0?6:n-1}function te(e){const t=f.get("startDate"),r=f.get("shifts"),i=f.get("rhythm");if(!t||!i.length)return null;const n=new Date(t),s=Math.round((e.getTime()-n.getTime())/(1e3*60*60*24));return s<=0?r.find(a=>a.id===i[i.length+(s%i.length||-i.length)])||null:r.find(a=>a.id===i[s%i.length])||null}function Le(e){return typeof e.id!="number"||typeof e.name!="string"||typeof e.shortName!="string"||typeof e.color!="string"&&e.color?!1:(e.color==="transparent"&&(e.visible=!1,e.color=null),typeof e.visible!="boolean"&&(e.visible=!0),e.color||(e.color=null),!0)}const D=String.raw;class qe{constructor(t,r){v(this,"version");v(this,"name");v(this,"storeName","user");v(this,"request",null);this.name=t,this.version=r}open(t){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{t&&t()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(t,r){switch(t){case 0:case 1:return Me(r);default:return!1}}get(t,r,i){return new Promise(n=>{const s=this.roStore().get([t,r,i]);s.onsuccess=()=>n(s.result||null),s.onerror=()=>n(null)})}getAll(){return new Promise(t=>{const r=this.roStore().getAll();r.onsuccess=()=>t(r.result),r.onerror=i=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,i),t([])}})}add(t){return new Promise((r,i)=>{const n=this.rwStore().add(t);n.onsuccess=()=>r(),n.onerror=async s=>{console.warn(`[DB] Error while adding "${t.year}-${t.month}-${t.date}" to "${this.storeName}"!`,s),i(n.error)}})}put(t){return new Promise((r,i)=>{const n=this.rwStore().put(t);n.onsuccess=()=>r(),n.onerror=async s=>{console.warn(`[DB] Error while putting "${t.year}-${t.month}-${t.date}" to "${this.storeName}"!`,s),i(n.error)}})}delete(t,r,i){return new Promise((n,s)=>{const a=this.rwStore().delete([t,r,i]);a.onsuccess=()=>n(),a.onerror=()=>{s(a.error)}})}deleteAll(){return new Promise((t,r)=>{const i=this.rwStore().clear();i.onsuccess=()=>t(),i.onerror=()=>{r(i.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(t){if(!t.objectStoreNames.contains(this.storeName)){const r=t.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});r.createIndex("year","year",{unique:!1}),r.createIndex("month","month",{unique:!1}),r.createIndex("date","date",{unique:!1}),r.createIndex("note","note",{unique:!1}),r.createIndex("shift","shift",{unique:!1})}}onError(t){var r;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((r=this.request)==null?void 0:r.error)||null,event:t}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(t){var r;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((r=this.request)==null?void 0:r.error)||null,event:t}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(t){switch(t.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function Me(e){return!(typeof e.year!="number"||typeof e.month!="number"||typeof e.date!="number"||(typeof e.note!="string"&&(e.note=""),e.shift!==null&&!Le(e.shift)))}const S=new qe("shift-scheduler",1);function Ae(e){return new Promise(t=>{const r=document.querySelector('dialog[name="date-picker"]'),i=r.querySelector("form"),n=i.querySelector('input[type="month"]');i.querySelector("button.cancel").onclick=a=>{a.preventDefault(),r.close()};let s=null;r.onclose=()=>t(s),i.onsubmit=()=>{s={date:new Date(n.value).getTime()}};{switch(typeof e){case"string":e=new Date(e);break;case"number":e=new Date(e);break}const a=(e.getMonth()+1).toString().padStart(2,"0");n.value=`${e.getFullYear()}-${a}`}r.showModal()})}function Pe(e,t,r){return new Promise(i=>{const n=document.querySelector('dialog[name="day"]'),s=n.querySelector("form"),a=s.querySelector("select.shift-select"),o=s.querySelector("textarea.db-note");s.querySelector("button.cancel").onclick=l=>{l.preventDefault(),n.close()};let c=null;n.onclose=()=>{i(c)},s.onsubmit=()=>{c={shiftID:parseInt(a.value||"0",10),note:o.value.trim()}};{for(s.querySelector(".title").innerText=e.toDateString();a.children.length>1;)a.removeChild(a.lastChild);f.get("shifts").forEach(l=>{const d=document.createElement("option");d.value=l.id.toString(),d.innerText=l.name||l.shortName,a.appendChild(d),l.id===t&&(d.selected=!0)}),o.value=(r==null?void 0:r.note)||""}n.showModal()})}function $e(e,t){return new Promise(r=>{const i=document.querySelector('dialog[name="rhythm"]'),n=i.querySelector("form"),s=n.querySelector("tbody"),a=n.querySelector(".shifts-container"),o=i.querySelector('template[name="table-item"]'),c=document.querySelector('template[name="shift-card"]');n.querySelector("button.cancel").onclick=d=>{d.preventDefault(),i.close()};let l=[...e];i.onclose=()=>r(l),n.onsubmit=()=>{l=e};{const d=()=>{s.innerHTML="",e.forEach((u,p)=>{let m=t.find(O=>O.id===u);m||(m={id:u,name:"",shortName:"",color:"var(--destructive)",visible:!1});const y=o.content.cloneNode(!0).querySelector(".table-item");y.querySelector(".name").innerText=m.name;const w=y.querySelector(".short-name");w.style.color=m.color||"inherit",w.innerText=m.visible?m.shortName:"";const C=y.querySelector("button.delete");C.onclick=()=>{e.splice(p,1),d()},s.appendChild(y),y.scrollIntoView()})},h=()=>{a.innerHTML="",t.forEach(u=>{const p=c.content.cloneNode(!0).querySelector(".shift-card");a.appendChild(p);const m=p.querySelector(".name");m.innerText=u.name;const y=p.querySelector(".short-name");y.style.color=u.color||"inherit",y.innerText=u.visible?u.shortName:"",p.onclick=()=>{e.push(u.id),d()}})};d(),h()}i.showModal()})}function W(e){return new Promise(t=>{const r=document.querySelector('dialog[name="shift"]'),i=r.querySelector("form"),n=i.querySelector("input.name"),s=i.querySelector("input.short-name"),a=i.querySelector("input.color-picker"),o=i.querySelector("input.default-color"),c=i.querySelector("input.hidden");i.querySelector("button.cancel").onclick=d=>{d.preventDefault(),r.close()};let l=null;r.onclose=()=>t(l),i.onsubmit=d=>{const h={id:(e==null?void 0:e.id)||new Date().getTime(),name:n.value,shortName:s.value,visible:!c.checked,color:o.checked?null:a.value||null};if(!h.name){d.preventDefault(),n.ariaInvalid="";return}if(n.ariaInvalid=null,!h.shortName){d.preventDefault(),s.ariaInvalid="";return}s.ariaInvalid=null,l=h},n.value=(e==null?void 0:e.name)||"",s.value=(e==null?void 0:e.shortName)||"",a.value=(e==null?void 0:e.color)||"#66FF00",o.checked=!(e!=null&&e.color),c.checked=typeof(e==null?void 0:e.visible)!="boolean"?!1:!e.visible,o.onchange=()=>{a.disabled=o.checked,s.style.color=o.checked?"inherit":a.value||"inherit"},c.onchange=d=>{s.disabled=c.checked,a.disabled=c.checked,o.disabled=c.checked,o.onchange(d)},o.onchange(new Event("change")),c.onchange(new Event("change")),r.showModal()})}const Ce=75;class Oe extends G{constructor(r){super();v(this,"container");v(this,"finalTransform",!1);v(this,"startX",null);v(this,"clientX",null);v(this,"onMouseMove");v(this,"onTouchMove");v(this,"onMouseOrTouchEnd");v(this,"onTouchCancel");v(this,"animationFrameHandler");this.container=r}start(){this.onMouseMove=async r=>{this.finalTransform||r.buttons===1&&(this.startX===null&&(this.startX=r.clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=r.clientX)},this.onTouchMove=async r=>{this.finalTransform||(this.startX===null&&(this.startX=r.touches[0].clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=r.touches[0].clientX)},this.onMouseOrTouchEnd=async r=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const i=r.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(i.width+1):-i.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async r=>{this.startX!==null&&await this.onMouseOrTouchEnd(r)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>Ce*(window.innerWidth/1080)}moveX(r){const i=this.containerItems();i[0].style.left=`calc(-100% + ${r}px)`,i[1].style.left=`calc(0% + ${r}px)`,i[2].style.left=`calc(100% + ${r}px)`}setTransition(r){this.containerItems().forEach(n=>n.style.transition=r)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(r=>r.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const r=this.containerItems(),i=this.clientX>this.startX?"right":"left";switch(i){case"left":this.container.appendChild(this.container.removeChild(r[0]));break;case"right":this.container.insertBefore(this.container.removeChild(r[2]),r[0]);break}this.moveX(0),this.dispatch("swipe",i)}}const re=document.createElement("template");re.innerHTML=D`
    <div class="item-content ui-flex-grid" style="--gap: 0.05rem">
        <div class="week-days ui-flex-grid-row" class="week-days-row" gap="0.05rem">
            <div class="week-day ui-flex-grid-item"></div>
            <div class="week-day ui-flex-grid-item"></div>
            <div class="week-day ui-flex-grid-item"></div>
            <div class="week-day ui-flex-grid-item"></div>
            <div class="week-day ui-flex-grid-item"></div>
            <div class="week-day ui-flex-grid-item"></div>
            <div class="week-day ui-flex-grid-item"></div>
        </div>
    </div>
`;const Ie=[0,1,2,3,4,5,6],Be=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function je(e,t){const r=re.content.cloneNode(!0).querySelector(".item-content");for(let i=0;i<6;i++){const n=document.createElement("div");r.appendChild(n),n.className="days ui-flex-grid-item ui-flex-grid-row",n.style.setProperty("--gap","0.05rem");for(let s=0;s<7;s++)n.append(Ue(0))}return r.onclick=Ne,setTimeout(()=>{ne(r,e,t)}),r}async function ne(e,t,r){const i=new Date(t,r),n=Array.from(e.querySelectorAll(".item-content > .days > .day"));let s=await Ee(n.length,i.getFullYear(),i.getMonth());const a=f.get("shifts");s.forEach(async(o,c)=>{const l=await S.get(o.year,o.month,o.date);if(l!==null){o.note=l.note;const d=a.find(h=>{var u;return h.id===((u=l.shift)==null?void 0:u.id)});d?o.shift=d:o.shift=l.shift||o.shift}ie(n[c],o),r!==o.month?n[c].setAttribute("disabled",""):n[c].removeAttribute("disabled"),o.year!==i.getFullYear()||o.month!==i.getMonth()?n[c].classList.add("inactive"):n[c].classList.remove("inactive")}),He([...e.querySelectorAll(".item-content > .week-days > .week-day")],n)}async function Ne(e){const t=e.target.closest(".day");if(!t)return;const r=parseInt(t.getAttribute("data-year"),10),i=parseInt(t.getAttribute("data-month"),10),n=parseInt(t.getAttribute("data-date"),10),s=parseInt(t.getAttribute("data-shift-id")||"0",10),a=f.get("editMode");let o;if(!a.open)o=await Pe(new Date(r,i,n,6,0,0),s,await S.get(r,i,n));else{const d=await S.get(r,i,n);o={shiftID:a.active?a.active:0,note:(d==null?void 0:d.note)||""}}if(!o)return;const c=te(new Date(r,i,n)),l={year:r,month:i,date:n,shift:f.get("shifts").find(d=>d.id===o.shiftID)||null,note:o.note||""};l.shift&&c&&c.id===l.shift.id&&(l.shift=null),l.note||l.shift?(console.warn("Add data to the database",l),S.put(l).catch(()=>S.add(l).catch(d=>alert(`Update database failed: ${d}`)))):(console.warn("Remove data from the database",{year:r,month:i,day:n}),S.delete(r,i,n)),l.shift||(l.shift=c),ie(t,l)}function He(e,t){const r=f.get("weekStart");let i=Ie;r>0&&(i=[...i.slice(r),...i.slice(0,r)]);const n=i.findIndex(a=>a===6),s=i.findIndex(a=>a===0);e.forEach((a,o)=>{a.innerHTML=`${Be[i[o%7]]}`}),[...e,...t].forEach((a,o)=>{a.classList.remove("saturday"),a.classList.remove("sunday"),o%i.length===n&&a.classList.add("saturday"),o%i.length===s&&a.classList.add("sunday")})}function Ue(e,t){const r=document.createElement("div");return r.className="day ui-flex-grid-item",r.innerHTML=D`
        <div class="date">${e}</div>
        <div class="shift">${""}</div>
    `,r}function ie(e,t){((n,s,a)=>{const o=new Date;return o.getFullYear()===n&&o.getMonth()===s&&o.getDate()===a})(t.year,t.month,t.date)?e.classList.add("today"):e.classList.remove("today"),t.note?e.classList.add("note"):e.classList.remove("note"),e.querySelector(".date").innerHTML=`${t.date}`;const i=e.querySelector(".shift");t.shift?(i.style.setProperty("--shift-color",t.shift.visible?t.shift.color||"inherit":"transparent"),i.innerHTML=t.shift.shortName||""):(i.style.removeProperty("--shift-color"),i.innerHTML=""),e.setAttribute("data-year",t.year.toString()),e.setAttribute("data-month",t.month.toString()),e.setAttribute("data-date",t.date.toString()),t.shift&&e.setAttribute("data-shift-id",t.shift.id.toString())}async function Fe(e){const t=new Date(e);t.setMonth(t.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async r=>{ne(r.querySelector(".item-content"),t.getFullYear(),t.getMonth()),t.setMonth(t.getMonth()+1)})}async function _e(e){const r=document.querySelector("#routerTarget").querySelector(".item-container"),i=document.querySelector(".edit-mode");!r||!i||(i.innerHTML="",e.open?(r.setAttribute("edit-mode",""),i.setAttribute("open",""),Xe(i,e.active)):(r.removeAttribute("edit-mode"),i.removeAttribute("open")))}async function R(e){switch(e){case"left":f.update("datePicker",t=>{const r=new Date(t);return r.setMonth(r.getMonth()+1),r.getTime()});break;case"right":f.update("datePicker",t=>{const r=new Date(t);return r.setMonth(r.getMonth()-1),r.getTime()});break}}function Xe(e,t){const r=document.querySelector('template[name="shift-card"]');(f.get("shifts")||[]).forEach(i=>{const n=r.content.cloneNode(!0).querySelector(".shift-card");t===i.id?(n.setAttribute("active",""),n.scrollIntoView()):n.removeAttribute("active"),n.querySelector(".name").innerText=i.name;const s=n.querySelector(".short-name");s.style.color=i.color||"inherit",s.innerText=i.visible?i.shortName:"",n.onclick=()=>{n.hasAttribute("active")?n.removeAttribute("active"):n.setAttribute("active",""),f.update("editMode",a=>(a.active=n.hasAttribute("active")?i.id:0,a))},e.appendChild(n)})}const se=document.createElement("template");se.innerHTML=D`
    <style>
        html,
        body {
            overscroll-behavior: none !important;
        }

        #routerTarget .item-container {
            --week-days-height: 2.5rem;
            --edit-mode-height: 4.5rem;

            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            transition: height 0.25s ease;
        }

        #routerTarget .item-container[edit-mode] {
            height: calc(100% - var(--edit-mode-height));
        }

        #routerTarget .edit-mode {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: var(--edit-mode-height);
            transform: translateY(100%);
            transition: transform 0.25s ease;
        }

        #routerTarget .edit-mode[open] {
            transform: translateY(0);
        }

        #routerTarget .item {
            position: absolute;
            top: 0;
            bottom: 0;
            min-width: 100%;
        }

        #routerTarget .item-content {
            width: calc(100% - 0.25rem);
            height: calc(100% - 0.25rem);
        }

        #routerTarget .week-days {
            height: var(--week-days-height);
            padding: 1px 0;
        }

        #routerTarget .days {
            height: 100%;
            padding: 1px 0;
        }

        #routerTarget .week-day,
        #routerTarget .day {
            border-radius: var(--ui-radius);
            border: var(--ui-border-width) var(--ui-border-style) var(--ui-border-color);
        }

        #routerTarget .item-container[no-border] .week-days,
        #routerTarget .item-container[no-border] .days {
            border: none;
        }

        #routerTarget .week-day {
            width: calc(100% / 7);
            overflow: hidden;
            height: 100%;
            font-size: 115%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #routerTarget .saturday,
        #routerTarget .sunday {
            font-weight: bold;
        }

        #routerTarget .saturday,
        #routerTarget .sunday {
            background-color: var(--ui-muted);
            color: var(--ui-muted-text);
        }

        #routerTarget .day {
            height: 100%;
            overflow: hidden;
            cursor: pointer;
        }

        #routerTarget .day.today::after {
            content: "";
            position: absolute;
            z-index: 9;
            top: -1rem;
            left: -1rem;
            width: 2rem;
            height: 2rem;
            border-radius: var(--ui-radius);
            border-bottom-right-radius: 50%;
            background-color: orange;
            filter: blur(1rem);
            animation: fade-in 0.5s;
        }

        #routerTarget .day.note::before {
            content: "";
            position: absolute;
            z-index: 8;
            bottom: -1rem;
            right: -1rem;
            width: 2rem;
            height: 2rem;
            border-radius: var(--ui-radius);
            border-top-left-radius: 50%;
            background-color: red;
            filter: blur(1rem);
            animation: fade-in 0.5s;
        }

        #routerTarget .day .date {
            position: absolute;
            top: 0;
            left: 0;
            padding: 0.5vmin;
            font-size: 3vmin;
            font-size: clamp(0rem, 3vmin, 1rem);
            border-radius: inherit;
        }

        #routerTarget .day .shift {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 5vmin;
            font-weight: bold;
            color: var(--shift-color, var(--ui-text));
            border-radius: inherit;
        }

        @media (orientation: landscape) {
            #routerTarget .day .shift {
                left: 4vmin;
            }
        }

        @media (orientation: portrait) {
            #routerTarget .day .shift {
                top: 5vmin;
            }
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        #routerTarget .shift-card[active] {
            border-color: var(--ui-text);
        }
    </style>

    <div class="item-container ui-flex-grid-row ui-none-select">
        <div class="item item1" style="left: -100%"></div>

        <div class="item item2" style="left: 0"></div>

        <div class="item item3" style="left: 100%"></div>
    </div>

    <div
        class="edit-mode ui-flex-grid-row ui-auto-scroll-x ui-hide-scrollbar"
        style="--gap: 0.5rem"
    ></div>
`;let oe="",L=[];async function We(){oe=Q(),P("");const e=document.querySelector("#routerTarget");e.innerHTML="",e.appendChild(se.content.cloneNode(!0));const t=new Oe(document.querySelector(".item-container"));Ye(),Ve(),L.push(f.listen("datePicker",Fe,!0),f.listen("editMode",_e,!0)),setTimeout(()=>{t.start()}),t.addListener("swipe",R),L.push(()=>{t.removeListener("swipe",R),t.stop()})}async function Re(){P(oe),L.forEach(e=>e()),L=[]}function Ve(){const e=new Date;Array.from(document.querySelector(".item-container").children).forEach(t=>{t.innerHTML="",t.appendChild(je(e.getFullYear(),e.getMonth()))})}function Ye(){const e=document.querySelector(".ui-app-bar .left button.date-picker"),t=document.querySelector(".ui-app-bar .right button.today"),r=document.querySelector(".ui-app-bar .right button.edit"),i=document.querySelector(".ui-app-bar .right button.printer"),n=document.querySelector(".ui-app-bar .right button.settings");e.style.display="inline-flex",t.style.display="inline-flex",r.style.display="inline-flex",i.style.display="inline-flex",n.style.display="inline-flex",e.onclick=async()=>{const s=await Ae(f.get("datePicker"));s&&f.set("datePicker",s.date)},t.onclick=async()=>{f.set("datePicker",new Date().getTime())},r.onclick=async()=>{f.update("editMode",s=>(s.open=!s.open,s))},L.push(f.listen("datePicker",s=>{const a=new Date,o=new Date(s),c=o.getFullYear();c===a.getFullYear()&&o.getMonth()===a.getMonth()?t.setAttribute("disabled",""):t.removeAttribute("disabled");const l=(o.getMonth()+1).toString().padStart(2,"0");e.innerText=`${c} / ${l}`},!0)),L.push(()=>{e.style.display="none",t.style.display="none",r.style.display="none",i.style.display="none",n.style.display="none"})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var q;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(q||(q={}));class j extends Error{constructor(t,r,i){super(t),this.message=t,this.code=r,this.data=i}}const ze=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Je=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},i=r.Plugins=r.Plugins||{},n=()=>t!==null?t.name:ze(e),s=()=>n()!=="web",a=h=>{const u=l.get(h);return!!(u!=null&&u.platforms.has(n())||o(h))},o=h=>{var u;return(u=r.PluginHeaders)===null||u===void 0?void 0:u.find(p=>p.name===h)},c=h=>e.console.error(h),l=new Map,d=(h,u={})=>{const p=l.get(h);if(p)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),p.proxy;const m=n(),y=o(h);let w;const C=async()=>(!w&&m in u?w=typeof u[m]=="function"?w=await u[m]():w=u[m]:t!==null&&!w&&"web"in u&&(w=typeof u.web=="function"?w=await u.web():w=u.web),w),O=(g,b)=>{var T,x;if(y){const E=y==null?void 0:y.methods.find(k=>b===k.name);if(E)return E.rtype==="promise"?k=>r.nativePromise(h,b.toString(),k):(k,M)=>r.nativeCallback(h,b.toString(),k,M);if(g)return(T=g[b])===null||T===void 0?void 0:T.bind(g)}else{if(g)return(x=g[b])===null||x===void 0?void 0:x.bind(g);throw new j(`"${h}" plugin is not implemented on ${m}`,q.Unimplemented)}},I=g=>{let b;const T=(...x)=>{const E=C().then(k=>{const M=O(k,g);if(M){const A=M(...x);return b=A==null?void 0:A.remove,A}else throw new j(`"${h}.${g}()" is not implemented on ${m}`,q.Unimplemented)});return g==="addListener"&&(E.remove=async()=>b()),E};return T.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(T,"name",{value:g,writable:!1,configurable:!1}),T},F=I("addListener"),_=I("removeListener"),fe=(g,b)=>{const T=F({eventName:g},b),x=async()=>{const k=await T;_({eventName:g,callbackId:k},b)},E=new Promise(k=>T.then(()=>k({remove:x})));return E.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await x()},E},B=new Proxy({},{get(g,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return y?fe:F;case"removeListener":return _;default:return I(b)}}});return i[h]=B,l.set(h,{name:h,proxy:B,platforms:new Set([...Object.keys(u),...y?[m]:[]])}),B};return r.convertFileSrc||(r.convertFileSrc=h=>h),r.getPlatform=n,r.handleError=c,r.isNativePlatform=s,r.isPluginAvailable=a,r.registerPlugin=d,r.Exception=j,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Ke=e=>e.Capacitor=Je(e),N=Ke(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),$=N.registerPlugin;class ae{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let i=!1;this.listeners[t]||(this.listeners[t]=[],i=!0),this.listeners[t].push(r);const s=this.windowListeners[t];s&&!s.registered&&this.addWindowListener(s),i&&this.sendRetainedArgumentsForEvent(t);const a=async()=>this.removeListener(t,r);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,i){const n=this.listeners[t];if(!n){if(i){let s=this.retainedEventArguments[t];s||(s=[]),s.push(r),this.retainedEventArguments[t]=s}return}n.forEach(s=>s(r))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:i=>{this.notifyListeners(r,i)}}}unimplemented(t="not implemented"){return new N.Exception(t,q.Unimplemented)}unavailable(t="not available"){return new N.Exception(t,q.Unavailable)}async removeListener(t,r){const i=this.listeners[t];if(!i)return;const n=i.indexOf(r);this.listeners[t].splice(n,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(i=>{this.notifyListeners(t,i)}))}}const V=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Y=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Ge extends ae{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(i=>{if(i.length<=0)return;let[n,s]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=Y(n).trim(),s=Y(s).trim(),r[n]=s}),r}async setCookie(t){try{const r=V(t.key),i=V(t.value),n=`; expires=${(t.expires||"").replace("expires=","")}`,s=(t.path||"/").replace("path=",""),a=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${i||""}${n}; path=${s}; ${a};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}$("CapacitorCookies",{web:()=>new Ge});const Ze=async e=>new Promise((t,r)=>{const i=new FileReader;i.onload=()=>{const n=i.result;t(n.indexOf(",")>=0?n.split(",")[1]:n)},i.onerror=n=>r(n),i.readAsDataURL(e)}),Qe=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(n=>n.toLocaleLowerCase()).reduce((n,s,a)=>(n[s]=e[t[a]],n),{})},et=(e,t=!0)=>e?Object.entries(e).reduce((i,n)=>{const[s,a]=n;let o,c;return Array.isArray(a)?(c="",a.forEach(l=>{o=t?encodeURIComponent(l):l,c+=`${s}=${o}&`}),c.slice(0,-1)):(o=t?encodeURIComponent(a):a,c=`${s}=${o}`),`${i}&${c}`},"").substr(1):null,tt=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),n=Qe(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(n.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,o]of Object.entries(e.data||{}))s.set(a,o);r.body=s.toString()}else if(n.includes("multipart/form-data")||e.data instanceof FormData){const s=new FormData;if(e.data instanceof FormData)e.data.forEach((o,c)=>{s.append(c,o)});else for(const o of Object.keys(e.data))s.append(o,e.data[o]);r.body=s;const a=new Headers(r.headers);a.delete("content-type"),r.headers=a}else(n.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class rt extends ae{async request(t){const r=tt(t,t.webFetchExtra),i=et(t.params,t.shouldEncodeUrlParams),n=i?`${t.url}?${i}`:t.url,s=await fetch(n,r),a=s.headers.get("content-type")||"";let{responseType:o="text"}=s.ok?t:{};a.includes("application/json")&&(o="json");let c,l;switch(o){case"arraybuffer":case"blob":l=await s.blob(),c=await Ze(l);break;case"json":c=await s.json();break;case"document":case"text":default:c=await s.text()}const d={};return s.headers.forEach((h,u)=>{d[u]=h}),{data:c,headers:d,status:s.status,url:s.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}$("CapacitorHttp",{web:()=>new rt});var z;(function(e){e.Documents="DOCUMENTS",e.Data="DATA",e.Library="LIBRARY",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE"})(z||(z={}));var J;(function(e){e.UTF8="utf8",e.ASCII="ascii",e.UTF16="utf16"})(J||(J={}));$("Filesystem",{web:()=>U(()=>import("./web-PjJ1pNYT.js"),[]).then(e=>new e.FilesystemWeb)});$("Share",{web:()=>U(()=>import("./web-Dj5IXq4z.js"),[]).then(e=>new e.ShareWeb)});const ce="3.0.0",le=13;function nt(e){var r,i,n;const t=s=>s?!(typeof s.id!="number"||typeof s.name!="string"||typeof s.shortName!="string"||typeof s.visible!="boolean"||s.color&&typeof s.color!="string"):!1;if((e==null?void 0:e.constructor)!==Object||((r=e.settings)==null?void 0:r.constructor)!==Object||((i=e.storage)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(s=>typeof s!="number")||e.settings.shifts.find(s=>!t(s)))return!1;for(const s in e.storage){if(typeof s!="string"||((n=e.storage[s])==null?void 0:n.constructor)!==Object)return!1;for(const a in e.storage[s]){if(typeof a!="string")return!1;const o=e.storage[s][a];if((o==null?void 0:o.constructor)!==Object||!t(o.shift)&&o.shift!==null||typeof o.note!="string")return!1}}return!0}function it(e){var r,i;const t=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||((r=e.settings)==null?void 0:r.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(n=>typeof n!="number")||e.settings.shifts.find(n=>!t(n))||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var s;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((s=n.shift)==null?void 0:s.constructor)!==Object||typeof n.note!="string"||!t(n.shift)&&n.shift!==null}))}function st(e){var r,i;const t=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||typeof e.weekStart!="number"||((r=e.version)==null?void 0:r.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.shifts)||!Array.isArray(e.rhythm)||typeof e.startDate!="number"||e.rhythm.find(n=>typeof n!="number")||e.shifts.find(n=>!t(n))||typeof e.version.version!="string"||typeof e.version.build!="number"||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var s;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((s=n.shift)==null?void 0:s.constructor)!==Object||typeof n.note!="string"||!t(n.shift)&&n.shift!==null}))}function ot(e){return{weekStart:0,version:{version:ce,build:le},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:{version:e.indexedDB.version,data:e.indexedDB.data.map(t=>({year:t.year,month:t.month,date:t.date,shift:t.shift||null,note:t.note}))}}}function at(e){return{weekStart:0,version:{version:ce,build:le},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:ct(e)}}function ct(e){const t={version:1,data:[]},r=i=>{for(const[n,s]of Object.entries(i)){const[a,o,c]=n.split("-",3).map(l=>parseInt(l,10));isNaN(a)||isNaN(o)||isNaN(c)||o<0||o>11||!("shift"in s)||!("note"in s)||t.data.push({year:a,month:o,date:c,shift:s.shift,note:s.note})}};return Object.values(e.storage).forEach(i=>r(i)),t}const lt=D`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function ut(e){const t=document.createElement("article");t.className="backup",t.innerHTML=lt;const r=t.querySelector("section.json button.import"),i=t.querySelector("section.json button.export");return r.onclick=async()=>{const n=document.createElement("input");n.type="file",n.accept="application/json",n.onchange=async()=>{if(!n.files||n.files.length===0)return;const s=new FileReader;s.onload=async()=>await dt(s.result,e),s.onerror=()=>{alert(`Import data: read file failed: ${s.error}`)},s.readAsText(n.files[0])},n.click()},i.onclick=async()=>{const n={weekStart:f.get("weekStart"),shifts:f.get("shifts"),rhythm:f.get("rhythm"),startDate:f.get("startDate"),version:f.get("version"),indexedDB:{version:S.version,data:await S.getAll()}},s=new Date,a=(s.getMonth()+1).toString().padStart(2,"0"),o=s.getDate().toString().padStart(2,"0"),c=`shift-scheduler-backup_${s.getFullYear()}-${a}-${o}.json`;{const l=new Blob([JSON.stringify(n)],{type:"plain/text"});try{await navigator.share({title:"Shift Scheduler Backup",files:[new File([l],c,{type:"plain/text"})]})}catch{const d=document.createElement("a");d.setAttribute("href",window.URL.createObjectURL(l)),d.setAttribute("download",c),d.click()}}},t}async function dt(e,t){if(typeof e!="string")return alert("Invalid data!");let r;try{r=JSON.parse(e)}catch{return alert("Invalid JSON data!")}let i;if(st(r))i=r;else if(it(r))i=ot(r);else if(nt(r))i=at(r);else return alert("Invalid JSON data!");f.set("shifts",i.shifts),f.set("rhythm",i.rhythm),f.set("startDate",i.startDate),f.set("weekStart",i.weekStart),await S.deleteAll();for(const n of i.indexedDB.data||[])S.add(n).catch(()=>S.put(n));setTimeout(t)}const ht=D`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button disabled>Browse</button>
        </label>
    </section>
`;function ft(){const e=document.createElement("article");return e.className="db-browser",e.innerHTML=ht,e}const mt=D`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function pt(){const e=document.createElement("article");e.className="misc",e.innerHTML=mt;const t=e.querySelector('section.week-start input[type="checkbox"]');return t.checked=f.get("weekStart")===1,t.onchange=()=>{f.set("weekStart",t.checked?1:0)},e}const gt=D`
    <h4>Shift Settings</h4>

    <section class="shifts-table ui-flex-grid">
        <table class="ui-flex-grid-item">
            <thead>
                <tr>
                    <th style="text-align: left;">Name</th>
                    <th style="text-align: left;">Short</th>
                    <th style="text-align: right;"></th>
                </tr>
            </thead>

            <tbody></tbody>
        </table>

        <div
            class="ui-flex-grid-item ui-flex justify-end"
            style="padding: var(--ui-spacing); width: 100%;"
        >
            <button class="add-shift">Add a new shift</button>
        </div>

        <template name="table-item">
            <tr class="item">
                <td class="name" style="text-align: left;"></td>

                <td class="short-name" style="text-align: left; color: inherit"></td>

                <td class="actions" style="text-align: right;">
                    <div class="ui-flex-grid-row" style="--justify: flex-end;">
                        <div class="ui-flex-grid-item" style="--flex: 0;">
                            <button class="edit" variant="ghost" icon>
                                <i class="bi bi-pen"></i>
                            </button>
                        </div>

                        <div class="ui-flex-grid-item" style="--flex: 0;">
                            <button class="delete" variant="ghost" color="destructive" icon>
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </template>
    </section>

    <section class="start-date">
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing);">
            Start Date
            <input type="date" />
        </label>
    </section>

    <section class="edit-rhythm">
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Rhythm
            <button>Edit</button>
        </label>
    </section>
`;function yt(){const e=document.createElement("article");e.className="shifts",e.innerHTML=gt;const t=()=>{const s=e.querySelector("section.shifts-table tbody"),a=e.querySelector('section.shifts-table template[name="table-item"]');s.innerHTML="",f.get("shifts").forEach(o=>{const c=a.content.cloneNode(!0).querySelector("tr.item");s.appendChild(c),c.querySelector(".name").innerText=o.name;const l=c.querySelector(".short-name");l.style.color=o.color||"inherit",l.innerText=o.visible?o.shortName:"";const d=c.querySelector("button.edit");d.onclick=async()=>{await W(o)&&(f.update("shifts",p=>p.map(m=>m.id===o.id?o:m)),t())};const h=c.querySelector("button.delete");h.onclick=async()=>{confirm(`Delete shift "${o.name}"?`)&&f.update("shifts",u=>u.filter(p=>p.id!==o.id)),t()}}),e.querySelector("section.shifts-table button.add-shift").onclick=async()=>{const o=await W(null);o&&(f.update("shifts",c=>(c.push(o),c)),t())}};t();const r=e.querySelector('section.start-date input[type="date"]');if(f.get("startDate")){const s=new Date,a=(s.getMonth()+1).toString().padStart(2,"0"),o=s.getDate().toString().padStart(2,"0");r.value=`${s.getFullYear()}-${a}-${o}`,r.onchange=()=>{f.set("startDate",new Date(r.value).getTime())}}const n=e.querySelector("section.edit-rhythm button");return n.onclick=async()=>{f.set("rhythm",await $e(f.get("rhythm"),f.get("shifts")))},e}let ue="",K=null,H=[];async function de(){ue=Q(),P("Settings");const e=document.querySelector("#routerTarget");e.innerHTML="",bt(),e.appendChild(pt()),e.appendChild(document.createElement("br")),e.appendChild(yt()),e.appendChild(document.createElement("br")),e.appendChild(ut(vt)),e.appendChild(document.createElement("br")),e.appendChild(ft())}async function he(){P(ue),H.forEach(e=>e()),H=[]}function bt(){const e=document.querySelector(".ui-app-bar .left .back");e.style.display="inline-flex",K=e.onclick,e.onclick=()=>Z.hash.goTo(null,""),H.push(()=>{e.style.display="none",e.onclick=K})}async function vt(){await he(),await de()}console.debug({PWA:!0,MODE:"github"});{console.debug("PWA updater registered");const e=Te({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await e()}})}S.open(()=>{Z.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){We()},onDestroy(){Re()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){de()},onDestroy(){he()}}}})});export{J as E,ae as W,tt as b};
