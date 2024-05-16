import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="/goit-js-hw-11/assets/icon-error-433b5e5d.svg",i={form:document.querySelector(".task-form"),input:document.querySelector(".form-input"),list:document.querySelector(".gallery")};let n=null;i.form.addEventListener("submit",d);function d(o){if(o.preventDefault(),console.log("input before: ",n),!i.input.value){c.error({...f,message:"Please enter your search query, the field cannot be blank!",backgroundColor:"rgb(239, 64, 64)",iconUrl:u});return}n=i.input.value,console.log("input after: ",n),p(),i.form.reset()}function p(){i.list.innerHTML="";const o="43688767-8e78f2c96043da1155d4d6687",s=new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(`searchParams: ${s.toString()}`),fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(!r.hits.length){c.error({...f,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(239, 64, 64)",iconUrl:u});return}i.list.innerHTML=g(r.hits)}).catch(r=>console.log("catch",r))}function g(o){return o.map(({id:s,tags:r,largeImageURL:l,webformatURL:e,comments:t,likes:a,downloads:m,views:h})=>`<li id="${s}" class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img
                    class="gallery-image"
                    src="${e}"
                    alt="${r}"
                    />
            </a>
            <ul class="gallery-stat-list">
                <li class="stat-item"><h2 class="title">Likes</h2><p class="stat-data">${a}</p></li>
                <li class="stat-item"><h2 class="title">Views</h2><p class="stat-data">${h}</p></li>
                <li class="stat-item"><h2 class="title">Comments</h2><p class="stat-data">${t}</p></li>
                <li class="stat-item"><h2 class="title">Downloads</h2><p class="stat-data">${m}</p></li>
            </ul>
        </li>`).join("")}const f={id:"myIziToast",title:"Error",titleColor:"rgb(255, 255, 255)",titleSize:"16",messageColor:"rgb(255, 255, 255)",messageSize:"16",position:"topRight"};
//# sourceMappingURL=commonHelpers.js.map
