import{a as $,i as m,s as w}from"./assets/vendor-ecdaabbe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g(s,o,a){const t=`https://pixabay.com/api/?key=42569288-7bb99e6b1dd10eb6153443a4f&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const i=await $.get(`${t}&page=${o}&per_page=${a}`);return console.log(i.data),i.data}catch(i){alert("Error while fetching images from pixabay!"),console.log(`Error: ${i}`)}}function h(s){return s.map(({webformatURL:o,largeImageURL:a,tags:r,likes:e,views:t,comments:i,downloads:v})=>`
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
                <p class="property-value">${v}</p>
            </li>
        </ul>
    </li>
`).join("")}const q="/goit-js-hw-12/assets/error-icon-5bc7b79a.svg",S=document.querySelector(".search-form"),p=document.querySelector("#search-input"),l=document.querySelector(".gallery"),y=document.querySelector(".loading-message-container"),f=document.querySelector(".load-button-container"),B=document.querySelector(".load-button");S.addEventListener("submit",P);function k(){y.classList.add("loading-message-container-is-visible")}function d(){y.classList.remove("loading-message-container-is-visible")}function F(){f.style.display="block"}function c(){f.style.display="none"}let n=1,u=15,b,L;function P(s){if(s.preventDefault(),!p.value)return;l.innerHTML="",n=1,c(),k();const o=p.value;g(o,n,u).then(r=>{if(r.hits.length===0){m.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:q}),d(),c();return}const e=h(r.hits);l.insertAdjacentHTML("beforeend",e),d(),b=new w(".gallery a",{captionsData:"alt"}),L=o,F()}).catch(r=>alert(r.message))}B.addEventListener("click",x);function x(){n++,g(L,n,u).then(s=>{l.insertAdjacentHTML("beforeend",h(s.hits));const o=Math.ceil(s.totalHits/u);console.log(o),n===o&&(m.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c()),b.refresh();function a(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}a()}).catch(s=>alert(s.message))}
//# sourceMappingURL=commonHelpers.js.map
