const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let o=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(()=>{e.disabled=!0,d.disabled=!1,t.style.backgroundColor=r(),o=setInterval((()=>{t.style.backgroundColor=r()}),1e3)})),d.addEventListener("click",(()=>{e.disabled=!1,d.disabled=!0,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.99e4fb79.js.map