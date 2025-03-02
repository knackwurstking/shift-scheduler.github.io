var F=Object.defineProperty;var _=(e,r,t)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var g=(e,r,t)=>_(e,typeof r!="symbol"?r+"":r,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();class E{constructor(){this.listeners={}}addListener(r,t){return this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push(t),()=>this.removeListener(r,t)}removeListener(r,t){this.listeners[r]&&(this.listeners[r]=this.listeners[r].filter(i=>i!==t))}dispatch(r,t){this.listeners[r]&&this.listeners[r].forEach(i=>i(t))}}class U{constructor(r){this.prefix="",this.events=new E,this.data={},this.prefix=r}delete(r,t){t!=null&&t.skipStore||localStorage.removeItem(`${this.prefix}${r}`),delete this.data[r]}get(r,t){if(!(t!=null&&t.skipStore)){const i=localStorage.getItem(`${this.prefix}${r}`);if(i!==null)return JSON.parse(i)}if(this.data.hasOwnProperty(r))return this.data[r]}set(r,t,i=!1,n){if(i){let o=null;n!=null&&n.skipStore?o=null:o=localStorage.getItem(`${this.prefix}${r}`),o!==null?this.data[r]=JSON.parse(o):this.data.hasOwnProperty(r)||(this.data[r]=t)}else this.data[r]=t;n!=null&&n.skipStore||localStorage.setItem(`${this.prefix}${r}`,JSON.stringify(this.data[r])),this.events.dispatch(r,this.data[r])}update(r,t,i){const n=this.get(r,i);if(n===void 0)throw new Error(`"${r}" not found, use \`set\``);this.set(r,t(n),!1,i)}listen(r,t,i=!1,n){if(i){const o=this.get(r,n);o!==void 0&&setTimeout(()=>t(o))}return this.events.addListener(r,t)}}function W(e,r){let t=null;async function i(n){var o,a;if(t!==null&&(((o=t.template)==null?void 0:o.onDestroy)!==void 0&&t.template.onDestroy(),t.onDestroy!==void 0&&t.onDestroy()),t=n,t.title!==void 0){const s=document.querySelector("head > title");s!==null&&(s.innerHTML=t.title)}if((t==null?void 0:t.href)!==void 0&&e){const s=await(await fetch(t.href)).text();e.innerHTML=s,t.scripts!==void 0&&t.scripts.forEach(l=>{const u=document.createElement("script");u.setAttribute("data-template",t.href),u.src=l.src,e.appendChild(u)})}if((t==null?void 0:t.onMount)!==void 0&&t.onMount(),t!=null&&t.template){let s=e;if(t.template.target!==void 0&&(s=document.querySelector(t.template.target)),t.template.selector&&s){const l=document.querySelector(t.template.selector);if(!l)throw`${t.template.selector} not found`;l instanceof HTMLTemplateElement?(s.innerHTML="",s.appendChild(l.content.cloneNode(!0))):s.innerHTML=l.innerHTML}((a=t.template)==null?void 0:a.onMount)!==void 0&&t.template.onMount()}}window.addEventListener("hashchange",()=>{const n=window.location.hash.replace("#","");let o="";for(const a of Object.keys(r))n.startsWith(a)&&a>o&&(o=a);if(!o){const a=r["/"];if(a===void 0){console.warn(`Window location “${n}” is missing in routes, and the fallback route “/“ is also missing.`);return}i(a);return}i(r[o])}),window.dispatchEvent(new Event("hashchange"))}function Y(e,r){let t;if(e?t=`?${Object.entries(e).map(([i,n])=>`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&")}`:t="",!r&&!t){location.hash="";return}location.hash=`#${encodeURIComponent(r)}`+(t?`&${t}`:"")}function V(){const e={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(r=>{r.split("&").forEach(t=>{const[i,n]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)})}),e}const J=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:V,goTo:Y,init:W},Symbol.toStringTag,{value:"Module"})),L=Object.freeze(Object.defineProperty({__proto__:null,hash:J},Symbol.toStringTag,{value:"Module"})),z="modulepreload",R=function(e){return"/shift-scheduler.github.io/"+e},x={},K=function(r,t,i){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(t.map(l=>{if(l=R(l),l in x)return;x[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":z,u||(f.as="script"),f.crossOrigin="",f.href=l,s&&f.setAttribute("nonce",s),document.head.appendChild(f),u)return new Promise((d,p)=>{f.addEventListener("load",d),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return r().catch(o)})};function Z(e={}){const{immediate:r=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:n,onRegisteredSW:o,onRegisterError:a}=e;let s,l,u;const h=async(d=!0)=>{await l,u==null||u()};async function f(){if("serviceWorker"in navigator){if(s=await K(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(d=>{a==null||a(d)}),!s)return;u=()=>{s==null||s.messageSkipWaiting()};{let d=!1;const p=()=>{d=!0,s==null||s.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()}),t==null||t()};s.addEventListener("installed",m=>{typeof m.isUpdate>"u"?typeof m.isExternal<"u"&&m.isExternal?p():!d&&(i==null||i()):m.isUpdate||i==null||i()}),s.addEventListener("waiting",p)}s.register({immediate:r}).then(d=>{o?o("/shift-scheduler.github.io/sw.js",d):n==null||n(d)}).catch(d=>{a==null||a(d)})}}return l=f(),h}function $(){return N().innerText}function S(e){N().innerText=e}function N(){return document.querySelector(".ui-app-bar .center .title")}const G="shift-scheduler:",c=(()=>{var i;const e=new U(G),r=new Date;e.set("datePicker",new Date(r.getFullYear(),r.getMonth(),1).getTime(),!1),e.set("weekStart",0,!0),e.set("shifts",[],!0),e.set("rhythm",[],!0),e.set("startDate",0,!0),e.set("editMode",{open:!1,active:null},!1);const t={version:"0.0.0",build:1};switch((i=e.get("version"))==null?void 0:i.build){case void 0:const n=e.get("startDate");n&&e.set("startDate",new Date(n).getTime());break}return e.set("version",t),e})();async function Q(e,r,t){const i=[],n=c.get("weekStart");for(let o=0;o<e;o++){const a=new Date(r,t,o+1-ee(r,t,n));i.push({year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),shift:te(a),note:""})}return i}function ee(e,r,t){const n=new Date(e,r,1).getDay();return t===0?n:n===0?6:n-1}function te(e){const r=c.get("startDate"),t=c.get("shifts"),i=c.get("rhythm");if(!r||!i.length)return null;const n=new Date(r),o=Math.round((e.getTime()-n.getTime())/(1e3*60*60*24));return o<=0?t.find(a=>a.id===i[i.length+(o%i.length||-i.length)])||null:t.find(a=>a.id===i[o%i.length])||null}function re(e){return typeof e.id!="number"||typeof e.name!="string"||typeof e.shortName!="string"||typeof e.color!="string"&&e.color?!1:(e.color==="transparent"&&(e.visible=!1,e.color=null),typeof e.visible!="boolean"&&(e.visible=!0),e.color||(e.color=null),!0)}const v=String.raw;class ne{constructor(r,t){g(this,"version");g(this,"name");g(this,"storeName","user");g(this,"request",null);this.name=r,this.version=t}open(r){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{r&&r()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(r,t){switch(r){case 0:case 1:return ie(t);default:return!1}}get(r,t,i){return new Promise(n=>{const o=this.roStore().get([r,t,i]);o.onsuccess=()=>n(o.result||null),o.onerror=()=>n(null)})}getAll(){return new Promise(r=>{const t=this.roStore().getAll();t.onsuccess=()=>r(t.result),t.onerror=i=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,i),r([])}})}add(r){return new Promise((t,i)=>{const n=this.rwStore().add(r);n.onsuccess=()=>t(),n.onerror=async o=>{console.warn(`[DB] Error while adding "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,o),i(n.error)}})}put(r){return new Promise((t,i)=>{const n=this.rwStore().put(r);n.onsuccess=()=>t(),n.onerror=async o=>{console.warn(`[DB] Error while putting "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,o),i(n.error)}})}delete(r,t,i){return new Promise((n,o)=>{const a=this.rwStore().delete([r,t,i]);a.onsuccess=()=>n(),a.onerror=()=>{o(a.error)}})}deleteAll(){return new Promise((r,t)=>{const i=this.rwStore().clear();i.onsuccess=()=>r(),i.onerror=()=>{t(i.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(r){if(!r.objectStoreNames.contains(this.storeName)){const t=r.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});t.createIndex("year","year",{unique:!1}),t.createIndex("month","month",{unique:!1}),t.createIndex("date","date",{unique:!1}),t.createIndex("note","note",{unique:!1}),t.createIndex("shift","shift",{unique:!1})}}onError(r){var t;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(r){var t;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(r){switch(r.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function ie(e){return!(typeof e.year!="number"||typeof e.month!="number"||typeof e.date!="number"||(typeof e.note!="string"&&(e.note=""),e.shift!==null&&!re(e.shift)))}const b=new ne("shift-scheduler",1);function oe(e){return new Promise(r=>{const t=document.querySelector('dialog[name="date-picker"]'),i=t.querySelector("form"),n=i.querySelector('input[type="month"]');i.querySelector("button.cancel").onclick=a=>{a.preventDefault(),t.close()};let o=null;t.onclose=()=>r(o),i.onsubmit=()=>{o={date:new Date(n.value).getTime()}};{switch(typeof e){case"string":e=new Date(e);break;case"number":e=new Date(e);break}const a=(e.getMonth()+1).toString().padStart(2,"0");n.value=`${e.getFullYear()}-${a}`}t.showModal()})}function se(e,r,t){return new Promise(i=>{const n=document.querySelector('dialog[name="day"]'),o=n.querySelector("form");o.querySelector("button.cancel").onclick=s=>{s.preventDefault(),n.close()};let a=!1;n.onclose=()=>{i(a)},o.onsubmit=()=>{a=!0},o.querySelector(".title").innerText=e.toDateString(),n.showModal()})}function ae(e,r){return new Promise(t=>{const i=document.querySelector('dialog[name="rhythm"]'),n=i.querySelector("form"),o=n.querySelector("tbody"),a=n.querySelector(".shifts-container"),s=i.querySelector('template[name="table-item"]'),l=document.querySelector('template[name="shift-card"]');n.querySelector("button.cancel").onclick=h=>{h.preventDefault(),i.close()};let u=[...e];i.onclose=()=>t(u),n.onsubmit=()=>{u=e};{const h=()=>{o.innerHTML="",e.forEach((d,p)=>{let m=r.find(X=>X.id===d);m||(m={id:d,name:"",shortName:"",color:"var(--destructive)",visible:!1});const y=s.content.cloneNode(!0).querySelector(".table-item");y.querySelector(".name").innerText=m.name;const k=y.querySelector(".short-name");k.style.color=m.color||"inherit",k.innerText=m.visible?m.shortName:"";const H=y.querySelector("button.delete");H.onclick=()=>{e.splice(p,1),h()},o.appendChild(y),y.scrollIntoView()})},f=()=>{a.innerHTML="",r.forEach(d=>{const p=l.content.cloneNode(!0).querySelector(".shift-card");a.appendChild(p);const m=p.querySelector(".name");m.innerText=d.name;const y=p.querySelector(".short-name");y.style.color=d.color||"inherit",y.innerText=d.visible?d.shortName:"",p.onclick=()=>{e.push(d.id),h()}})};h(),f()}i.showModal()})}function D(e){return new Promise(r=>{const t=document.querySelector('dialog[name="shift"]'),i=t.querySelector("form"),n=i.querySelector("input.name"),o=i.querySelector("input.short-name"),a=i.querySelector("input.color-picker"),s=i.querySelector("input.default-color"),l=i.querySelector("input.hidden");i.querySelector("button.cancel").onclick=h=>{h.preventDefault(),t.close()};let u=null;t.onclose=()=>r(u),i.onsubmit=h=>{const f={id:(e==null?void 0:e.id)||new Date().getTime(),name:n.value,shortName:o.value,visible:!l.checked,color:s.checked?null:a.value||null};if(!f.name){h.preventDefault(),n.ariaInvalid="";return}if(n.ariaInvalid=null,!f.shortName){h.preventDefault(),o.ariaInvalid="";return}o.ariaInvalid=null,u=f},n.value=(e==null?void 0:e.name)||"",o.value=(e==null?void 0:e.shortName)||"",a.value=(e==null?void 0:e.color)||"#66FF00",s.checked=!(e!=null&&e.color),l.checked=typeof(e==null?void 0:e.visible)!="boolean"?!1:!e.visible,s.onchange=()=>{a.disabled=s.checked,o.style.color=s.checked?"inherit":a.value||"inherit"},l.onchange=h=>{o.disabled=l.checked,a.disabled=l.checked,s.disabled=l.checked,s.onchange(h)},s.onchange(new Event("change")),l.onchange(new Event("change")),t.showModal()})}const le=75;class ce extends E{constructor(t){super();g(this,"container");g(this,"finalTransform",!1);g(this,"startX",null);g(this,"clientX",null);g(this,"onMouseMove");g(this,"onTouchMove");g(this,"onMouseOrTouchEnd");g(this,"onTouchCancel");g(this,"animationFrameHandler");this.container=t}start(){this.onMouseMove=async t=>{this.finalTransform||t.buttons===1&&(this.startX===null&&(this.startX=t.clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.clientX)},this.onTouchMove=async t=>{this.finalTransform||(this.startX===null&&(this.startX=t.touches[0].clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.touches[0].clientX)},this.onMouseOrTouchEnd=async t=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const i=t.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(i.width+1):-i.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async t=>{this.startX!==null&&await this.onMouseOrTouchEnd(t)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>le*(window.innerWidth/1080)}moveX(t){const i=this.containerItems();i[0].style.left=`calc(-100% + ${t}px)`,i[1].style.left=`calc(0% + ${t}px)`,i[2].style.left=`calc(100% + ${t}px)`}setTransition(t){this.containerItems().forEach(n=>n.style.transition=t)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(t=>t.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const t=this.containerItems(),i=this.clientX>this.startX?"right":"left";switch(i){case"left":this.container.appendChild(this.container.removeChild(t[0]));break;case"right":this.container.insertBefore(this.container.removeChild(t[2]),t[0]);break}this.moveX(0),this.dispatch("swipe",i)}}const A=document.createElement("template");A.innerHTML=v`
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
`;const ue=[0,1,2,3,4,5,6],de=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function he(e,r){const t=A.content.cloneNode(!0).querySelector(".item-content");for(let i=0;i<6;i++){const n=document.createElement("div");t.appendChild(n),n.className="days ui-flex-grid-item ui-flex-grid-row",n.style.setProperty("--gap","0.05rem");for(let o=0;o<7;o++)n.append(me(0))}return t.onclick=async i=>{const n=i.target.closest(".day");if(!n)return;const o=parseInt(n.getAttribute("data-year"),10),a=parseInt(n.getAttribute("data-month"),10),s=parseInt(n.getAttribute("data-date"),10);await b.get(o,a,s),parseInt(n.getAttribute("data-rhythm-id"),10),await se(new Date(o,a,s,6,0,0))},setTimeout(()=>{B(t,e,r)}),t}async function B(e,r,t){const i=new Date(r,t),n=Array.from(e.querySelectorAll(".item-content > .days > .day"));let o=await Q(n.length,i.getFullYear(),i.getMonth());const a=c.get("shifts");o.forEach(async(s,l)=>{const u=await b.get(s.year,s.month,s.date);if(u!==null){s.note=u.note;const h=a.find(f=>{var d;return f.id===((d=u.shift)==null?void 0:d.id)});h?s.shift=h:s.shift=u.shift||s.shift}pe(n[l],s),t!==s.month?n[l].setAttribute("disabled",""):n[l].removeAttribute("disabled"),s.year!==i.getFullYear()||s.month!==i.getMonth()?n[l].classList.add("inactive"):n[l].classList.remove("inactive")}),fe([...e.querySelectorAll(".item-content > .week-days > .week-day")],n)}function fe(e,r){const t=c.get("weekStart");let i=ue;t>0&&(i=[...i.slice(t),...i.slice(0,t)]);const n=i.findIndex(a=>a===6),o=i.findIndex(a=>a===0);e.forEach((a,s)=>{a.innerHTML=`${de[i[s%7]]}`}),[...e,...r].forEach((a,s)=>{a.classList.remove("saturday"),a.classList.remove("sunday"),s%i.length===n&&a.classList.add("saturday"),s%i.length===o&&a.classList.add("sunday")})}function me(e,r){const t=document.createElement("div");return t.className="day ui-flex-grid-item",t.innerHTML=v`
        <div class="date">${e}</div>
        <div class="shift">${""}</div>
    `,t}function pe(e,r){((n,o,a)=>{const s=new Date;return s.getFullYear()===n&&s.getMonth()===o&&s.getDate()===a})(r.year,r.month,r.date)?e.classList.add("today"):e.classList.remove("today"),r.note?e.classList.add("note"):e.classList.remove("note"),e.querySelector(".date").innerHTML=`${r.date}`;const i=e.querySelector(".shift");r.shift?(i.style.setProperty("--shift-color",r.shift.visible?r.shift.color||"inherit":"transparent"),i.innerHTML=r.shift.shortName||""):(i.style.removeProperty("--shift-color"),i.innerHTML=""),e.setAttribute("data-year",r.year.toString()),e.setAttribute("data-month",r.month.toString()),e.setAttribute("data-date",r.date.toString())}async function ge(e){const r=new Date(e);r.setMonth(r.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async t=>{B(t.querySelector(".item-content"),r.getFullYear(),r.getMonth()),r.setMonth(r.getMonth()+1)})}async function ye(e){const t=document.querySelector("#routerTarget").querySelector(".item-container"),i=document.querySelector(".edit-mode");!t||!i||(i.innerHTML="",e.open?(t.setAttribute("edit-mode",""),i.setAttribute("open",""),be(i,e.active)):(t.removeAttribute("edit-mode"),i.removeAttribute("open")))}async function q(e){switch(e){case"left":c.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()+1),t.getTime()});break;case"right":c.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()-1),t.getTime()});break}}function be(e,r){const t=document.querySelector('template[name="shift-card"]');(c.get("shifts")||[]).forEach(i=>{const n=t.content.cloneNode(!0).querySelector(".shift-card");r&&r.id===i.id?n.setAttribute("active",""):n.removeAttribute("active"),n.querySelector(".name").innerText=i.name;const o=n.querySelector(".short-name");o.style.color=i.color||"inherit",o.innerText=i.visible?i.shortName:"",n.onclick=()=>{n.hasAttribute("active")?n.removeAttribute("active"):n.setAttribute("active",""),c.update("editMode",a=>(a.active=n.hasAttribute("active")?i:null,a))},e.appendChild(n)})}const I=document.createElement("template");I.innerHTML=v`
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
`;let O="",w=[];async function ve(){O=$(),S("");const e=document.querySelector("#routerTarget");e.innerHTML="",e.appendChild(I.content.cloneNode(!0));const r=new ce(document.querySelector(".item-container"));Te(),Se(),w.push(c.listen("datePicker",ge,!0),c.listen("editMode",ye,!0)),setTimeout(()=>{r.start()}),r.addListener("swipe",q),w.push(()=>{r.removeListener("swipe",q),r.stop()})}async function we(){S(O),w.forEach(e=>e()),w=[]}function Se(){const e=new Date;Array.from(document.querySelector(".item-container").children).forEach(r=>{r.innerHTML="",r.appendChild(he(e.getFullYear(),e.getMonth()))})}function Te(){const e=document.querySelector(".ui-app-bar .left button.date-picker"),r=document.querySelector(".ui-app-bar .right button.today"),t=document.querySelector(".ui-app-bar .right button.edit"),i=document.querySelector(".ui-app-bar .right button.printer"),n=document.querySelector(".ui-app-bar .right button.settings");e.style.display="inline-flex",r.style.display="inline-flex",t.style.display="inline-flex",i.style.display="inline-flex",n.style.display="inline-flex",e.onclick=async()=>{const o=await oe(c.get("datePicker"));o&&c.set("datePicker",o.date)},r.onclick=async()=>{c.set("datePicker",new Date().getTime())},t.onclick=async()=>{c.update("editMode",o=>(o.open=!o.open,o))},w.push(c.listen("datePicker",o=>{const a=new Date,s=new Date(o),l=s.getFullYear();l===a.getFullYear()&&s.getMonth()===a.getMonth()?r.setAttribute("disabled",""):r.removeAttribute("disabled");const u=(s.getMonth()+1).toString().padStart(2,"0");e.innerText=`${l} / ${u}`},!0)),w.push(()=>{e.style.display="none",r.style.display="none",t.style.display="none",i.style.display="none",n.style.display="none"})}const j="3.0.0",C=13;function ke(e){var t,i,n;const r=o=>o?!(typeof o.id!="number"||typeof o.name!="string"||typeof o.shortName!="string"||typeof o.visible!="boolean"||o.color&&typeof o.color!="string"):!1;if((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.storage)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(o=>typeof o!="number")||e.settings.shifts.find(o=>!r(o)))return!1;for(const o in e.storage){if(typeof o!="string"||((n=e.storage[o])==null?void 0:n.constructor)!==Object)return!1;for(const a in e.storage[o]){if(typeof a!="string")return!1;const s=e.storage[o][a];if((s==null?void 0:s.constructor)!==Object||!r(s.shift)&&s.shift!==null||typeof s.note!="string")return!1}}return!0}function xe(e){var t,i;const r=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(n=>typeof n!="number")||e.settings.shifts.find(n=>!r(n))||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var o;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((o=n.shift)==null?void 0:o.constructor)!==Object||typeof n.note!="string"||!r(n.shift)&&n.shift!==null}))}function De(e){var t,i;const r=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||typeof e.weekStart!="number"||((t=e.version)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.shifts)||!Array.isArray(e.rhythm)||typeof e.startDate!="number"||e.rhythm.find(n=>typeof n!="number")||e.shifts.find(n=>!r(n))||typeof e.version.version!="string"||typeof e.version.build!="number"||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var o;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((o=n.shift)==null?void 0:o.constructor)!==Object||typeof n.note!="string"||!r(n.shift)&&n.shift!==null}))}function qe(e){return{weekStart:0,version:{version:j,build:C},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:{version:e.indexedDB.version,data:e.indexedDB.data.map(r=>({year:r.year,month:r.month,date:r.date,shift:r.shift||null,note:r.note}))}}}function Me(e){return{weekStart:0,version:{version:j,build:C},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:Ee(e)}}function Ee(e){const r={version:1,data:[]},t=i=>{for(const[n,o]of Object.entries(i)){const[a,s,l]=n.split("-",3).map(u=>parseInt(u,10));isNaN(a)||isNaN(s)||isNaN(l)||s<0||s>11||!("shift"in o)||!("note"in o)||r.data.push({year:a,month:s,date:l,shift:o.shift,note:o.note})}};return Object.values(e.storage).forEach(i=>t(i)),r}const Le=v`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function $e(){const e=document.createElement("article");e.className="backup",e.innerHTML=Le;const r=e.querySelector("section.json button.import"),t=e.querySelector("section.json button.export");return r.onclick=async()=>{const i=document.createElement("input");i.type="file",i.accept="application/json",i.onchange=async()=>{if(!i.files||i.files.length===0)return;const n=new FileReader;n.onload=async()=>await Ne(n.result),n.onerror=()=>{alert(`Import data: read file failed: ${n.error}`)},n.readAsText(i.files[0])},i.click()},t.onclick=async()=>{const i={weekStart:c.get("weekStart"),shifts:c.get("shifts"),rhythm:c.get("rhythm"),startDate:c.get("startDate"),version:c.get("version"),indexedDB:{version:b.version,data:await b.getAll()}},n=new Blob([JSON.stringify(i)],{type:"octet/stream"}),o=document.createElement("a");o.setAttribute("href",window.URL.createObjectURL(n));const a=new Date,s=(a.getMonth()+1).toString().padStart(2,"0"),l=a.getDate().toString().padStart(2,"0"),u=`shift-scheduler-backup_${a.getFullYear()}-${s}-${l}.json`;o.setAttribute("download",u),o.click()},e}async function Ne(e){if(typeof e!="string")return alert("Invalid data!");let r;try{r=JSON.parse(e)}catch{return alert("Invalid JSON data!")}let t;if(De(r))t=r;else if(xe(r))t=qe(r);else if(ke(r))t=Me(r);else return alert("Invalid JSON data!");c.set("shifts",t.shifts),c.set("rhythm",t.rhythm),c.set("startDate",t.startDate),c.set("weekStart",t.weekStart),await b.deleteAll();for(const i of t.indexedDB.data||[])b.add(i).catch(()=>b.put(i))}const Ae=v`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button>Browse</button>
        </label>
    </section>
`;function Be(){const e=document.createElement("article");return e.className="db-browser",e.innerHTML=Ae,e}const Ie=v`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function Oe(){const e=document.createElement("article");e.className="misc",e.innerHTML=Ie;const r=e.querySelector('section.week-start input[type="checkbox"]');return r.checked=c.get("weekStart")===1,r.onchange=()=>{c.set("weekStart",r.checked?1:0)},e}const je=v`
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
`;function Ce(){const e=document.createElement("article");e.className="shifts",e.innerHTML=je;const r=()=>{const o=e.querySelector("section.shifts-table tbody"),a=e.querySelector('section.shifts-table template[name="table-item"]');o.innerHTML="",c.get("shifts").forEach(s=>{const l=a.content.cloneNode(!0).querySelector("tr.item");o.appendChild(l),l.querySelector(".name").innerText=s.name;const u=l.querySelector(".short-name");u.style.color=s.color||"inherit",u.innerText=s.visible?s.shortName:"";const h=l.querySelector("button.edit");h.onclick=async()=>{await D(s)&&(c.update("shifts",p=>p.map(m=>m.id===s.id?s:m)),r())};const f=l.querySelector("button.delete");f.onclick=async()=>{confirm(`Delete shift "${s.name}"?`)&&c.update("shifts",d=>d.filter(p=>p.id!==s.id)),r()}}),e.querySelector("section.shifts-table button.add-shift").onclick=async()=>{const s=await D(null);s&&(c.update("shifts",l=>(l.push(s),l)),r())}};r();const t=e.querySelector('section.start-date input[type="date"]');if(c.get("startDate")){const o=new Date,a=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getDate().toString().padStart(2,"0");t.value=`${o.getFullYear()}-${a}-${s}`,t.onchange=()=>{c.set("startDate",new Date(t.value).getTime())}}const n=e.querySelector("section.edit-rhythm button");return n.onclick=async()=>{c.set("rhythm",await ae(c.get("rhythm"),c.get("shifts")))},e}let P="",M=null,T=[];async function Pe(){P=$(),S("Settings");const e=document.querySelector("#routerTarget");e.innerHTML="",Xe(),e.appendChild(Oe()),e.appendChild(document.createElement("br")),e.appendChild(Ce()),e.appendChild(document.createElement("br")),e.appendChild($e()),e.appendChild(document.createElement("br")),e.appendChild(Be())}async function He(){S(P),T.forEach(e=>e()),T=[]}function Xe(){const e=document.querySelector(".ui-app-bar .left .back");e.style.display="inline-flex",M=e.onclick,e.onclick=()=>L.hash.goTo(null,""),T.push(()=>{e.style.display="none",e.onclick=M})}const Fe=Z({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await Fe()}});b.open(()=>{L.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){ve()},onDestroy(){we()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){Pe()},onDestroy(){He()}}}})});
