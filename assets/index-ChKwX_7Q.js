var Y=Object.defineProperty;var V=(e,r,t)=>r in e?Y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var g=(e,r,t)=>V(e,typeof r!="symbol"?r+"":r,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();class E{constructor(){this.listeners={}}addListener(r,t){return this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push(t),()=>this.removeListener(r,t)}removeListener(r,t){this.listeners[r]&&(this.listeners[r]=this.listeners[r].filter(i=>i!==t))}dispatch(r,t){this.listeners[r]&&this.listeners[r].forEach(i=>i(t))}}class J{constructor(r){this.prefix="",this.events=new E,this.data={},this.prefix=r}delete(r,t){t!=null&&t.skipStore||localStorage.removeItem(`${this.prefix}${r}`),delete this.data[r]}get(r,t){if(!(t!=null&&t.skipStore)){const i=localStorage.getItem(`${this.prefix}${r}`);if(i!==null)return JSON.parse(i)}if(this.data.hasOwnProperty(r))return this.data[r]}set(r,t,i=!1,n){if(i){let o=null;n!=null&&n.skipStore?o=null:o=localStorage.getItem(`${this.prefix}${r}`),o!==null?this.data[r]=JSON.parse(o):this.data.hasOwnProperty(r)||(this.data[r]=t)}else this.data[r]=t;n!=null&&n.skipStore||localStorage.setItem(`${this.prefix}${r}`,JSON.stringify(this.data[r])),this.events.dispatch(r,this.data[r])}update(r,t,i){const n=this.get(r,i);if(n===void 0)throw new Error(`"${r}" not found, use \`set\``);this.set(r,t(n),!1,i)}listen(r,t,i=!1,n){if(i){const o=this.get(r,n);o!==void 0&&setTimeout(()=>t(o))}return this.events.addListener(r,t)}}function R(e,r){let t=null;async function i(n){var o,a;if(t!==null&&(((o=t.template)==null?void 0:o.onDestroy)!==void 0&&t.template.onDestroy(),t.onDestroy!==void 0&&t.onDestroy()),t=n,t.title!==void 0){const s=document.querySelector("head > title");s!==null&&(s.innerHTML=t.title)}if((t==null?void 0:t.href)!==void 0&&e){const s=await(await fetch(t.href)).text();e.innerHTML=s,t.scripts!==void 0&&t.scripts.forEach(l=>{const c=document.createElement("script");c.setAttribute("data-template",t.href),c.src=l.src,e.appendChild(c)})}if((t==null?void 0:t.onMount)!==void 0&&t.onMount(),t!=null&&t.template){let s=e;if(t.template.target!==void 0&&(s=document.querySelector(t.template.target)),t.template.selector&&s){const l=document.querySelector(t.template.selector);if(!l)throw`${t.template.selector} not found`;l instanceof HTMLTemplateElement?(s.innerHTML="",s.appendChild(l.content.cloneNode(!0))):s.innerHTML=l.innerHTML}((a=t.template)==null?void 0:a.onMount)!==void 0&&t.template.onMount()}}window.addEventListener("hashchange",()=>{const n=window.location.hash.replace("#","");let o="";for(const a of Object.keys(r))n.startsWith(a)&&a>o&&(o=a);if(!o){const a=r["/"];if(a===void 0){console.warn(`Window location “${n}” is missing in routes, and the fallback route “/“ is also missing.`);return}i(a);return}i(r[o])}),window.dispatchEvent(new Event("hashchange"))}function z(e,r){let t;if(e?t=`?${Object.entries(e).map(([i,n])=>`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&")}`:t="",!r&&!t){location.hash="";return}location.hash=`#${encodeURIComponent(r)}`+(t?`&${t}`:"")}function K(){const e={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(r=>{r.split("&").forEach(t=>{const[i,n]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)})}),e}const Z=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:K,goTo:z,init:R},Symbol.toStringTag,{value:"Module"})),L=Object.freeze(Object.defineProperty({__proto__:null,hash:Z},Symbol.toStringTag,{value:"Module"})),G="modulepreload",Q=function(e){return"/shift-scheduler.github.io/"+e},x={},ee=function(r,t,i){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(t.map(l=>{if(l=Q(l),l in x)return;x[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":G,c||(f.as="script"),f.crossOrigin="",f.href=l,s&&f.setAttribute("nonce",s),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return r().catch(o)})};function te(e={}){const{immediate:r=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:n,onRegisteredSW:o,onRegisterError:a}=e;let s,l,c;const d=async(h=!0)=>{await l,c==null||c()};async function f(){if("serviceWorker"in navigator){if(s=await ee(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(h=>{a==null||a(h)}),!s)return;c=()=>{s==null||s.messageSkipWaiting()};{let h=!1;const p=()=>{h=!0,s==null||s.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()}),t==null||t()};s.addEventListener("installed",m=>{typeof m.isUpdate>"u"?typeof m.isExternal<"u"&&m.isExternal?p():!h&&(i==null||i()):m.isUpdate||i==null||i()}),s.addEventListener("waiting",p)}s.register({immediate:r}).then(h=>{o?o("/shift-scheduler.github.io/sw.js",h):n==null||n(h)}).catch(h=>{a==null||a(h)})}}return l=f(),d}function $(){return N().innerText}function S(e){N().innerText=e}function N(){return document.querySelector(".ui-app-bar .center .title")}const re="shift-scheduler:",u=(()=>{var i;const e=new J(re),r=new Date;e.set("datePicker",new Date(r.getFullYear(),r.getMonth(),1).getTime(),!1),e.set("weekStart",0,!0),e.set("shifts",[],!0),e.set("rhythm",[],!0),e.set("startDate",0,!0),e.set("editMode",{open:!1,active:0},!1);const t={version:"0.0.0",build:1};switch((i=e.get("version"))==null?void 0:i.build){case void 0:const n=e.get("startDate");n&&e.set("startDate",new Date(n).getTime());break}return e.set("version",t),e})();async function ne(e,r,t){const i=[],n=u.get("weekStart");for(let o=0;o<e;o++){const a=new Date(r,t,o+1-ie(r,t,n));i.push({year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),shift:A(a),note:""})}return i}function ie(e,r,t){const n=new Date(e,r,1).getDay();return t===0?n:n===0?6:n-1}function A(e){const r=u.get("startDate"),t=u.get("shifts"),i=u.get("rhythm");if(!r||!i.length)return null;const n=new Date(r),o=Math.round((e.getTime()-n.getTime())/(1e3*60*60*24));return o<=0?t.find(a=>a.id===i[i.length+(o%i.length||-i.length)])||null:t.find(a=>a.id===i[o%i.length])||null}function oe(e){return typeof e.id!="number"||typeof e.name!="string"||typeof e.shortName!="string"||typeof e.color!="string"&&e.color?!1:(e.color==="transparent"&&(e.visible=!1,e.color=null),typeof e.visible!="boolean"&&(e.visible=!0),e.color||(e.color=null),!0)}const v=String.raw;class se{constructor(r,t){g(this,"version");g(this,"name");g(this,"storeName","user");g(this,"request",null);this.name=r,this.version=t}open(r){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{r&&r()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(r,t){switch(r){case 0:case 1:return ae(t);default:return!1}}get(r,t,i){return new Promise(n=>{const o=this.roStore().get([r,t,i]);o.onsuccess=()=>n(o.result||null),o.onerror=()=>n(null)})}getAll(){return new Promise(r=>{const t=this.roStore().getAll();t.onsuccess=()=>r(t.result),t.onerror=i=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,i),r([])}})}add(r){return new Promise((t,i)=>{const n=this.rwStore().add(r);n.onsuccess=()=>t(),n.onerror=async o=>{console.warn(`[DB] Error while adding "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,o),i(n.error)}})}put(r){return new Promise((t,i)=>{const n=this.rwStore().put(r);n.onsuccess=()=>t(),n.onerror=async o=>{console.warn(`[DB] Error while putting "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,o),i(n.error)}})}delete(r,t,i){return new Promise((n,o)=>{const a=this.rwStore().delete([r,t,i]);a.onsuccess=()=>n(),a.onerror=()=>{o(a.error)}})}deleteAll(){return new Promise((r,t)=>{const i=this.rwStore().clear();i.onsuccess=()=>r(),i.onerror=()=>{t(i.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(r){if(!r.objectStoreNames.contains(this.storeName)){const t=r.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});t.createIndex("year","year",{unique:!1}),t.createIndex("month","month",{unique:!1}),t.createIndex("date","date",{unique:!1}),t.createIndex("note","note",{unique:!1}),t.createIndex("shift","shift",{unique:!1})}}onError(r){var t;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(r){var t;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(r){switch(r.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function ae(e){return!(typeof e.year!="number"||typeof e.month!="number"||typeof e.date!="number"||(typeof e.note!="string"&&(e.note=""),e.shift!==null&&!oe(e.shift)))}const y=new se("shift-scheduler",1);function le(e){return new Promise(r=>{const t=document.querySelector('dialog[name="date-picker"]'),i=t.querySelector("form"),n=i.querySelector('input[type="month"]');i.querySelector("button.cancel").onclick=a=>{a.preventDefault(),t.close()};let o=null;t.onclose=()=>r(o),i.onsubmit=()=>{o={date:new Date(n.value).getTime()}};{switch(typeof e){case"string":e=new Date(e);break;case"number":e=new Date(e);break}const a=(e.getMonth()+1).toString().padStart(2,"0");n.value=`${e.getFullYear()}-${a}`}t.showModal()})}function ce(e,r,t){return new Promise(i=>{const n=document.querySelector('dialog[name="day"]'),o=n.querySelector("form"),a=o.querySelector("select.shift-select"),s=o.querySelector("textarea.db-note");o.querySelector("button.cancel").onclick=c=>{c.preventDefault(),n.close()};let l=null;n.onclose=()=>{i(l)},o.onsubmit=()=>{l={shiftID:parseInt(a.value||"0",10),note:s.value.trim()}};{for(o.querySelector(".title").innerText=e.toDateString();a.children.length>1;)a.removeChild(a.lastChild);u.get("shifts").forEach(c=>{const d=document.createElement("option");d.value=c.id.toString(),d.innerText=c.name||c.shortName,a.appendChild(d),c.id===r&&(d.selected=!0)}),s.value=(t==null?void 0:t.note)||""}n.showModal()})}function ue(e,r){return new Promise(t=>{const i=document.querySelector('dialog[name="rhythm"]'),n=i.querySelector("form"),o=n.querySelector("tbody"),a=n.querySelector(".shifts-container"),s=i.querySelector('template[name="table-item"]'),l=document.querySelector('template[name="shift-card"]');n.querySelector("button.cancel").onclick=d=>{d.preventDefault(),i.close()};let c=[...e];i.onclose=()=>t(c),n.onsubmit=()=>{c=e};{const d=()=>{o.innerHTML="",e.forEach((h,p)=>{let m=r.find(W=>W.id===h);m||(m={id:h,name:"",shortName:"",color:"var(--destructive)",visible:!1});const b=s.content.cloneNode(!0).querySelector(".table-item");b.querySelector(".name").innerText=m.name;const k=b.querySelector(".short-name");k.style.color=m.color||"inherit",k.innerText=m.visible?m.shortName:"";const U=b.querySelector("button.delete");U.onclick=()=>{e.splice(p,1),d()},o.appendChild(b),b.scrollIntoView()})},f=()=>{a.innerHTML="",r.forEach(h=>{const p=l.content.cloneNode(!0).querySelector(".shift-card");a.appendChild(p);const m=p.querySelector(".name");m.innerText=h.name;const b=p.querySelector(".short-name");b.style.color=h.color||"inherit",b.innerText=h.visible?h.shortName:"",p.onclick=()=>{e.push(h.id),d()}})};d(),f()}i.showModal()})}function D(e){return new Promise(r=>{const t=document.querySelector('dialog[name="shift"]'),i=t.querySelector("form"),n=i.querySelector("input.name"),o=i.querySelector("input.short-name"),a=i.querySelector("input.color-picker"),s=i.querySelector("input.default-color"),l=i.querySelector("input.hidden");i.querySelector("button.cancel").onclick=d=>{d.preventDefault(),t.close()};let c=null;t.onclose=()=>r(c),i.onsubmit=d=>{const f={id:(e==null?void 0:e.id)||new Date().getTime(),name:n.value,shortName:o.value,visible:!l.checked,color:s.checked?null:a.value||null};if(!f.name){d.preventDefault(),n.ariaInvalid="";return}if(n.ariaInvalid=null,!f.shortName){d.preventDefault(),o.ariaInvalid="";return}o.ariaInvalid=null,c=f},n.value=(e==null?void 0:e.name)||"",o.value=(e==null?void 0:e.shortName)||"",a.value=(e==null?void 0:e.color)||"#66FF00",s.checked=!(e!=null&&e.color),l.checked=typeof(e==null?void 0:e.visible)!="boolean"?!1:!e.visible,s.onchange=()=>{a.disabled=s.checked,o.style.color=s.checked?"inherit":a.value||"inherit"},l.onchange=d=>{o.disabled=l.checked,a.disabled=l.checked,s.disabled=l.checked,s.onchange(d)},s.onchange(new Event("change")),l.onchange(new Event("change")),t.showModal()})}const de=75;class he extends E{constructor(t){super();g(this,"container");g(this,"finalTransform",!1);g(this,"startX",null);g(this,"clientX",null);g(this,"onMouseMove");g(this,"onTouchMove");g(this,"onMouseOrTouchEnd");g(this,"onTouchCancel");g(this,"animationFrameHandler");this.container=t}start(){this.onMouseMove=async t=>{this.finalTransform||t.buttons===1&&(this.startX===null&&(this.startX=t.clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.clientX)},this.onTouchMove=async t=>{this.finalTransform||(this.startX===null&&(this.startX=t.touches[0].clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.touches[0].clientX)},this.onMouseOrTouchEnd=async t=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const i=t.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(i.width+1):-i.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async t=>{this.startX!==null&&await this.onMouseOrTouchEnd(t)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>de*(window.innerWidth/1080)}moveX(t){const i=this.containerItems();i[0].style.left=`calc(-100% + ${t}px)`,i[1].style.left=`calc(0% + ${t}px)`,i[2].style.left=`calc(100% + ${t}px)`}setTransition(t){this.containerItems().forEach(n=>n.style.transition=t)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(t=>t.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const t=this.containerItems(),i=this.clientX>this.startX?"right":"left";switch(i){case"left":this.container.appendChild(this.container.removeChild(t[0]));break;case"right":this.container.insertBefore(this.container.removeChild(t[2]),t[0]);break}this.moveX(0),this.dispatch("swipe",i)}}const B=document.createElement("template");B.innerHTML=v`
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
`;const fe=[0,1,2,3,4,5,6],me=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function pe(e,r){const t=B.content.cloneNode(!0).querySelector(".item-content");for(let i=0;i<6;i++){const n=document.createElement("div");t.appendChild(n),n.className="days ui-flex-grid-item ui-flex-grid-row",n.style.setProperty("--gap","0.05rem");for(let o=0;o<7;o++)n.append(be(0))}return t.onclick=ge,setTimeout(()=>{I(t,e,r)}),t}async function I(e,r,t){const i=new Date(r,t),n=Array.from(e.querySelectorAll(".item-content > .days > .day"));let o=await ne(n.length,i.getFullYear(),i.getMonth());const a=u.get("shifts");o.forEach(async(s,l)=>{const c=await y.get(s.year,s.month,s.date);if(c!==null){s.note=c.note;const d=a.find(f=>{var h;return f.id===((h=c.shift)==null?void 0:h.id)});d?s.shift=d:s.shift=c.shift||s.shift}C(n[l],s),t!==s.month?n[l].setAttribute("disabled",""):n[l].removeAttribute("disabled"),s.year!==i.getFullYear()||s.month!==i.getMonth()?n[l].classList.add("inactive"):n[l].classList.remove("inactive")}),ye([...e.querySelectorAll(".item-content > .week-days > .week-day")],n)}async function ge(e){const r=e.target.closest(".day");if(!r)return;const t=parseInt(r.getAttribute("data-year"),10),i=parseInt(r.getAttribute("data-month"),10),n=parseInt(r.getAttribute("data-date"),10),o=parseInt(r.getAttribute("data-shift-id")||"0",10),a=u.get("editMode");let s;if(!a.open)s=await ce(new Date(t,i,n,6,0,0),o,await y.get(t,i,n));else{const d=await y.get(t,i,n);s={shiftID:a.active?a.active:0,note:(d==null?void 0:d.note)||""}}if(!s)return;const l=A(new Date(t,i,n)),c={year:t,month:i,date:n,shift:u.get("shifts").find(d=>d.id===s.shiftID)||null,note:s.note||""};c.shift&&l&&l.id===c.shift.id&&(c.shift=null),c.note||c.shift?(console.warn("Add data to the database",c),y.put(c).catch(()=>y.add(c).catch(d=>alert(`Update database failed: ${d}`)))):(console.warn("Remove data from the database",{year:t,month:i,day:n}),y.delete(t,i,n)),c.shift||(c.shift=l),C(r,c)}function ye(e,r){const t=u.get("weekStart");let i=fe;t>0&&(i=[...i.slice(t),...i.slice(0,t)]);const n=i.findIndex(a=>a===6),o=i.findIndex(a=>a===0);e.forEach((a,s)=>{a.innerHTML=`${me[i[s%7]]}`}),[...e,...r].forEach((a,s)=>{a.classList.remove("saturday"),a.classList.remove("sunday"),s%i.length===n&&a.classList.add("saturday"),s%i.length===o&&a.classList.add("sunday")})}function be(e,r){const t=document.createElement("div");return t.className="day ui-flex-grid-item",t.innerHTML=v`
        <div class="date">${e}</div>
        <div class="shift">${""}</div>
    `,t}function C(e,r){((n,o,a)=>{const s=new Date;return s.getFullYear()===n&&s.getMonth()===o&&s.getDate()===a})(r.year,r.month,r.date)?e.classList.add("today"):e.classList.remove("today"),r.note?e.classList.add("note"):e.classList.remove("note"),e.querySelector(".date").innerHTML=`${r.date}`;const i=e.querySelector(".shift");r.shift?(i.style.setProperty("--shift-color",r.shift.visible?r.shift.color||"inherit":"transparent"),i.innerHTML=r.shift.shortName||""):(i.style.removeProperty("--shift-color"),i.innerHTML=""),e.setAttribute("data-year",r.year.toString()),e.setAttribute("data-month",r.month.toString()),e.setAttribute("data-date",r.date.toString()),r.shift&&e.setAttribute("data-shift-id",r.shift.id.toString())}async function ve(e){const r=new Date(e);r.setMonth(r.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async t=>{I(t.querySelector(".item-content"),r.getFullYear(),r.getMonth()),r.setMonth(r.getMonth()+1)})}async function we(e){const t=document.querySelector("#routerTarget").querySelector(".item-container"),i=document.querySelector(".edit-mode");!t||!i||(i.innerHTML="",e.open?(t.setAttribute("edit-mode",""),i.setAttribute("open",""),Se(i,e.active)):(t.removeAttribute("edit-mode"),i.removeAttribute("open")))}async function q(e){switch(e){case"left":u.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()+1),t.getTime()});break;case"right":u.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()-1),t.getTime()});break}}function Se(e,r){const t=document.querySelector('template[name="shift-card"]');(u.get("shifts")||[]).forEach(i=>{const n=t.content.cloneNode(!0).querySelector(".shift-card");r===i.id?(n.setAttribute("active",""),n.scrollIntoView()):n.removeAttribute("active"),n.querySelector(".name").innerText=i.name;const o=n.querySelector(".short-name");o.style.color=i.color||"inherit",o.innerText=i.visible?i.shortName:"",n.onclick=()=>{n.hasAttribute("active")?n.removeAttribute("active"):n.setAttribute("active",""),u.update("editMode",a=>(a.active=n.hasAttribute("active")?i.id:0,a))},e.appendChild(n)})}const O=document.createElement("template");O.innerHTML=v`
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
`;let j="",w=[];async function Te(){j=$(),S("");const e=document.querySelector("#routerTarget");e.innerHTML="",e.appendChild(O.content.cloneNode(!0));const r=new he(document.querySelector(".item-container"));De(),xe(),w.push(u.listen("datePicker",ve,!0),u.listen("editMode",we,!0)),setTimeout(()=>{r.start()}),r.addListener("swipe",q),w.push(()=>{r.removeListener("swipe",q),r.stop()})}async function ke(){S(j),w.forEach(e=>e()),w=[]}function xe(){const e=new Date;Array.from(document.querySelector(".item-container").children).forEach(r=>{r.innerHTML="",r.appendChild(pe(e.getFullYear(),e.getMonth()))})}function De(){const e=document.querySelector(".ui-app-bar .left button.date-picker"),r=document.querySelector(".ui-app-bar .right button.today"),t=document.querySelector(".ui-app-bar .right button.edit"),i=document.querySelector(".ui-app-bar .right button.printer"),n=document.querySelector(".ui-app-bar .right button.settings");e.style.display="inline-flex",r.style.display="inline-flex",t.style.display="inline-flex",i.style.display="inline-flex",n.style.display="inline-flex",e.onclick=async()=>{const o=await le(u.get("datePicker"));o&&u.set("datePicker",o.date)},r.onclick=async()=>{u.set("datePicker",new Date().getTime())},t.onclick=async()=>{u.update("editMode",o=>(o.open=!o.open,o))},w.push(u.listen("datePicker",o=>{const a=new Date,s=new Date(o),l=s.getFullYear();l===a.getFullYear()&&s.getMonth()===a.getMonth()?r.setAttribute("disabled",""):r.removeAttribute("disabled");const c=(s.getMonth()+1).toString().padStart(2,"0");e.innerText=`${l} / ${c}`},!0)),w.push(()=>{e.style.display="none",r.style.display="none",t.style.display="none",i.style.display="none",n.style.display="none"})}const P="3.0.0",H=13;function qe(e){var t,i,n;const r=o=>o?!(typeof o.id!="number"||typeof o.name!="string"||typeof o.shortName!="string"||typeof o.visible!="boolean"||o.color&&typeof o.color!="string"):!1;if((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.storage)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(o=>typeof o!="number")||e.settings.shifts.find(o=>!r(o)))return!1;for(const o in e.storage){if(typeof o!="string"||((n=e.storage[o])==null?void 0:n.constructor)!==Object)return!1;for(const a in e.storage[o]){if(typeof a!="string")return!1;const s=e.storage[o][a];if((s==null?void 0:s.constructor)!==Object||!r(s.shift)&&s.shift!==null||typeof s.note!="string")return!1}}return!0}function Me(e){var t,i;const r=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(n=>typeof n!="number")||e.settings.shifts.find(n=>!r(n))||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var o;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((o=n.shift)==null?void 0:o.constructor)!==Object||typeof n.note!="string"||!r(n.shift)&&n.shift!==null}))}function Ee(e){var t,i;const r=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||typeof e.weekStart!="number"||((t=e.version)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.shifts)||!Array.isArray(e.rhythm)||typeof e.startDate!="number"||e.rhythm.find(n=>typeof n!="number")||e.shifts.find(n=>!r(n))||typeof e.version.version!="string"||typeof e.version.build!="number"||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var o;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((o=n.shift)==null?void 0:o.constructor)!==Object||typeof n.note!="string"||!r(n.shift)&&n.shift!==null}))}function Le(e){return{weekStart:0,version:{version:P,build:H},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:{version:e.indexedDB.version,data:e.indexedDB.data.map(r=>({year:r.year,month:r.month,date:r.date,shift:r.shift||null,note:r.note}))}}}function $e(e){return{weekStart:0,version:{version:P,build:H},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:Ne(e)}}function Ne(e){const r={version:1,data:[]},t=i=>{for(const[n,o]of Object.entries(i)){const[a,s,l]=n.split("-",3).map(c=>parseInt(c,10));isNaN(a)||isNaN(s)||isNaN(l)||s<0||s>11||!("shift"in o)||!("note"in o)||r.data.push({year:a,month:s,date:l,shift:o.shift,note:o.note})}};return Object.values(e.storage).forEach(i=>t(i)),r}const Ae=v`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function Be(e){const r=document.createElement("article");r.className="backup",r.innerHTML=Ae;const t=r.querySelector("section.json button.import"),i=r.querySelector("section.json button.export");return t.onclick=async()=>{const n=document.createElement("input");n.type="file",n.accept="application/json",n.onchange=async()=>{if(!n.files||n.files.length===0)return;const o=new FileReader;o.onload=async()=>await Ie(o.result,e),o.onerror=()=>{alert(`Import data: read file failed: ${o.error}`)},o.readAsText(n.files[0])},n.click()},i.onclick=async()=>{const n={weekStart:u.get("weekStart"),shifts:u.get("shifts"),rhythm:u.get("rhythm"),startDate:u.get("startDate"),version:u.get("version"),indexedDB:{version:y.version,data:await y.getAll()}},o=new Blob([JSON.stringify(n)],{type:"plain/text"});try{await navigator.share({title:"Shift Scheduler Backup",text:"Backup of your Shift Scheduler data",files:[new File([o],"shift-scheduler-backup.json")]})}catch(a){console.error(a);const s=document.createElement("a");s.setAttribute("href",window.URL.createObjectURL(o));const l=new Date,c=(l.getMonth()+1).toString().padStart(2,"0"),d=l.getDate().toString().padStart(2,"0"),f=`shift-scheduler-backup_${l.getFullYear()}-${c}-${d}.json`;s.setAttribute("download",f),s.click()}},r}async function Ie(e,r){if(typeof e!="string")return alert("Invalid data!");let t;try{t=JSON.parse(e)}catch{return alert("Invalid JSON data!")}let i;if(Ee(t))i=t;else if(Me(t))i=Le(t);else if(qe(t))i=$e(t);else return alert("Invalid JSON data!");u.set("shifts",i.shifts),u.set("rhythm",i.rhythm),u.set("startDate",i.startDate),u.set("weekStart",i.weekStart),await y.deleteAll();for(const n of i.indexedDB.data||[])y.add(n).catch(()=>y.put(n));setTimeout(r)}const Ce=v`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button>Browse</button>
        </label>
    </section>
`;function Oe(){const e=document.createElement("article");return e.className="db-browser",e.innerHTML=Ce,e}const je=v`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function Pe(){const e=document.createElement("article");e.className="misc",e.innerHTML=je;const r=e.querySelector('section.week-start input[type="checkbox"]');return r.checked=u.get("weekStart")===1,r.onchange=()=>{u.set("weekStart",r.checked?1:0)},e}const He=v`
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
`;function Xe(){const e=document.createElement("article");e.className="shifts",e.innerHTML=He;const r=()=>{const o=e.querySelector("section.shifts-table tbody"),a=e.querySelector('section.shifts-table template[name="table-item"]');o.innerHTML="",u.get("shifts").forEach(s=>{const l=a.content.cloneNode(!0).querySelector("tr.item");o.appendChild(l),l.querySelector(".name").innerText=s.name;const c=l.querySelector(".short-name");c.style.color=s.color||"inherit",c.innerText=s.visible?s.shortName:"";const d=l.querySelector("button.edit");d.onclick=async()=>{await D(s)&&(u.update("shifts",p=>p.map(m=>m.id===s.id?s:m)),r())};const f=l.querySelector("button.delete");f.onclick=async()=>{confirm(`Delete shift "${s.name}"?`)&&u.update("shifts",h=>h.filter(p=>p.id!==s.id)),r()}}),e.querySelector("section.shifts-table button.add-shift").onclick=async()=>{const s=await D(null);s&&(u.update("shifts",l=>(l.push(s),l)),r())}};r();const t=e.querySelector('section.start-date input[type="date"]');if(u.get("startDate")){const o=new Date,a=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getDate().toString().padStart(2,"0");t.value=`${o.getFullYear()}-${a}-${s}`,t.onchange=()=>{u.set("startDate",new Date(t.value).getTime())}}const n=e.querySelector("section.edit-rhythm button");return n.onclick=async()=>{u.set("rhythm",await ue(u.get("rhythm"),u.get("shifts")))},e}let X="",M=null,T=[];async function F(){X=$(),S("Settings");const e=document.querySelector("#routerTarget");e.innerHTML="",Fe(),e.appendChild(Pe()),e.appendChild(document.createElement("br")),e.appendChild(Xe()),e.appendChild(document.createElement("br")),e.appendChild(Be(_e)),e.appendChild(document.createElement("br")),e.appendChild(Oe())}async function _(){S(X),T.forEach(e=>e()),T=[]}function Fe(){const e=document.querySelector(".ui-app-bar .left .back");e.style.display="inline-flex",M=e.onclick,e.onclick=()=>L.hash.goTo(null,""),T.push(()=>{e.style.display="none",e.onclick=M})}async function _e(){await _(),await F()}const Ue=te({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await Ue()}});y.open(()=>{L.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){Te()},onDestroy(){ke()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){F()},onDestroy(){_()}}}})});
