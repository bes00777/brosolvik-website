// Instagram Feed Integration Script
// Integratie van @meneervanderwafel Instagram account

document.addEventListener('DOMContentLoaded', function() {
    // Instagram Embed laden
    loadInstagramEmbed();

    // Stats animatie
    animateStats();
});

function loadInstagramEmbed() {
    // Instagram embed script laden
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    } else {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }
}

function animateStats() {
    const statElements = document.querySelectorAll('.stat');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statElements.forEach((stat, index) => {
        stat.style.animation = 'none';
        stat.style.opacity = '0';
        observer.observe(stat);
    });
}

// Open Instagram in nieuw tabblad
document.addEventListener('click', function(e) {
    if (e.target.closest('.follow-btn')) {
        e.preventDefault();
        window.open('https://instagram.com/meneervanderwafel', '_blank');
    }
});

// Optional: Auto-refresh Instagram embed elke 30 seconden
setInterval(function() {
    if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
    }
}, 30000);

// Logging (for debugging)
console.log('Instagram Feed integratie geladen voor @meneervanderwafel');
