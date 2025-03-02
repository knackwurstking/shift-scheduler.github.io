var I=Object.defineProperty;var P=(e,r,t)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var f=(e,r,t)=>P(e,typeof r!="symbol"?r+"":r,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();class M{constructor(){this.listeners={}}addListener(r,t){return this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push(t),()=>this.removeListener(r,t)}removeListener(r,t){this.listeners[r]&&(this.listeners[r]=this.listeners[r].filter(i=>i!==t))}dispatch(r,t){this.listeners[r]&&this.listeners[r].forEach(i=>i(t))}}class C{constructor(r){this.prefix="",this.events=new M,this.data={},this.prefix=r}delete(r,t){t!=null&&t.skipStore||localStorage.removeItem(`${this.prefix}${r}`),delete this.data[r]}get(r,t){if(!(t!=null&&t.skipStore)){const i=localStorage.getItem(`${this.prefix}${r}`);if(i!==null)return JSON.parse(i)}if(this.data.hasOwnProperty(r))return this.data[r]}set(r,t,i=!1,n){if(i){let s=null;n!=null&&n.skipStore?s=null:s=localStorage.getItem(`${this.prefix}${r}`),s!==null?this.data[r]=JSON.parse(s):this.data.hasOwnProperty(r)||(this.data[r]=t)}else this.data[r]=t;n!=null&&n.skipStore||localStorage.setItem(`${this.prefix}${r}`,JSON.stringify(this.data[r])),this.events.dispatch(r,this.data[r])}update(r,t,i){const n=this.get(r,i);if(n===void 0)throw new Error(`"${r}" not found, use \`set\``);this.set(r,t(n),!1,i)}listen(r,t,i=!1,n){if(i){const s=this.get(r,n);s!==void 0&&setTimeout(()=>t(s))}return this.events.addListener(r,t)}}function H(e,r){let t=null;async function i(n){var s,o;if(t!==null&&(((s=t.template)==null?void 0:s.onDestroy)!==void 0&&t.template.onDestroy(),t.onDestroy!==void 0&&t.onDestroy()),t=n,t.title!==void 0){const a=document.querySelector("head > title");a!==null&&(a.innerHTML=t.title)}if((t==null?void 0:t.href)!==void 0&&e){const a=await(await fetch(t.href)).text();e.innerHTML=a,t.scripts!==void 0&&t.scripts.forEach(l=>{const u=document.createElement("script");u.setAttribute("data-template",t.href),u.src=l.src,e.appendChild(u)})}if((t==null?void 0:t.onMount)!==void 0&&t.onMount(),t!=null&&t.template){let a=e;if(t.template.target!==void 0&&(a=document.querySelector(t.template.target)),t.template.selector&&a){const l=document.querySelector(t.template.selector);if(!l)throw`${t.template.selector} not found`;l instanceof HTMLTemplateElement?(a.innerHTML="",a.appendChild(l.content.cloneNode(!0))):a.innerHTML=l.innerHTML}((o=t.template)==null?void 0:o.onMount)!==void 0&&t.template.onMount()}}window.addEventListener("hashchange",()=>{const n=window.location.hash.replace("#","");let s="";for(const o of Object.keys(r))n.startsWith(o)&&o>s&&(s=o);if(!s){const o=r["/"];if(o===void 0){console.warn(`Window location “${n}” is missing in routes, and the fallback route “/“ is also missing.`);return}i(o);return}i(r[s])}),window.dispatchEvent(new Event("hashchange"))}function X(e,r){let t;if(e?t=`?${Object.entries(e).map(([i,n])=>`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&")}`:t="",!r&&!t){location.hash="";return}location.hash=`#${encodeURIComponent(r)}`+(t?`&${t}`:"")}function F(){const e={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(r=>{r.split("&").forEach(t=>{const[i,n]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)})}),e}const _=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:F,goTo:X,init:H},Symbol.toStringTag,{value:"Module"})),q=Object.freeze(Object.defineProperty({__proto__:null,hash:_},Symbol.toStringTag,{value:"Module"})),U="modulepreload",W=function(e){return"/shift-scheduler.github.io/"+e},k={},Y=function(r,t,i){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(t.map(l=>{if(l=W(l),l in k)return;k[l]=!0;const u=l.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":U,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return r().catch(s)})};function V(e={}){const{immediate:r=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:n,onRegisteredSW:s,onRegisterError:o}=e;let a,l,u;const m=async(d=!0)=>{await l,u==null||u()};async function h(){if("serviceWorker"in navigator){if(a=await Y(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(d=>{o==null||o(d)}),!a)return;u=()=>{a==null||a.messageSkipWaiting()};{let d=!1;const p=()=>{d=!0,a==null||a.addEventListener("controlling",y=>{y.isUpdate&&window.location.reload()}),t==null||t()};a.addEventListener("installed",y=>{typeof y.isUpdate>"u"?typeof y.isExternal<"u"&&y.isExternal?p():!d&&(i==null||i()):y.isUpdate||i==null||i()}),a.addEventListener("waiting",p)}a.register({immediate:r}).then(d=>{s?s("/shift-scheduler.github.io/sw.js",d):n==null||n(d)}).catch(d=>{o==null||o(d)})}}return l=h(),m}function E(){return L().innerText}function w(e){L().innerText=e}function L(){return document.querySelector(".ui-app-bar .center .title")}const J="shift-scheduler:",c=(()=>{var i;const e=new C(J),r=new Date;e.set("datePicker",new Date(r.getFullYear(),r.getMonth(),1).getTime(),!1),e.set("weekStart",0,!0),e.set("shifts",[],!0),e.set("rhythm",[],!0),e.set("startDate",0,!0),e.set("editMode",{open:!1,active:null},!1);const t={version:"0.0.0",build:1};switch((i=e.get("version"))==null?void 0:i.build){case void 0:const n=e.get("startDate");n&&e.set("startDate",new Date(n).getTime());break}return e.set("version",t),e})();async function R(e,r,t){const i=[],n=c.get("weekStart");for(let s=0;s<e;s++){const o=new Date(r,t,s+1-z(r,t,n));i.push({year:o.getFullYear(),month:o.getMonth(),date:o.getDate(),shift:K(o),note:""})}return i}function z(e,r,t){const n=new Date(e,r,1).getDay();return t===0?n:n===0?6:n-1}function K(e){const r=c.get("startDate"),t=c.get("shifts"),i=c.get("rhythm");if(!r||!i.length)return null;const n=new Date(r),s=Math.round((e.getTime()-n.getTime())/(1e3*60*60*24));return s<=0?t.find(o=>o.id===i[i.length+(s%i.length||-i.length)])||null:t.find(o=>o.id===i[s%i.length])||null}function Z(e){return typeof e.id!="number"||typeof e.name!="string"||typeof e.shortName!="string"||typeof e.color!="string"&&e.color?!1:(e.color==="transparent"&&(e.visible=!1,e.color=null),typeof e.visible!="boolean"&&(e.visible=!0),e.color||(e.color=null),!0)}const v=String.raw;class G{constructor(r,t){f(this,"version");f(this,"name");f(this,"storeName","user");f(this,"request",null);this.name=r,this.version=t}open(r){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{r&&r()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(r,t){switch(r){case 0:case 1:return Q(t);default:return!1}}get(r,t,i){return new Promise(n=>{const s=this.roStore().get([r,t,i]);s.onsuccess=()=>n(s.result||null),s.onerror=()=>n(null)})}getAll(){return new Promise(r=>{const t=this.roStore().getAll();t.onsuccess=()=>r(t.result),t.onerror=i=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,i),r([])}})}add(r){return new Promise((t,i)=>{const n=this.rwStore().add(r);n.onsuccess=()=>t(),n.onerror=async s=>{console.warn(`[DB] Error while adding "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,s),i(n.error)}})}put(r){return new Promise((t,i)=>{const n=this.rwStore().put(r);n.onsuccess=()=>t(),n.onerror=async s=>{console.warn(`[DB] Error while putting "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,s),i(n.error)}})}delete(r,t,i){return new Promise((n,s)=>{const o=this.rwStore().delete([r,t,i]);o.onsuccess=()=>n(),o.onerror=()=>{s(o.error)}})}deleteAll(){return new Promise((r,t)=>{const i=this.rwStore().clear();i.onsuccess=()=>r(),i.onerror=()=>{t(i.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(r){if(!r.objectStoreNames.contains(this.storeName)){const t=r.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});t.createIndex("year","year",{unique:!1}),t.createIndex("month","month",{unique:!1}),t.createIndex("date","date",{unique:!1}),t.createIndex("note","note",{unique:!1}),t.createIndex("shift","shift",{unique:!1})}}onError(r){var t;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(r){var t;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(r){switch(r.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function Q(e){return!(typeof e.year!="number"||typeof e.month!="number"||typeof e.date!="number"||(typeof e.note!="string"&&(e.note=""),e.shift!==null&&!Z(e.shift)))}const g=new G("shift-scheduler",1);function ee(e){return new Promise(r=>{const t=document.querySelector('dialog[name="date-picker"]'),i=t.querySelector("form"),n=i.querySelector('input[type="month"]');switch(typeof e){case"string":e=new Date(e);break;case"number":e=new Date(e);break}n.value=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}`;let s=null;i.onsubmit=()=>{s={date:new Date(n.value).getTime()}},t.onclose=()=>r(s),t.showModal()})}function T(e){return new Promise(r=>{const t=document.querySelector('dialog[name="shift"]'),i=t.querySelector("form"),n=i.querySelector("input.name"),s=i.querySelector("input.short-name"),o=i.querySelector("input.color-picker"),a=i.querySelector("input.default-color"),l=i.querySelector("input.hidden");let u=null;t.onclose=()=>r(u),i.onsubmit=m=>{const h={id:(e==null?void 0:e.id)||new Date().getTime(),name:n.value,shortName:s.value,visible:!l.checked,color:a.checked?null:o.value||null};if(!h.name){m.preventDefault(),n.ariaInvalid="";return}if(n.ariaInvalid=null,!h.shortName){m.preventDefault(),s.ariaInvalid="";return}s.ariaInvalid=null,u=h},n.value=(e==null?void 0:e.name)||"",s.value=(e==null?void 0:e.shortName)||"",o.value=(e==null?void 0:e.color)||"inherit",a.checked=!(e!=null&&e.color),l.checked=!(e!=null&&e.visible),a.onchange=()=>{o.disabled=a.checked,s.style.color=a.checked?"inherit":o.value||"inherit"},l.onchange=m=>{s.disabled=l.checked,o.disabled=l.checked,a.disabled=l.checked,a.onchange(m)},t.showModal()})}function te(e,r){return new Promise(t=>{const i=document.querySelector('dialog[name="rhythm"]'),n=i.querySelector("form");n.querySelector("tbody"),n.querySelector(".shifts-container"),i.querySelector('template[name="table-item"]'),document.querySelector('template[name="shift-card"]');const s=e;i.onclose=()=>t(s),n.onsubmit=()=>{t(e)},i.showModal()})}const re=75;class ne extends M{constructor(t){super();f(this,"container");f(this,"finalTransform",!1);f(this,"startX",null);f(this,"clientX",null);f(this,"onMouseMove");f(this,"onTouchMove");f(this,"onMouseOrTouchEnd");f(this,"onTouchCancel");f(this,"animationFrameHandler");this.container=t}start(){this.onMouseMove=async t=>{this.finalTransform||t.buttons===1&&(this.startX===null&&(this.startX=t.clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.clientX)},this.onTouchMove=async t=>{this.finalTransform||(this.startX===null&&(this.startX=t.touches[0].clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.touches[0].clientX)},this.onMouseOrTouchEnd=async t=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const i=t.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(i.width+1):-i.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async t=>{this.startX!==null&&await this.onMouseOrTouchEnd(t)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>re*(window.innerWidth/1080)}moveX(t){const i=this.containerItems();i[0].style.left=`calc(-100% + ${t}px)`,i[1].style.left=`calc(0% + ${t}px)`,i[2].style.left=`calc(100% + ${t}px)`}setTransition(t){this.containerItems().forEach(n=>n.style.transition=t)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(t=>t.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const t=this.containerItems(),i=this.clientX>this.startX?"right":"left";switch(i){case"left":this.container.appendChild(this.container.removeChild(t[0]));break;case"right":this.container.insertBefore(this.container.removeChild(t[2]),t[0]);break}this.moveX(0),this.dispatch("swipe",i)}}const ie=[0,1,2,3,4,5,6],se=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function oe(e,r){const t=document.querySelector('template[name="calendar-item-content"]').content.cloneNode(!0),i=t.querySelector(".item-content");for(let n=0;n<6;n++){const s=document.createElement("div");i.appendChild(s),s.className="days ui-flex-grid-item ui-flex-grid-row",s.style.setProperty("--gap","0.05rem");for(let o=0;o<7;o++)s.append(le(0))}return setTimeout(()=>{$(i,e,r)}),t}async function $(e,r,t){const i=new Date(r,t),n=Array.from(e.querySelectorAll(".item-content > .days > .day"));let s=await R(n.length,i.getFullYear(),i.getMonth());const o=c.get("shifts");s.forEach(async(a,l)=>{const u=await g.get(a.year,a.month,a.date);if(u!==null){a.note=u.note;const m=o.find(h=>{var d;return h.id===((d=u.shift)==null?void 0:d.id)});m?a.shift=m:a.shift=u.shift||a.shift}ce(n[l],a),t!==a.month?n[l].setAttribute("disabled",""):n[l].removeAttribute("disabled"),a.year!==i.getFullYear()||a.month!==i.getMonth()?n[l].classList.add("inactive"):n[l].classList.remove("inactive")}),ae([...e.querySelectorAll(".item-content > .week-days > .week-day")],n)}function ae(e,r){const t=c.get("weekStart");let i=ie;t>0&&(i=[...i.slice(t),...i.slice(0,t)]);const n=i.findIndex(o=>o===6),s=i.findIndex(o=>o===0);e.forEach((o,a)=>{o.innerHTML=`${se[i[a%7]]}`}),[...e,...r].forEach((o,a)=>{o.classList.remove("saturday"),o.classList.remove("sunday"),a%i.length===n&&o.classList.add("saturday"),a%i.length===s&&o.classList.add("sunday")})}function le(e,r){const t=document.createElement("div");return t.className="day ui-flex-grid-item",t.innerHTML=v`
        <div class="date">${e}</div>
        <div class="shift">${""}</div>
    `,t}function ce(e,r){((n,s,o)=>{const a=new Date;return a.getFullYear()===n&&a.getMonth()===s&&a.getDate()===o})(r.year,r.month,r.date)?e.classList.add("today"):e.classList.remove("today"),r.note?e.classList.add("note"):e.classList.remove("note"),e.querySelector(".date").innerHTML=`${r.date}`;const i=e.querySelector(".shift");r.shift?(i.style.setProperty("--shift-color",r.shift.visible?r.shift.color||"inherit":"transparent"),i.innerHTML=r.shift.shortName||""):(i.style.removeProperty("--shift-color"),i.innerHTML=""),e.setAttribute("data-year",r.year.toString()),e.setAttribute("data-month",r.month.toString()),e.setAttribute("data-date",r.date.toString())}async function ue(e){const r=new Date(e);r.setMonth(r.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async t=>{$(t.querySelector(".item-content"),r.getFullYear(),r.getMonth()),r.setMonth(r.getMonth()+1)})}async function de(e){}async function x(e){switch(e){case"left":c.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()+1),t.getTime()});break;case"right":c.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()-1),t.getTime()});break}}const B=document.createElement("template");B.innerHTML=v`
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
`;let N="",b=[];async function he(){N=E(),w("");const e=document.querySelector("#routerTarget");e.innerHTML="",e.appendChild(B.content.cloneNode(!0));const r=new ne(document.querySelector(".item-container"));pe(),me(),ge(),setTimeout(()=>{r.start()}),r.addListener("swipe",x),b.push(()=>{r.removeListener("swipe",x),r.stop()})}async function fe(){w(N),b.forEach(e=>e()),b=[]}function me(){const e=new Date;Array.from(document.querySelector(".item-container").children).forEach(r=>{r.innerHTML="",r.appendChild(oe(e.getFullYear(),e.getMonth()))})}function pe(){const e=document.querySelector(".ui-app-bar .left button.date-picker"),r=document.querySelector(".ui-app-bar .right button.today"),t=document.querySelector(".ui-app-bar .right button.edit"),i=document.querySelector(".ui-app-bar .right button.printer"),n=document.querySelector(".ui-app-bar .right button.settings");e.style.display="inline-flex",r.style.display="inline-flex",t.style.display="inline-flex",i.style.display="inline-flex",n.style.display="inline-flex",e.onclick=async()=>{const s=await ee(c.get("datePicker"));s&&c.set("datePicker",s.date)},r.onclick=async()=>{c.set("datePicker",new Date().getTime())},b.push(c.listen("datePicker",s=>{const o=new Date,a=new Date(s),l=a.getFullYear();l===o.getFullYear()&&a.getMonth()===o.getMonth()?r.setAttribute("disabled",""):r.removeAttribute("disabled");const u=(a.getMonth()+1).toString().padStart(2,"0");e.innerText=`${l} / ${u}`},!0)),b.push(()=>{e.style.display="none",r.style.display="none",t.style.display="none",i.style.display="none",n.style.display="none"})}function ge(){b.push(c.listen("datePicker",ue,!0),c.listen("editMode",de,!0))}const A="3.0.0",O=13;function ye(e){var t,i,n;const r=s=>s?!(typeof s.id!="number"||typeof s.name!="string"||typeof s.shortName!="string"||typeof s.visible!="boolean"||s.color&&typeof s.color!="string"):!1;if((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.storage)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(s=>typeof s!="number")||e.settings.shifts.find(s=>!r(s)))return!1;for(const s in e.storage){if(typeof s!="string"||((n=e.storage[s])==null?void 0:n.constructor)!==Object)return!1;for(const o in e.storage[s]){if(typeof o!="string")return!1;const a=e.storage[s][o];if((a==null?void 0:a.constructor)!==Object||!r(a.shift)&&a.shift!==null||typeof a.note!="string")return!1}}return!0}function be(e){var t,i;const r=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(n=>typeof n!="number")||e.settings.shifts.find(n=>!r(n))||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var s;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((s=n.shift)==null?void 0:s.constructor)!==Object||typeof n.note!="string"||!r(n.shift)&&n.shift!==null}))}function ve(e){var t,i;const r=n=>n?!(typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.visible!="boolean"||n.color&&typeof n.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||typeof e.weekStart!="number"||((t=e.version)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.shifts)||!Array.isArray(e.rhythm)||typeof e.startDate!="number"||e.rhythm.find(n=>typeof n!="number")||e.shifts.find(n=>!r(n))||typeof e.version.version!="string"||typeof e.version.build!="number"||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(n=>{var s;return typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||n.shift!==null&&((s=n.shift)==null?void 0:s.constructor)!==Object||typeof n.note!="string"||!r(n.shift)&&n.shift!==null}))}function we(e){return{weekStart:0,version:{version:A,build:O},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:{version:e.indexedDB.version,data:e.indexedDB.data.map(r=>({year:r.year,month:r.month,date:r.date,shift:r.shift||null,note:r.note}))}}}function Se(e){return{weekStart:0,version:{version:A,build:O},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:ke(e)}}function ke(e){const r={version:1,data:[]},t=i=>{for(const[n,s]of Object.entries(i)){const[o,a,l]=n.split("-",3).map(u=>parseInt(u,10));isNaN(o)||isNaN(a)||isNaN(l)||a<0||a>11||!("shift"in s)||!("note"in s)||r.data.push({year:o,month:a,date:l,shift:s.shift,note:s.note})}};return Object.values(e.storage).forEach(i=>t(i)),r}const Te=v`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function xe(){const e=document.createElement("article");e.className="backup",e.innerHTML=Te;const r=e.querySelector("section.json button.import"),t=e.querySelector("section.json button.export");return r.onclick=async()=>{const i=document.createElement("input");i.type="file",i.accept="application/json",i.onchange=async()=>{if(!i.files||i.files.length===0)return;const n=new FileReader;n.onload=async()=>await De(n.result),n.onerror=()=>{alert(`Import data: read file failed: ${n.error}`)},n.readAsText(i.files[0])},i.click()},t.onclick=async()=>{const i={weekStart:c.get("weekStart"),shifts:c.get("shifts"),rhythm:c.get("rhythm"),startDate:c.get("startDate"),version:c.get("version"),indexedDB:{version:g.version,data:await g.getAll()}},n=new Blob([JSON.stringify(i)],{type:"octet/stream"}),s=document.createElement("a");s.setAttribute("href",window.URL.createObjectURL(n));const o=new Date,a=(o.getMonth()+1).toString().padStart(2,"0"),l=o.getDate().toString().padStart(2,"0"),u=`shift-scheduler-backup_${o.getFullYear()}-${a}-${l}.json`;s.setAttribute("download",u),s.click()},e}async function De(e){if(typeof e!="string")return alert("Invalid data!");let r;try{r=JSON.parse(e)}catch{return alert("Invalid JSON data!")}let t;if(ve(r))t=r;else if(be(r))t=we(r);else if(ye(r))t=Se(r);else return alert("Invalid JSON data!");c.set("shifts",t.shifts),c.set("rhythm",t.rhythm),c.set("startDate",t.startDate),c.set("weekStart",t.weekStart),await g.deleteAll();for(const i of t.indexedDB.data||[])g.add(i).catch(()=>g.put(i))}const Me=v`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button>Browse</button>
        </label>
    </section>
`;function qe(){const e=document.createElement("article");return e.className="db-browser",e.innerHTML=Me,e}const Ee=v`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function Le(){const e=document.createElement("article");e.className="misc",e.innerHTML=Ee;const r=e.querySelector('section.week-start input[type="checkbox"]');return r.checked=c.get("weekStart")===1,r.onchange=()=>{c.set("weekStart",r.checked?1:0)},e}const $e=v`
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
`;function Be(){const e=document.createElement("article");e.className="shifts",e.innerHTML=$e;const r=()=>{const n=e.querySelector("section.shifts-table tbody"),s=e.querySelector("section.shifts-table template.table-item");n.innerHTML="",c.get("shifts").forEach(o=>{const a=s.content.cloneNode(!0).querySelector("tr.item");n.appendChild(a),a.querySelector(".name").innerText=o.name;const l=a.querySelector(".short-name");l.style.color=o.color||"inherit",l.innerText=o.visible?o.shortName:"";const u=a.querySelector("button.edit");u.onclick=async()=>{await T(o)&&(c.update("shifts",d=>d.map(p=>p.id===o.id?o:p)),r())};const m=a.querySelector("button.delete");m.onclick=async()=>{confirm(`Delete shift "${o.name}"?`)&&c.update("shifts",h=>h.filter(d=>d.id!==o.id)),r()}}),e.querySelector("section.shifts-table button.add-shift").onclick=async()=>{const o=await T(null);o&&(c.update("shifts",a=>(a.push(o),a)),r())}};r();const t=e.querySelector('section.start-date input[type="date"]');t.value=new Date(c.get("startDate")).toDateString(),t.onchange=()=>{c.set("startDate",new Date(t.value).getTime())};const i=e.querySelector("section.edit-rhythm button");return i.onclick=async()=>{c.set("rhythm",await te(c.get("rhythm"),c.get("shifts")))},e}let j="",D=null,S=[];async function Ne(){j=E(),w("Settings");const e=document.querySelector("#routerTarget");e.innerHTML="",Oe(),e.appendChild(Le()),e.appendChild(document.createElement("br")),e.appendChild(Be()),e.appendChild(document.createElement("br")),e.appendChild(xe()),e.appendChild(document.createElement("br")),e.appendChild(qe())}async function Ae(){w(j),S.forEach(e=>e()),S=[]}function Oe(){const e=document.querySelector(".ui-app-bar .left .back");e.style.display="inline-flex",D=e.onclick,e.onclick=()=>q.hash.goTo(null,""),S.push(()=>{e.style.display="none",e.onclick=D})}const je=V({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await je()}});g.open(()=>{q.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){he()},onDestroy(){fe()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){Ne()},onDestroy(){Ae()}}}})});
