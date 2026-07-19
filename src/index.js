export default {
  async fetch(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="EinSof Labs explores philosophy, technology, culture, and AI with curiosity and wit.">
    <title>EinSof Labs</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;700;800&display=swap');

        :root {
            color-scheme: dark;
            --bg: #04050a;
            --panel: #0f1524;
            --panel-2: #111b2f;
            --text: #f4f7ff;
            --muted: #91a4c5;
            --accent: #00e5ff;
            --accent-2: #ff4edb;
            --stroke: #2d3b5b;
            --shadow: rgba(0, 0, 0, 0.45);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: 'MS Sans Serif', 'Trebuchet MS', sans-serif;
            color: var(--text);
            background:
                radial-gradient(circle at top left, rgba(0, 229, 255, 0.16), transparent 28%),
                radial-gradient(circle at bottom right, rgba(255, 78, 219, 0.14), transparent 25%),
                linear-gradient(135deg, #04050a, #090b13 60%, #05070d);
            overflow-x: hidden;
            cursor: none;
        }

        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
            background-size: 48px 48px;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0.95), transparent 90%);
            pointer-events: none;
        }

        .desktop {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.2rem;
        }

        .window {
            width: min(920px, 100%);
            border: 2px solid #2f3f63;
            background: linear-gradient(180deg, #131c2f, #0c1323 70%);
            box-shadow: 0 0 0 1px rgba(255,255,255,0.06) inset, 0 20px 60px var(--shadow);
            position: relative;
            overflow: hidden;
        }

        .titlebar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.7rem 0.9rem;
            background: linear-gradient(180deg, #2f4a8f, #253b6d 70%, #1d3058);
            border-bottom: 2px solid rgba(255,255,255,0.16);
            color: white;
            font-weight: 700;
            letter-spacing: 0.03em;
        }

        .titlebar .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.3);
            box-shadow: 0 0 8px rgba(0,229,255,0.5);
        }

        .titlebar .left { display: flex; gap: 0.55rem; align-items: center; }

        .content {
            padding: 1.2rem;
            display: grid;
            gap: 1rem;
        }

        .toolbar {
            display: flex;
            flex-wrap: wrap;
            gap: 0.65rem;
            align-items: center;
        }

        .toolbar a {
            text-decoration: none;
            color: var(--text);
            padding: 0.5rem 0.8rem;
            border: 1px solid rgba(255,255,255,0.14);
            background: rgba(255,255,255,0.05);
            box-shadow: inset 1px 1px rgba(255,255,255,0.07), inset -1px -1px rgba(0,0,0,0.25);
            font-size: 0.94rem;
        }

        .toolbar a:hover {
            color: #00e5ff;
            box-shadow: 0 0 12px rgba(0,229,255,0.18);
        }

        .hero {
            padding: 1rem 0 0.2rem;
            display: grid;
            gap: 0.8rem;
        }

        .eyebrow {
            margin: 0;
            color: #7fdcff;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            font-size: 0.72rem;
            font-weight: 700;
        }

        h1 {
            margin: 0;
            font-size: clamp(2.2rem, 3.8vw, 3.2rem);
            line-height: 0.95;
            font-family: 'Courier New', monospace;
            text-shadow: 0 0 12px rgba(0,229,255,0.18);
        }

        .lead {
            margin: 0;
            max-width: 700px;
            color: var(--muted);
            line-height: 1.75;
            font-size: 1rem;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.7rem;
            margin-top: 0.2rem;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.72rem 0.95rem;
            text-decoration: none;
            color: var(--text);
            font-weight: 700;
            border: 1px solid rgba(255,255,255,0.16);
            background: linear-gradient(180deg, #1c2740, #0f1628);
            box-shadow: inset 1px 1px rgba(255,255,255,0.1), inset -1px -1px rgba(0,0,0,0.25);
            transition: transform 160ms ease, box-shadow 160ms ease;
        }

        .button:hover {
            transform: translateY(-1px);
            box-shadow: 0 0 12px rgba(0,229,255,0.16);
        }

        .button.primary {
            color: #00111d;
            background: linear-gradient(180deg, #7ef2ff, #00d4ff 70%, #00a9c8);
            text-shadow: 0 1px 0 rgba(255,255,255,0.4);
        }

        .about-box {
            padding: 1rem;
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.03);
            box-shadow: inset 1px 1px rgba(255,255,255,0.04), inset -1px -1px rgba(0,0,0,0.2);
        }

        .about-box h2 {
            margin: 0 0 0.5rem;
            font-size: 1.12rem;
        }

        .about-box p {
            margin: 0;
            color: var(--muted);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            gap: 0.75rem;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            margin-top: 0.85rem;
        }

        .card {
            padding: 0.8rem;
            border: 1px solid rgba(255,255,255,0.08);
            background: rgba(255,255,255,0.025);
        }

        .card strong { display: block; margin-bottom: 0.35rem; color: var(--text); }

        .taskbar {
            margin-top: 0.85rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.6rem 0.8rem;
            border-top: 2px solid rgba(255,255,255,0.14);
            background: linear-gradient(180deg, #14213a, #0c1327);
        }

        .start {
            padding: 0.45rem 0.8rem;
            border: 1px solid rgba(255,255,255,0.16);
            background: linear-gradient(180deg, #7ef2ff, #00b8d6);
            color: #00121c;
            font-weight: 800;
            box-shadow: inset 1px 1px rgba(255,255,255,0.35), inset -1px -1px rgba(0,0,0,0.2);
        }

        .cursor {
            position: fixed;
            left: 0;
            top: 0;
            width: 26px;
            height: 26px;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 110ms ease-out;
        }

        .cursor .ring {
            position: absolute;
            inset: 0;
            border-radius: 999px;
            border: 1px solid rgba(0,229,255,0.95);
            box-shadow: 0 0 10px rgba(0,229,255,0.75), inset 0 0 8px rgba(0,229,255,0.35);
        }

        .cursor .dot {
            position: absolute;
            inset: 7px;
            border-radius: 999px;
            background: radial-gradient(circle, #ffffff 0%, #7ef2ff 30%, #00a8c8 70%, transparent 72%);
            box-shadow: 0 0 10px rgba(255,255,255,0.6);
        }

        .cursor.clicking {
            transform: translate(-50%, -50%) scale(0.8);
        }

        .cursor-trail {
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 999px;
            pointer-events: none;
            z-index: 9998;
            background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(0,229,255,0.55) 45%, transparent 75%);
            filter: blur(0.4px);
            opacity: 0.75;
            transform: translate(-50%, -50%);
        }

        @media (max-width: 760px) {
            .grid { grid-template-columns: 1fr; }
            .content { padding: 0.9rem; }
        }

        @media (hover: none) {
            body { cursor: auto; }
            .cursor, .cursor-trail { display: none; }
        }
    </style>
</head>
<body>
    <div id="cursor" class="cursor" aria-hidden="true">
        <div class="ring"></div>
        <div class="dot"></div>
    </div>

    <div class="desktop">
        <div class="window">
            <div class="titlebar">
                <div class="left">
                    <span class="dot"></span>
                    <span>EinSof Labs</span>
                </div>
                <span>Welcome</span>
            </div>

            <div class="content">
                <nav class="toolbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="https://youtube.com/@ein_sof_labs?si=xYB2BiNI0u-2Nk8i" target="_blank" rel="noopener noreferrer">YouTube</a>
                </nav>

                <section class="hero" id="home">
                    <p class="eyebrow">Creator of EinSof Labs</p>
                    <h1>Everything is connected.</h1>
                    <p class="lead">Movies reveal philosophy. Comedy exposes truth. Technology reshapes culture. Science expands possibility.</p>
                    <div class="actions">
                        <a class="button primary" href="#about">Explore the philosophy</a>
                        <a class="button" href="https://youtube.com/@ein_sof_labs?si=xYB2BiNI0u-2Nk8i" target="_blank" rel="noopener noreferrer">Watch the channel</a>
                    </div>
                </section>

                <section class="about-box" id="about">
                    <p class="eyebrow">About</p>
                    <h2>A think tank for the endlessly curious.</h2>
                    <p>This is where engineering meets art, philosophy meets AI, and serious ideas are explored without taking ourselves too seriously.</p>
                    <div class="grid">
                        <div class="card">
                            <strong>Everything is connected.</strong>
                            <p>Ideas rarely arrive in isolation.</p>
                        </div>
                        <div class="card">
                            <strong>Curiosity is a method.</strong>
                            <p>We follow signals across film, comedy, technology, and science.</p>
                        </div>
                        <div class="card">
                            <strong>Understanding is the start.</strong>
                            <p>If understanding the world is the first step toward improving it, this is where we begin.</p>
                        </div>
                    </div>
                </section>

                <div class="taskbar">
                    <button class="start" type="button">Start</button>
                    <span class="eyebrow">A little more neon. A little more now.</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        var cursor = document.getElementById('cursor');
        var cursorX = window.innerWidth / 2;
        var cursorY = window.innerHeight / 2;
        var targetX = cursorX;
        var targetY = cursorY;
        var trails = [];

        for (var i = 0; i < 6; i += 1) {
            var trail = document.createElement('div');
            trail.className = 'cursor-trail';
            document.body.appendChild(trail);
            trails.push(trail);
        }

        function animateCursor() {
            cursorX += (targetX - cursorX) * 0.2;
            cursorY += (targetY - cursorY) * 0.2;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            trails.forEach(function (trail, index) {
                var offset = (index + 1) * 8;
                trail.style.left = (cursorX - (targetX - cursorX) * 0.14 * (index + 1)) + 'px';
                trail.style.top = (cursorY - (targetY - cursorY) * 0.14 * (index + 1)) + 'px';
                trail.style.opacity = String(Math.max(0.2, 0.9 - index * 0.12));
                trail.style.transform = 'translate(-50%, -50%) scale(' + Math.max(0.35, 1 - index * 0.1) + ')';
            });

            requestAnimationFrame(animateCursor);
        }

        window.addEventListener('mousemove', function (event) {
            targetX = event.clientX;
            targetY = event.clientY;
        });

        window.addEventListener('mousedown', function () {
            cursor.classList.add('clicking');
        });

        window.addEventListener('mouseup', function () {
            cursor.classList.remove('clicking');
        });

        window.addEventListener('mouseleave', function () {
            cursor.classList.remove('clicking');
        });

        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (event) {
                var targetId = this.getAttribute('href');
                if (targetId && targetId.length > 1) {
                    event.preventDefault();
                    var target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        animateCursor();
    </script>
</body>
</html>
    `;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
