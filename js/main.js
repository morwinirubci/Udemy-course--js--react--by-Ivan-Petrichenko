(()=>{"use strict";function e(e,t){const o=document.querySelector(e);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}function t(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}document.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>e(".modal",o)),3e3);(function(){const e=document.querySelector(".tabheader__items"),t=document.querySelectorAll(".tabcontent"),o=document.querySelectorAll(".tabheader__item");let n=()=>{t.forEach((e=>{e.style.display="none"})),o.forEach((e=>{e.classList.remove("tabheader__item_active")}))},c=(e=0)=>{t[e].style.display="block",o[e].classList.add("tabheader__item_active")};n(),c(),e.addEventListener("click",(e=>{let t=e.target;t&&t.classList.contains("tabheader__item")&&o.forEach(((e,o)=>{t==e&&(n(),c(o))}))}))})(),function(){function e(e){return e>=0&&e<10?"0"+e:e}!function(t,o){const n=document.querySelector(".timer"),c=n.querySelector("#days"),a=n.querySelector("#hours"),r=n.querySelector("#minutes"),i=n.querySelector("#seconds"),s=setInterval(l,1e3);function l(){const t=function(e){const t=Date.parse(e)-Date.parse(new Date);let o,n,c,a;return t<=0?(o=0,n=0,c=0,a=0):(o=Math.floor(t/864e5),n=Math.floor(t/36e5%24),c=Math.floor(t/6e4%60),a=Math.floor(t/1e3%60)),{t,days:o,hours:n,minutes:c,seconds:a}}("2023-11-20");c.innerHTML=e(t.days),a.innerHTML=e(t.hours),r.innerHTML=e(t.minutes),i.innerHTML=e(t.seconds),t.t<=0&&clearInterval(s)}l()}()}(),function(o,n,c){const a=document.querySelectorAll(o),r=document.querySelector(n);a.forEach((t=>{t.addEventListener("click",(()=>e(n,c)))})),r.addEventListener("click",(function(e){e.target!==r&&""!=e.target.getAttribute("data-modal-close")||t(n)})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&r.classList.contains("show")&&t(n)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(e(n,c),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",o),function(){class e{constructor(e,t,o,n,c){this.src=e,this.alt=t,this.title=o,this.description=n,this.price=89*c}render(){const e=document.querySelector(".menu__field .container"),t=document.createElement("div");t.classList.add("menu__item"),t.innerHTML=`<img src=${this.src} alt=${this.alt}>\n                                     <h3 class="menu__item-subtitle">${this.title}</h3>\n                                     <div class="menu__item-descr">${this.description}</div>\n                                     <div class="menu__item-divider"></div>\n                                     <div class="menu__item-price">\n                                        <div class="menu__item-cost">Цена:</div>\n                                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n                                     </div>`,e.append(t)}}(async function(e){let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach(((e,t)=>{console.log(e,t)})),t.forEach((({img:t,altimg:o,title:n,descr:c,price:a})=>{new e(t,o,n,c,a).render()}))}))}(),function(o,n,c){const a=document.querySelector(n);function r(o){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),e(n,c);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n        <div class="modal__content">\n            <div class="modal__close" data-modal-close>×</div>\n            <div class="modal__title">${o}</div>\n        </div>`,a.append(i),setTimeout((()=>{i.remove(),r.classList.add("show"),r.classList.remove("hide"),t(n)}),4e3)}document.querySelectorAll(o).forEach((e=>{var t;(t=e).addEventListener("submit",(function(e){e.preventDefault();let o=document.createElement("img");o.src="img/form/spinner.svg",o.style.cssText="\n                display: block;\n                maring: 0 auto;\n            ",t.insertAdjacentElement("afterend",o);const n=new FormData(t);(async(e,t)=>{let o=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await o.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{console.log(e),r("Спасибо! Скоро с вами свяжемся!"),o.remove()})).catch((()=>{r("Что то пошло не так...")})).finally((()=>{t.reset()}))}))}))}("form",".modal",o),function({wrapper:e,field:t,sliderSelector:o,slide:n,total:c,current:a,prevSlide:r,nextSlide:i}){const s=document.querySelector(e),l=document.querySelector(t),d=document.querySelector(o),u=document.querySelectorAll(n),m=document.querySelector(c),h=document.querySelector(a),f=document.querySelector(r),g=document.querySelector(i),_=window.getComputedStyle(s).width,v=u.length;let y=1,p=0,S=()=>{v<10?(m.textContent=`0${v}`,h.textContent=`0${y}`):(m.textContent=v,h.textContent=y)},L=()=>{l.style.transform=`translateX(-${p}px)`,w.forEach((e=>{e.style.opacity=".5"})),w[y-1].style.opacity="1"};S(),l.style.width=100*u.length+"%",l.style.display="flex",l.style.transition=".5s all",s.style.overflow="hidden",u.forEach((e=>{e.style.width=_}));let E=e=>Number(e.replace(/\D/g,""));g.addEventListener("click",(()=>{p==E(_)*(u.length-1)?p=0:p+=E(_),y==v?y=1:y++,S(),L()})),f.addEventListener("click",(()=>{0==p?p=E(_)*(u.length-1):p-=E(_),1==y?y=v:y--,S(),L()}));const w=[];d.style.position="relative";const b=document.createElement("ol");b.classList.add("carousel-indicators"),d.append(b);for(let e=0;u.length>e;e++){const t=document.createElement("li");t.classList.add("dot"),t.setAttribute("data-slide-to",e+1),b.append(t),0===e&&(t.style.opacity=1),w.push(t)}w.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");y=t,p=E(_)*(t-1),S(),L()}))}))}({wrapper:".offer__slider-wrapper",field:".offer__slider-inner",sliderSelector:".offer__slider",slide:".offer__slide",total:"#total",current:"#current",prevSlide:".offer__slider-prev",nextSlide:".offer__slider-next"}),function(){const e=document.querySelector(".calculating__result span");let t,o,n,c,a;function r(){e.textContent=t&&o&&n&&c&&a?"female"===t?Math.round(655.1+9.563*n+1.85*o-4.676*c*a):Math.round(66.5+13.75*n+5.003*o-6.775*c*a):"____"}function i(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function s(e,o){const n=document.querySelectorAll(e);n.forEach((e=>{e.addEventListener("click",(c=>{c.target.getAttribute("data-ratio")?(a=+c.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+c.target.getAttribute("data-ratio"))):(t=c.target.getAttribute("id"),localStorage.setItem("sex",c.target.getAttribute("id"))),n.forEach((e=>{e.classList.remove(o)})),e.classList.add(o),r()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.getAttribute("id")){case"height":o=+t.value;break;case"weight":n=+t.value;break;case"age":c=+t.value}r()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),r(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}()}))})();
//# sourceMappingURL=main.js.map