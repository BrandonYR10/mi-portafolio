// Carrusel de Habilidades
class SkillsCarousel {
    constructor(trackId, prevBtnId, nextBtnId, progressBarId) {
        this.track = document.getElementById(trackId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.progressBar = document.getElementById(progressBarId);
        this.slides = this.track.querySelectorAll('.skills-slide');
        this.currentIndex = 0;
        this.slidesPerView = this.getSlidesPerView();
        this.maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    getSlidesPerView() {
        if (window.innerWidth <= 480) return 2;
        if (window.innerWidth <= 768) return 3;
        if (window.innerWidth <= 1024) return 4;
        return 6;
    }
    
    init() {
        this.updateButtons();
        this.updateProgress();
        this.startAutoPlay();
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Responsive handling
        window.addEventListener('resize', () => this.handleResize());
    }
    
    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
    }
    
    updateProgress() {
        const progress = this.maxIndex > 0 ? (this.currentIndex / this.maxIndex) * 100 : 0;
        this.progressBar.style.width = `${progress}%`;
    }
    
    goTo(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
        const translateX = -(this.currentIndex * (100 / this.slidesPerView));
        this.track.style.transform = `translateX(${translateX}%)`;
        this.updateButtons();
        this.updateProgress();
    }
    
    next() {
        if (this.currentIndex < this.maxIndex) {
            this.goTo(this.currentIndex + 1);
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.goTo(this.currentIndex - 1);
        }
    }
    
    startAutoPlay() {
        if (this.autoPlayInterval) return;
        this.autoPlayInterval = setInterval(() => {
            if (this.currentIndex >= this.maxIndex) {
                this.goTo(0);
            } else {
                this.next();
            }
        }, 1000);
        
        // Añadir indicador visual de auto-play
        this.progressBar.classList.add('auto-playing');
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        
        // Remover indicador visual de auto-play
        this.progressBar.classList.remove('auto-playing');
    }
    
    handleResize() {
        const newSlidesPerView = this.getSlidesPerView();
        if (newSlidesPerView !== this.slidesPerView) {
            this.slidesPerView = newSlidesPerView;
            this.maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
            this.goTo(0);
        }
    }
}

// Filtros de Proyectos
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar proyectos con delay para animación
            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                
                // Pequeño delay para animación escalonada
                setTimeout(() => {
                    if (filter === 'all' || category === filter) {
                        // Mostrar proyecto
                        card.classList.remove('hidden');
                        card.classList.add('show');
                    } else {
                        // Ocultar proyecto
                        card.classList.add('hidden');
                        card.classList.remove('show');
                    }
                }, index * 50); // Delay escalonado de 50ms
            });
        });
    });
}

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');
const currentYearSpan = document.getElementById('current-year');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Initialize Skills Carousels
let carousels = [];

document.addEventListener('DOMContentLoaded', () => {
    // Comentado: Ahora usamos CSS puro para el carrusel infinito
    // Initialize carousels when DOM is loaded
    /*
    carousels = [
        new SkillsCarousel('web-skills-track', 'web-prev-btn', 'web-next-btn', 'web-progress-bar'),
        new SkillsCarousel('ai-skills-track', 'ai-prev-btn', 'ai-next-btn', 'ai-progress-bar'),
        new SkillsCarousel('cloud-skills-track', 'cloud-prev-btn', 'cloud-next-btn', 'cloud-progress-bar'),
        new SkillsCarousel('tools-skills-track', 'tools-prev-btn', 'tools-next-btn', 'tools-progress-bar')
    ];
    
    // Asegurar que el auto-play se inicie después de un breve delay
    setTimeout(() => {
        carousels.forEach(carousel => {
            carousel.startAutoPlay();
        });
    }, 500); // Reducido a 500ms para inicio más rápido
    */
    
    // Inicializar filtros de proyectos
    initProjectFilters();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill items hover effect
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const icon = link.querySelector('i');
        icon.style.transform = 'scale(1.2)';
    });
    
    link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('i');
        icon.style.transform = 'scale(1)';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation (if contact form is added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Smooth reveal animation for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 30);
    });
}

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.click();
        }
    }
    
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            let targetIndex;
            
            if (e.key === 'ArrowDown') {
                targetIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else {
                targetIndex = Math.max(currentIndex - 1, 0);
            }
            
            const targetSection = sections[targetIndex];
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// Console welcome message
console.log(`
🚀 ¡Bienvenido a mi portafolio!
👨‍💻 Desarrollador Full Stack & Especialista en IA
🌐 Desarrollado con HTML5, CSS3 y JavaScript vanilla
📧 Contáctame: tuemail@ejemplo.com
🎠 Carrusel de habilidades implementado con éxito
`); 