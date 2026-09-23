const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));nav.style.display=open?'flex':'';nav.style.position=open?'absolute':'';nav.style.top=open?'70px':'';nav.style.left=open?'0':'';nav.style.right=open?'0':'';nav.style.padding=open?'18px':'';nav.style.background=open?'#10181d':'';nav.style.flexDirection=open?'column':'';});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.focus,.work,.process,.about,.contact').forEach(el=>reveal.observe(el));
window.addEventListener('pointermove',event=>{document.documentElement.style.setProperty('--mx',`${event.clientX}px`);document.documentElement.style.setProperty('--my',`${event.clientY}px`);});
