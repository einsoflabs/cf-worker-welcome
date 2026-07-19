export default {
  async fetch(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EinSof Labs</title>
    <!-- Tailwind CSS for modern base styling -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;800&display=swap');
        
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #0b0b0f;
            overflow: hidden;
            cursor: none;
        }

        .cursor {
            position: fixed;
            left: 0;
            top: 0;
            width: 24px;
            height: 24px;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-2px, -2px);
            transition: transform 120ms ease-out;
            filter: drop-shadow(0 0 8px rgba(255, 102, 77, 0.45));
        }

        .cursor svg {
            width: 100%;
            height: 100%;
        }

        .cursor.is-clicking {
            transform: translate(-2px, -2px) scale(0.82);
        }

        .cursor-trail {
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            pointer-events: none;
            z-index: 9998;
            background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255, 75, 43, 0.38) 45%, rgba(0,0,0,0) 72%);
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }

        @media (hover: none) {
            body {
                cursor: auto;
            }

            .cursor,
            .cursor-trail {
                display: none;
            }
        }

        /* 2026 Design Aesthetic: Dynamic Neo-brutalism & Soft Glows */
        .glow-bg {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            pointer-events: none;
        }

        /* Letter styling for individual physics pieces */
        .letter-piece {
            display: inline-block;
            transform-origin: center;
            transition: color 0.3s ease;
            position: relative;
            will-change: transform, opacity;
        }

        .dangerous-btn {
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            box-shadow: 0 0 25px rgba(255, 75, 43, 0.4);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .dangerous-btn:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 0 40px rgba(255, 75, 43, 0.7);
        }

        .dangerous-btn:active {
            transform: scale(0.98);
        }
    </style>
</head>
<body class="flex flex-col items-center justify-center min-h-screen text-white select-none">

    <div class="glow-bg"></div>

    <main class="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <!-- Exploding Header Container -->
        <h1 id="headline" class="text-5xl md:text-8xl font-extrabold tracking-tight mb-12 leading-none">
            <!-- JavaScript will break this down into individual animated letters -->
            Welcome to EinSof Labs
        </h1>

        <!-- The Forbidden Button -->
        <button id="chaosBtn" class="dangerous-btn px-8 py-4 rounded-full font-bold text-lg tracking-wide uppercase cursor-pointer">
            Don't Click On It
        </button>
    </main>

    <script>
        const headline = document.getElementById('headline');
        const button = document.getElementById('chaosBtn');
        const text = headline.textContent.trim();
        headline.innerHTML = '';

        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        cursor.setAttribute('aria-hidden', 'true');
        cursor.innerHTML = '\n            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4 3L19 11L13 13L10 21L8 15L4 17V3Z" fill="#fff7ed" stroke="#ff4b2b" stroke-width="1.3" stroke-linejoin="round"/>\n            </svg>\n        ';
        document.body.appendChild(cursor);

        const trails = Array.from({ length: 8 }, () => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            document.body.appendChild(trail);
            return trail;
        });

        let cursorX = window.innerWidth / 2;
        let cursorY = window.innerHeight / 2;
        let targetX = cursorX;
        let targetY = cursorY;

        const animateCursor = () => {
            cursorX += (targetX - cursorX) * 0.24;
            cursorY += (targetY - cursorY) * 0.24;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            trails.forEach((trail, index) => {
                const trailX = cursorX - (targetX - cursorX) * (index + 1) * 0.14;
                const trailY = cursorY - (targetY - cursorY) * (index + 1) * 0.14;
                trail.style.left = trailX + 'px';
                trail.style.top = trailY + 'px';
                trail.style.opacity = String(Math.max(0.2, 0.95 - index * 0.1));
                trail.style.transform = 'translate(-50%, -50%) scale(' + Math.max(0.3, 1 - index * 0.1) + ')';
            });

            requestAnimationFrame(animateCursor);
        };

        window.addEventListener('mousemove', (event) => {
            targetX = event.clientX;
            targetY = event.clientY;
        });

        window.addEventListener('mousedown', () => {
            cursor.classList.add('is-clicking');
        });

        window.addEventListener('mouseup', () => {
            cursor.classList.remove('is-clicking');
        });

        window.addEventListener('mouseleave', () => {
            cursor.classList.remove('is-clicking');
        });

        animateCursor();

        // Split text into individual letters wrapped in spans, preserving spaces
        const letters = Array.from(text).map(char => {
            const span = document.createElement('span');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
                span.style.display = 'inline-block';
            } else {
                span.textContent = char;
                span.classList.add('letter-piece');
            }
            headline.appendChild(span);
            return span;
        });

        let animated = false;

        button.addEventListener('click', () => {
            if (animated) return; // Prevent multiple triggers
            animated = true;

            // Simple micro-vibration on the button itself
            button.style.transform = 'scale(0.95)';
            setTimeout(() => button.style.display = 'none', 150);

            // Physics engine simulation variables
            const gravity = 0.6;
            const floor = window.innerHeight;

            letters.forEach((letter) => {
                if (letter.classList.contains('letter-piece')) {
                    // Assign random initial explosion velocities
                    let posX = 0;
                    let posY = 0;
                    let vx = (Math.random() - 0.5) * 15;      // Left/Right scatter
                    let vy = (Math.random() - 1) * 15 - 5;    // Upward pop
                    let angle = 0;
                    let va = (Math.random() - 0.5) * 20;     // Spin velocity

                    function updatePhysics() {
                        vy += gravity; // Apply gravity
                        posX += vx;
                        posY += vy;
                        angle += va;

                        const rect = letter.getBoundingClientRect();
                        
                        // Check if letter hits the bottom of the viewport
                        if (rect.top + posY >= floor - 50) {
                            posY = floor - rect.top - 50;
                            vy = -vy * 0.4; // Bounce damping
                            vx *= 0.6;      // Friction on ground
                            va *= 0.6;
                        }

                        // Apply 3D transforms for a high-end 2026 interactive feel
                        letter.style.transform = \`translate3d(\${posX}px, \${posY}px, 0) rotate(\${angle}deg)\`;
                        
                        // Slowly fade them out near the bottom
                        if (rect.top + posY > floor - 200) {
                            const opacity = parseFloat(window.getComputedStyle(letter).opacity);
                            if (opacity > 0) letter.style.opacity = opacity - 0.01;
                        }

                        if (parseFloat(letter.style.opacity) !== 0) {
                            requestAnimationFrame(updatePhysics);
                        }
                    }
                    
                    requestAnimationFrame(updatePhysics);
                }
            });
        });
    </script>
</body>
</html>
    `;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};