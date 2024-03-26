document.addEventListener('DOMContentLoaded', function() {
    // Lyssna på klick på hamburgermenyn
    document.getElementById('mobile-menu').addEventListener('click', function() {
        console.log('Hamburgermeny klickad!');

        let nav = document.querySelector('.navigation-buttons');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';

        this.classList.toggle('open');
      
        let bars = document.querySelectorAll('.bar');
        bars[0].classList.toggle('rotate-forward');
        bars[1].classList.toggle('fade-out');
        bars[2].classList.toggle('rotate-backward');
    });

    
    window.addEventListener('resize', function() {
        let nav = document.querySelector('.navigation-buttons');
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});
