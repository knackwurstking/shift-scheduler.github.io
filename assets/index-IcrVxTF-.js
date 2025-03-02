var j=Object.defineProperty;var P=(e,n,t)=>n in e?j(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var f=(e,n,t)=>P(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class M{constructor(){this.listeners={}}addListener(n,t){return this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(t),()=>this.removeListener(n,t)}removeListener(n,t){this.listeners[n]&&(this.listeners[n]=this.listeners[n].filter(i=>i!==t))}dispatch(n,t){this.listeners[n]&&this.listeners[n].forEach(i=>i(t))}}class C{constructor(n){this.prefix="",this.events=new M,this.data={},this.prefix=n}delete(n,t){t!=null&&t.skipStore||localStorage.removeItem(`${this.prefix}${n}`),delete this.data[n]}get(n,t){if(!(t!=null&&t.skipStore)){const i=localStorage.getItem(`${this.prefix}${n}`);if(i!==null)return JSON.parse(i)}if(this.data.hasOwnProperty(n))return this.data[n]}set(n,t,i=!1,r){if(i){let s=null;r!=null&&r.skipStore?s=null:s=localStorage.getItem(`${this.prefix}${n}`),s!==null?this.data[n]=JSON.parse(s):this.data.hasOwnProperty(n)||(this.data[n]=t)}else this.data[n]=t;r!=null&&r.skipStore||localStorage.setItem(`${this.prefix}${n}`,JSON.stringify(this.data[n])),this.events.dispatch(n,this.data[n])}update(n,t,i){const r=this.get(n,i);if(r===void 0)throw new Error(`"${n}" not found, use \`set\``);this.set(n,t(r),!1,i)}listen(n,t,i=!1,r){if(i){const s=this.get(n,r);s!==void 0&&setTimeout(()=>t(s))}return this.events.addListener(n,t)}}function H(e,n){let t=null;async function i(r){var s,a;if(t!==null&&(((s=t.template)==null?void 0:s.onDestroy)!==void 0&&t.template.onDestroy(),t.onDestroy!==void 0&&t.onDestroy()),t=r,t.title!==void 0){const o=document.querySelector("head > title");o!==null&&(o.innerHTML=t.title)}if((t==null?void 0:t.href)!==void 0&&e){const o=await(await fetch(t.href)).text();e.innerHTML=o,t.scripts!==void 0&&t.scripts.forEach(l=>{const c=document.createElement("script");c.setAttribute("data-template",t.href),c.src=l.src,e.appendChild(c)})}if((t==null?void 0:t.onMount)!==void 0&&t.onMount(),t!=null&&t.template){let o=e;if(t.template.target!==void 0&&(o=document.querySelector(t.template.target)),t.template.selector&&o){const l=document.querySelector(t.template.selector);if(!l)throw`${t.template.selector} not found`;l instanceof HTMLTemplateElement?(o.innerHTML="",o.appendChild(l.content.cloneNode(!0))):o.innerHTML=l.innerHTML}((a=t.template)==null?void 0:a.onMount)!==void 0&&t.template.onMount()}}window.addEventListener("hashchange",()=>{const r=window.location.hash.replace("#","");let s="";for(const a of Object.keys(n))r.startsWith(a)&&a>s&&(s=a);if(!s){const a=n["/"];if(a===void 0){console.warn(`Window location “${r}” is missing in routes, and the fallback route “/“ is also missing.`);return}i(a);return}i(n[s])}),window.dispatchEvent(new Event("hashchange"))}function X(e,n){let t;if(e?t=`?${Object.entries(e).map(([i,r])=>`${encodeURIComponent(i)}=${encodeURIComponent(r)}`).join("&")}`:t="",!n&&!t){location.hash="";return}location.hash=`#${encodeURIComponent(n)}`+(t?`&${t}`:"")}function F(){const e={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(n=>{n.split("&").forEach(t=>{const[i,r]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)})}),e}const _=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:F,goTo:X,init:H},Symbol.toStringTag,{value:"Module"})),q=Object.freeze(Object.defineProperty({__proto__:null,hash:_},Symbol.toStringTag,{value:"Module"})),U="modulepreload",W=function(e){return"/shift-scheduler.github.io/"+e},k={},Y=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=W(l),l in k)return;k[l]=!0;const c=l.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":U,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return n().catch(s)})};function V(e={}){const{immediate:n=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:a}=e;let o,l,c;const m=async(d=!0)=>{await l,c==null||c()};async function h(){if("serviceWorker"in navigator){if(o=await Y(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(d=>{a==null||a(d)}),!o)return;c=()=>{o==null||o.messageSkipWaiting()};{let d=!1;const g=()=>{d=!0,o==null||o.addEventListener("controlling",p=>{p.isUpdate&&window.location.reload()}),t==null||t()};o.addEventListener("installed",p=>{typeof p.isUpdate>"u"?typeof p.isExternal<"u"&&p.isExternal?g():!d&&(i==null||i()):p.isUpdate||i==null||i()}),o.addEventListener("waiting",g)}o.register({immediate:n}).then(d=>{s?s("/shift-scheduler.github.io/sw.js",d):r==null||r(d)}).catch(d=>{a==null||a(d)})}}return l=h(),m}function E(){return L().innerText}function w(e){L().innerText=e}function L(){return document.querySelector(".ui-app-bar .center .title")}const J="shift-scheduler:",u=(()=>{var i;const e=new C(J),n=new Date;e.set("datePicker",new Date(n.getFullYear(),n.getMonth(),1).getTime(),!1),e.set("weekStart",0,!0),e.set("shifts",[],!0),e.set("rhythm",[],!0),e.set("startDate",0,!0),e.set("editMode",{open:!1,active:null},!1);const t={version:"0.0.0",build:1};switch((i=e.get("version"))==null?void 0:i.build){case void 0:const r=e.get("startDate");r&&e.set("startDate",new Date(r).getTime());break}return e.set("version",t),e})();async function R(e,n,t){const i=[],r=u.get("weekStart");for(let s=0;s<e;s++){const a=new Date(n,t,s+1-z(n,t,r));i.push({year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),shift:K(a),note:""})}return i}function z(e,n,t){const r=new Date(e,n,1).getDay();return t===0?r:r===0?6:r-1}function K(e){const n=u.get("startDate"),t=u.get("shifts"),i=u.get("rhythm");if(!n||!i.length)return null;const r=new Date(n),s=Math.round((e.getTime()-r.getTime())/(1e3*60*60*24));return s<=0?t.find(a=>a.id===i[i.length+(s%i.length||-i.length)])||null:t.find(a=>a.id===i[s%i.length])||null}function Z(e){return typeof e.id!="number"||typeof e.name!="string"||typeof e.shortName!="string"||typeof e.color!="string"&&e.color?!1:(e.color==="transparent"&&(e.visible=!1,e.color=null),typeof e.visible!="boolean"&&(e.visible=!0),e.color||(e.color=null),!0)}const v=String.raw;class G{constructor(n,t){f(this,"version");f(this,"name");f(this,"storeName","user");f(this,"request",null);this.name=n,this.version=t}open(n){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{n&&n()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(n,t){switch(n){case 0:case 1:return Q(t);default:return!1}}get(n,t,i){return new Promise(r=>{const s=this.roStore().get([n,t,i]);s.onsuccess=()=>r(s.result||null),s.onerror=()=>r(null)})}getAll(){return new Promise(n=>{const t=this.roStore().getAll();t.onsuccess=()=>n(t.result),t.onerror=i=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,i),n([])}})}add(n){return new Promise((t,i)=>{const r=this.rwStore().add(n);r.onsuccess=()=>t(),r.onerror=async s=>{console.warn(`[DB] Error while adding "${n.year}-${n.month}-${n.date}" to "${this.storeName}"!`,s),i(r.error)}})}put(n){return new Promise((t,i)=>{const r=this.rwStore().put(n);r.onsuccess=()=>t(),r.onerror=async s=>{console.warn(`[DB] Error while putting "${n.year}-${n.month}-${n.date}" to "${this.storeName}"!`,s),i(r.error)}})}delete(n,t,i){return new Promise((r,s)=>{const a=this.rwStore().delete([n,t,i]);a.onsuccess=()=>r(),a.onerror=()=>{s(a.error)}})}deleteAll(){return new Promise((n,t)=>{const i=this.rwStore().clear();i.onsuccess=()=>n(),i.onerror=()=>{t(i.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(n){if(!n.objectStoreNames.contains(this.storeName)){const t=n.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});t.createIndex("year","year",{unique:!1}),t.createIndex("month","month",{unique:!1}),t.createIndex("date","date",{unique:!1}),t.createIndex("note","note",{unique:!1}),t.createIndex("shift","shift",{unique:!1})}}onError(n){var t;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:n}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(n){var t;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:n}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(n){switch(n.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function Q(e){return!(typeof e.year!="number"||typeof e.month!="number"||typeof e.date!="number"||(typeof e.note!="string"&&(e.note=""),e.shift!==null&&!Z(e.shift)))}const y=new G("shift-scheduler",1);function ee(e){return new Promise(n=>{const t=document.querySelector('dialog[name="date-picker"]'),i=t.querySelector("form"),r=i.querySelector("button.cancel"),s=i.querySelector('input[type="month"]');switch(typeof e){case"string":e=new Date(e);break;case"number":e=new Date(e);break}const a=(e.getMonth()+1).toString().padStart(2,"0");s.value=`${e.getFullYear()}-${a}`;let o=null;i.onsubmit=()=>{o={date:new Date(s.value).getTime()}},t.onclose=()=>n(o),r.onclick=l=>{l.preventDefault(),t.close()},t.showModal()})}function T(e){return new Promise(n=>{const t=document.querySelector('dialog[name="shift"]'),i=t.querySelector("form"),r=i.querySelector("button.cancel"),s=i.querySelector("input.name"),a=i.querySelector("input.short-name"),o=i.querySelector("input.color-picker"),l=i.querySelector("input.default-color"),c=i.querySelector("input.hidden");let m=null;t.onclose=()=>n(m),r.onclick=h=>{h.preventDefault(),t.close()},i.onsubmit=h=>{const d={id:(e==null?void 0:e.id)||new Date().getTime(),name:s.value,shortName:a.value,visible:!c.checked,color:l.checked?null:o.value||null};if(!d.name){h.preventDefault(),s.ariaInvalid="";return}if(s.ariaInvalid=null,!d.shortName){h.preventDefault(),a.ariaInvalid="";return}a.ariaInvalid=null,m=d},s.value=(e==null?void 0:e.name)||"",a.value=(e==null?void 0:e.shortName)||"",o.value=(e==null?void 0:e.color)||"#66FF00",l.checked=!(e!=null&&e.color),c.checked=typeof(e==null?void 0:e.visible)!="boolean"?!1:!e.visible,l.onchange=()=>{o.disabled=l.checked,a.style.color=l.checked?"inherit":o.value||"inherit"},c.onchange=h=>{a.disabled=c.checked,o.disabled=c.checked,l.disabled=c.checked,l.onchange(h)},l.onchange(new Event("change")),c.onchange(new Event("change")),t.showModal()})}function te(e,n){return new Promise(t=>{const i=document.querySelector('dialog[name="rhythm"]'),r=i.querySelector("form"),s=r.querySelector("button.cancel");r.querySelector("tbody"),r.querySelector(".shifts-container"),i.querySelector('template[name="table-item"]'),document.querySelector('template[name="shift-card"]');const a=e;i.onclose=()=>t(a),s.onclick=o=>{o.preventDefault(),i.close()},r.onsubmit=()=>{t(e)},i.showModal()})}const ne=75;class re extends M{constructor(t){super();f(this,"container");f(this,"finalTransform",!1);f(this,"startX",null);f(this,"clientX",null);f(this,"onMouseMove");f(this,"onTouchMove");f(this,"onMouseOrTouchEnd");f(this,"onTouchCancel");f(this,"animationFrameHandler");this.container=t}start(){this.onMouseMove=async t=>{this.finalTransform||t.buttons===1&&(this.startX===null&&(this.startX=t.clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.clientX)},this.onTouchMove=async t=>{this.finalTransform||(this.startX===null&&(this.startX=t.touches[0].clientX,this.containerItems().forEach(i=>i.classList.add("moving"))),this.clientX=t.touches[0].clientX)},this.onMouseOrTouchEnd=async t=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const i=t.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(i.width+1):-i.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async t=>{this.startX!==null&&await this.onMouseOrTouchEnd(t)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>ne*(window.innerWidth/1080)}moveX(t){const i=this.containerItems();i[0].style.left=`calc(-100% + ${t}px)`,i[1].style.left=`calc(0% + ${t}px)`,i[2].style.left=`calc(100% + ${t}px)`}setTransition(t){this.containerItems().forEach(r=>r.style.transition=t)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(t=>t.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const t=this.containerItems(),i=this.clientX>this.startX?"right":"left";switch(i){case"left":this.container.appendChild(this.container.removeChild(t[0]));break;case"right":this.container.insertBefore(this.container.removeChild(t[2]),t[0]);break}this.moveX(0),this.dispatch("swipe",i)}}const ie=[0,1,2,3,4,5,6],se=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function oe(e,n){const t=document.querySelector('template[name="calendar-item-content"]').content.cloneNode(!0),i=t.querySelector(".item-content");for(let r=0;r<6;r++){const s=document.createElement("div");i.appendChild(s),s.className="days ui-flex-grid-item ui-flex-grid-row",s.style.setProperty("--gap","0.05rem");for(let a=0;a<7;a++)s.append(le(0))}return setTimeout(()=>{$(i,e,n)}),t}async function $(e,n,t){const i=new Date(n,t),r=Array.from(e.querySelectorAll(".item-content > .days > .day"));let s=await R(r.length,i.getFullYear(),i.getMonth());const a=u.get("shifts");s.forEach(async(o,l)=>{const c=await y.get(o.year,o.month,o.date);if(c!==null){o.note=c.note;const m=a.find(h=>{var d;return h.id===((d=c.shift)==null?void 0:d.id)});m?o.shift=m:o.shift=c.shift||o.shift}ce(r[l],o),t!==o.month?r[l].setAttribute("disabled",""):r[l].removeAttribute("disabled"),o.year!==i.getFullYear()||o.month!==i.getMonth()?r[l].classList.add("inactive"):r[l].classList.remove("inactive")}),ae([...e.querySelectorAll(".item-content > .week-days > .week-day")],r)}function ae(e,n){const t=u.get("weekStart");let i=ie;t>0&&(i=[...i.slice(t),...i.slice(0,t)]);const r=i.findIndex(a=>a===6),s=i.findIndex(a=>a===0);e.forEach((a,o)=>{a.innerHTML=`${se[i[o%7]]}`}),[...e,...n].forEach((a,o)=>{a.classList.remove("saturday"),a.classList.remove("sunday"),o%i.length===r&&a.classList.add("saturday"),o%i.length===s&&a.classList.add("sunday")})}function le(e,n){const t=document.createElement("div");return t.className="day ui-flex-grid-item",t.innerHTML=v`
        <div class="date">${e}</div>
        <div class="shift">${""}</div>
    `,t}function ce(e,n){((r,s,a)=>{const o=new Date;return o.getFullYear()===r&&o.getMonth()===s&&o.getDate()===a})(n.year,n.month,n.date)?e.classList.add("today"):e.classList.remove("today"),n.note?e.classList.add("note"):e.classList.remove("note"),e.querySelector(".date").innerHTML=`${n.date}`;const i=e.querySelector(".shift");n.shift?(i.style.setProperty("--shift-color",n.shift.visible?n.shift.color||"inherit":"transparent"),i.innerHTML=n.shift.shortName||""):(i.style.removeProperty("--shift-color"),i.innerHTML=""),e.setAttribute("data-year",n.year.toString()),e.setAttribute("data-month",n.month.toString()),e.setAttribute("data-date",n.date.toString())}async function ue(e){const n=new Date(e);n.setMonth(n.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async t=>{$(t.querySelector(".item-content"),n.getFullYear(),n.getMonth()),n.setMonth(n.getMonth()+1)})}async function de(e){}async function D(e){switch(e){case"left":u.update("datePicker",n=>{const t=new Date(n);return t.setMonth(t.getMonth()+1),t.getTime()});break;case"right":u.update("datePicker",n=>{const t=new Date(n);return t.setMonth(t.getMonth()-1),t.getTime()});break}}const B=document.createElement("template");B.innerHTML=v`
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
`;let N="",b=[];async function he(){N=E(),w("");const e=document.querySelector("#routerTarget");e.innerHTML="",e.appendChild(B.content.cloneNode(!0));const n=new re(document.querySelector(".item-container"));pe(),me(),b.push(u.listen("datePicker",ue,!0),u.listen("editMode",de,!0)),setTimeout(()=>{n.start()}),n.addListener("swipe",D),b.push(()=>{n.removeListener("swipe",D),n.stop()})}async function fe(){w(N),b.forEach(e=>e()),b=[]}function me(){const e=new Date;Array.from(document.querySelector(".item-container").children).forEach(n=>{n.innerHTML="",n.appendChild(oe(e.getFullYear(),e.getMonth()))})}function pe(){const e=document.querySelector(".ui-app-bar .left button.date-picker"),n=document.querySelector(".ui-app-bar .right button.today"),t=document.querySelector(".ui-app-bar .right button.edit"),i=document.querySelector(".ui-app-bar .right button.printer"),r=document.querySelector(".ui-app-bar .right button.settings");e.style.display="inline-flex",n.style.display="inline-flex",t.style.display="inline-flex",i.style.display="inline-flex",r.style.display="inline-flex",e.onclick=async()=>{const s=await ee(u.get("datePicker"));s&&u.set("datePicker",s.date)},n.onclick=async()=>{u.set("datePicker",new Date().getTime())},b.push(u.listen("datePicker",s=>{const a=new Date,o=new Date(s),l=o.getFullYear();l===a.getFullYear()&&o.getMonth()===a.getMonth()?n.setAttribute("disabled",""):n.removeAttribute("disabled");const c=(o.getMonth()+1).toString().padStart(2,"0");e.innerText=`${l} / ${c}`},!0)),b.push(()=>{e.style.display="none",n.style.display="none",t.style.display="none",i.style.display="none",r.style.display="none"})}const A="3.0.0",O=13;function ge(e){var t,i,r;const n=s=>s?!(typeof s.id!="number"||typeof s.name!="string"||typeof s.shortName!="string"||typeof s.visible!="boolean"||s.color&&typeof s.color!="string"):!1;if((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.storage)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(s=>typeof s!="number")||e.settings.shifts.find(s=>!n(s)))return!1;for(const s in e.storage){if(typeof s!="string"||((r=e.storage[s])==null?void 0:r.constructor)!==Object)return!1;for(const a in e.storage[s]){if(typeof a!="string")return!1;const o=e.storage[s][a];if((o==null?void 0:o.constructor)!==Object||!n(o.shift)&&o.shift!==null||typeof o.note!="string")return!1}}return!0}function ye(e){var t,i;const n=r=>r?!(typeof r.id!="number"||typeof r.name!="string"||typeof r.shortName!="string"||typeof r.visible!="boolean"||r.color&&typeof r.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(r=>typeof r!="number")||e.settings.shifts.find(r=>!n(r))||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(r=>{var s;return typeof r.year!="number"||typeof r.month!="number"||typeof r.date!="number"||r.shift!==null&&((s=r.shift)==null?void 0:s.constructor)!==Object||typeof r.note!="string"||!n(r.shift)&&r.shift!==null}))}function be(e){var t,i;const n=r=>r?!(typeof r.id!="number"||typeof r.name!="string"||typeof r.shortName!="string"||typeof r.visible!="boolean"||r.color&&typeof r.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||typeof e.weekStart!="number"||((t=e.version)==null?void 0:t.constructor)!==Object||((i=e.indexedDB)==null?void 0:i.constructor)!==Object||!Array.isArray(e.shifts)||!Array.isArray(e.rhythm)||typeof e.startDate!="number"||e.rhythm.find(r=>typeof r!="number")||e.shifts.find(r=>!n(r))||typeof e.version.version!="string"||typeof e.version.build!="number"||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(r=>{var s;return typeof r.year!="number"||typeof r.month!="number"||typeof r.date!="number"||r.shift!==null&&((s=r.shift)==null?void 0:s.constructor)!==Object||typeof r.note!="string"||!n(r.shift)&&r.shift!==null}))}function ve(e){return{weekStart:0,version:{version:A,build:O},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:{version:e.indexedDB.version,data:e.indexedDB.data.map(n=>({year:n.year,month:n.month,date:n.date,shift:n.shift||null,note:n.note}))}}}function we(e){return{weekStart:0,version:{version:A,build:O},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:Se(e)}}function Se(e){const n={version:1,data:[]},t=i=>{for(const[r,s]of Object.entries(i)){const[a,o,l]=r.split("-",3).map(c=>parseInt(c,10));isNaN(a)||isNaN(o)||isNaN(l)||o<0||o>11||!("shift"in s)||!("note"in s)||n.data.push({year:a,month:o,date:l,shift:s.shift,note:s.note})}};return Object.values(e.storage).forEach(i=>t(i)),n}const ke=v`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function Te(){const e=document.createElement("article");e.className="backup",e.innerHTML=ke;const n=e.querySelector("section.json button.import"),t=e.querySelector("section.json button.export");return n.onclick=async()=>{const i=document.createElement("input");i.type="file",i.accept="application/json",i.onchange=async()=>{if(!i.files||i.files.length===0)return;const r=new FileReader;r.onload=async()=>await De(r.result),r.onerror=()=>{alert(`Import data: read file failed: ${r.error}`)},r.readAsText(i.files[0])},i.click()},t.onclick=async()=>{const i={weekStart:u.get("weekStart"),shifts:u.get("shifts"),rhythm:u.get("rhythm"),startDate:u.get("startDate"),version:u.get("version"),indexedDB:{version:y.version,data:await y.getAll()}},r=new Blob([JSON.stringify(i)],{type:"octet/stream"}),s=document.createElement("a");s.setAttribute("href",window.URL.createObjectURL(r));const a=new Date,o=(a.getMonth()+1).toString().padStart(2,"0"),l=a.getDate().toString().padStart(2,"0"),c=`shift-scheduler-backup_${a.getFullYear()}-${o}-${l}.json`;s.setAttribute("download",c),s.click()},e}async function De(e){if(typeof e!="string")return alert("Invalid data!");let n;try{n=JSON.parse(e)}catch{return alert("Invalid JSON data!")}let t;if(be(n))t=n;else if(ye(n))t=ve(n);else if(ge(n))t=we(n);else return alert("Invalid JSON data!");u.set("shifts",t.shifts),u.set("rhythm",t.rhythm),u.set("startDate",t.startDate),u.set("weekStart",t.weekStart),await y.deleteAll();for(const i of t.indexedDB.data||[])y.add(i).catch(()=>y.put(i))}const xe=v`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button>Browse</button>
        </label>
    </section>
`;function Me(){const e=document.createElement("article");return e.className="db-browser",e.innerHTML=xe,e}const qe=v`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function Ee(){const e=document.createElement("article");e.className="misc",e.innerHTML=qe;const n=e.querySelector('section.week-start input[type="checkbox"]');return n.checked=u.get("weekStart")===1,n.onchange=()=>{u.set("weekStart",n.checked?1:0)},e}const Le=v`
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
`;function $e(){const e=document.createElement("article");e.className="shifts",e.innerHTML=Le;const n=()=>{const s=e.querySelector("section.shifts-table tbody"),a=e.querySelector("section.shifts-table template.table-item");s.innerHTML="",u.get("shifts").forEach(o=>{const l=a.content.cloneNode(!0).querySelector("tr.item");s.appendChild(l),l.querySelector(".name").innerText=o.name;const c=l.querySelector(".short-name");c.style.color=o.color||"inherit",c.innerText=o.visible?o.shortName:"";const m=l.querySelector("button.edit");m.onclick=async()=>{await T(o)&&(u.update("shifts",g=>g.map(p=>p.id===o.id?o:p)),n())};const h=l.querySelector("button.delete");h.onclick=async()=>{confirm(`Delete shift "${o.name}"?`)&&u.update("shifts",d=>d.filter(g=>g.id!==o.id)),n()}}),e.querySelector("section.shifts-table button.add-shift").onclick=async()=>{const o=await T(null);o&&(u.update("shifts",l=>(l.push(o),l)),n())}};n();const t=e.querySelector('section.start-date input[type="date"]');if(u.get("startDate")){const s=new Date,a=(s.getMonth()+1).toString().padStart(2,"0"),o=s.getDate().toString().padStart(2,"0");t.value=`${s.getFullYear()}-${a}-${o}`,t.onchange=()=>{u.set("startDate",new Date(t.value).getTime())}}const r=e.querySelector("section.edit-rhythm button");return r.onclick=async()=>{u.set("rhythm",await te(u.get("rhythm"),u.get("shifts")))},e}let I="",x=null,S=[];async function Be(){I=E(),w("Settings");const e=document.querySelector("#routerTarget");e.innerHTML="",Ae(),e.appendChild(Ee()),e.appendChild(document.createElement("br")),e.appendChild($e()),e.appendChild(document.createElement("br")),e.appendChild(Te()),e.appendChild(document.createElement("br")),e.appendChild(Me())}async function Ne(){w(I),S.forEach(e=>e()),S=[]}function Ae(){const e=document.querySelector(".ui-app-bar .left .back");e.style.display="inline-flex",x=e.onclick,e.onclick=()=>q.hash.goTo(null,""),S.push(()=>{e.style.display="none",e.onclick=x})}const Oe=V({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await Oe()}});y.open(()=>{q.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){he()},onDestroy(){fe()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){Be()},onDestroy(){Ne()}}}})});
