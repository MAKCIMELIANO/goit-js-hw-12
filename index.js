import{a as v,i as m,S as w}from"./assets/vendor-Qob_5Ba8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const x="44261766-43e443b40d02cd3bf18e38bdd",S=3e3;async function C(t,n=1){try{return(await v.get(`https://pixabay.com/api/?key=${x}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${n}`)).data}catch(s){m.error({title:"Error",message:"Error while receiving images!",position:"topRight",timeout:S}),console.error(s),document.querySelector("input").value="";const o=document.querySelector(".loader");o&&o.remove()}}function q(){const t=document.createElement("form");t.classList.add("search-form");const n=document.createElement("input");n.classList.add("search-input"),n.type="text",n.id="search-input",n.placeholder="Image Search...";const s=document.createElement("button");return s.classList.add("search-button"),s.type="submit",s.textContent="Search",t.appendChild(n),t.appendChild(s),t}function b(t){return t.map(n=>{const s=document.createElement("a");s.href=n.largeImageURL,s.classList.add("image-card");const o=document.createElement("img");o.src=n.webformatURL,o.alt=n.tags,s.appendChild(o);const e=document.createElement("div");e.classList.add("info");const r=document.createElement("p");r.textContent=`Likes ${n.likes}`,e.appendChild(r);const c=document.createElement("p");c.textContent=`Views ${n.views}`,e.appendChild(c);const y=document.createElement("p");y.textContent=`Comments ${n.comments}`,e.appendChild(y);const g=document.createElement("p");return g.textContent=`Downloads ${n.downloads}`,e.appendChild(g),s.appendChild(e),s})}function P(){const t=document.createElement("button");return t.classList.add("search-button"),t.textContent="Load more",t.disabled=!0,t}function $(){const t=document.createElement("span");return t.classList.add("loader"),t}const p=document.querySelector("main"),E=q();p.appendChild(E);const l=document.createElement("div");l.classList.add("gallery");p.appendChild(l);const a=P();p.appendChild(a);a.style.display="none";const i=$();p.appendChild(i);i.style.display="none";const h=new w(".gallery a",{captions:!0});let d=1,L="";const u=15,f=3e3;E.addEventListener("submit",async t=>{t.preventDefault(),i.style.display="block";const n=document.querySelector("#search-input").value.trim();if(n===""){i.style.display="none",m.error({title:"Error",message:"Please enter your search query!",position:"topRight",timeout:f});return}d=1,l.innerHTML="",a.style.display="none",a.disabled=!0,L=n;const s=await C(n,d);if(b(s.hits).forEach(e=>{l.appendChild(e),h.refresh()}),s.hits.length===0)m.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:f}),a.style.display="none",i.style.display="none";else{if(s.totalHits<=d*u){a.style.display="none",i.style.display="none",document.querySelector("#search-input").value="";const e=document.createElement("div");e.classList.add("end-of-results-message");const r=document.createElement("p");r.textContent="We're sorry, but you've reached the end of search results.",e.appendChild(r),l.appendChild(e),h.refresh();return}a.disabled=s.hits.length<u,s.hits.length>0&&(a.style.display="block",i.style.display="none")}document.querySelector("#search-input").value=""});a.addEventListener("click",async()=>{i.style.display="block",d++;const t=await C(L,d);b(t.hits).forEach(e=>{l.appendChild(e)});const o=l.children[0].getBoundingClientRect().height;if(window.scrollBy({top:o*2,behavior:"smooth"}),h.refresh(),i.style.display="none",a.disabled=t.hits.length<u,t.hits.length===0&&(a.style.display="none"),t.totalHits<=d*u){a.style.display="none",i.style.display="none";const e=document.createElement("div");e.classList="end-of-results-message";const r=document.createElement("p");r.textContent="We're sorry, but you've reached the end of search results.",e.appendChild(r),l.appendChild(e)}});
//# sourceMappingURL=index.js.map
