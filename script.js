document.getElementById('mobile-menu').addEventListener('click', function() {
    console.log('Hamburgermenu klickad!');


    setTimeout(function() {
        let nav = document.querySelector('.navigation-buttons');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }, 100); 


    this.classList.toggle('open');
  
    let bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate-forward');
    bars[1].classList.toggle('fade-out');
    bars[2].classList.toggle('rotate-backward');
  });
  


