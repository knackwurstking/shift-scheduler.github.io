var L=Object.defineProperty;var $=(n,e,t)=>e in n?L(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>$(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();class b{constructor(){this.listeners={}}addListener(e,t){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(r=>r!==t))}dispatch(e,t){this.listeners[e]&&this.listeners[e].forEach(r=>r(t))}}class I{constructor(e){this.prefix="",this.events=new b,this.data={},this.prefix=e}delete(e,t){t!=null&&t.skipStore||localStorage.removeItem(`${this.prefix}${e}`),delete this.data[e]}get(e,t){if(!(t!=null&&t.skipStore)){const r=localStorage.getItem(`${this.prefix}${e}`);if(r!==null)return JSON.parse(r)}if(this.data.hasOwnProperty(e))return this.data[e]}set(e,t,r=!1,i){if(r){let s=null;i!=null&&i.skipStore?s=null:s=localStorage.getItem(`${this.prefix}${e}`),s!==null?this.data[e]=JSON.parse(s):this.data.hasOwnProperty(e)||(this.data[e]=t)}else this.data[e]=t;i!=null&&i.skipStore||localStorage.setItem(`${this.prefix}${e}`,JSON.stringify(this.data[e])),this.events.dispatch(e,this.data[e])}update(e,t,r){const i=this.get(e,r);if(i===void 0)throw new Error(`"${e}" not found, use \`set\``);this.set(e,t(i),!1,r)}listen(e,t,r=!1,i){if(r){const s=this.get(e,i);s!==void 0&&setTimeout(()=>t(s))}return this.events.addListener(e,t)}}function X(n,e){let t=null;async function r(i){var s,o;if(t!==null&&(((s=t.template)==null?void 0:s.onDestroy)!==void 0&&t.template.onDestroy(),t.onDestroy!==void 0&&t.onDestroy()),t=i,t.title!==void 0){const a=document.querySelector("head > title");a!==null&&(a.innerHTML=t.title)}if((t==null?void 0:t.href)!==void 0&&n){const a=await(await fetch(t.href)).text();n.innerHTML=a,t.scripts!==void 0&&t.scripts.forEach(l=>{const d=document.createElement("script");d.setAttribute("data-template",t.href),d.src=l.src,n.appendChild(d)})}if((t==null?void 0:t.onMount)!==void 0&&t.onMount(),t!=null&&t.template){let a=n;if(t.template.target!==void 0&&(a=document.querySelector(t.template.target)),t.template.selector&&a){const l=document.querySelector(t.template.selector);if(!l)throw`${t.template.selector} not found`;l instanceof HTMLTemplateElement?(a.innerHTML="",a.appendChild(l.content.cloneNode(!0))):a.innerHTML=l.innerHTML}((o=t.template)==null?void 0:o.onMount)!==void 0&&t.template.onMount()}}window.addEventListener("hashchange",()=>{const i=window.location.hash.replace("#","");let s="";for(const o of Object.keys(e))i.startsWith(o)&&o>s&&(s=o);if(!s){const o=e["/"];if(o===void 0){console.warn(`Window location “${i}” is missing in routes, and the fallback route “/“ is also missing.`);return}r(o);return}r(e[s])}),window.dispatchEvent(new Event("hashchange"))}function O(n,e){let t;if(n?t=`?${Object.entries(n).map(([r,i])=>`${encodeURIComponent(r)}=${encodeURIComponent(i)}`).join("&")}`:t="",!e&&!t){location.hash="";return}location.hash=`#${encodeURIComponent(e)}`+(t?`&${t}`:"")}function B(){const n={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(e=>{e.split("&").forEach(t=>{const[r,i]=t.split("=");n[decodeURIComponent(r)]=decodeURIComponent(i)})}),n}const N=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:B,goTo:O,init:X},Symbol.toStringTag,{value:"Module"})),H=Object.freeze(Object.defineProperty({__proto__:null,hash:N},Symbol.toStringTag,{value:"Module"}));function w(){return T().innerText}function m(n){T().innerText=n}function T(){return document.querySelector(".ui-app-bar .center .title")}const P="shift-scheduler:",u=(()=>{const n=new I(P),e=new Date;return n.set("date-picker",new Date(e.getFullYear(),e.getMonth(),1).getTime(),!1),n.set("week-start",0,!0),n.set("settings",{shifts:[],rhythm:[],startDate:""},!0),n.set("edit-mode",{open:!1,active:null},!1),n})();async function A(n,e,t){const r=[],i=u.get("week-start");for(let s=0;s<n;s++){const o=new Date(e,t,s+1-C(e,t,i));r.push({year:o.getFullYear(),month:o.getMonth(),date:o.getDate(),shift:j(o),note:""})}return r}function C(n,e,t){const i=new Date(n,e,1).getDay();return t===0?i:i===0?6:i-1}function j(n){const e=u.get("settings");if(!e.startDate||!e.rhythm.length)return null;const t=new Date(e.startDate),r=Math.round((n.getTime()-t.getTime())/(1e3*60*60*24));return r<=0?e.shifts.find(i=>i.id===e.rhythm[e.rhythm.length+(r%e.rhythm.length||-e.rhythm.length)])||null:e.shifts.find(i=>i.id===e.rhythm[r%e.rhythm.length])||null}function F(n){return typeof n.id!="number"||typeof n.name!="string"||typeof n.shortName!="string"||typeof n.color!="string"&&n.color?!1:(n.color==="transparent"&&(n.visible=!1,n.color=null),typeof n.visible!="boolean"&&(n.visible=!0),n.color||(n.color=null),!0)}class Y{constructor(e,t){c(this,"version");c(this,"name");c(this,"storeName","user");c(this,"request",null);this.name=e,this.version=t}open(e){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{e&&e()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(e,t){switch(e){case 0:case 1:return _(t);default:return!1}}get(e,t,r){return new Promise(i=>{const s=this.roStore().get([e,t,r]);s.onsuccess=()=>i(s.result||null),s.onerror=()=>i(null)})}getAll(){return new Promise(e=>{const t=this.roStore().getAll();t.onsuccess=()=>e(t.result),t.onerror=r=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,r),e([])}})}add(e){return new Promise((t,r)=>{const i=this.rwStore().add(e);i.onsuccess=()=>t(),i.onerror=async s=>{console.warn(`[DB] Error while adding "${e.year}-${e.month}-${e.date}" to "${this.storeName}"!`,s),r(i.error)}})}put(e){return new Promise((t,r)=>{const i=this.rwStore().put(e);i.onsuccess=()=>t(),i.onerror=async s=>{console.warn(`[DB] Error while putting "${e.year}-${e.month}-${e.date}" to "${this.storeName}"!`,s),r(i.error)}})}delete(e,t,r){return new Promise((i,s)=>{const o=this.rwStore().delete([e,t,r]);o.onsuccess=()=>i(),o.onerror=()=>{s(o.error)}})}deleteAll(){return new Promise((e,t)=>{const r=this.rwStore().clear();r.onsuccess=()=>e(),r.onerror=()=>{t(r.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(e){if(!e.objectStoreNames.contains(this.storeName)){const t=e.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});t.createIndex("year","year",{unique:!1}),t.createIndex("month","month",{unique:!1}),t.createIndex("date","date",{unique:!1}),t.createIndex("note","note",{unique:!1}),t.createIndex("shift","shift",{unique:!1})}}onError(e){var t;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:e}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(e){var t;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:e}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(e){switch(e.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function _(n){return!(typeof n.year!="number"||typeof n.month!="number"||typeof n.date!="number"||(typeof n.note!="string"&&(n.note=""),n.shift!==null&&!F(n.shift)))}const S=new Y("shift-scheduler",1),f={datePicker:{dialog:'dialog[name="date-picker"]',form:'dialog[name="date-picker"] form',inputs:{month:'dialog[name="date-picker"] form input[type="month"]'}}};function R(n){return new Promise(e=>{const t=document.querySelector(f.datePicker.dialog),r=document.querySelector(f.datePicker.inputs.month);switch(typeof n){case"string":n=new Date(n);break;case"number":n=new Date(n);break}r.value=`${n.getFullYear()}-${(n.getMonth()+1).toString().padStart(2,"0")}`;let i=null;const s=document.querySelector(f.datePicker.form);s.onsubmit=()=>{i={date:new Date(r.value).getTime()}},t.onclose=()=>e(i),t.showModal()})}const z=String.raw,U=[0,1,2,3,4,5,6],W=["Sun","Mon","Tue","Wed","Thy","Fri","Sat"];function J(n,e){const t=document.querySelector('template[name="calendar-item-content"]').content.cloneNode(!0),r=t.querySelector(".item-content");for(let i=0;i<6;i++){const s=document.createElement("div");r.appendChild(s),s.className="days ui-flex-grid-item ui-flex-grid-row",s.style.setProperty("--gap","0.05rem");for(let o=0;o<7;o++)s.append(V(0))}return setTimeout(()=>{M(r,n,e)}),t}async function M(n,e,t){const r=new Date(e,t),i=u.get("settings"),s=Array.from(n.querySelectorAll(".item-content > .days > .day"));(await A(s.length,r.getFullYear(),r.getMonth())).forEach(async(a,l)=>{const d=await S.get(a.year,a.month,a.date);if(d!==null){a.note=d.note;const g=i.shifts.find(D=>{var y;return D.id===((y=d.shift)==null?void 0:y.id)});g?a.shift=g:a.shift=d.shift||a.shift}G(s[l],a),t!==a.month?s[l].setAttribute("disabled",""):s[l].removeAttribute("disabled"),a.year!==r.getFullYear()||a.month!==r.getMonth()?s[l].classList.add("inactive"):s[l].classList.remove("inactive")}),K([...n.querySelectorAll(".item-content > .week-days > .week-day")],s)}function K(n,e){const t=u.get("week-start");let r=U;t>0&&(r=[...r.slice(t),...r.slice(0,t)]);const i=r.findIndex(o=>o===6),s=r.findIndex(o=>o===0);n.forEach((o,a)=>{o.innerHTML=`${W[r[a%7]]}`}),[...n,...e].forEach((o,a)=>{o.classList.remove("saturday"),o.classList.remove("sunday"),a%r.length===i&&o.classList.add("saturday"),a%r.length===s&&o.classList.add("sunday")})}function V(n,e){const t=document.createElement("div");return t.className="day ui-flex-grid-item",t.innerHTML=z`
        <div class="date">${n}</div>
        <div class="shift">${""}</div>
    `,t}function G(n,e){((i,s,o)=>{const a=new Date;return a.getFullYear()===i&&a.getMonth()===s&&a.getDate()===o})(e.year,e.month,e.date)?n.classList.add("today"):n.classList.remove("today"),e.note?n.classList.add("note"):n.classList.remove("note"),n.querySelector(".date").innerHTML=`${e.date}`;const r=n.querySelector(".shift");e.shift?(r.style.setProperty("--shift-color",e.shift.visible?e.shift.color||"inherit":"transparent"),r.innerHTML=e.shift.shortName||""):(r.style.removeProperty("--shift-color"),r.innerHTML=""),n.setAttribute("data-year",e.year.toString()),n.setAttribute("data-month",e.month.toString()),n.setAttribute("data-date",e.date.toString())}async function Q(n){const e=new Date(n);e.setMonth(e.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async t=>{M(t.querySelector(".item-content"),e.getFullYear(),e.getMonth()),e.setMonth(e.getMonth()+1)})}async function Z(n){}async function v(n){switch(n){case"left":u.update("date-picker",e=>{const t=new Date(e);return t.setMonth(t.getMonth()+1),t.getTime()});break;case"right":u.update("date-picker",e=>{const t=new Date(e);return t.setMonth(t.getMonth()-1),t.getTime()});break}}const ee=75;class te extends b{constructor(t){super();c(this,"container");c(this,"finalTransform",!1);c(this,"startX",null);c(this,"clientX",null);c(this,"onMouseMove");c(this,"onTouchMove");c(this,"onMouseOrTouchEnd");c(this,"onTouchCancel");c(this,"animationFrameHandler");this.container=t}start(){this.onMouseMove=async t=>{this.finalTransform||t.buttons===1&&(this.startX===null&&(this.startX=t.clientX,this.containerItems().forEach(r=>r.classList.add("moving"))),this.clientX=t.clientX)},this.onTouchMove=async t=>{this.finalTransform||(this.startX===null&&(this.startX=t.touches[0].clientX,this.containerItems().forEach(r=>r.classList.add("moving"))),this.clientX=t.touches[0].clientX)},this.onMouseOrTouchEnd=async t=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const r=t.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(r.width+1):-r.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async t=>{this.startX!==null&&await this.onMouseOrTouchEnd(t)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>ee*(window.innerWidth/1080)}moveX(t){const r=this.containerItems();r[0].style.left=`calc(-100% + ${t}px)`,r[1].style.left=`calc(0% + ${t}px)`,r[2].style.left=`calc(100% + ${t}px)`}setTransition(t){this.containerItems().forEach(i=>i.style.transition=t)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(t=>t.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const t=this.containerItems(),r=this.clientX>this.startX?"right":"left";switch(r){case"left":this.container.appendChild(this.container.removeChild(t[0]));break;case"right":this.container.insertBefore(this.container.removeChild(t[2]),t[0]);break}this.moveX(0),this.dispatch("swipe",r)}}const ne=String.raw,x=document.createElement("template");x.innerHTML=ne`
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
`;let k="",h=[];async function re(){k=w(),m("");const n=document.querySelector("#routerTarget");n.innerHTML="",n.appendChild(x.content.cloneNode(!0));const e=new te(document.querySelector(".item-container"));oe(),se(),ae(),setTimeout(()=>{e.start()}),e.addListener("swipe",v),h.push(()=>{e.removeListener("swipe",v),e.stop()})}async function ie(){m(k),h.forEach(n=>n()),h=[]}function se(){const n=new Date;Array.from(document.querySelector(".item-container").children).forEach(e=>{e.innerHTML="",e.appendChild(J(n.getFullYear(),n.getMonth()))})}function oe(){const n=document.querySelector(".ui-app-bar .left button.date-picker"),e=document.querySelector(".ui-app-bar .right button.today"),t=document.querySelector(".ui-app-bar .right button.edit"),r=document.querySelector(".ui-app-bar .right button.printer"),i=document.querySelector(".ui-app-bar .right button.settings");n.style.display="inline-flex",e.style.display="inline-flex",t.style.display="inline-flex",r.style.display="inline-flex",i.style.display="inline-flex",n.onclick=async()=>{const s=await R(u.get("date-picker"));s&&u.set("date-picker",s.date)},e.onclick=async()=>{u.set("date-picker",new Date().getTime())},h.push(u.listen("date-picker",s=>{const o=new Date,a=new Date(s),l=a.getFullYear();l===o.getFullYear()&&a.getMonth()===o.getMonth()?e.setAttribute("disabled",""):e.removeAttribute("disabled");const d=(a.getMonth()+1).toString().padStart(2,"0");n.innerText=`${l} / ${d}`},!0)),h.push(()=>{n.style.display="none",e.style.display="none",t.style.display="none",r.style.display="none",i.style.display="none"})}function ae(){h.push(u.listen("date-picker",Q,!0),u.listen("edit-mode",Z,!0))}const le=String.raw,q=document.createElement("template");q.innerHTML=le`
    <article class="misc">
        <h4>Miscellaneous</h4>

        <section class="week-start">
            <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
                The week starts on Monday
                <input type="checkbox" />
            </label>
        </section>
    </article>

    <br />

    <article class="shifts">
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
                <tr class="item" data-json="">
                    <td class="name" style="text-align: left;"></td>

                    <td class="shift-short" style="text-align: left; color: inherit"></td>

                    <td class="actions" style="text-align: right;">
                        <div class="ui-flex-grid-row" style="--justify: flex-end;">
                            <div class="ui-flex-grid-item" style="--flex: 0;">
                                <button class="pen" variant="ghost" icon>
                                    <i class="bi bi-pen"></i>
                                </button>
                            </div>

                            <div class="ui-flex-grid-item" style="--flex: 0;">
                                <button class="delete" variant="ghost" icon>
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
    </article>

    <br />

    <article class="backup">
        <h4>Backup</h4>

        <section class="json-file">
            <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
                Backup to JSON
                <span class="ui-flex gap" style="--justify: flex-end;">
                    <button class="import" color="secondary">Import</button>
                    <button class="export" color="secondary">Export</button>
                </span>
            </label>
        </section>
    </article>

    <br />

    <article class="db-browser">
        <h4>IndexedDB</h4>

        <section>
            <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
                Edit entries
                <button>Browse</button>
            </label>
        </section>
    </article>
`;let E="",p=[];async function ce(){E=w(),m("Settings");const n=document.querySelector("#routerTarget");n.innerHTML="",n.appendChild(q.content.cloneNode(!0)),de()}async function ue(){m(E),p.forEach(n=>n()),p=[]}function de(){const n=document.querySelector(".ui-app-bar .left .back");n.style.display="inline-flex",p.push(()=>{n.style.display="none"})}S.open(()=>{H.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){re()},onDestroy(){ie()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){ce()},onDestroy(){ue()}}}})});
