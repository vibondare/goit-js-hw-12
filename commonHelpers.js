import{a as $,i as p,s as w}from"./assets/vendor-ecdaabbe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function d(n,o,a){const t=`https://pixabay.com/api/?key=42569288-7bb99e6b1dd10eb6153443a4f&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await $.get(`${t}&page=${o}&per_page=${a}`);return console.log(r.data),r.data}catch(r){alert("Error while fetching images from pixabay!"),console.log(`Error: ${r}`)}}function m(n){return n.map(({webformatURL:o,largeImageURL:a,tags:s,likes:e,views:t,comments:r,downloads:c})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img src="${o}" alt="${s}" class="image" width="358px" />
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
                <p class="property-value">${r}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Downloads</h2>
                <p class="property-value">${c}</p>
            </li>
        </ul>
    </li>
`).join("")}const q="/goit-js-hw-12/assets/error-icon-5bc7b79a.svg",S=document.querySelector(".search-form"),g=document.querySelector("#search-input"),u=document.querySelector(".gallery"),f=document.querySelector(".loading-message-container"),b=document.querySelector(".load-button-container"),B=document.querySelector(".load-button");S.addEventListener("submit",P);function k(){f.classList.add("loading-message-container-is-visible")}function h(){f.classList.remove("loading-message-container-is-visible")}function F(){b.style.display="block"}function y(){b.style.display="none"}function P(n){if(n.preventDefault(),!g.value)return;u.innerHTML="",k();let o,a,s=1,e=15;const t=g.value;d(t,s,e).then(i=>{if(i.hits.length===0){p.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:q}),h(),y();return}const l=m(i.hits);u.insertAdjacentHTML("beforeend",l),h(),o=new w(".gallery a",{captionsData:"alt"}),a=t,F()}).catch(i=>alert(i.message)),B.addEventListener("click",c);function c(){s++,d(a,s,e).then(i=>{u.insertAdjacentHTML("beforeend",m(i.hits));const l=Math.floor(i.totalHits/e);if(console.log(l),s>l){p.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),y();return}o.refresh();function L(){const v=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:v*2,behavior:"smooth"})}L()}).catch(i=>alert(i.message))}}
//# sourceMappingURL=commonHelpers.js.map
