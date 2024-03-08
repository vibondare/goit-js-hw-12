import{a as v,i as u,s as $}from"./assets/vendor-ecdaabbe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function p(n,s,i){const t=`https://pixabay.com/api/?key=42569288-7bb99e6b1dd10eb6153443a4f&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;try{const o=await v.get(`${t}&page=${s}&per_page=${i}`);return console.log(o.data),o.data}catch(o){alert("Error while fetching images from pixabay!"),console.log(`Error: ${o}`)}}function d(n){return n.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:r})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
            <img src="${s}" alt="${a}" class="image" width="358px" />
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
                <p class="property-value">${o}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Downloads</h2>
                <p class="property-value">${r}</p>
            </li>
        </ul>
    </li>
`).join("")}const w="/goit-js-hw-12/assets/error-icon-5bc7b79a.svg",q=document.querySelector(".search-form"),m=document.querySelector("#search-input"),c=document.querySelector(".gallery"),y=document.querySelector(".loading-message-container"),f=document.querySelector(".load-button-container"),S=document.querySelector(".load-button");q.addEventListener("submit",F);function B(){y.classList.add("loading-message-container-is-visible")}function g(){y.classList.remove("loading-message-container-is-visible")}function k(){f.style.display="block"}function h(){f.style.display="none"}function F(n){if(n.preventDefault(),!m.value)return;c.innerHTML="",B();let s,i=1,a=15;const e=m.value;p(e,i,a).then(r=>{if(r.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:w}),g(),h();return}const l=d(r.hits);c.insertAdjacentHTML("beforeend",l),g(),s=new $(".gallery a",{captionsData:"alt"}),k()}).catch(r=>alert(r.message)),S.addEventListener("click",o);function o(){i++,p(e,i,a).then(r=>{c.insertAdjacentHTML("beforeend",d(r.hits));const l=Math.ceil(r.totalHits/a);console.log(l),i===l&&(u.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h()),s.refresh();function b(){const L=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:L*2,behavior:"smooth"})}b()}).catch(r=>alert(r.message))}}
//# sourceMappingURL=commonHelpers.js.map
