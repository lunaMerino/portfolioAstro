document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",c=>{c.preventDefault();const n=t.getAttribute("href");if(n&&n.startsWith("#")){const d=n.slice(1),o=document.getElementById(d);o&&o.scrollIntoView({behavior:"smooth"})}})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-scroll-to-contact]");e&&e.addEventListener("click",()=>{const t=document.getElementById("contact");t&&t.scrollIntoView({behavior:"smooth"})})});