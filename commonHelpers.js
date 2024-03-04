import{s as h,i as f}from"./assets/vendor-9dcf81ef.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function y(i){const t=i.hits.map(({webformatURL:o,largeImageURL:e,tags:r,likes:a,views:m,comments:d,downloads:g})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img src="${o}" alt="${r}" class="image" width="358px" />
        </a>
        <ul class="image-properties-list">
            <li class="image-properties-list-item">
                <h2 class="property-name">Likes</h2>
                <p class="property-value">${a}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Views</h2>
                <p class="property-value">${m}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Comments</h2>
                <p class="property-value">${d}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Downloads</h2>
                <p class="property-value">${g}</p>
            </li>
        </ul>
    </li>
`).join("");c.innerHTML=t,new h(".gallery a",{captionsData:"alt"}),u()}const b="/goit-js-hw-12/assets/error-icon-5bc7b79a.svg";let n="";function L(i){function s(){return fetch(i).then(t=>{if(!t.ok)throw new Error("Image error!");return t.json()}).catch(t=>{alert("Error while fetching images from pixabay!")})}s().then(t=>{if(n=t,n.hits.length===0){f.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:b}),c.innerHTML="",u();return}y(n)})}const v=document.querySelector(".search-form"),l=document.querySelector("#search-input"),c=document.querySelector(".gallery"),p=document.querySelector(".loading-message-container");v.addEventListener("submit",$);function w(){p.classList.add("loading-message-container-is-visible")}function u(){p.classList.remove("loading-message-container-is-visible")}function $(i){if(i.preventDefault(),!l.value)return;const s="42569288-7bb99e6b1dd10eb6153443a4f",t="https://pixabay.com/api/",o=l.value,e=`${t}?key=${s}&q=${o}&image_type='photo'&orientation='horizontal'&safesearch=true`;w(),L(e)}
//# sourceMappingURL=commonHelpers.js.map
