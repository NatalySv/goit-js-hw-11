import{i as c,S as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="/goit-js-hw-11/assets/icon-error-433b5e5d.svg",o={form:document.querySelector(".task-form"),input:document.querySelector(".form-input"),list:document.querySelector(".gallery")};let n=null;o.form.addEventListener("submit",g);function g(i){if(i.preventDefault(),console.log("input before: ",n),!o.input.value){o.list.innerHTML="",c.error({...m,message:"Please enter your search query, the field cannot be blank!",backgroundColor:"rgb(239, 64, 64)",iconUrl:u});return}n=o.input.value,console.log("input after: ",n),d(),o.form.reset()}function d(){o.list.innerHTML='<span class="loader"></span>';const i="43688767-8e78f2c96043da1155d4d6687",s=new URLSearchParams({key:i,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(`searchParams: ${s.toString()}`),fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(!r.hits.length){o.list.innerHTML="",c.error({...m,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(239, 64, 64)",iconUrl:u});return}o.list.innerHTML=y(r.hits),b.refresh()}).catch(r=>console.log("catch",r))}function y(i){return i.map(({id:s,tags:r,largeImageURL:l,webformatURL:e,comments:t,likes:a,downloads:f,views:p})=>`<li class="gallery-item" id="${s}">
            <a class="gallery-link" href="${l}">
                <img
                    class="gallery-image"
                    src="${e}"
                    alt="${r}"
                    />               
            </a>
            <ul class="gallery-stat-list">
                    <li class="stat-item"><h2 class="title">Likes</h2><p class="stat-data">${a}</p></li>
                    <li class="stat-item"><h2 class="title">Views</h2><p class="stat-data">${p}</p></li>
                    <li class="stat-item"><h2 class="title">Comments</h2><p class="stat-data">${t}</p></li>
                    <li class="stat-item"><h2 class="title">Downloads</h2><p class="stat-data">${f}</p></li>
            </ul>
            
        </li>`).join("")}const m={id:"myIziToast",title:"Error",titleColor:"rgb(255, 255, 255)",titleSize:"16",messageColor:"rgb(255, 255, 255)",messageSize:"16",position:"topRight"},b=new h(".gallery-item a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
