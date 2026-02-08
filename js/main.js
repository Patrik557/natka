document.addEventListener('DOMContentLoaded', ()=>{
  // Hide loader after 5 seconds
  const loader = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loader.classList.add('hide');
    // Remove from DOM after fade out
    setTimeout(() => loader.remove(), 500);
  }, 1500);

  // Audio ovládání bylo odstraněno

  const infoCard = document.querySelector('.info-card');
  const highlights = document.querySelector('.highlights');
  const cta = document.querySelector('.hero-cta');

  // CTA redirects to 1stranka.html
  if(cta){
    cta.addEventListener('click', ()=>{
      cta.classList.add('clicked');
      setTimeout(() => {
        window.location.href = '1stranka.html';
      }, 600);
    });
  }
});
