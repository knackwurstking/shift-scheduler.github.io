var N=Object.defineProperty;var I=(n,t,e)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var m=(n,t,e)=>I(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();class x{constructor(){this.listeners={}}addListener(t,e){return this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e),()=>this.removeListener(t,e)}removeListener(t,e){this.listeners[t]&&(this.listeners[t]=this.listeners[t].filter(r=>r!==e))}dispatch(t,e){this.listeners[t]&&this.listeners[t].forEach(r=>r(e))}}class C{constructor(t){this.prefix="",this.events=new x,this.data={},this.prefix=t}delete(t,e){e!=null&&e.skipStore||localStorage.removeItem(`${this.prefix}${t}`),delete this.data[t]}get(t,e){if(!(e!=null&&e.skipStore)){const r=localStorage.getItem(`${this.prefix}${t}`);if(r!==null)return JSON.parse(r)}if(this.data.hasOwnProperty(t))return this.data[t]}set(t,e,r=!1,i){if(r){let s=null;i!=null&&i.skipStore?s=null:s=localStorage.getItem(`${this.prefix}${t}`),s!==null?this.data[t]=JSON.parse(s):this.data.hasOwnProperty(t)||(this.data[t]=e)}else this.data[t]=e;i!=null&&i.skipStore||localStorage.setItem(`${this.prefix}${t}`,JSON.stringify(this.data[t])),this.events.dispatch(t,this.data[t])}update(t,e,r){const i=this.get(t,r);if(i===void 0)throw new Error(`"${t}" not found, use \`set\``);this.set(t,e(i),!1,r)}listen(t,e,r=!1,i){if(r){const s=this.get(t,i);s!==void 0&&setTimeout(()=>e(s))}return this.events.addListener(t,e)}}function H(n,t){let e=null;async function r(i){var s,o;if(e!==null&&(((s=e.template)==null?void 0:s.onDestroy)!==void 0&&e.template.onDestroy(),e.onDestroy!==void 0&&e.onDestroy()),e=i,e.title!==void 0){const a=document.querySelector("head > title");a!==null&&(a.innerHTML=e.title)}if((e==null?void 0:e.href)!==void 0&&n){const a=await(await fetch(e.href)).text();n.innerHTML=a,e.scripts!==void 0&&e.scripts.forEach(l=>{const c=document.createElement("script");c.setAttribute("data-template",e.href),c.src=l.src,n.appendChild(c)})}if((e==null?void 0:e.onMount)!==void 0&&e.onMount(),e!=null&&e.template){let a=n;if(e.template.target!==void 0&&(a=document.querySelector(e.template.target)),e.template.selector&&a){const l=document.querySelector(e.template.selector);if(!l)throw`${e.template.selector} not found`;l instanceof HTMLTemplateElement?(a.innerHTML="",a.appendChild(l.content.cloneNode(!0))):a.innerHTML=l.innerHTML}((o=e.template)==null?void 0:o.onMount)!==void 0&&e.template.onMount()}}window.addEventListener("hashchange",()=>{const i=window.location.hash.replace("#","");let s="";for(const o of Object.keys(t))i.startsWith(o)&&o>s&&(s=o);if(!s){const o=t["/"];if(o===void 0){console.warn(`Window location “${i}” is missing in routes, and the fallback route “/“ is also missing.`);return}r(o);return}r(t[s])}),window.dispatchEvent(new Event("hashchange"))}function P(n,t){let e;if(n?e=`?${Object.entries(n).map(([r,i])=>`${encodeURIComponent(r)}=${encodeURIComponent(i)}`).join("&")}`:e="",!t&&!e){location.hash="";return}location.hash=`#${encodeURIComponent(t)}`+(e?`&${e}`:"")}function B(){const n={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(t=>{t.split("&").forEach(e=>{const[r,i]=e.split("=");n[decodeURIComponent(r)]=decodeURIComponent(i)})}),n}const A=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:B,goTo:P,init:H},Symbol.toStringTag,{value:"Module"})),X=Object.freeze(Object.defineProperty({__proto__:null,hash:A},Symbol.toStringTag,{value:"Module"})),O="modulepreload",j=function(n){return"/shift-scheduler.github.io/"+n},T={},F=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(l=>{if(l=j(l),l in T)return;T[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":O,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((u,p)=>{h.addEventListener("load",u),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};function _(n={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=n;let a,l,c;const f=async(u=!0)=>{await l,c==null||c()};async function h(){if("serviceWorker"in navigator){if(a=await F(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:u}},[]).then(({Workbox:u})=>new u("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(u=>{o==null||o(u)}),!a)return;c=()=>{a==null||a.messageSkipWaiting()};{let u=!1;const p=()=>{u=!0,a==null||a.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()}),e==null||e()};a.addEventListener("installed",g=>{typeof g.isUpdate>"u"?typeof g.isExternal<"u"&&g.isExternal?p():!u&&(r==null||r()):g.isUpdate||r==null||r()}),a.addEventListener("waiting",p)}a.register({immediate:t}).then(u=>{s?s("/shift-scheduler.github.io/sw.js",u):i==null||i(u)}).catch(u=>{o==null||o(u)})}}return l=h(),f}function M(){return q().innerText}function w(n){q().innerText=n}function q(){return document.querySelector(".ui-app-bar .center .title")}const U="shift-scheduler:",d=(()=>{var r,i;const n=new C(U),t=new Date;n.set("date-picker",new Date(t.getFullYear(),t.getMonth(),1).getTime(),!1),n.set("week-start",0,!0),n.set("settings",{shifts:[],rhythm:[],startDate:0},!0),n.set("edit-mode",{open:!1,active:null},!1);const e={version:"0.0.0",build:1};switch((r=n.get("version"))==null?void 0:r.build){case void 0:const s=(i=n.get("settings"))==null?void 0:i.startDate;s&&n.update("settings",o=>(o.startDate=new Date(s).getTime(),o));break}return n.set("version",e),n})();async function W(n,t,e){const r=[],i=d.get("week-start");for(let s=0;s<n;s++){const o=new Date(t,e,s+1-Y(t,e,i));r.push({year:o.getFullYear(),month:o.getMonth(),date:o.getDate(),shift:R(o),note:""})}return r}function Y(n,t,e){const i=new Date(n,t,1).getDay();return e===0?i:i===0?6:i-1}function R(n){const t=d.get("settings");if(!t.startDate||!t.rhythm.length)return null;const e=new Date(t.startDate),r=Math.round((n.getTime()-e.getTime())/(1e3*60*60*24));return r<=0?t.shifts.find(i=>i.id===t.rhythm[t.rhythm.length+(r%t.rhythm.length||-t.rhythm.length)])||null:t.shifts.find(i=>i.id===t.rhythm[r%t.rhythm.length])||null}function z(n){return typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.color!="string"&&n.color?!1:(n.color==="transparent"&&(n.visible=!1,n.color=null),typeof n.visible!="boolean"&&(n.visible=!0),n.color||(n.color=null),!0)}const v=String.raw;class J{constructor(t,e){m(this,"version");m(this,"name");m(this,"storeName","user");m(this,"request",null);this.name=t,this.version=e}open(t){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{t&&t()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(t,e){switch(t){case 0:case 1:return V(e);default:return!1}}get(t,e,r){return new Promise(i=>{const s=this.roStore().get([t,e,r]);s.onsuccess=()=>i(s.result||null),s.onerror=()=>i(null)})}getAll(){return new Promise(t=>{const e=this.roStore().getAll();e.onsuccess=()=>t(e.result),e.onerror=r=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,r),t([])}})}add(t){return new Promise((e,r)=>{const i=this.rwStore().add(t);i.onsuccess=()=>e(),i.onerror=async s=>{console.warn(`[DB] Error while adding "${t.year}-${t.month}-${t.date}" to "${this.storeName}"!`,s),r(i.error)}})}put(t){return new Promise((e,r)=>{const i=this.rwStore().put(t);i.onsuccess=()=>e(),i.onerror=async s=>{console.warn(`[DB] Error while putting "${t.year}-${t.month}-${t.date}" to "${this.storeName}"!`,s),r(i.error)}})}delete(t,e,r){return new Promise((i,s)=>{const o=this.rwStore().delete([t,e,r]);o.onsuccess=()=>i(),o.onerror=()=>{s(o.error)}})}deleteAll(){return new Promise((t,e)=>{const r=this.rwStore().clear();r.onsuccess=()=>t(),r.onerror=()=>{e(r.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(t){if(!t.objectStoreNames.contains(this.storeName)){const e=t.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});e.createIndex("year","year",{unique:!1}),e.createIndex("month","month",{unique:!1}),e.createIndex("date","date",{unique:!1}),e.createIndex("note","note",{unique:!1}),e.createIndex("shift","shift",{unique:!1})}}onError(t){var e;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((e=this.request)==null?void 0:e.error)||null,event:t}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(t){var e;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((e=this.request)==null?void 0:e.error)||null,event:t}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(t){switch(t.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function V(n){return!(typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||(typeof n.note!="string"&&(n.note=""),n.shift!==null&&!z(n.shift)))}const b=new J("shift-scheduler",1);function K(n){return new Promise(t=>{const e=document.querySelector('dialog[name="date-picker"]'),r=e.querySelector("form"),i=r.querySelector('input[type="month"]');switch(typeof n){case"string":n=new Date(n);break;case"number":n=new Date(n);break}i.value=`${n.getFullYear()}-${(n.getMonth()+1).toString().padStart(2,"0")}`;let s=null;r.onsubmit=()=>{s={date:new Date(i.value).getTime()}},e.onclose=()=>t(s),e.showModal()})}function Z(n){return new Promise(t=>{const e=document.querySelector('dialog[name="shift"]'),r=e.querySelector("form"),i=r.querySelector("input.name"),s=r.querySelector("input.short-name"),o=r.querySelector("input.color-picker"),a=r.querySelector("input.default-color"),l=r.querySelector("input.hidden");let c=null;e.onclose=()=>t(c),r.onsubmit=f=>{const h={id:n.id||new Date().getTime(),name:i.value,shortName:s.value,visible:!l.checked,color:a.checked?null:o.value||null};if(!h.name){f.preventDefault(),i.ariaInvalid="";return}if(i.ariaInvalid=null,!h.shortName){f.preventDefault(),s.ariaInvalid="";return}s.ariaInvalid=null,c=h},i.value=n.name,s.value=n.shortName,o.value=n.color||"inherit",a.checked=!n.color,l.checked=!n.visible,a.onchange=()=>{o.disabled=a.checked,s.style.color=a.checked?"inherit":o.value||"inherit"},l.onchange=f=>{s.disabled=l.checked,o.disabled=l.checked,a.disabled=l.checked,a.onchange(f)},e.showModal()})}function G(n,t){return new Promise(e=>{const r=document.querySelector('dialog[name="rhythm"]'),i=r.querySelector("form");i.querySelector("tbody"),i.querySelector(".shifts-container"),r.querySelector('template[name="table-item"]'),document.querySelector('template[name="shift-card"]');const s=n;r.onclose=()=>e(s),i.onsubmit=()=>{e(n)},r.showModal()})}const Q=75;class ee extends x{constructor(e){super();m(this,"container");m(this,"finalTransform",!1);m(this,"startX",null);m(this,"clientX",null);m(this,"onMouseMove");m(this,"onTouchMove");m(this,"onMouseOrTouchEnd");m(this,"onTouchCancel");m(this,"animationFrameHandler");this.container=e}start(){this.onMouseMove=async e=>{this.finalTransform||e.buttons===1&&(this.startX===null&&(this.startX=e.clientX,this.containerItems().forEach(r=>r.classList.add("moving"))),this.clientX=e.clientX)},this.onTouchMove=async e=>{this.finalTransform||(this.startX===null&&(this.startX=e.touches[0].clientX,this.containerItems().forEach(r=>r.classList.add("moving"))),this.clientX=e.touches[0].clientX)},this.onMouseOrTouchEnd=async e=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const r=e.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(r.width+1):-r.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async e=>{this.startX!==null&&await this.onMouseOrTouchEnd(e)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>Q*(window.innerWidth/1080)}moveX(e){const r=this.containerItems();r[0].style.left=`calc(-100% + ${e}px)`,r[1].style.left=`calc(0% + ${e}px)`,r[2].style.left=`calc(100% + ${e}px)`}setTransition(e){this.containerItems().forEach(i=>i.style.transition=e)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(e=>e.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const e=this.containerItems(),r=this.clientX>this.startX?"right":"left";switch(r){case"left":this.container.appendChild(this.container.removeChild(e[0]));break;case"right":this.container.insertBefore(this.container.removeChild(e[2]),e[0]);break}this.moveX(0),this.dispatch("swipe",r)}}const te=[0,1,2,3,4,5,6],ne=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function re(n,t){const e=document.querySelector('template[name="calendar-item-content"]').content.cloneNode(!0),r=e.querySelector(".item-content");for(let i=0;i<6;i++){const s=document.createElement("div");r.appendChild(s),s.className="days ui-flex-grid-item ui-flex-grid-row",s.style.setProperty("--gap","0.05rem");for(let o=0;o<7;o++)s.append(se(0))}return setTimeout(()=>{E(r,n,t)}),e}async function E(n,t,e){const r=new Date(t,e),i=d.get("settings"),s=Array.from(n.querySelectorAll(".item-content > .days > .day"));(await W(s.length,r.getFullYear(),r.getMonth())).forEach(async(a,l)=>{const c=await b.get(a.year,a.month,a.date);if(c!==null){a.note=c.note;const f=i.shifts.find(h=>{var u;return h.id===((u=c.shift)==null?void 0:u.id)});f?a.shift=f:a.shift=c.shift||a.shift}oe(s[l],a),e!==a.month?s[l].setAttribute("disabled",""):s[l].removeAttribute("disabled"),a.year!==r.getFullYear()||a.month!==r.getMonth()?s[l].classList.add("inactive"):s[l].classList.remove("inactive")}),ie([...n.querySelectorAll(".item-content > .week-days > .week-day")],s)}function ie(n,t){const e=d.get("week-start");let r=te;e>0&&(r=[...r.slice(e),...r.slice(0,e)]);const i=r.findIndex(o=>o===6),s=r.findIndex(o=>o===0);n.forEach((o,a)=>{o.innerHTML=`${ne[r[a%7]]}`}),[...n,...t].forEach((o,a)=>{o.classList.remove("saturday"),o.classList.remove("sunday"),a%r.length===i&&o.classList.add("saturday"),a%r.length===s&&o.classList.add("sunday")})}function se(n,t){const e=document.createElement("div");return e.className="day ui-flex-grid-item",e.innerHTML=v`
        <div class="date">${n}</div>
        <div class="shift">${""}</div>
    `,e}function oe(n,t){((i,s,o)=>{const a=new Date;return a.getFullYear()===i&&a.getMonth()===s&&a.getDate()===o})(t.year,t.month,t.date)?n.classList.add("today"):n.classList.remove("today"),t.note?n.classList.add("note"):n.classList.remove("note"),n.querySelector(".date").innerHTML=`${t.date}`;const r=n.querySelector(".shift");t.shift?(r.style.setProperty("--shift-color",t.shift.visible?t.shift.color||"inherit":"transparent"),r.innerHTML=t.shift.shortName||""):(r.style.removeProperty("--shift-color"),r.innerHTML=""),n.setAttribute("data-year",t.year.toString()),n.setAttribute("data-month",t.month.toString()),n.setAttribute("data-date",t.date.toString())}async function ae(n){const t=new Date(n);t.setMonth(t.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async e=>{E(e.querySelector(".item-content"),t.getFullYear(),t.getMonth()),t.setMonth(t.getMonth()+1)})}async function le(n){}async function k(n){switch(n){case"left":d.update("date-picker",t=>{const e=new Date(t);return e.setMonth(e.getMonth()+1),e.getTime()});break;case"right":d.update("date-picker",t=>{const e=new Date(t);return e.setMonth(e.getMonth()-1),e.getTime()});break}}const D=document.createElement("template");D.innerHTML=v`
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

        #routerTarget .edit-mode[edit-mode] {
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

    <!-- MARK: Calendar Item Template -->

    <template name="calendar-item-content">
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
    </template>
`;let L="",y=[];async function ce(){L=M(),w("");const n=document.querySelector("#routerTarget");n.innerHTML="",n.appendChild(D.content.cloneNode(!0));const t=new ee(document.querySelector(".item-container"));he(),de(),me(),setTimeout(()=>{t.start()}),t.addListener("swipe",k),y.push(()=>{t.removeListener("swipe",k),t.stop()})}async function ue(){w(L),y.forEach(n=>n()),y=[]}function de(){const n=new Date;Array.from(document.querySelector(".item-container").children).forEach(t=>{t.innerHTML="",t.appendChild(re(n.getFullYear(),n.getMonth()))})}function he(){const n=document.querySelector(".ui-app-bar .left button.date-picker"),t=document.querySelector(".ui-app-bar .right button.today"),e=document.querySelector(".ui-app-bar .right button.edit"),r=document.querySelector(".ui-app-bar .right button.printer"),i=document.querySelector(".ui-app-bar .right button.settings");n.style.display="inline-flex",t.style.display="inline-flex",e.style.display="inline-flex",r.style.display="inline-flex",i.style.display="inline-flex",n.onclick=async()=>{const s=await K(d.get("date-picker"));s&&d.set("date-picker",s.date)},t.onclick=async()=>{d.set("date-picker",new Date().getTime())},y.push(d.listen("date-picker",s=>{const o=new Date,a=new Date(s),l=a.getFullYear();l===o.getFullYear()&&a.getMonth()===o.getMonth()?t.setAttribute("disabled",""):t.removeAttribute("disabled");const c=(a.getMonth()+1).toString().padStart(2,"0");n.innerText=`${l} / ${c}`},!0)),y.push(()=>{n.style.display="none",t.style.display="none",e.style.display="none",r.style.display="none",i.style.display="none"})}function me(){y.push(d.listen("date-picker",ae,!0),d.listen("edit-mode",le,!0))}const fe=v`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function pe(){const n=document.createElement("article");n.className="backup",n.innerHTML=fe;const t=n.querySelector("section.json button.import"),e=n.querySelector("section.json button.export");return t.onclick=async()=>{const r=document.createElement("input");r.type="file",r.accept="application/json",r.onchange=async()=>{if(!r.files||r.files.length===0)return;const i=new FileReader;i.onload=()=>{},i.onerror=()=>{alert(`Import data: read file failed: ${i.error}`)},i.readAsText(r.files[0])},r.click()},e.onclick=async()=>{const r=new Blob([JSON.stringify({weekStart:d.get("week-start"),settings:d.get("settings"),indexedDB:{version:b.version,data:await b.getAll()}})],{type:"octet/stream"}),i=document.createElement("a");i.setAttribute("href",window.URL.createObjectURL(r));const s=new Date,o=(s.getMonth()+1).toString().padStart(2,"0"),a=s.getDate().toString().padStart(2,"0"),l=`shift-scheduler-backup_${s.getFullYear()}-${o}-${a}.json`;i.setAttribute("download",l),i.click()},n}const ge=v`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button>Browse</button>
        </label>
    </section>
`;function ye(){const n=document.createElement("article");return n.className="db-browser",n.innerHTML=ge,n}const ve=v`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function be(){const n=document.createElement("article");n.className="misc",n.innerHTML=ve;const t=n.querySelector('section.week-start input[type="checkbox"]');return t.checked=d.get("week-start")===1,t.onchange=()=>{d.set("week-start",t.checked?1:0)},n}const we=v`
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
            <button>Add a new shift</button>
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
`;function Se(){const n=document.createElement("article");n.className="shifts",n.innerHTML=we;const t=()=>{const i=n.querySelector("section.shifts-table tbody"),s=n.querySelector("section.shifts-table template.table-item");i.innerHTML="",d.get("settings").shifts.forEach(o=>{const a=s.content.cloneNode(!0).querySelector("tr.item");i.appendChild(a),a.querySelector(".name").innerText=o.name;const l=a.querySelector(".short-name");l.style.color=o.color||"inherit",l.innerText=o.visible?o.shortName:"";const c=a.querySelector("button.edit");c.onclick=async()=>{await Z(o)&&(d.update("settings",u=>({...u,shifts:u.shifts.map(p=>p.id===o.id?o:p)})),t())};const f=a.querySelector("button.delete");f.onclick=async()=>{confirm(`Delete shift "${o.name}"?`)&&d.update("settings",h=>({...h,shifts:h.shifts.filter(u=>u.id!==o.id)})),t()}})};t();const e=n.querySelector('section.start-date input[type="date"]');e.value=new Date(d.get("settings").startDate).toDateString(),e.onchange=()=>{d.update("settings",i=>(i.startDate=new Date(e.value).getTime(),i))};const r=n.querySelector("section.edit-rhythm button");return r.onclick=async()=>{const i=d.get("settings");i.rhythm=await G(i.rhythm,i.shifts),d.set("settings",i)},n}let $="",S=[];async function Te(){$=M(),w("Settings");const n=document.querySelector("#routerTarget");n.innerHTML="",xe(),n.appendChild(be()),n.appendChild(document.createElement("br")),n.appendChild(Se()),n.appendChild(document.createElement("br")),n.appendChild(pe()),n.appendChild(document.createElement("br")),n.appendChild(ye())}async function ke(){w($),S.forEach(n=>n()),S=[]}function xe(){const n=document.querySelector(".ui-app-bar .left .back");n.style.display="inline-flex",S.push(()=>{n.style.display="none"})}const Me=_({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await Me()}});b.open(()=>{X.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){ce()},onDestroy(){ue()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){Te()},onDestroy(){ke()}}}})});
