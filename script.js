(function(){
  document.addEventListener('click',function(e){
    if(e.target.classList.contains('tab-btn')){
      const target=e.target.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active','glitch'));
      e.target.classList.add('active');
      const tab=document.getElementById(target);
      if(tab){tab.classList.add('active','glitch');}
    }

    const card=e.target.closest('.card');
    if(card){
      const image=card.dataset.img;
      const lb=document.getElementById('lightbox');
      const lbImage=document.getElementById('lightbox-img');
      if(lb&&lbImage){
        lbImage.src=image;
        lb.style.display='flex';
      }
    }

    if(e.target.id==='lightbox'){
      e.target.style.display='none';
    }
  });

  const cursor=document.getElementById('cursorLight');
  if(cursor){
    document.addEventListener('mousemove',e=>{
      cursor.style.left=e.clientX+'px';
      cursor.style.top=e.clientY+'px';
      cursor.style.opacity='1';
      clearTimeout(window.fadeTimer);
      window.fadeTimer=setTimeout(()=>{cursor.style.opacity='0';},200);
    });
  }
})();
