document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal, .fade-in');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    const menuToggle = document.getElementById('menuToggle');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);

    const syncNavbarState = () => {
        if (!navbar) return;
        navbar.classList.toggle('is-scrolled', window.scrollY > 50);
    };

    syncNavbarState();
    window.addEventListener('scroll', syncNavbarState);

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks?.classList.toggle('open');
            navCta?.classList.toggle('open');
            navbar?.classList.toggle('menu-open');
        });
    }

    document.querySelectorAll('.pricing-card .btn[data-service]').forEach(button => {
        const serviceName = button.getAttribute('data-service');
        if (!serviceName) return;

        const message = `Halo SwichUI, saya ingin memesan / berminat dengan layanan ${serviceName}. Bisa dibantu informasi lebih lanjut?`;
        button.setAttribute('href', `https://wa.me/6282249634912?text=${encodeURIComponent(message)}`);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            navLinks?.classList.remove('open');
            navCta?.classList.remove('open');
            navbar?.classList.remove('menu-open');
        });
    });
});
