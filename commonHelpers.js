import{a as $,i as p,s as g}from"./assets/vendor-ecdaabbe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function f(s,o,a){const t=`https://pixabay.com/api/?key=42569288-7bb99e6b1dd10eb6153443a4f&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const i=await $.get(`${t}&page=${o}&per_page=${a}`);return console.log(i.data),i.data}catch(i){alert("Error while fetching images from pixabay!"),console.log(`Error: ${i}`)}}function d(s){return s.map(({webformatURL:o,largeImageURL:a,tags:r,likes:e,views:t,comments:i,downloads:w})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img src="${o}" alt="${r}" class="image" width="358px" />
        </a>
        <ul class="image-properties-list">
            <li class="image-properties-list-item">
                <h2 class="property-name">Likes</h2>
                <p class="property-value">${e}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Views</h2>
                <p class="property-value">${t}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Comments</h2>
                <p class="property-value">${i}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Downloads</h2>
                <p class="property-value">${w}</p>
            </li>
        </ul>
    </li>
`).join("")}const q="/goit-js-hw-12/assets/error-icon-5bc7b79a.svg",S=document.querySelector(".search-form"),y=document.querySelector("#search-input"),l=document.querySelector(".gallery"),b=document.querySelector(".loading-message-container"),L=document.querySelector(".load-button-container"),k=document.querySelector(".load-button");S.addEventListener("submit",M);function B(){b.classList.add("loading-message-container-is-visible")}function u(){b.classList.remove("loading-message-container-is-visible")}function F(){L.style.display="block"}function c(){L.style.display="none"}let n=1,m=15,h,v;function M(s){if(s.preventDefault(),!y.value)return;l.innerHTML="",n=1,c(),B();const o=y.value;f(o,n,m).then(r=>{if(r.hits.length===0){p.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:q}),u(),c();return}if(r.totalHits<=15){p.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u(),c();const t=d(r.hits);l.insertAdjacentHTML("beforeend",t),h=new g(".gallery a",{captionsData:"alt"});return}const e=d(r.hits);l.insertAdjacentHTML("beforeend",e),u(),h=new g(".gallery a",{captionsData:"alt"}),v=o,F()}).catch(r=>alert(r.message))}k.addEventListener("click",P);function P(){n++,f(v,n,m).then(s=>{l.insertAdjacentHTML("beforeend",d(s.hits));const o=Math.ceil(s.totalHits/m);console.log(o),n===o&&(p.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c()),h.refresh();function a(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}a()}).catch(s=>alert(s.message))}
//# sourceMappingURL=commonHelpers.js.map
