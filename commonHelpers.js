import{s as v,i as u,a as F}from"./assets/vendor-de4edef5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const w="/goit-js-hw-12/assets/error-icon-5bc7b79a.svg";function $(a){const r=a.hits.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:y,comments:b,downloads:L})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img src="${s}" alt="${t}" class="image" width="358px" />
        </a>
        <ul class="image-properties-list">
            <li class="image-properties-list-item">
                <h2 class="property-name">Likes</h2>
                <p class="property-value">${i}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Views</h2>
                <p class="property-value">${y}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Comments</h2>
                <p class="property-value">${b}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Downloads</h2>
                <p class="property-value">${L}</p>
            </li>
        </ul>
    </li>
`).join("");c.insertAdjacentHTML("beforeend",r),C(),new v(".gallery a",{captionsData:"alt"}),f()}let l="",n=1,p=15;function q(a){c.innerHTML="",n=1,m();async function o(){try{const e=await F.get(`${a}&page=${n}&per_page=${p}`);return console.log(e.data),e.data}catch(e){alert("Error while fetching images from pixabay!"),console.log(e)}}o().then(e=>{r(e)});function r(e){if(l=e,l.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark"}),c.innerHTML="",f();return}const t=Math.floor(e.totalHits/p);if(n>t){u.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:w}),m();return}$(l)}B.addEventListener("click",s);function s(){n++,o().then(t=>{r(t)});function e(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}e()}}const S=document.querySelector(".search-form"),d=document.querySelector("#search-input"),c=document.querySelector(".gallery"),g=document.querySelector(".loading-message-container"),h=document.querySelector(".load-button-container"),B=document.querySelector(".load-button");S.addEventListener("submit",P);function k(){g.classList.add("loading-message-container-is-visible")}function f(){g.classList.remove("loading-message-container-is-visible")}function C(){h.style.display="block"}function m(){h.style.display="none"}function P(a){if(a.preventDefault(),!d.value)return;const o="42569288-7bb99e6b1dd10eb6153443a4f",r="https://pixabay.com/api/",s=d.value,e=`${r}?key=${o}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;k(),q(e)}
//# sourceMappingURL=commonHelpers.js.map
