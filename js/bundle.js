(()=>{var t={914:()=>{window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}(()=>{"use strict";n(914);const t=(t,e)=>{document.querySelector(t).style.display="block",document.body.style.overflow="hidden",e&&clearInterval(e)},e=t=>{document.querySelector(t).style.display="none",document.body.style.overflow=""};window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),5e4);(function(t,e,n,o){const r=document.querySelectorAll(t),a=document.querySelectorAll(e),c=document.querySelector(n),i=()=>{a.forEach((t=>{t.style.display="none"})),r.forEach((t=>{t.classList.remove(o)}))},s=(t=0)=>{a[t].style.display="block",r[t].classList.add(o)};i(),s(),c.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach(((t,e)=>{n==t&&(i(),s(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,r){const a=document.querySelectorAll(n),c=document.querySelector(o);a.forEach((e=>{e.addEventListener("click",(()=>t(o,r)))})),c.addEventListener("click",(t=>{t.target!==c&&""!==t.target.getAttribute("data-close")||e(o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&e(o)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(o,r),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?"0"+t:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),a=o.querySelector("#hours"),c=o.querySelector("#minutes"),i=o.querySelector("#seconds"),s=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/864e5),o=Math.floor(e/1e3%60),r=Math.floor(e/1e3/60%60);return{total:e,days:n,hours:Math.floor(e/36e5%24),minutes:r,seconds:o}}(e);r.innerHTML=n(t.days),a.innerHTML=n(t.hours),c.innerHTML=n(t.minutes),i.innerHTML=n(t.seconds),t.total<=0&&clearInterval(s)}l()}(t,e)}(".timer","2024-07-01"),function(){class t{constructor(t,e,n,o,r,a){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=r,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=+this.price*this.transfer}render(){const t=document.createElement("div");t.innerHTML=`\n\t\t<div class="menu__item">\n\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t<h3 class="menu__item-subtitle">${this.title}</h3>\n\t\t\t<div class="menu__item-descr">${this.descr}</div>\n\t\t\t<div class="menu__item-divider"></div>\n\t\t\t<div class="menu__item-price">\n\t\t\t\t<div class="menu__item-cost">Цена:</div>\n\t\t\t\t<div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n\t\t\t</div>\n\t\t</div>\n\t\t`,this.parent.append(t)}}(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((({img:e,altimg:n,title:o,descr:r,price:a})=>{new t(e,n,o,r,a,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result-span");let e,n,o,r,a;var c;function i(){t.textContent=e&&n&&o&&r&&a?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*r)*a):Math.round((88.36+13.4*o+4.8*n-5.7*r)*a):"____"}function s(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),i()}))})),i()}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":r=+e.value}i()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a="female",localStorage.setItem("ratio",1.375)),c="calculating__choose-item_active",document.querySelectorAll("#gender div").forEach((t=>{t.classList.remove(c),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(c),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(c)})),s(".calculating__choose_big div","calculating__choose-item_active"),i(),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,o){function r(n){const r=document.querySelector(".modal__dialog");r.style.display="none",t(".modal",o);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=` \n\t<div class='modal__content'>\n\t<div class='modal__close' data-close>×</div>\n\t<div class='modal__title'>${n}</div>\n\t</div>\n\t`,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),r.style.display="block",e(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.classList.add("spinner"),e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),r("Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{r("Произошла ошибка...")})).finally((()=>{e.reset()}))}))}))}("form",n),function({container:t,slide:e,nextArr:n,prevArr:o,totalCounter:r,currentCounter:a,wrapper:c,field:i}){const s=document.querySelectorAll(e),l=(document.querySelector(t),document.querySelector(o)),d=document.querySelector(n),u=document.querySelector(r),m=document.querySelector(a),h=document.querySelector(c),g=document.querySelector(i),f=window.getComputedStyle(h).width;let p=1,y=0;s.length<10?(u.textContent=`0${s.length}`,m.textContent=`0${p}`):(u.textContent=s.length,m.textContent=p),g.style.width="400%",h.style.overflow="hidden",s.forEach((t=>{t.style.width=f})),d.addEventListener("click",(()=>{y==+f.replace(/\D/g,"")*(s.length-1)?y=0:y+=+f.replace(/\D/g,""),g.style.transform=`translateX(-${y}px)`,p==s.length?p=1:p++,s.length<10?m.textContent=`0${p}`:m.textContent=p,S.forEach((t=>{t.style.opacity=".5"})),S[p-1].style.opacity=1})),l.addEventListener("click",(()=>{0==y?y=+f.replace(/\D/g,"")*(s.lenght-1):y-=+f.replace(/\D/g,""),g.style.transform=`translateX(-${y}px)`,1==p?p=s.length:p--,s.length<10?m.textContent=`0${p}`:m.textContent=p,S.forEach((t=>{t.style.opacity=".5"})),S[p-1].style.opacity=1}));const v=document.querySelector(".offer__slider");v.style.position="relative";const _=document.createElement("ol"),S=[];_.style.cssText="\nposition: absolute;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 15;\ndisplay: flex;\njustify-content: center;\nmargin-right: 15%;\nmargin-left: 15%;\nlist-style: none;\n",v.append(_);for(let t=0;t<s.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\nbox-sizing: content-box;\nflex: 0 1 auto;\nwidth: 30px;\nheight: 6px;\nmargin-right: 3px;\nmargin-left: 3px;\ncursor: pointer;\nbackground-color: #fff;\nbackground-clip: padding-box;\nborder-top: 10px solid transparent;\nborder-bottom: 10px solid transparent;\nopacity: .5;\ntransition: opacity .6s ease;\n",0==t&&(e.style.opacity=1),_.append(e),S.push(e)}S.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");p=e,y=+f.replace(/\D/g,"")*(e-1),g.style.transform=`translateX(-${y}px)`,s.length<10?m.textContent=`0${p}`:m.textContent=p,S.forEach((t=>{t.style.opacity=".5",S[p-1].style.opacity=1}))}))}))}({container:".offer__slider",wrapper:".offer__slider-wrapper",field:".offer__slider-inner",slide:".offer__slide",prevArr:".offer__slider-prev",nextArr:".offer__slider-next",currentCounter:"#current",totalCounter:"#total"})}))})()})();
//# sourceMappingURL=bundle.js.map