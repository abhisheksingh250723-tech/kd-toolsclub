document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.main-nav');
 if(toggle&&nav) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const input=document.querySelector('[data-search]'); const results=document.querySelector('[data-search-results]');
 if(input&&results){ input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase(); let matches=0; document.querySelectorAll('[data-search-item]').forEach(item=>{const hit=!q||item.textContent.toLowerCase().includes(q); item.style.display=hit?'':'none'; if(hit&&q) matches++;}); results.classList.toggle('show',q.length>0); const count=results.querySelector('[data-count]'); if(count) count.textContent=matches;}); }
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(card=>card.style.display=f==='all'||card.dataset.category===f?'':'none')}));
});
