var he=Object.defineProperty;var fe=(t,e,r)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var v=(t,e,r)=>fe(t,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();class z{constructor(){this.listeners={}}addListener(e,r){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(i=>i!==r))}dispatch(e,r){this.listeners[e]&&this.listeners[e].forEach(i=>i(r))}}class me{constructor(e){this.prefix="",this.events=new z,this.data={},this.prefix=e}delete(e,r){r!=null&&r.skipStore||localStorage.removeItem(`${this.prefix}${e}`),delete this.data[e]}get(e,r){if(!(r!=null&&r.skipStore)){const i=localStorage.getItem(`${this.prefix}${e}`);if(i!==null)return JSON.parse(i)}if(this.data.hasOwnProperty(e))return this.data[e]}set(e,r,i=!1,n){if(i){let s=null;n!=null&&n.skipStore?s=null:s=localStorage.getItem(`${this.prefix}${e}`),s!==null?this.data[e]=JSON.parse(s):this.data.hasOwnProperty(e)||(this.data[e]=r)}else this.data[e]=r;n!=null&&n.skipStore||localStorage.setItem(`${this.prefix}${e}`,JSON.stringify(this.data[e])),this.events.dispatch(e,this.data[e])}update(e,r,i){const n=this.get(e,i);if(n===void 0)throw new Error(`"${e}" not found, use \`set\``);this.set(e,r(n),!1,i)}listen(e,r,i=!1,n){if(i){const s=this.get(e,n);s!==void 0&&setTimeout(()=>r(s))}return this.events.addListener(e,r)}}function pe(t,e){let r=null;async function i(n){var s,a;if(r!==null&&(((s=r.template)==null?void 0:s.onDestroy)!==void 0&&r.template.onDestroy(),r.onDestroy!==void 0&&r.onDestroy()),r=n,r.title!==void 0){const o=document.querySelector("head > title");o!==null&&(o.innerHTML=r.title)}if((r==null?void 0:r.href)!==void 0&&t){const o=await(await fetch(r.href)).text();t.innerHTML=o,r.scripts!==void 0&&r.scripts.forEach(c=>{const l=document.createElement("script");l.setAttribute("data-template",r.href),l.src=c.src,t.appendChild(l)})}if((r==null?void 0:r.onMount)!==void 0&&r.onMount(),r!=null&&r.template){let o=t;if(r.template.target!==void 0&&(o=document.querySelector(r.template.target)),r.template.selector&&o){const c=document.querySelector(r.template.selector);if(!c)throw`${r.template.selector} not found`;c instanceof HTMLTemplateElement?(o.innerHTML="",o.appendChild(c.content.cloneNode(!0))):o.innerHTML=c.innerHTML}((a=r.template)==null?void 0:a.onMount)!==void 0&&r.template.onMount()}}window.addEventListener("hashchange",()=>{const n=window.location.hash.replace("#","");let s="";for(const a of Object.keys(e))n.startsWith(a)&&a>s&&(s=a);if(!s){const a=e["/"];if(a===void 0){console.warn(`Window location “${n}” is missing in routes, and the fallback route “/“ is also missing.`);return}i(a);return}i(e[s])}),window.dispatchEvent(new Event("hashchange"))}function ge(t,e){let r;if(t?r=`?${Object.entries(t).map(([i,n])=>`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&")}`:r="",!e&&!r){location.hash="";return}location.hash=`#${encodeURIComponent(e)}`+(r?`&${r}`:"")}function ye(){const t={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(e=>{e.split("&").forEach(r=>{const[i,n]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)})}),t}const be=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:ye,goTo:ge,init:pe},Symbol.toStringTag,{value:"Module"})),J=Object.freeze(Object.defineProperty({__proto__:null,hash:be},Symbol.toStringTag,{value:"Module"})),ve="modulepreload",we=function(t){return"/shift-scheduler.github.io/"+t},X={},K=function(e,r,i){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(r.map(c=>{if(c=we(c),c in X)return;X[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":ve,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((u,p)=>{h.addEventListener("load",u),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function Se(t={}){const{immediate:e=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:n,onRegisteredSW:s,onRegisterError:a}=t;let o,c,l;const d=async(u=!0)=>{await c,l==null||l()};async function h(){if("serviceWorker"in navigator){if(o=await K(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:u}},[]).then(({Workbox:u})=>new u("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(u=>{a==null||a(u)}),!o)return;l=()=>{o==null||o.messageSkipWaiting()};{let u=!1;const p=()=>{u=!0,o==null||o.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()}),r==null||r()};o.addEventListener("installed",m=>{typeof m.isUpdate>"u"?typeof m.isExternal<"u"&&m.isExternal?p():!u&&(i==null||i()):m.isUpdate||i==null||i()}),o.addEventListener("waiting",p)}o.register({immediate:e}).then(u=>{s?s("/shift-scheduler.github.io/sw.js",u):n==null||n(u)}).catch(u=>{a==null||a(u)})}}return c=h(),d}function G(){return Z().innerText}function P(t){Z().innerText=t}function Z(){return document.querySelector(".ui-app-bar .center .title")}const ke="shift-scheduler:",f=(()=>{var i;const t=new me(ke),e=new Date;t.set("datePicker",new Date(e.getFullYear(),e.getMonth(),1).getTime(),!1),t.set("weekStart",0,!0),t.set("shifts",[],!0),t.set("rhythm",[],!0),t.set("startDate",0,!0),t.set("editMode",{open:!1,active:0},!1);const r={version:"0.0.0",build:1};switch((i=t.get("version"))==null?void 0:i.build){case void 0:const n=t.get("startDate");n&&t.set("startDate",new Date(n).getTime());break}return t.set("version",r),t})();async function Te(t,e,r){const i=[],n=f.get("weekStart");for(let s=0;s<t;s++){const a=new Date(e,r,s+1-xe(e,r,n));i.push({year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),shift:Q(a),note:""})}return i}function xe(t,e,r){const n=new Date(t,e,1).getDay();return r===0?n:n===0?6:n-1}function Q(t){const e=f.get("startDate"),r=f.get("shifts"),i=f.get("rhythm");if(!e||!i.length)return null;const n=new Date(e),s=Math.round((t.getTime()-n.getTime())/(1e3*60*60*24));return s<=0?r.find(a=>a.id===i[i.length+(s%i.length||-i.length)])||null:r.find(a=>a.id===i[s%i.length])||null}function Ee(t){return typeof t.id!="number"||typeof t.name!="string"||typeof t.shortName!="string"||typeof t.color!="string"&&t.color?!1:(t.color==="transparent"&&(t.visible=!1,t.color=null),typeof t.visible!="boolean"&&(t.visible=!0),t.color||(t.color=null),!0)}const D=String.raw;class De{constructor(e,r){v(this,"version");v(this,"name");v(this,"storeName","user");v(this,"request",null);this.name=e,this.version=r}open(e){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{e&&e()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(e,r){switch(e){case 0:case 1:return Le(r);default:return!1}}get(e,r,i){return new Promise(n=>{const s=this.roStore().get([e,r,i]);s.onsuccess=()=>n(s.result||null),s.onerror=()=>n(null)})}getAll(){return new Promise(e=>{const r=this.roStore().getAll();r.onsuccess=()=>e(r.result),r.onerror=i=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,i),e([])}})}add(e){return new Promise((r,i)=>{const n=this.rwStore().add(e);n.onsuccess=()=>r(),n.onerror=async s=>{console.warn(`[DB] Error while adding "${e.year}-${e.month}-${e.date}" to "${this.storeName}"!`,s),i(n.error)}})}put(e){return new Promise((r,i)=>{const n=this.rwStore().put(e);n.onsuccess=()=>r(),n.onerror=async s=>{console.warn(`[DB] Error while putting "${e.year}-${e.month}-${e.date}" to "${this.storeName}"!`,s),i(n.error)}})}delete(e,r,i){return new Promise((n,s)=>{const a=this.rwStore().delete([e,r,i]);a.onsuccess=()=>n(),a.onerror=()=>{s(a.error)}})}deleteAll(){return new Promise((e,r)=>{const i=this.rwStore().clear();i.onsuccess=()=>e(),i.onerror=()=>{r(i.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(e){if(!e.objectStoreNames.contains(this.storeName)){const r=e.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});r.createIndex("year","year",{unique:!1}),r.createIndex("month","month",{unique:!1}),r.createIndex("date","date",{unique:!1}),r.createIndex("note","note",{unique:!1}),r.createIndex("shift","shift",{unique:!1})}}onError(e){var r;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((r=this.request)==null?void 0:r.error)||null,event:e}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(e){var r;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((r=this.request)==null?void 0:r.error)||null,event:e}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(e){switch(e.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function Le(t){return!(typeof t.year!="number"||typeof t.month!="number"||typeof t.date!="number"||(typeof t.note!="string"&&(t.note=""),t.shift!==null&&!Ee(t.shift)))}const S=new De("shift-scheduler",1);function qe(t){return new Promise(e=>{const r=document.querySelector('dialog[name="date-picker"]'),i=r.querySelector("form"),n=i.querySelector('input[type="month"]');i.querySelector("button.cancel").onclick=a=>{a.preventDefault(),r.close()};let s=null;r.onclose=()=>e(s),i.onsubmit=()=>{s={date:new Date(n.value).getTime()}};{switch(typeof t){case"string":t=new Date(t);break;case"number":t=new Date(t);break}const a=(t.getMonth()+1).toString().padStart(2,"0");n.value=`${t.getFullYear()}-${a}`}r.showModal()})}function Me(t,e,r){return new Promise(i=>{const n=document.querySelector('dialog[name="day"]'),s=n.querySelector("form"),a=s.querySelector("select.shift-select"),o=s.querySelector("textarea.db-note");s.querySelector("button.cancel").onclick=l=>{l.preventDefault(),n.close()};let c=null;n.onclose=()=>{i(c)},s.onsubmit=()=>{c={shiftID:parseInt(a.value||"0",10),note:o.value.trim()}};{for(s.querySelector(".title").innerText=t.toDateString();a.children.length>1;)a.removeChild(a.lastChild);f.get("shifts").forEach(l=>{const d=document.createElement("option");d.value=l.id.toString(),d.innerText=l.name||l.shortName,a.appendChild(d),l.id===e&&(d.selected=!0)}),o.value=(r==null?void 0:r.note)||""}n.showModal()})}function $e(t,e){return new Promise(r=>{const i=document.querySelector('dialog[name="rhythm"]'),n=i.querySelector("form"),s=n.querySelector("tbody"),a=n.querySelector(".shifts-container"),o=i.querySelector('template[name="table-item"]'),c=document.querySelector('template[name="shift-card"]');n.querySelector("button.cancel").onclick=d=>{d.preventDefault(),i.close()};let l=[...t];i.onclose=()=>r(l),n.onsubmit=()=>{l=t};{const d=()=>{s.innerHTML="",t.forEach((u,p)=>{let m=e.find(C=>C.id===u);m||(m={id:u,name:"",shortName:"",color:"var(--destructive)",visible:!1});const y=o.content.cloneNode(!0).querySelector(".table-item");y.querySelector(".name").innerText=m.name;const w=y.querySelector(".short-name");w.style.color=m.color||"inherit",w.innerText=m.visible?m.shortName:"";const A=y.querySelector("button.delete");A.onclick=()=>{t.splice(p,1),d()},s.appendChild(y),y.scrollIntoView()})},h=()=>{a.innerHTML="",e.forEach(u=>{const p=c.content.cloneNode(!0).querySelector(".shift-card");a.appendChild(p);const m=p.querySelector(".name");m.innerText=u.name;const y=p.querySelector(".short-name");y.style.color=u.color||"inherit",y.innerText=u.visible?u.shortName:"",p.onclick=()=>{t.push(u.id),d()}})};d(),h()}i.showModal()})}function _(t){return new Promise(e=>{const r=document.querySelector('dialog[name="shift"]'),i=r.querySelector("form"),n=i.querySelector("input.name"),s=i.querySelector("input.short-name"),a=i.querySelector("input.color-picker"),o=i.querySelector("input.default-color"),c=i.querySelector("input.hidden");i.querySelector("button.cancel").onclick=d=>{d.preventDefault(),r.close()};let l=null;r.onclose=()=>e(l),i.onsubmit=d=>{const h={id:(t==null?void 0:t.id)||new Date().getTime(),name:n.value,shortName:s.value,visible:!c.checked,color:o.checked?null:a.value||null};if(!h.name){d.preventDefault(),n.ariaInvalid="";return}if(n.ariaInvalid=null,!h.shortName){d.preventDefault(),s.ariaInvalid="";return}s.ariaInvalid=null,l=h},n.value=(t==null?void 0:t.name)||"",s.value=(t==null?void 0:t.shortName)||"",a.value=(t==null?void 0:t.color)||"#66FF00",o.checked=!(t!=null&&t.color),c.checked=typeof(t==null?void 0:t.visible)!="boolean"?!1:!t.visible,o.onchange=()=>{a.disabled=o.checked,s.style.color=o.checked?"inherit":a.value||"inherit"},c.onchange=d=>{s.disabled=c.checked,a.disabled=c.checked,o.disabled=c.checked,o.onchange(d)},o.onchange(new Event("change")),c.onchange(new Event("change")),r.showModal()})}const Pe=75;class Ae extends z{constructor(r){super();v(this,"container");v(this,"finalTransform",!1);v(this,"startX",null);v(this,"clientX",null);v(this,"onMouseMove");v(this,"onTouchMove");v(this,"onMouseOrTouchEnd");v(this,"onTouchCancel");v(this,"animationFrameHandler");this.container=r}start(){this.onMouseMove=async r=>{this.finalTransform||r.buttons===1&&(this.startX===null&&(this.startX=r.clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=r.clientX)},this.onTouchMove=async r=>{this.finalTransform||(this.startX===null&&(this.startX=r.touches[0].clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=r.touches[0].clientX)},this.onMouseOrTouchEnd=async r=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const i=r.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(i.width+1):-i.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async r=>{this.startX!==null&&await this.onMouseOrTouchEnd(r)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>Pe*(window.innerWidth/1080)}moveX(r){const i=this.containerItems();i[0].style.left=`calc(-100% + ${r}px)`,i[1].style.left=`calc(0% + ${r}px)`,i[2].style.left=`calc(100% + ${r}px)`}setTransition(r){this.containerItems().forEach(n=>n.style.transition=r)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(r=>r.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const r=this.containerItems(),i=this.clientX>this.startX?"right":"left";switch(i){case"left":this.container.appendChild(this.container.removeChild(r[0]));break;case"right":this.container.insertBefore(this.container.removeChild(r[2]),r[0]);break}this.moveX(0),this.dispatch("swipe",i)}}const ee=document.createElement("template");ee.innerHTML=D`
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
`;const Ce=[0,1,2,3,4,5,6],Oe=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function je(t,e){const r=ee.content.cloneNode(!0).querySelector(".item-content");for(let i=0;i<6;i++){const n=document.createElement("div");r.appendChild(n),n.className="days ui-flex-grid-item ui-flex-grid-row",n.style.setProperty("--gap","0.05rem");for(let s=0;s<7;s++)n.append(He(0))}return r.onclick=Be,setTimeout(()=>{te(r,t,e)}),r}async function te(t,e,r){const i=new Date(e,r),n=Array.from(t.querySelectorAll(".item-content > .days > .day"));let s=await Te(n.length,i.getFullYear(),i.getMonth());const a=f.get("shifts");s.forEach(async(o,c)=>{const l=await S.get(o.year,o.month,o.date);if(l!==null){o.note=l.note;const d=a.find(h=>{var u;return h.id===((u=l.shift)==null?void 0:u.id)});d?o.shift=d:o.shift=l.shift||o.shift}re(n[c],o),r!==o.month?n[c].setAttribute("disabled",""):n[c].removeAttribute("disabled"),o.year!==i.getFullYear()||o.month!==i.getMonth()?n[c].classList.add("inactive"):n[c].classList.remove("inactive")}),Ie([...t.querySelectorAll(".item-content > .week-days > .week-day")],n)}async function Be(t){const e=t.target.closest(".day");if(!e)return;const r=parseInt(e.getAttribute("data-year"),10),i=parseInt(e.getAttribute("data-month"),10),n=parseInt(e.getAttribute("data-date"),10),s=parseInt(e.getAttribute("data-shift-id")||"0",10),a=f.get("editMode");let o;if(!a.open)o=await Me(new Date(r,i,n,6,0,0),s,await S.get(r,i,n));else{const d=await S.get(r,i,n);o={shiftID:a.active?a.active:0,note:(d==null?void 0:d.note)||""}}if(!o)return;const c=Q(new Date(r,i,n)),l={year:r,month:i,date:n,shift:f.get("shifts").find(d=>d.id===o.shiftID)||null,note:o.note||""};l.shift&&c&&c.id===l.shift.id&&(l.shift=null),l.note||l.shift?(console.warn("Add data to the database",l),S.put(l).catch(()=>S.add(l).catch(d=>alert(`Update database failed: ${d}`)))):(console.warn("Remove data from the database",{year:r,month:i,day:n}),S.delete(r,i,n)),l.shift||(l.shift=c),re(e,l)}function Ie(t,e){const r=f.get("weekStart");let i=Ce;r>0&&(i=[...i.slice(r),...i.slice(0,r)]);const n=i.findIndex(a=>a===6),s=i.findIndex(a=>a===0);t.forEach((a,o)=>{a.innerHTML=`${Oe[i[o%7]]}`}),[...t,...e].forEach((a,o)=>{a.classList.remove("saturday"),a.classList.remove("sunday"),o%i.length===n&&a.classList.add("saturday"),o%i.length===s&&a.classList.add("sunday")})}function He(t,e){const r=document.createElement("div");return r.className="day ui-flex-grid-item",r.innerHTML=D`
        <div class="date">${t}</div>
        <div class="shift">${""}</div>
    `,r}function re(t,e){((n,s,a)=>{const o=new Date;return o.getFullYear()===n&&o.getMonth()===s&&o.getDate()===a})(e.year,e.month,e.date)?t.classList.add("today"):t.classList.remove("today"),e.note?t.classList.add("note"):t.classList.remove("note"),t.querySelector(".date").innerHTML=`${e.date}`;const i=t.querySelector(".shift");e.shift?(i.style.setProperty("--shift-color",e.shift.visible?e.shift.color||"inherit":"transparent"),i.innerHTML=e.shift.shortName||""):(i.style.removeProperty("--shift-color"),i.innerHTML=""),t.setAttribute("data-year",e.year.toString()),t.setAttribute("data-month",e.month.toString()),t.setAttribute("data-date",e.date.toString()),e.shift&&t.setAttribute("data-shift-id",e.shift.id.toString())}async function Ne(t){const e=new Date(t);e.setMonth(e.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async r=>{te(r.querySelector(".item-content"),e.getFullYear(),e.getMonth()),e.setMonth(e.getMonth()+1)})}async function Ue(t){const r=document.querySelector("#routerTarget").querySelector(".item-container"),i=document.querySelector(".edit-mode");!r||!i||(i.innerHTML="",t.open?(r.setAttribute("edit-mode",""),i.setAttribute("open",""),Fe(i,t.active)):(r.removeAttribute("edit-mode"),i.removeAttribute("open")))}async function W(t){switch(t){case"left":f.update("datePicker",e=>{const r=new Date(e);return r.setMonth(r.getMonth()+1),r.getTime()});break;case"right":f.update("datePicker",e=>{const r=new Date(e);return r.setMonth(r.getMonth()-1),r.getTime()});break}}function Fe(t,e){const r=document.querySelector('template[name="shift-card"]');(f.get("shifts")||[]).forEach(i=>{const n=r.content.cloneNode(!0).querySelector(".shift-card");e===i.id?(n.setAttribute("active",""),n.scrollIntoView()):n.removeAttribute("active"),n.querySelector(".name").innerText=i.name;const s=n.querySelector(".short-name");s.style.color=i.color||"inherit",s.innerText=i.visible?i.shortName:"",n.onclick=()=>{n.hasAttribute("active")?n.removeAttribute("active"):n.setAttribute("active",""),f.update("editMode",a=>(a.active=n.hasAttribute("active")?i.id:0,a))},t.appendChild(n)})}const ne=document.createElement("template");ne.innerHTML=D`
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
`;let ie="",L=[];async function Xe(){ie=G(),P("");const t=document.querySelector("#routerTarget");t.innerHTML="",t.appendChild(ne.content.cloneNode(!0));const e=new Ae(document.querySelector(".item-container"));Re(),We(),L.push(f.listen("datePicker",Ne,!0),f.listen("editMode",Ue,!0)),setTimeout(()=>{e.start()}),e.addListener("swipe",W),L.push(()=>{e.removeListener("swipe",W),e.stop()})}async function _e(){P(ie),L.forEach(t=>t()),L=[]}function We(){const t=new Date;Array.from(document.querySelector(".item-container").children).forEach(e=>{e.innerHTML="",e.appendChild(je(t.getFullYear(),t.getMonth()))})}function Re(){const t=document.querySelector(".ui-app-bar .left button.date-picker"),e=document.querySelector(".ui-app-bar .right button.today"),r=document.querySelector(".ui-app-bar .right button.edit"),i=document.querySelector(".ui-app-bar .right button.printer"),n=document.querySelector(".ui-app-bar .right button.settings");t.style.display="inline-flex",e.style.display="inline-flex",r.style.display="inline-flex",i.style.display="inline-flex",n.style.display="inline-flex",t.onclick=async()=>{const s=await qe(f.get("datePicker"));s&&f.set("datePicker",s.date)},e.onclick=async()=>{f.set("datePicker",new Date().getTime())},r.onclick=async()=>{f.update("editMode",s=>(s.open=!s.open,s))},L.push(f.listen("datePicker",s=>{const a=new Date,o=new Date(s),c=o.getFullYear();c===a.getFullYear()&&o.getMonth()===a.getMonth()?e.setAttribute("disabled",""):e.removeAttribute("disabled");const l=(o.getMonth()+1).toString().padStart(2,"0");t.innerText=`${c} / ${l}`},!0)),L.push(()=>{t.style.display="none",e.style.display="none",r.style.display="none",i.style.display="none",n.style.display="none"})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var q;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(q||(q={}));class B extends Error{constructor(e,r,i){super(e),this.message=e,this.code=r,this.data=i}}const Ve=t=>{var e,r;return t!=null&&t.androidBridge?"android":!((r=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Ye=t=>{const e=t.CapacitorCustomPlatform||null,r=t.Capacitor||{},i=r.Plugins=r.Plugins||{},n=()=>e!==null?e.name:Ve(t),s=()=>n()!=="web",a=h=>{const u=l.get(h);return!!(u!=null&&u.platforms.has(n())||o(h))},o=h=>{var u;return(u=r.PluginHeaders)===null||u===void 0?void 0:u.find(p=>p.name===h)},c=h=>t.console.error(h),l=new Map,d=(h,u={})=>{const p=l.get(h);if(p)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),p.proxy;const m=n(),y=o(h);let w;const A=async()=>(!w&&m in u?w=typeof u[m]=="function"?w=await u[m]():w=u[m]:e!==null&&!w&&"web"in u&&(w=typeof u.web=="function"?w=await u.web():w=u.web),w),C=(g,b)=>{var T,x;if(y){const E=y==null?void 0:y.methods.find(k=>b===k.name);if(E)return E.rtype==="promise"?k=>r.nativePromise(h,b.toString(),k):(k,M)=>r.nativeCallback(h,b.toString(),k,M);if(g)return(T=g[b])===null||T===void 0?void 0:T.bind(g)}else{if(g)return(x=g[b])===null||x===void 0?void 0:x.bind(g);throw new B(`"${h}" plugin is not implemented on ${m}`,q.Unimplemented)}},O=g=>{let b;const T=(...x)=>{const E=A().then(k=>{const M=C(k,g);if(M){const $=M(...x);return b=$==null?void 0:$.remove,$}else throw new B(`"${h}.${g}()" is not implemented on ${m}`,q.Unimplemented)});return g==="addListener"&&(E.remove=async()=>b()),E};return T.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(T,"name",{value:g,writable:!1,configurable:!1}),T},U=O("addListener"),F=O("removeListener"),de=(g,b)=>{const T=U({eventName:g},b),x=async()=>{const k=await T;F({eventName:g,callbackId:k},b)},E=new Promise(k=>T.then(()=>k({remove:x})));return E.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await x()},E},j=new Proxy({},{get(g,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return y?de:U;case"removeListener":return F;default:return O(b)}}});return i[h]=j,l.set(h,{name:h,proxy:j,platforms:new Set([...Object.keys(u),...y?[m]:[]])}),j};return r.convertFileSrc||(r.convertFileSrc=h=>h),r.getPlatform=n,r.handleError=c,r.isNativePlatform=s,r.isPluginAvailable=a,r.registerPlugin=d,r.Exception=B,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},ze=t=>t.Capacitor=Ye(t),I=ze(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),N=I.registerPlugin;class se{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,r){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(r);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),i&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,r);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,r,i){const n=this.listeners[e];if(!n){if(i){let s=this.retainedEventArguments[e];s||(s=[]),s.push(r),this.retainedEventArguments[e]=s}return}n.forEach(s=>s(r))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,r){this.windowListeners[r]={registered:!1,windowEventName:e,pluginEventName:r,handler:i=>{this.notifyListeners(r,i)}}}unimplemented(e="not implemented"){return new I.Exception(e,q.Unimplemented)}unavailable(e="not available"){return new I.Exception(e,q.Unavailable)}async removeListener(e,r){const i=this.listeners[e];if(!i)return;const n=i.indexOf(r);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const r=this.retainedEventArguments[e];r&&(delete this.retainedEventArguments[e],r.forEach(i=>{this.notifyListeners(e,i)}))}}const R=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),V=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Je extends se{async getCookies(){const e=document.cookie,r={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[n,s]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=V(n).trim(),s=V(s).trim(),r[n]=s}),r}async setCookie(e){try{const r=R(e.key),i=R(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${r}=${i||""}${n}; path=${s}; ${a};`}catch(r){return Promise.reject(r)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const r of e)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}N("CapacitorCookies",{web:()=>new Je});const Ke=async t=>new Promise((e,r)=>{const i=new FileReader;i.onload=()=>{const n=i.result;e(n.indexOf(",")>=0?n.split(",")[1]:n)},i.onerror=n=>r(n),i.readAsDataURL(t)}),Ge=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(n=>n.toLocaleLowerCase()).reduce((n,s,a)=>(n[s]=t[e[a]],n),{})},Ze=(t,e=!0)=>t?Object.entries(t).reduce((i,n)=>{const[s,a]=n;let o,c;return Array.isArray(a)?(c="",a.forEach(l=>{o=e?encodeURIComponent(l):l,c+=`${s}=${o}&`}),c.slice(0,-1)):(o=e?encodeURIComponent(a):a,c=`${s}=${o}`),`${i}&${c}`},"").substr(1):null,Qe=(t,e={})=>{const r=Object.assign({method:t.method||"GET",headers:t.headers},e),n=Ge(t.headers)["content-type"]||"";if(typeof t.data=="string")r.body=t.data;else if(n.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,o]of Object.entries(t.data||{}))s.set(a,o);r.body=s.toString()}else if(n.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((o,c)=>{s.append(c,o)});else for(const o of Object.keys(t.data))s.append(o,t.data[o]);r.body=s;const a=new Headers(r.headers);a.delete("content-type"),r.headers=a}else(n.includes("application/json")||typeof t.data=="object")&&(r.body=JSON.stringify(t.data));return r};class et extends se{async request(e){const r=Qe(e,e.webFetchExtra),i=Ze(e.params,e.shouldEncodeUrlParams),n=i?`${e.url}?${i}`:e.url,s=await fetch(n,r),a=s.headers.get("content-type")||"";let{responseType:o="text"}=s.ok?e:{};a.includes("application/json")&&(o="json");let c,l;switch(o){case"arraybuffer":case"blob":l=await s.blob(),c=await Ke(l);break;case"json":c=await s.json();break;case"document":case"text":default:c=await s.text()}const d={};return s.headers.forEach((h,u)=>{d[u]=h}),{data:c,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}N("CapacitorHttp",{web:()=>new et});const tt=N("Share",{web:()=>K(()=>import("./web-8fxXJGcs.js"),[]).then(t=>new t.ShareWeb)}),oe="3.0.0",ae=13;function rt(t){var r,i,n;const e=s=>s?!(typeof s.id!="number"||typeof s.name!="string"||typeof s.shortName!="string"||typeof s.visible!="boolean"||s.color&&typeof s.color!="string"):!1;if((t==null?void 0:t.constructor)!==Object||((r=t.settings)==null?void 0:r.constructor)!==Object||((i=t.storage)==null?void 0:i.constructor)!==Object||!Array.isArray(t.settings.shifts)||!Array.isArray(t.settings.rhythm)||typeof t.settings.startDate!="string"||t.settings.rhythm.find(s=>typeof s!="number")||t.settings.shifts.find(s=>!e(s)))return!1;for(const s in t.storage){if(typeof s!="string"||((n=t.storage[s])==null?void 0:n.constructor)!==Object)return!1;for(const a in t.storage[s]){if(typeof a!="string")return!1;const o=t.storage[s][a];if((o==null?void 0:o.constructor)!==Object||!e(o.shift)&&o.shift!==null||typeof o.note!="string")return!1}}return!0}function nt(t){var r,i;const e=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((t==null?void 0:t.constructor)!==Object||((r=t.settings)==null?void 0:r.constructor)!==Object||((i=t.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(t.settings.shifts)||!Array.isArray(t.settings.rhythm)||typeof t.settings.startDate!="string"||t.settings.rhythm.find(n=>typeof n!="number")||t.settings.shifts.find(n=>!e(n))||typeof t.indexedDB.version!="number"||!Array.isArray(t.indexedDB.data)||t.indexedDB.data.find(n=>{var s;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((s=n.shift)==null?void 0:s.constructor)!==Object||typeof n.note!="string"||!e(n.shift)&&n.shift!==null}))}function it(t){var r,i;const e=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((t==null?void 0:t.constructor)!==Object||typeof t.weekStart!="number"||((r=t.version)==null?void 0:r.constructor)!==Object||((i=t.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(t.shifts)||!Array.isArray(t.rhythm)||typeof t.startDate!="number"||t.rhythm.find(n=>typeof n!="number")||t.shifts.find(n=>!e(n))||typeof t.version.version!="string"||typeof t.version.build!="number"||typeof t.indexedDB.version!="number"||!Array.isArray(t.indexedDB.data)||t.indexedDB.data.find(n=>{var s;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((s=n.shift)==null?void 0:s.constructor)!==Object||typeof n.note!="string"||!e(n.shift)&&n.shift!==null}))}function st(t){return{weekStart:0,version:{version:oe,build:ae},rhythm:t.settings.rhythm,shifts:t.settings.shifts,startDate:t.settings.startDate?new Date(t.settings.startDate).getTime():0,indexedDB:{version:t.indexedDB.version,data:t.indexedDB.data.map(e=>({year:e.year,month:e.month,date:e.date,shift:e.shift||null,note:e.note}))}}}function ot(t){return{weekStart:0,version:{version:oe,build:ae},rhythm:t.settings.rhythm,shifts:t.settings.shifts,startDate:t.settings.startDate?new Date(t.settings.startDate).getTime():0,indexedDB:at(t)}}function at(t){const e={version:1,data:[]},r=i=>{for(const[n,s]of Object.entries(i)){const[a,o,c]=n.split("-",3).map(l=>parseInt(l,10));isNaN(a)||isNaN(o)||isNaN(c)||o<0||o>11||!("shift"in s)||!("note"in s)||e.data.push({year:a,month:o,date:c,shift:s.shift,note:s.note})}};return Object.values(t.storage).forEach(i=>r(i)),e}const ct=D`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function lt(t){const e=document.createElement("article");e.className="backup",e.innerHTML=ct;const r=e.querySelector("section.json button.import"),i=e.querySelector("section.json button.export");return r.onclick=async()=>{const n=document.createElement("input");n.type="file",n.accept="application/json",n.onchange=async()=>{if(!n.files||n.files.length===0)return;const s=new FileReader;s.onload=async()=>await ut(s.result,t),s.onerror=()=>{alert(`Import data: read file failed: ${s.error}`)},s.readAsText(n.files[0])},n.click()},i.onclick=async()=>{const n={weekStart:f.get("weekStart"),shifts:f.get("shifts"),rhythm:f.get("rhythm"),startDate:f.get("startDate"),version:f.get("version"),indexedDB:{version:S.version,data:await S.getAll()}},s=new Blob([JSON.stringify(n)],{type:"plain/text"}),a=new Date,o=(a.getMonth()+1).toString().padStart(2,"0"),c=a.getDate().toString().padStart(2,"0"),l=`shift-scheduler-backup_${a.getFullYear()}-${o}-${c}.json`;try{await tt.share({title:"Shift Scheduler Backup",text:"Backup of your Shift Scheduler data",url:window.URL.createObjectURL(s)})}catch{const d=document.createElement("a");d.setAttribute("href",window.URL.createObjectURL(s)),d.setAttribute("download",l),d.click()}},e}async function ut(t,e){if(typeof t!="string")return alert("Invalid data!");let r;try{r=JSON.parse(t)}catch{return alert("Invalid JSON data!")}let i;if(it(r))i=r;else if(nt(r))i=st(r);else if(rt(r))i=ot(r);else return alert("Invalid JSON data!");f.set("shifts",i.shifts),f.set("rhythm",i.rhythm),f.set("startDate",i.startDate),f.set("weekStart",i.weekStart),await S.deleteAll();for(const n of i.indexedDB.data||[])S.add(n).catch(()=>S.put(n));setTimeout(e)}const dt=D`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button disabled>Browse</button>
        </label>
    </section>
`;function ht(){const t=document.createElement("article");return t.className="db-browser",t.innerHTML=dt,t}const ft=D`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function mt(){const t=document.createElement("article");t.className="misc",t.innerHTML=ft;const e=t.querySelector('section.week-start input[type="checkbox"]');return e.checked=f.get("weekStart")===1,e.onchange=()=>{f.set("weekStart",e.checked?1:0)},t}const pt=D`
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
`;function gt(){const t=document.createElement("article");t.className="shifts",t.innerHTML=pt;const e=()=>{const s=t.querySelector("section.shifts-table tbody"),a=t.querySelector('section.shifts-table template[name="table-item"]');s.innerHTML="",f.get("shifts").forEach(o=>{const c=a.content.cloneNode(!0).querySelector("tr.item");s.appendChild(c),c.querySelector(".name").innerText=o.name;const l=c.querySelector(".short-name");l.style.color=o.color||"inherit",l.innerText=o.visible?o.shortName:"";const d=c.querySelector("button.edit");d.onclick=async()=>{await _(o)&&(f.update("shifts",p=>p.map(m=>m.id===o.id?o:m)),e())};const h=c.querySelector("button.delete");h.onclick=async()=>{confirm(`Delete shift "${o.name}"?`)&&f.update("shifts",u=>u.filter(p=>p.id!==o.id)),e()}}),t.querySelector("section.shifts-table button.add-shift").onclick=async()=>{const o=await _(null);o&&(f.update("shifts",c=>(c.push(o),c)),e())}};e();const r=t.querySelector('section.start-date input[type="date"]');if(f.get("startDate")){const s=new Date,a=(s.getMonth()+1).toString().padStart(2,"0"),o=s.getDate().toString().padStart(2,"0");r.value=`${s.getFullYear()}-${a}-${o}`,r.onchange=()=>{f.set("startDate",new Date(r.value).getTime())}}const n=t.querySelector("section.edit-rhythm button");return n.onclick=async()=>{f.set("rhythm",await $e(f.get("rhythm"),f.get("shifts")))},t}let ce="",Y=null,H=[];async function le(){ce=G(),P("Settings");const t=document.querySelector("#routerTarget");t.innerHTML="",yt(),t.appendChild(mt()),t.appendChild(document.createElement("br")),t.appendChild(gt()),t.appendChild(document.createElement("br")),t.appendChild(lt(bt)),t.appendChild(document.createElement("br")),t.appendChild(ht())}async function ue(){P(ce),H.forEach(t=>t()),H=[]}function yt(){const t=document.querySelector(".ui-app-bar .left .back");t.style.display="inline-flex",Y=t.onclick,t.onclick=()=>J.hash.goTo(null,""),H.push(()=>{t.style.display="none",t.onclick=Y})}async function bt(){await ue(),await le()}const vt=Se({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await vt()}});S.open(()=>{J.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){Xe()},onDestroy(){_e()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){le()},onDestroy(){ue()}}}})});export{se as W};
