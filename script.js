// Stage 1 Action: Burst Particles & Trigger Album State
function openGift() {
    const box = document.querySelector('.box-container');
    const music = document.getElementById('bg-music');
    
    // Play the background music track immediately
    music.play().catch(e => console.log("Music auto-play layout blocked until physical user interaction. Continuing safety scripts."));

    // Add explosion particle burst rings
    box.classList.add('explode');
    createParticles(box);

    // Fade out gift box wrapper layout and boot up Album layout seamlessly
    setTimeout(() => {
        document.getElementById('gift-stage').classList.remove('active');
        document.getElementById('album-stage').classList.add('active');
    }, 1000);
}

// Sparkle Particle Burst Vector Engine
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('burst-particle');
        
        // Random coloring parameters for luxury aesthetic
        const colors = ['#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#fffb00'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Positioning offsets
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';

        // Direct random vector coordinate outputs via CSS custom variables
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 150;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

// Stage 2 Action: Book Album Flipping Code Configuration
const pages = document.querySelectorAll('.page');
let zIndexCounter = pages.length;

// Loop and apply structural indexes dynamically
pages.forEach((page, index) => {
    page.style.zIndex = zIndexCounter - index;

    page.addEventListener('click', (e) => {
        // Prevent clicking the special letter box click event from accidentally double flipping pages
        if (e.target.classList.contains('pulse-text') || e.target.classList.contains('end-page')) return;

        if (page.classList.contains('flipped')) {
            page.classList.remove('flipped');
            page.style.zIndex = zIndexCounter - index;
        } else {
            page.classList.add('flipped');
            page.style.zIndex = index + 1;
        }
    });
});

// Stage 3 Action: Route to love letter layout and play progressive typewriter entry animations
function goToLetter() {
    document.getElementById('album-stage').classList.remove('active');
    document.getElementById('letter-stage').classList.add('active');

    // Run cascade progressive layout timers for each paragraph block inside the letter DOM
    const paragraphs = document.querySelectorAll('.letter-content p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.classList.add('fade-in-active');
        }, index * 1200); // 1.2-second fluid delayed cascading entry per line
    });
}
