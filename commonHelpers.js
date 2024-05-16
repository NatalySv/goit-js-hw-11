import{i as u}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="/goit-js-hw-11/assets/icon-error-433b5e5d.svg",i={form:document.querySelector(".task-form"),input:document.querySelector(".form-input"),list:document.querySelector(".gallery")};let n=null;i.form.addEventListener("submit",d);function d(o){if(o.preventDefault(),console.log("input before: ",n),!i.input.value){u.error({...m,message:"Please enter your search query, the field cannot be blank!",backgroundColor:"rgb(239, 64, 64)",iconUrl:f});return}n=i.input.value,console.log("input after: ",n),g(),i.form.reset()}function g(){const o="43688767-8e78f2c96043da1155d4d6687",s=new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(`searchParams: ${s.toString()}`),fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(!t.hits.length){i.list.innerHTML=c(t.hits),u.error({...m,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(239, 64, 64)",iconUrl:f});return}i.list.innerHTML=c(t.hits)}).catch(t=>console.log("catch",t))}function c(o){return o.map(({id:s,tags:t,largeImageURL:l,webformatURL:e,comments:r,likes:a,downloads:h,views:p})=>`<li id="${s}" class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img
                    class="gallery-image"
                    src="${e}"
                    alt="${t}"
                    />
            </a>
            <ul class="gallery-stat-list">
                <li class="stat-item"><h2 class="title">Likes</h2><p class="stat-data">${a}</p></li>
                <li class="stat-item"><h2 class="title">Views</h2><p class="stat-data">${p}</p></li>
                <li class="stat-item"><h2 class="title">Comments</h2><p class="stat-data">${r}</p></li>
                <li class="stat-item"><h2 class="title">Downloads</h2><p class="stat-data">${h}</p></li>
            </ul>
        </li>`).join("")}const m={id:"myIziToast",title:"Error",titleColor:"rgb(255, 255, 255)",titleSize:"16",messageColor:"rgb(255, 255, 255)",messageSize:"16",position:"topRight"};
//# sourceMappingURL=commonHelpers.js.map
