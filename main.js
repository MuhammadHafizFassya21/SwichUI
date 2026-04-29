document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal, .fade-in');
    
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

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(10, 12, 16, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'rgba(10, 12, 16, 0.8)';
        }
    });

    // Mobile menu toggle (simple version for now)
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Menu mobile segera hadir! Untuk saat ini, silakan gunakan tampilan desktop untuk pengalaman penuh.');
        });
    }

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
        });
    });
});
