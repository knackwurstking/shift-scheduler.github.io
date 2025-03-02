var O=Object.defineProperty;var A=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var f=(e,t,r)=>A(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();class x{constructor(){this.listeners={}}addListener(t,r){return this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(r),()=>this.removeListener(t,r)}removeListener(t,r){this.listeners[t]&&(this.listeners[t]=this.listeners[t].filter(n=>n!==r))}dispatch(t,r){this.listeners[t]&&this.listeners[t].forEach(n=>n(r))}}class j{constructor(t){this.prefix="",this.events=new x,this.data={},this.prefix=t}delete(t,r){r!=null&&r.skipStore||localStorage.removeItem(`${this.prefix}${t}`),delete this.data[t]}get(t,r){if(!(r!=null&&r.skipStore)){const n=localStorage.getItem(`${this.prefix}${t}`);if(n!==null)return JSON.parse(n)}if(this.data.hasOwnProperty(t))return this.data[t]}set(t,r,n=!1,i){if(n){let s=null;i!=null&&i.skipStore?s=null:s=localStorage.getItem(`${this.prefix}${t}`),s!==null?this.data[t]=JSON.parse(s):this.data.hasOwnProperty(t)||(this.data[t]=r)}else this.data[t]=r;i!=null&&i.skipStore||localStorage.setItem(`${this.prefix}${t}`,JSON.stringify(this.data[t])),this.events.dispatch(t,this.data[t])}update(t,r,n){const i=this.get(t,n);if(i===void 0)throw new Error(`"${t}" not found, use \`set\``);this.set(t,r(i),!1,n)}listen(t,r,n=!1,i){if(n){const s=this.get(t,i);s!==void 0&&setTimeout(()=>r(s))}return this.events.addListener(t,r)}}function I(e,t){let r=null;async function n(i){var s,o;if(r!==null&&(((s=r.template)==null?void 0:s.onDestroy)!==void 0&&r.template.onDestroy(),r.onDestroy!==void 0&&r.onDestroy()),r=i,r.title!==void 0){const a=document.querySelector("head > title");a!==null&&(a.innerHTML=r.title)}if((r==null?void 0:r.href)!==void 0&&e){const a=await(await fetch(r.href)).text();e.innerHTML=a,r.scripts!==void 0&&r.scripts.forEach(l=>{const c=document.createElement("script");c.setAttribute("data-template",r.href),c.src=l.src,e.appendChild(c)})}if((r==null?void 0:r.onMount)!==void 0&&r.onMount(),r!=null&&r.template){let a=e;if(r.template.target!==void 0&&(a=document.querySelector(r.template.target)),r.template.selector&&a){const l=document.querySelector(r.template.selector);if(!l)throw`${r.template.selector} not found`;l instanceof HTMLTemplateElement?(a.innerHTML="",a.appendChild(l.content.cloneNode(!0))):a.innerHTML=l.innerHTML}((o=r.template)==null?void 0:o.onMount)!==void 0&&r.template.onMount()}}window.addEventListener("hashchange",()=>{const i=window.location.hash.replace("#","");let s="";for(const o of Object.keys(t))i.startsWith(o)&&o>s&&(s=o);if(!s){const o=t["/"];if(o===void 0){console.warn(`Window location “${i}” is missing in routes, and the fallback route “/“ is also missing.`);return}n(o);return}n(t[s])}),window.dispatchEvent(new Event("hashchange"))}function C(e,t){let r;if(e?r=`?${Object.entries(e).map(([n,i])=>`${encodeURIComponent(n)}=${encodeURIComponent(i)}`).join("&")}`:r="",!t&&!r){location.hash="";return}location.hash=`#${encodeURIComponent(t)}`+(r?`&${r}`:"")}function H(){const e={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(t=>{t.split("&").forEach(r=>{const[n,i]=r.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)})}),e}const P=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:H,goTo:C,init:I},Symbol.toStringTag,{value:"Module"})),X=Object.freeze(Object.defineProperty({__proto__:null,hash:P},Symbol.toStringTag,{value:"Module"})),F="modulepreload",_=function(e){return"/shift-scheduler.github.io/"+e},T={},U=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=_(l),l in T)return;T[l]=!0;const c=l.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":F,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((u,p)=>{h.addEventListener("load",u),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};function W(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:n,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=e;let a,l,c;const m=async(u=!0)=>{await l,c==null||c()};async function h(){if("serviceWorker"in navigator){if(a=await U(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:u}},[]).then(({Workbox:u})=>new u("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(u=>{o==null||o(u)}),!a)return;c=()=>{a==null||a.messageSkipWaiting()};{let u=!1;const p=()=>{u=!0,a==null||a.addEventListener("controlling",y=>{y.isUpdate&&window.location.reload()}),r==null||r()};a.addEventListener("installed",y=>{typeof y.isUpdate>"u"?typeof y.isExternal<"u"&&y.isExternal?p():!u&&(n==null||n()):y.isUpdate||n==null||n()}),a.addEventListener("waiting",p)}a.register({immediate:t}).then(u=>{s?s("/shift-scheduler.github.io/sw.js",u):i==null||i(u)}).catch(u=>{o==null||o(u)})}}return l=h(),m}function D(){return M().innerText}function w(e){M().innerText=e}function M(){return document.querySelector(".ui-app-bar .center .title")}const Y="shift-scheduler:",d=(()=>{var n,i;const e=new j(Y),t=new Date;e.set("date-picker",new Date(t.getFullYear(),t.getMonth(),1).getTime(),!1),e.set("week-start",0,!0),e.set("settings",{shifts:[],rhythm:[],startDate:0},!0),e.set("edit-mode",{open:!1,active:null},!1);const r={version:"0.0.0",build:1};switch((n=e.get("version"))==null?void 0:n.build){case void 0:const s=(i=e.get("settings"))==null?void 0:i.startDate;s&&e.update("settings",o=>(o.startDate=new Date(s).getTime(),o));break}return e.set("version",r),e})();async function V(e,t,r){const n=[],i=d.get("week-start");for(let s=0;s<e;s++){const o=new Date(t,r,s+1-J(t,r,i));n.push({year:o.getFullYear(),month:o.getMonth(),date:o.getDate(),shift:R(o),note:""})}return n}function J(e,t,r){const i=new Date(e,t,1).getDay();return r===0?i:i===0?6:i-1}function R(e){const t=d.get("settings");if(!t.startDate||!t.rhythm.length)return null;const r=new Date(t.startDate),n=Math.round((e.getTime()-r.getTime())/(1e3*60*60*24));return n<=0?t.shifts.find(i=>i.id===t.rhythm[t.rhythm.length+(n%t.rhythm.length||-t.rhythm.length)])||null:t.shifts.find(i=>i.id===t.rhythm[n%t.rhythm.length])||null}function z(e){return typeof e.id!="number"||typeof e.name!="string"||typeof e.shortName!="string"||typeof e.color!="string"&&e.color?!1:(e.color==="transparent"&&(e.visible=!1,e.color=null),typeof e.visible!="boolean"&&(e.visible=!0),e.color||(e.color=null),!0)}const v=String.raw;class K{constructor(t,r){f(this,"version");f(this,"name");f(this,"storeName","user");f(this,"request",null);this.name=t,this.version=r}open(t){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{t&&t()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(t,r){switch(t){case 0:case 1:return Z(r);default:return!1}}get(t,r,n){return new Promise(i=>{const s=this.roStore().get([t,r,n]);s.onsuccess=()=>i(s.result||null),s.onerror=()=>i(null)})}getAll(){return new Promise(t=>{const r=this.roStore().getAll();r.onsuccess=()=>t(r.result),r.onerror=n=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,n),t([])}})}add(t){return new Promise((r,n)=>{const i=this.rwStore().add(t);i.onsuccess=()=>r(),i.onerror=async s=>{console.warn(`[DB] Error while adding "${t.year}-${t.month}-${t.date}" to "${this.storeName}"!`,s),n(i.error)}})}put(t){return new Promise((r,n)=>{const i=this.rwStore().put(t);i.onsuccess=()=>r(),i.onerror=async s=>{console.warn(`[DB] Error while putting "${t.year}-${t.month}-${t.date}" to "${this.storeName}"!`,s),n(i.error)}})}delete(t,r,n){return new Promise((i,s)=>{const o=this.rwStore().delete([t,r,n]);o.onsuccess=()=>i(),o.onerror=()=>{s(o.error)}})}deleteAll(){return new Promise((t,r)=>{const n=this.rwStore().clear();n.onsuccess=()=>t(),n.onerror=()=>{r(n.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(t){if(!t.objectStoreNames.contains(this.storeName)){const r=t.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});r.createIndex("year","year",{unique:!1}),r.createIndex("month","month",{unique:!1}),r.createIndex("date","date",{unique:!1}),r.createIndex("note","note",{unique:!1}),r.createIndex("shift","shift",{unique:!1})}}onError(t){var r;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((r=this.request)==null?void 0:r.error)||null,event:t}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(t){var r;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((r=this.request)==null?void 0:r.error)||null,event:t}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(t){switch(t.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function Z(e){return!(typeof e.year!="number"||typeof e.month!="number"||typeof e.date!="number"||(typeof e.note!="string"&&(e.note=""),e.shift!==null&&!z(e.shift)))}const g=new K("shift-scheduler",1);function G(e){return new Promise(t=>{const r=document.querySelector('dialog[name="date-picker"]'),n=r.querySelector("form"),i=n.querySelector('input[type="month"]');switch(typeof e){case"string":e=new Date(e);break;case"number":e=new Date(e);break}i.value=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}`;let s=null;n.onsubmit=()=>{s={date:new Date(i.value).getTime()}},r.onclose=()=>t(s),r.showModal()})}function Q(e){return new Promise(t=>{const r=document.querySelector('dialog[name="shift"]'),n=r.querySelector("form"),i=n.querySelector("input.name"),s=n.querySelector("input.short-name"),o=n.querySelector("input.color-picker"),a=n.querySelector("input.default-color"),l=n.querySelector("input.hidden");let c=null;r.onclose=()=>t(c),n.onsubmit=m=>{const h={id:e.id||new Date().getTime(),name:i.value,shortName:s.value,visible:!l.checked,color:a.checked?null:o.value||null};if(!h.name){m.preventDefault(),i.ariaInvalid="";return}if(i.ariaInvalid=null,!h.shortName){m.preventDefault(),s.ariaInvalid="";return}s.ariaInvalid=null,c=h},i.value=e.name,s.value=e.shortName,o.value=e.color||"inherit",a.checked=!e.color,l.checked=!e.visible,a.onchange=()=>{o.disabled=a.checked,s.style.color=a.checked?"inherit":o.value||"inherit"},l.onchange=m=>{s.disabled=l.checked,o.disabled=l.checked,a.disabled=l.checked,a.onchange(m)},r.showModal()})}function ee(e,t){return new Promise(r=>{const n=document.querySelector('dialog[name="rhythm"]'),i=n.querySelector("form");i.querySelector("tbody"),i.querySelector(".shifts-container"),n.querySelector('template[name="table-item"]'),document.querySelector('template[name="shift-card"]');const s=e;n.onclose=()=>r(s),i.onsubmit=()=>{r(e)},n.showModal()})}const te=75;class re extends x{constructor(r){super();f(this,"container");f(this,"finalTransform",!1);f(this,"startX",null);f(this,"clientX",null);f(this,"onMouseMove");f(this,"onTouchMove");f(this,"onMouseOrTouchEnd");f(this,"onTouchCancel");f(this,"animationFrameHandler");this.container=r}start(){this.onMouseMove=async r=>{this.finalTransform||r.buttons===1&&(this.startX===null&&(this.startX=r.clientX,this.containerItems().forEach(n=>n.classList.add("moving"))),this.clientX=r.clientX)},this.onTouchMove=async r=>{this.finalTransform||(this.startX===null&&(this.startX=r.touches[0].clientX,this.containerItems().forEach(n=>n.classList.add("moving"))),this.clientX=r.touches[0].clientX)},this.onMouseOrTouchEnd=async r=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const n=r.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(n.width+1):-n.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async r=>{this.startX!==null&&await this.onMouseOrTouchEnd(r)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>te*(window.innerWidth/1080)}moveX(r){const n=this.containerItems();n[0].style.left=`calc(-100% + ${r}px)`,n[1].style.left=`calc(0% + ${r}px)`,n[2].style.left=`calc(100% + ${r}px)`}setTransition(r){this.containerItems().forEach(i=>i.style.transition=r)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(r=>r.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const r=this.containerItems(),n=this.clientX>this.startX?"right":"left";switch(n){case"left":this.container.appendChild(this.container.removeChild(r[0]));break;case"right":this.container.insertBefore(this.container.removeChild(r[2]),r[0]);break}this.moveX(0),this.dispatch("swipe",n)}}const ne=[0,1,2,3,4,5,6],ie=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function se(e,t){const r=document.querySelector('template[name="calendar-item-content"]').content.cloneNode(!0),n=r.querySelector(".item-content");for(let i=0;i<6;i++){const s=document.createElement("div");n.appendChild(s),s.className="days ui-flex-grid-item ui-flex-grid-row",s.style.setProperty("--gap","0.05rem");for(let o=0;o<7;o++)s.append(ae(0))}return setTimeout(()=>{q(n,e,t)}),r}async function q(e,t,r){const n=new Date(t,r),i=d.get("settings"),s=Array.from(e.querySelectorAll(".item-content > .days > .day"));(await V(s.length,n.getFullYear(),n.getMonth())).forEach(async(a,l)=>{const c=await g.get(a.year,a.month,a.date);if(c!==null){a.note=c.note;const m=i.shifts.find(h=>{var u;return h.id===((u=c.shift)==null?void 0:u.id)});m?a.shift=m:a.shift=c.shift||a.shift}le(s[l],a),r!==a.month?s[l].setAttribute("disabled",""):s[l].removeAttribute("disabled"),a.year!==n.getFullYear()||a.month!==n.getMonth()?s[l].classList.add("inactive"):s[l].classList.remove("inactive")}),oe([...e.querySelectorAll(".item-content > .week-days > .week-day")],s)}function oe(e,t){const r=d.get("week-start");let n=ne;r>0&&(n=[...n.slice(r),...n.slice(0,r)]);const i=n.findIndex(o=>o===6),s=n.findIndex(o=>o===0);e.forEach((o,a)=>{o.innerHTML=`${ie[n[a%7]]}`}),[...e,...t].forEach((o,a)=>{o.classList.remove("saturday"),o.classList.remove("sunday"),a%n.length===i&&o.classList.add("saturday"),a%n.length===s&&o.classList.add("sunday")})}function ae(e,t){const r=document.createElement("div");return r.className="day ui-flex-grid-item",r.innerHTML=v`
        <div class="date">${e}</div>
        <div class="shift">${""}</div>
    `,r}function le(e,t){((i,s,o)=>{const a=new Date;return a.getFullYear()===i&&a.getMonth()===s&&a.getDate()===o})(t.year,t.month,t.date)?e.classList.add("today"):e.classList.remove("today"),t.note?e.classList.add("note"):e.classList.remove("note"),e.querySelector(".date").innerHTML=`${t.date}`;const n=e.querySelector(".shift");t.shift?(n.style.setProperty("--shift-color",t.shift.visible?t.shift.color||"inherit":"transparent"),n.innerHTML=t.shift.shortName||""):(n.style.removeProperty("--shift-color"),n.innerHTML=""),e.setAttribute("data-year",t.year.toString()),e.setAttribute("data-month",t.month.toString()),e.setAttribute("data-date",t.date.toString())}async function ce(e){const t=new Date(e);t.setMonth(t.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async r=>{q(r.querySelector(".item-content"),t.getFullYear(),t.getMonth()),t.setMonth(t.getMonth()+1)})}async function ue(e){}async function k(e){switch(e){case"left":d.update("date-picker",t=>{const r=new Date(t);return r.setMonth(r.getMonth()+1),r.getTime()});break;case"right":d.update("date-picker",t=>{const r=new Date(t);return r.setMonth(r.getMonth()-1),r.getTime()});break}}const E=document.createElement("template");E.innerHTML=v`
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
`;let L="",b=[];async function de(){L=D(),w("");const e=document.querySelector("#routerTarget");e.innerHTML="",e.appendChild(E.content.cloneNode(!0));const t=new re(document.querySelector(".item-container"));me(),fe(),pe(),setTimeout(()=>{t.start()}),t.addListener("swipe",k),b.push(()=>{t.removeListener("swipe",k),t.stop()})}async function he(){w(L),b.forEach(e=>e()),b=[]}function fe(){const e=new Date;Array.from(document.querySelector(".item-container").children).forEach(t=>{t.innerHTML="",t.appendChild(se(e.getFullYear(),e.getMonth()))})}function me(){const e=document.querySelector(".ui-app-bar .left button.date-picker"),t=document.querySelector(".ui-app-bar .right button.today"),r=document.querySelector(".ui-app-bar .right button.edit"),n=document.querySelector(".ui-app-bar .right button.printer"),i=document.querySelector(".ui-app-bar .right button.settings");e.style.display="inline-flex",t.style.display="inline-flex",r.style.display="inline-flex",n.style.display="inline-flex",i.style.display="inline-flex",e.onclick=async()=>{const s=await G(d.get("date-picker"));s&&d.set("date-picker",s.date)},t.onclick=async()=>{d.set("date-picker",new Date().getTime())},b.push(d.listen("date-picker",s=>{const o=new Date,a=new Date(s),l=a.getFullYear();l===o.getFullYear()&&a.getMonth()===o.getMonth()?t.setAttribute("disabled",""):t.removeAttribute("disabled");const c=(a.getMonth()+1).toString().padStart(2,"0");e.innerText=`${l} / ${c}`},!0)),b.push(()=>{e.style.display="none",t.style.display="none",r.style.display="none",n.style.display="none",i.style.display="none"})}function pe(){b.push(d.listen("date-picker",ce,!0),d.listen("edit-mode",ue,!0))}const $="3.0.0",N=13;function ge(e){var r,n,i;const t=s=>s?!(typeof s.id!="number"||typeof s.name!="string"||typeof s.shortName!="string"||typeof s.visible!="boolean"||s.color&&typeof s.color!="string"):!1;if((e==null?void 0:e.constructor)!==Object||((r=e.settings)==null?void 0:r.constructor)!==Object||((n=e.storage)==null?void 0:n.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(s=>typeof s!="number")||e.settings.shifts.find(s=>!t(s)))return!1;for(const s in e.storage){if(typeof s!="string"||((i=e.storage[s])==null?void 0:i.constructor)!==Object)return!1;for(const o in e.storage[s]){if(typeof o!="string")return!1;const a=e.storage[s][o];if((a==null?void 0:a.constructor)!==Object||!t(a.shift)&&a.shift!==null||typeof a.note!="string")return!1}}return!0}function ye(e){var r,n;const t=i=>i?!(typeof i.id!="number"||typeof i.name!="string"||typeof i.shortName!="string"||typeof i.visible!="boolean"||i.color&&typeof i.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||((r=e.settings)==null?void 0:r.constructor)!==Object||((n=e.indexedDB)==null?void 0:n.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(i=>typeof i!="number")||e.settings.shifts.find(i=>!t(i))||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(i=>{var s;return typeof i.year!="number"||typeof i.month!="number"||typeof i.date!="number"||i.shift!==null&&((s=i.shift)==null?void 0:s.constructor)!==Object||typeof i.note!="string"||!t(i.shift)&&i.shift!==null}))}function be(e){var r,n,i;const t=s=>s?!(typeof s.id!="number"||typeof s.name!="string"||typeof s.shortName!="string"||typeof s.visible!="boolean"||s.color&&typeof s.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||typeof e.weekStart!="number"||((r=e.settings)==null?void 0:r.constructor)!==Object||((n=e.version)==null?void 0:n.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="number"||e.settings.rhythm.find(s=>typeof s!="number")||e.settings.shifts.find(s=>!t(s))||typeof e.version.version!="string"||typeof e.version.build!="number"||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(s=>{var o;return typeof s.year!="number"||typeof s.month!="number"||typeof s.date!="number"||s.shift!==null&&((o=s.shift)==null?void 0:o.constructor)!==Object||typeof s.note!="string"||!t(s.shift)&&s.shift!==null}))}function ve(e){return{weekStart:0,version:{version:$,build:N},settings:{rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0},indexedDB:{version:e.indexedDB.version,data:e.indexedDB.data.map(t=>({year:t.year,month:t.month,date:t.date,shift:t.shift||null,note:t.note}))}}}function we(e){return{weekStart:0,version:{version:$,build:N},settings:{rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0},indexedDB:Se(e)}}function Se(e){const t={version:1,data:[]},r=n=>{for(const[i,s]of Object.entries(n)){const[o,a,l]=i.split("-",3).map(c=>parseInt(c,10));isNaN(o)||isNaN(a)||isNaN(l)||a<0||a>11||!("shift"in s)||!("note"in s)||t.data.push({year:o,month:a,date:l,shift:s.shift,note:s.note})}};return Object.values(e.storage).forEach(n=>r(n)),t}const Te=v`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function ke(){const e=document.createElement("article");e.className="backup",e.innerHTML=Te;const t=e.querySelector("section.json button.import"),r=e.querySelector("section.json button.export");return t.onclick=async()=>{const n=document.createElement("input");n.type="file",n.accept="application/json",n.onchange=async()=>{if(!n.files||n.files.length===0)return;const i=new FileReader;i.onload=async()=>await xe(i.result),i.onerror=()=>{alert(`Import data: read file failed: ${i.error}`)},i.readAsText(n.files[0])},n.click()},r.onclick=async()=>{const n=new Blob([JSON.stringify({weekStart:d.get("week-start"),settings:d.get("settings"),indexedDB:{version:g.version,data:await g.getAll()}})],{type:"octet/stream"}),i=document.createElement("a");i.setAttribute("href",window.URL.createObjectURL(n));const s=new Date,o=(s.getMonth()+1).toString().padStart(2,"0"),a=s.getDate().toString().padStart(2,"0"),l=`shift-scheduler-backup_${s.getFullYear()}-${o}-${a}.json`;i.setAttribute("download",l),i.click()},e}async function xe(e){if(typeof e!="string")return alert("Invalid data!");let t;try{t=JSON.parse(e)}catch{return alert("Invalid JSON data!")}let r;if(be(t))r=t;else if(ye(t))r=ve(t);else if(ge(t))r=we(t);else return alert("Invalid JSON data!");d.set("settings",r.settings),d.set("week-start",r.weekStart),await g.deleteAll();for(const n of r.indexedDB.data||[])g.add(n).catch(()=>g.put(n))}const De=v`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button>Browse</button>
        </label>
    </section>
`;function Me(){const e=document.createElement("article");return e.className="db-browser",e.innerHTML=De,e}const qe=v`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function Ee(){const e=document.createElement("article");e.className="misc",e.innerHTML=qe;const t=e.querySelector('section.week-start input[type="checkbox"]');return t.checked=d.get("week-start")===1,t.onchange=()=>{d.set("week-start",t.checked?1:0)},e}const Le=v`
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
`;function $e(){const e=document.createElement("article");e.className="shifts",e.innerHTML=Le;const t=()=>{const i=e.querySelector("section.shifts-table tbody"),s=e.querySelector("section.shifts-table template.table-item");i.innerHTML="",d.get("settings").shifts.forEach(o=>{const a=s.content.cloneNode(!0).querySelector("tr.item");i.appendChild(a),a.querySelector(".name").innerText=o.name;const l=a.querySelector(".short-name");l.style.color=o.color||"inherit",l.innerText=o.visible?o.shortName:"";const c=a.querySelector("button.edit");c.onclick=async()=>{await Q(o)&&(d.update("settings",u=>({...u,shifts:u.shifts.map(p=>p.id===o.id?o:p)})),t())};const m=a.querySelector("button.delete");m.onclick=async()=>{confirm(`Delete shift "${o.name}"?`)&&d.update("settings",h=>({...h,shifts:h.shifts.filter(u=>u.id!==o.id)})),t()}})};t();const r=e.querySelector('section.start-date input[type="date"]');r.value=new Date(d.get("settings").startDate).toDateString(),r.onchange=()=>{d.update("settings",i=>(i.startDate=new Date(r.value).getTime(),i))};const n=e.querySelector("section.edit-rhythm button");return n.onclick=async()=>{const i=d.get("settings");i.rhythm=await ee(i.rhythm,i.shifts),d.set("settings",i)},e}let B="",S=[];async function Ne(){B=D(),w("Settings");const e=document.querySelector("#routerTarget");e.innerHTML="",Oe(),e.appendChild(Ee()),e.appendChild(document.createElement("br")),e.appendChild($e()),e.appendChild(document.createElement("br")),e.appendChild(ke()),e.appendChild(document.createElement("br")),e.appendChild(Me())}async function Be(){w(B),S.forEach(e=>e()),S=[]}function Oe(){const e=document.querySelector(".ui-app-bar .left .back");e.style.display="inline-flex",S.push(()=>{e.style.display="none"})}const Ae=W({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await Ae()}});g.open(()=>{X.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){de()},onDestroy(){he()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){Ne()},onDestroy(){Be()}}}})});
