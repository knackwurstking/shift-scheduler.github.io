var F=Object.defineProperty;var _=(e,r,t)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var g=(e,r,t)=>_(e,typeof r!="symbol"?r+"":r,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();class L{constructor(){this.listeners={}}addListener(r,t){return this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push(t),()=>this.removeListener(r,t)}removeListener(r,t){this.listeners[r]&&(this.listeners[r]=this.listeners[r].filter(n=>n!==t))}dispatch(r,t){this.listeners[r]&&this.listeners[r].forEach(n=>n(t))}}class U{constructor(r){this.prefix="",this.events=new L,this.data={},this.prefix=r}delete(r,t){t!=null&&t.skipStore||localStorage.removeItem(`${this.prefix}${r}`),delete this.data[r]}get(r,t){if(!(t!=null&&t.skipStore)){const n=localStorage.getItem(`${this.prefix}${r}`);if(n!==null)return JSON.parse(n)}if(this.data.hasOwnProperty(r))return this.data[r]}set(r,t,n=!1,i){if(n){let o=null;i!=null&&i.skipStore?o=null:o=localStorage.getItem(`${this.prefix}${r}`),o!==null?this.data[r]=JSON.parse(o):this.data.hasOwnProperty(r)||(this.data[r]=t)}else this.data[r]=t;i!=null&&i.skipStore||localStorage.setItem(`${this.prefix}${r}`,JSON.stringify(this.data[r])),this.events.dispatch(r,this.data[r])}update(r,t,n){const i=this.get(r,n);if(i===void 0)throw new Error(`"${r}" not found, use \`set\``);this.set(r,t(i),!1,n)}listen(r,t,n=!1,i){if(n){const o=this.get(r,i);o!==void 0&&setTimeout(()=>t(o))}return this.events.addListener(r,t)}}function W(e,r){let t=null;async function n(i){var o,a;if(t!==null&&(((o=t.template)==null?void 0:o.onDestroy)!==void 0&&t.template.onDestroy(),t.onDestroy!==void 0&&t.onDestroy()),t=i,t.title!==void 0){const s=document.querySelector("head > title");s!==null&&(s.innerHTML=t.title)}if((t==null?void 0:t.href)!==void 0&&e){const s=await(await fetch(t.href)).text();e.innerHTML=s,t.scripts!==void 0&&t.scripts.forEach(l=>{const c=document.createElement("script");c.setAttribute("data-template",t.href),c.src=l.src,e.appendChild(c)})}if((t==null?void 0:t.onMount)!==void 0&&t.onMount(),t!=null&&t.template){let s=e;if(t.template.target!==void 0&&(s=document.querySelector(t.template.target)),t.template.selector&&s){const l=document.querySelector(t.template.selector);if(!l)throw`${t.template.selector} not found`;l instanceof HTMLTemplateElement?(s.innerHTML="",s.appendChild(l.content.cloneNode(!0))):s.innerHTML=l.innerHTML}((a=t.template)==null?void 0:a.onMount)!==void 0&&t.template.onMount()}}window.addEventListener("hashchange",()=>{const i=window.location.hash.replace("#","");let o="";for(const a of Object.keys(r))i.startsWith(a)&&a>o&&(o=a);if(!o){const a=r["/"];if(a===void 0){console.warn(`Window location “${i}” is missing in routes, and the fallback route “/“ is also missing.`);return}n(a);return}n(r[o])}),window.dispatchEvent(new Event("hashchange"))}function Y(e,r){let t;if(e?t=`?${Object.entries(e).map(([n,i])=>`${encodeURIComponent(n)}=${encodeURIComponent(i)}`).join("&")}`:t="",!r&&!t){location.hash="";return}location.hash=`#${encodeURIComponent(r)}`+(t?`&${t}`:"")}function V(){const e={};return location.hash.replace(/^#.*\?/,"").split("?").forEach(r=>{r.split("&").forEach(t=>{const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)})}),e}const J=Object.freeze(Object.defineProperty({__proto__:null,getSearchParam:V,goTo:Y,init:W},Symbol.toStringTag,{value:"Module"})),$=Object.freeze(Object.defineProperty({__proto__:null,hash:J},Symbol.toStringTag,{value:"Module"})),z="modulepreload",R=function(e){return"/shift-scheduler.github.io/"+e},D={},K=function(r,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=R(l),l in D)return;D[l]=!0;const c=l.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":z,c||(h.as="script"),h.crossOrigin="",h.href=l,s&&h.setAttribute("nonce",s),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return r().catch(o)})};function Z(e={}){const{immediate:r=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:i,onRegisteredSW:o,onRegisterError:a}=e;let s,l,c;const p=async(d=!0)=>{await l,c==null||c()};async function h(){if("serviceWorker"in navigator){if(s=await K(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/shift-scheduler.github.io/sw.js",{scope:"/shift-scheduler.github.io/",type:"classic"})).catch(d=>{a==null||a(d)}),!s)return;c=()=>{s==null||s.messageSkipWaiting()};{let d=!1;const f=()=>{d=!0,s==null||s.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()}),t==null||t()};s.addEventListener("installed",m=>{typeof m.isUpdate>"u"?typeof m.isExternal<"u"&&m.isExternal?f():!d&&(n==null||n()):m.isUpdate||n==null||n()}),s.addEventListener("waiting",f)}s.register({immediate:r}).then(d=>{o?o("/shift-scheduler.github.io/sw.js",d):i==null||i(d)}).catch(d=>{a==null||a(d)})}}return l=h(),p}function N(){return B().innerText}function T(e){B().innerText=e}function B(){return document.querySelector(".ui-app-bar .center .title")}const G="shift-scheduler:",u=(()=>{var n;const e=new U(G),r=new Date;e.set("datePicker",new Date(r.getFullYear(),r.getMonth(),1).getTime(),!1),e.set("weekStart",0,!0),e.set("shifts",[],!0),e.set("rhythm",[],!0),e.set("startDate",0,!0),e.set("editMode",{open:!1,active:null},!1);const t={version:"0.0.0",build:1};switch((n=e.get("version"))==null?void 0:n.build){case void 0:const i=e.get("startDate");i&&e.set("startDate",new Date(i).getTime());break}return e.set("version",t),e})();async function Q(e,r,t){const n=[],i=u.get("weekStart");for(let o=0;o<e;o++){const a=new Date(r,t,o+1-ee(r,t,i));n.push({year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),shift:te(a),note:""})}return n}function ee(e,r,t){const i=new Date(e,r,1).getDay();return t===0?i:i===0?6:i-1}function te(e){const r=u.get("startDate"),t=u.get("shifts"),n=u.get("rhythm");if(!r||!n.length)return null;const i=new Date(r),o=Math.round((e.getTime()-i.getTime())/(1e3*60*60*24));return o<=0?t.find(a=>a.id===n[n.length+(o%n.length||-n.length)])||null:t.find(a=>a.id===n[o%n.length])||null}function re(e){return typeof e.id!="number"||typeof e.name!="string"||typeof e.shortName!="string"||typeof e.color!="string"&&e.color?!1:(e.color==="transparent"&&(e.visible=!1,e.color=null),typeof e.visible!="boolean"&&(e.visible=!0),e.color||(e.color=null),!0)}const S=String.raw;class ne{constructor(r,t){g(this,"version");g(this,"name");g(this,"storeName","user");g(this,"request",null);this.name=r,this.version=t}open(r){this.request=window.indexedDB.open(this.name,this.version),this.request.onerror=this.onError.bind(this),this.request.onblocked=this.onBlocked.bind(this),this.request.onsuccess=()=>{r&&r()},this.request.onupgradeneeded=this.onUpgradeNeeded.bind(this)}close(){this.request!==null&&this.request.result.close()}validate(r,t){switch(r){case 0:case 1:return ie(t);default:return!1}}get(r,t,n){return new Promise(i=>{const o=this.roStore().get([r,t,n]);o.onsuccess=()=>i(o.result||null),o.onerror=()=>i(null)})}getAll(){return new Promise(r=>{const t=this.roStore().getAll();t.onsuccess=()=>r(t.result),t.onerror=n=>{console.warn(`[DB] Error while getting all data from the store: "${this.storeName}"`,n),r([])}})}add(r){return new Promise((t,n)=>{const i=this.rwStore().add(r);i.onsuccess=()=>t(),i.onerror=async o=>{console.warn(`[DB] Error while adding "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,o),n(i.error)}})}put(r){return new Promise((t,n)=>{const i=this.rwStore().put(r);i.onsuccess=()=>t(),i.onerror=async o=>{console.warn(`[DB] Error while putting "${r.year}-${r.month}-${r.date}" to "${this.storeName}"!`,o),n(i.error)}})}delete(r,t,n){return new Promise((i,o)=>{const a=this.rwStore().delete([r,t,n]);a.onsuccess=()=>i(),a.onerror=()=>{o(a.error)}})}deleteAll(){return new Promise((r,t)=>{const n=this.rwStore().clear();n.onsuccess=()=>r(),n.onerror=()=>{t(n.error)}})}roStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readonly").objectStore(this.storeName)}rwStore(){if(this.request===null)throw"request is null, run open first!";return this.request.result.transaction(this.storeName,"readwrite").objectStore(this.storeName)}createStore(r){if(!r.objectStoreNames.contains(this.storeName)){const t=r.createObjectStore(this.storeName,{autoIncrement:!1,keyPath:["year","month","date"]});t.createIndex("year","year",{unique:!1}),t.createIndex("month","month",{unique:!1}),t.createIndex("date","date",{unique:!1}),t.createIndex("note","note",{unique:!1}),t.createIndex("shift","shift",{unique:!1})}}onError(r){var t;console.error(`[DBCustom] Handle request failed: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request failed: ${this.name} (see console)`)}onBlocked(r){var t;console.warn(`[DBCustom] Handle request blocked: ${this.name}`,{error:((t=this.request)==null?void 0:t.error)||null,event:r}),alert(`[DBCustom] Handle request blocked: ${this.name} (see console)`)}onUpgradeNeeded(r){switch(r.oldVersion){case 0:if(this.request===null)throw"request is null, run open first!";this.createStore(this.request.result);break}}}function ie(e){return!(typeof e.year!="number"||typeof e.month!="number"||typeof e.date!="number"||(typeof e.note!="string"&&(e.note=""),e.shift!==null&&!re(e.shift)))}const v=new ne("shift-scheduler",1);function oe(e){return new Promise(r=>{const t=document.querySelector('dialog[name="date-picker"]'),n=t.querySelector("form"),i=n.querySelector("button.cancel"),o=n.querySelector('input[type="month"]');switch(typeof e){case"string":e=new Date(e);break;case"number":e=new Date(e);break}const a=(e.getMonth()+1).toString().padStart(2,"0");o.value=`${e.getFullYear()}-${a}`;let s=null;n.onsubmit=()=>{s={date:new Date(o.value).getTime()}},t.onclose=()=>r(s),i.onclick=l=>{l.preventDefault(),t.close()},t.showModal()})}function q(e){return new Promise(r=>{const t=document.querySelector('dialog[name="shift"]'),n=t.querySelector("form"),i=n.querySelector("button.cancel"),o=n.querySelector("input.name"),a=n.querySelector("input.short-name"),s=n.querySelector("input.color-picker"),l=n.querySelector("input.default-color"),c=n.querySelector("input.hidden");let p=null;t.onclose=()=>r(p),i.onclick=h=>{h.preventDefault(),t.close()},n.onsubmit=h=>{const d={id:(e==null?void 0:e.id)||new Date().getTime(),name:o.value,shortName:a.value,visible:!c.checked,color:l.checked?null:s.value||null};if(!d.name){h.preventDefault(),o.ariaInvalid="";return}if(o.ariaInvalid=null,!d.shortName){h.preventDefault(),a.ariaInvalid="";return}a.ariaInvalid=null,p=d},o.value=(e==null?void 0:e.name)||"",a.value=(e==null?void 0:e.shortName)||"",s.value=(e==null?void 0:e.color)||"#66FF00",l.checked=!(e!=null&&e.color),c.checked=typeof(e==null?void 0:e.visible)!="boolean"?!1:!e.visible,l.onchange=()=>{s.disabled=l.checked,a.style.color=l.checked?"inherit":s.value||"inherit"},c.onchange=h=>{a.disabled=c.checked,s.disabled=c.checked,l.disabled=c.checked,l.onchange(h)},l.onchange(new Event("change")),c.onchange(new Event("change")),t.showModal()})}function se(e,r){return new Promise(t=>{const n=document.querySelector('dialog[name="rhythm"]'),i=n.querySelector("form"),o=i.querySelector("button.cancel"),a=i.querySelector("tbody"),s=i.querySelector(".shifts-container"),l=n.querySelector('template[name="table-item"]'),c=document.querySelector('template[name="shift-card"]'),p=()=>{a.innerHTML="",e.forEach((f,m)=>{let y=r.find(X=>X.id===f);y||(y={id:f,name:"",shortName:"",color:"var(--destructive)",visible:!1});const b=l.content.cloneNode(!0).querySelector(".table-item");b.querySelector(".name").innerText=y.name;const x=b.querySelector(".short-name");x.style.color=y.color||"inherit",x.innerText=y.visible?y.shortName:"";const H=b.querySelector("button.delete");H.onclick=()=>{e.splice(m,1),p()},a.appendChild(b),b.scrollIntoView()})},h=()=>{s.innerHTML="",r.forEach(f=>{const m=c.content.cloneNode(!0).querySelector(".shift-card");s.appendChild(m);const y=m.querySelector(".name");y.innerText=f.name;const b=m.querySelector(".short-name");b.style.color=f.color||"inherit",b.innerText=f.visible?f.shortName:"",m.onclick=()=>{e.push(f.id),p()}})};p(),h();const d=e;n.onclose=()=>t(d),o.onclick=f=>{f.preventDefault(),n.close()},i.onsubmit=()=>{t(e)},n.showModal()})}const ae=75;class le extends L{constructor(t){super();g(this,"container");g(this,"finalTransform",!1);g(this,"startX",null);g(this,"clientX",null);g(this,"onMouseMove");g(this,"onTouchMove");g(this,"onMouseOrTouchEnd");g(this,"onTouchCancel");g(this,"animationFrameHandler");this.container=t}start(){this.onMouseMove=async t=>{this.finalTransform||t.buttons===1&&(this.startX===null&&(this.startX=t.clientX,this.containerItems().forEach(n=>n.classList.add("moving"))),this.clientX=t.clientX)},this.onTouchMove=async t=>{this.finalTransform||(this.startX===null&&(this.startX=t.touches[0].clientX,this.containerItems().forEach(n=>n.classList.add("moving"))),this.clientX=t.touches[0].clientX)},this.onMouseOrTouchEnd=async t=>{if(this.startX===null||this.clientX===null||this.finalTransform)return;if(this.finalTransform=!0,!this.isMinSwipe()){this.setTransition(`left ${.15}s ease`),this.moveX(0),setTimeout(()=>this.resetSwipe(),150);return}const n=t.currentTarget.getBoundingClientRect();this.setTransition(`left ${.3}s ease`),this.moveX(this.clientX>this.startX?+(n.width+1):-n.width+1),setTimeout(()=>this.resetSwipe(),300)},this.onTouchCancel=async t=>{this.startX!==null&&await this.onMouseOrTouchEnd(t)},this.animationFrameHandler=async()=>{if(this.finalTransform||this.startX===null||this.clientX===null){requestAnimationFrame(this.animationFrameHandler);return}this.moveX(this.clientX-this.startX),requestAnimationFrame(this.animationFrameHandler)},this.container.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.container.addEventListener("mouseup",this.onMouseOrTouchEnd),this.container.addEventListener("mouseout",this.onMouseOrTouchEnd),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.container.addEventListener("touchend",this.onMouseOrTouchEnd),this.container.addEventListener("touchcancel",this.onTouchCancel),requestAnimationFrame(this.animationFrameHandler)}stop(){this.onMouseMove&&this.container.removeEventListener("mousemove",this.onMouseMove),this.onMouseOrTouchEnd&&(this.container.removeEventListener("mouseup",this.onMouseOrTouchEnd),this.container.removeEventListener("mouseout",this.onMouseOrTouchEnd),this.container.removeEventListener("touchend",this.onMouseOrTouchEnd)),this.onTouchMove&&this.container.removeEventListener("touchmove",this.onTouchMove),this.onTouchCancel&&this.container.removeEventListener("touchcancel",this.onTouchCancel)}containerItems(){return Array.from(this.container.children)}isMinSwipe(){return this.startX===null||this.clientX===null?!1:Math.abs(this.startX-this.clientX)>ae*(window.innerWidth/1080)}moveX(t){const n=this.containerItems();n[0].style.left=`calc(-100% + ${t}px)`,n[1].style.left=`calc(0% + ${t}px)`,n[2].style.left=`calc(100% + ${t}px)`}setTransition(t){this.containerItems().forEach(i=>i.style.transition=t)}resetSwipe(){this.setTransition("none"),this.isMinSwipe()&&this.reorderItems(),this.startX=null,this.clientX=null,this.finalTransform=!1,this.containerItems().forEach(t=>t.classList.remove("moving"))}reorderItems(){if(this.startX===null||this.clientX===null)return;const t=this.containerItems(),n=this.clientX>this.startX?"right":"left";switch(n){case"left":this.container.appendChild(this.container.removeChild(t[0]));break;case"right":this.container.insertBefore(this.container.removeChild(t[2]),t[0]);break}this.moveX(0),this.dispatch("swipe",n)}}const ce=[0,1,2,3,4,5,6],ue=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function de(e,r){const t=document.querySelector('template[name="calendar-item-content"]').content.cloneNode(!0),n=t.querySelector(".item-content");for(let i=0;i<6;i++){const o=document.createElement("div");n.appendChild(o),o.className="days ui-flex-grid-item ui-flex-grid-row",o.style.setProperty("--gap","0.05rem");for(let a=0;a<7;a++)o.append(fe(0))}return setTimeout(()=>{A(n,e,r)}),t}async function A(e,r,t){const n=new Date(r,t),i=Array.from(e.querySelectorAll(".item-content > .days > .day"));let o=await Q(i.length,n.getFullYear(),n.getMonth());const a=u.get("shifts");o.forEach(async(s,l)=>{const c=await v.get(s.year,s.month,s.date);if(c!==null){s.note=c.note;const p=a.find(h=>{var d;return h.id===((d=c.shift)==null?void 0:d.id)});p?s.shift=p:s.shift=c.shift||s.shift}me(i[l],s),t!==s.month?i[l].setAttribute("disabled",""):i[l].removeAttribute("disabled"),s.year!==n.getFullYear()||s.month!==n.getMonth()?i[l].classList.add("inactive"):i[l].classList.remove("inactive")}),he([...e.querySelectorAll(".item-content > .week-days > .week-day")],i)}function he(e,r){const t=u.get("weekStart");let n=ce;t>0&&(n=[...n.slice(t),...n.slice(0,t)]);const i=n.findIndex(a=>a===6),o=n.findIndex(a=>a===0);e.forEach((a,s)=>{a.innerHTML=`${ue[n[s%7]]}`}),[...e,...r].forEach((a,s)=>{a.classList.remove("saturday"),a.classList.remove("sunday"),s%n.length===i&&a.classList.add("saturday"),s%n.length===o&&a.classList.add("sunday")})}function fe(e,r){const t=document.createElement("div");return t.className="day ui-flex-grid-item",t.innerHTML=S`
        <div class="date">${e}</div>
        <div class="shift">${""}</div>
    `,t}function me(e,r){((i,o,a)=>{const s=new Date;return s.getFullYear()===i&&s.getMonth()===o&&s.getDate()===a})(r.year,r.month,r.date)?e.classList.add("today"):e.classList.remove("today"),r.note?e.classList.add("note"):e.classList.remove("note"),e.querySelector(".date").innerHTML=`${r.date}`;const n=e.querySelector(".shift");r.shift?(n.style.setProperty("--shift-color",r.shift.visible?r.shift.color||"inherit":"transparent"),n.innerHTML=r.shift.shortName||""):(n.style.removeProperty("--shift-color"),n.innerHTML=""),e.setAttribute("data-year",r.year.toString()),e.setAttribute("data-month",r.month.toString()),e.setAttribute("data-date",r.date.toString())}async function pe(e){const r=new Date(e);r.setMonth(r.getMonth()-1),Array.from(document.querySelector(".item-container").children).forEach(async t=>{A(t.querySelector(".item-content"),r.getFullYear(),r.getMonth()),r.setMonth(r.getMonth()+1)})}async function ge(e){const t=document.querySelector("#routerTarget").querySelector(".item-container"),n=document.querySelector(".edit-mode");!t||!n||(n.innerHTML="",e.open?(t.setAttribute("edit-mode",""),n.setAttribute("open",""),ye(n,e.active)):(t.removeAttribute("edit-mode"),n.removeAttribute("open")))}async function M(e){switch(e){case"left":u.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()+1),t.getTime()});break;case"right":u.update("datePicker",r=>{const t=new Date(r);return t.setMonth(t.getMonth()-1),t.getTime()});break}}function ye(e,r){const t=document.querySelector('template[name="shift-card"]');(u.get("shifts")||[]).forEach(n=>{const i=t.content.cloneNode(!0).querySelector(".shift-card");r&&r.id===n.id?i.setAttribute("active",""):i.removeAttribute("active"),i.querySelector(".name").innerText=n.name;const o=i.querySelector(".short-name");o.style.color=n.color||"inherit",o.innerText=n.visible?n.shortName:"",i.onclick=()=>{i.hasAttribute("active")?i.removeAttribute("active"):i.setAttribute("active",""),u.update("editMode",a=>(a.active=i.hasAttribute("active")?n:null,a))},e.appendChild(i)})}const O=document.createElement("template");O.innerHTML=S`
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

    <!-- Calendar Item Template -->

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
`;let I="",w=[];async function be(){I=N(),T("");const e=document.querySelector("#routerTarget");e.innerHTML="",e.appendChild(O.content.cloneNode(!0));const r=new le(document.querySelector(".item-container"));Se(),we(),w.push(u.listen("datePicker",pe,!0),u.listen("editMode",ge,!0)),setTimeout(()=>{r.start()}),r.addListener("swipe",M),w.push(()=>{r.removeListener("swipe",M),r.stop()})}async function ve(){T(I),w.forEach(e=>e()),w=[]}function we(){const e=new Date;Array.from(document.querySelector(".item-container").children).forEach(r=>{r.innerHTML="",r.appendChild(de(e.getFullYear(),e.getMonth()))})}function Se(){const e=document.querySelector(".ui-app-bar .left button.date-picker"),r=document.querySelector(".ui-app-bar .right button.today"),t=document.querySelector(".ui-app-bar .right button.edit"),n=document.querySelector(".ui-app-bar .right button.printer"),i=document.querySelector(".ui-app-bar .right button.settings");e.style.display="inline-flex",r.style.display="inline-flex",t.style.display="inline-flex",n.style.display="inline-flex",i.style.display="inline-flex",e.onclick=async()=>{const o=await oe(u.get("datePicker"));o&&u.set("datePicker",o.date)},r.onclick=async()=>{u.set("datePicker",new Date().getTime())},t.onclick=async()=>{u.update("editMode",o=>(o.open=!o.open,o))},w.push(u.listen("datePicker",o=>{const a=new Date,s=new Date(o),l=s.getFullYear();l===a.getFullYear()&&s.getMonth()===a.getMonth()?r.setAttribute("disabled",""):r.removeAttribute("disabled");const c=(s.getMonth()+1).toString().padStart(2,"0");e.innerText=`${l} / ${c}`},!0)),w.push(()=>{e.style.display="none",r.style.display="none",t.style.display="none",n.style.display="none",i.style.display="none"})}const C="3.0.0",j=13;function Te(e){var t,n,i;const r=o=>o?!(typeof o.id!="number"||typeof o.name!="string"||typeof o.shortName!="string"||typeof o.visible!="boolean"||o.color&&typeof o.color!="string"):!1;if((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((n=e.storage)==null?void 0:n.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(o=>typeof o!="number")||e.settings.shifts.find(o=>!r(o)))return!1;for(const o in e.storage){if(typeof o!="string"||((i=e.storage[o])==null?void 0:i.constructor)!==Object)return!1;for(const a in e.storage[o]){if(typeof a!="string")return!1;const s=e.storage[o][a];if((s==null?void 0:s.constructor)!==Object||!r(s.shift)&&s.shift!==null||typeof s.note!="string")return!1}}return!0}function ke(e){var t,n;const r=i=>i?!(typeof i.id!="number"||typeof i.name!="string"||typeof i.shortName!="string"||typeof i.visible!="boolean"||i.color&&typeof i.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||((t=e.settings)==null?void 0:t.constructor)!==Object||((n=e.indexedDB)==null?void 0:n.constructor)!==Object||!Array.isArray(e.settings.shifts)||!Array.isArray(e.settings.rhythm)||typeof e.settings.startDate!="string"||e.settings.rhythm.find(i=>typeof i!="number")||e.settings.shifts.find(i=>!r(i))||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(i=>{var o;return typeof i.year!="number"||typeof i.month!="number"||typeof i.date!="number"||i.shift!==null&&((o=i.shift)==null?void 0:o.constructor)!==Object||typeof i.note!="string"||!r(i.shift)&&i.shift!==null}))}function xe(e){var t,n;const r=i=>i?!(typeof i.id!="number"||typeof i.name!="string"||typeof i.shortName!="string"||typeof i.visible!="boolean"||i.color&&typeof i.color!="string"):!1;return!((e==null?void 0:e.constructor)!==Object||typeof e.weekStart!="number"||((t=e.version)==null?void 0:t.constructor)!==Object||((n=e.indexedDB)==null?void 0:n.constructor)!==Object||!Array.isArray(e.shifts)||!Array.isArray(e.rhythm)||typeof e.startDate!="number"||e.rhythm.find(i=>typeof i!="number")||e.shifts.find(i=>!r(i))||typeof e.version.version!="string"||typeof e.version.build!="number"||typeof e.indexedDB.version!="number"||!Array.isArray(e.indexedDB.data)||e.indexedDB.data.find(i=>{var o;return typeof i.year!="number"||typeof i.month!="number"||typeof i.date!="number"||i.shift!==null&&((o=i.shift)==null?void 0:o.constructor)!==Object||typeof i.note!="string"||!r(i.shift)&&i.shift!==null}))}function De(e){return{weekStart:0,version:{version:C,build:j},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:{version:e.indexedDB.version,data:e.indexedDB.data.map(r=>({year:r.year,month:r.month,date:r.date,shift:r.shift||null,note:r.note}))}}}function qe(e){return{weekStart:0,version:{version:C,build:j},rhythm:e.settings.rhythm,shifts:e.settings.shifts,startDate:e.settings.startDate?new Date(e.settings.startDate).getTime():0,indexedDB:Me(e)}}function Me(e){const r={version:1,data:[]},t=n=>{for(const[i,o]of Object.entries(n)){const[a,s,l]=i.split("-",3).map(c=>parseInt(c,10));isNaN(a)||isNaN(s)||isNaN(l)||s<0||s>11||!("shift"in o)||!("note"in o)||r.data.push({year:a,month:s,date:l,shift:o.shift,note:o.note})}};return Object.values(e.storage).forEach(n=>t(n)),r}const Ee=S`
    <h4>Backup</h4>

    <section class="json ui-flex justify-between align-center">
        <label style="padding: var(--ui-spacing)"> JSON </label>

        <span class="ui-flex gap" style="--justify: flex-end; padding: var(--ui-spacing)">
            <button class="import" color="secondary">Import</button>
            <button class="export" color="secondary">Export</button>
        </span>
    </section>
`;function Le(){const e=document.createElement("article");e.className="backup",e.innerHTML=Ee;const r=e.querySelector("section.json button.import"),t=e.querySelector("section.json button.export");return r.onclick=async()=>{const n=document.createElement("input");n.type="file",n.accept="application/json",n.onchange=async()=>{if(!n.files||n.files.length===0)return;const i=new FileReader;i.onload=async()=>await $e(i.result),i.onerror=()=>{alert(`Import data: read file failed: ${i.error}`)},i.readAsText(n.files[0])},n.click()},t.onclick=async()=>{const n={weekStart:u.get("weekStart"),shifts:u.get("shifts"),rhythm:u.get("rhythm"),startDate:u.get("startDate"),version:u.get("version"),indexedDB:{version:v.version,data:await v.getAll()}},i=new Blob([JSON.stringify(n)],{type:"octet/stream"}),o=document.createElement("a");o.setAttribute("href",window.URL.createObjectURL(i));const a=new Date,s=(a.getMonth()+1).toString().padStart(2,"0"),l=a.getDate().toString().padStart(2,"0"),c=`shift-scheduler-backup_${a.getFullYear()}-${s}-${l}.json`;o.setAttribute("download",c),o.click()},e}async function $e(e){if(typeof e!="string")return alert("Invalid data!");let r;try{r=JSON.parse(e)}catch{return alert("Invalid JSON data!")}let t;if(xe(r))t=r;else if(ke(r))t=De(r);else if(Te(r))t=qe(r);else return alert("Invalid JSON data!");u.set("shifts",t.shifts),u.set("rhythm",t.rhythm),u.set("startDate",t.startDate),u.set("weekStart",t.weekStart),await v.deleteAll();for(const n of t.indexedDB.data||[])v.add(n).catch(()=>v.put(n))}const Ne=S`
    <h4>IndexedDB</h4>

    <section>
        <label class="ui-flex justify-between align-center" style="padding: var(--ui-spacing)">
            Edit entries
            <button>Browse</button>
        </label>
    </section>
`;function Be(){const e=document.createElement("article");return e.className="db-browser",e.innerHTML=Ne,e}const Ae=S`
    <h4>Miscellaneous</h4>

    <section class="week-start">
        <label class="ui-flex justify-between" style="padding: var(--ui-spacing);">
            The week starts on Monday
            <input type="checkbox" />
        </label>
    </section>
`;function Oe(){const e=document.createElement("article");e.className="misc",e.innerHTML=Ae;const r=e.querySelector('section.week-start input[type="checkbox"]');return r.checked=u.get("weekStart")===1,r.onchange=()=>{u.set("weekStart",r.checked?1:0)},e}const Ie=S`
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
`;function Ce(){const e=document.createElement("article");e.className="shifts",e.innerHTML=Ie;const r=()=>{const o=e.querySelector("section.shifts-table tbody"),a=e.querySelector('section.shifts-table template[name="table-item"]');o.innerHTML="",u.get("shifts").forEach(s=>{const l=a.content.cloneNode(!0).querySelector("tr.item");o.appendChild(l),l.querySelector(".name").innerText=s.name;const c=l.querySelector(".short-name");c.style.color=s.color||"inherit",c.innerText=s.visible?s.shortName:"";const p=l.querySelector("button.edit");p.onclick=async()=>{await q(s)&&(u.update("shifts",f=>f.map(m=>m.id===s.id?s:m)),r())};const h=l.querySelector("button.delete");h.onclick=async()=>{confirm(`Delete shift "${s.name}"?`)&&u.update("shifts",d=>d.filter(f=>f.id!==s.id)),r()}}),e.querySelector("section.shifts-table button.add-shift").onclick=async()=>{const s=await q(null);s&&(u.update("shifts",l=>(l.push(s),l)),r())}};r();const t=e.querySelector('section.start-date input[type="date"]');if(u.get("startDate")){const o=new Date,a=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getDate().toString().padStart(2,"0");t.value=`${o.getFullYear()}-${a}-${s}`,t.onchange=()=>{u.set("startDate",new Date(t.value).getTime())}}const i=e.querySelector("section.edit-rhythm button");return i.onclick=async()=>{u.set("rhythm",await se(u.get("rhythm"),u.get("shifts")))},e}let P="",E=null,k=[];async function je(){P=N(),T("Settings");const e=document.querySelector("#routerTarget");e.innerHTML="",He(),e.appendChild(Oe()),e.appendChild(document.createElement("br")),e.appendChild(Ce()),e.appendChild(document.createElement("br")),e.appendChild(Le()),e.appendChild(document.createElement("br")),e.appendChild(Be())}async function Pe(){T(P),k.forEach(e=>e()),k=[]}function He(){const e=document.querySelector(".ui-app-bar .left .back");e.style.display="inline-flex",E=e.onclick,e.onclick=()=>$.hash.goTo(null,""),k.push(()=>{e.style.display="none",e.onclick=E})}const Xe=Z({async onNeedRefresh(){confirm("Update verfügbar. Zum Aktualisieren bestätigen.")&&await Xe()}});v.open(()=>{$.hash.init(null,{"/":{title:"Shift Scheduler",template:{onMount(){be()},onDestroy(){ve()}}},settings:{title:"Shift Scheduler | Settings",template:{onMount(){je()},onDestroy(){Pe()}}}})});
