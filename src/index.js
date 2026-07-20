export default {
  async fetch(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="EinSof Labs is a think tank for films, technology, research, math, physics, and philosophy—bridging ideas into human progress.">
    <title>EinSof Labs</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
            color-scheme: dark;
            --bg: #05070d;
            --panel: rgba(10, 15, 29, 0.8);
            --panel-strong: rgba(15, 23, 41, 0.96);
            --text: #f8f8ff;
            --muted: #93a7c7;
            --accent: #00e4ff;
            --accent-2: #ff4ce2;
            --accent-3: #ffb347;
            --stroke: rgba(255,255,255,0.16);
            --shadow: rgba(0, 0, 0, 0.34);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: 'Plus Jakarta Sans', 'Inter', 'Segoe UI', sans-serif;
            color: var(--text);
            background:
                radial-gradient(circle at top left, rgba(0, 228, 255, 0.22), transparent 28%),
                radial-gradient(circle at 85% 15%, rgba(255, 76, 226, 0.2), transparent 24%),
                radial-gradient(circle at bottom right, rgba(255, 179, 71, 0.18), transparent 25%),
                linear-gradient(135deg, #04050b 0%, #09101d 45%, #04050b 100%);
            overflow-x: hidden;
            cursor: none;
        }

        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
            background-size: 48px 48px;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0.95), transparent 92%);
            pointer-events: none;
        }

        .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.25rem;
        }

        .shell {
            width: min(1180px, 100%);
            border: 1px solid rgba(255,255,255,0.16);
            border-radius: 28px;
            background: linear-gradient(135deg, rgba(13, 19, 34, 0.95), rgba(7, 12, 23, 0.95));
            box-shadow: 0 24px 90px rgba(0, 0, 0, 0.45);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(18px);
        }

        .shell::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(115deg, rgba(0,228,255,0.08), transparent 24%, rgba(255,76,226,0.1) 72%, transparent 100%);
            pointer-events: none;
            animation: sweep 8s linear infinite;
        }

        @keyframes sweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.2rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(10px);
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            font-size: 0.85rem;
        }

        .brand-mark {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent), var(--accent-2));
            box-shadow: 0 0 12px rgba(0,228,255,0.45);
        }

        .nav {
            display: flex;
            flex-wrap: wrap;
            gap: 0.65rem;
        }

        .nav a {
            padding: 0.58rem 0.8rem;
            text-decoration: none;
            color: var(--text);
            font-size: 0.94rem;
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 999px;
            background: rgba(255,255,255,0.04);
            transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .nav a:hover {
            transform: translateY(-1px);
            border-color: rgba(0,228,255,0.45);
            box-shadow: 0 0 16px rgba(0,228,255,0.12);
        }

        .content {
            display: grid;
            gap: 1rem;
            padding: 1.2rem;
        }

        .hero {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 1rem;
            align-items: stretch;
        }

        .hero-card, .side-card {
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 24px;
            padding: 1.25rem;
            background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
            position: relative;
            overflow: hidden;
        }

        .hero-card::after, .side-card::after {
            content: '';
            position: absolute;
            inset: auto -40px -40px auto;
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0,228,255,0.14), transparent 70%);
            pointer-events: none;
        }

        .eyebrow {
            display: inline-block;
            margin: 0 0 0.7rem;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 0.3em;
            font-size: 0.72rem;
            font-weight: 700;
        }

        h1 {
            margin: 0 0 0.7rem;
            font-size: clamp(2.3rem, 4vw, 3.8rem);
            line-height: 0.95;
            letter-spacing: -0.03em;
        }

        .lead {
            margin: 0;
            color: var(--muted);
            font-size: 1.02rem;
            line-height: 1.8;
            max-width: 660px;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1rem;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-weight: 700;
            padding: 0.8rem 1rem;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.16);
            transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .button:hover {
            transform: translateY(-2px);
        }

        .button.primary {
            color: #02131d;
            background: linear-gradient(135deg, var(--accent), #7afff8 70%, #00c4e0);
            box-shadow: 0 10px 20px rgba(0, 228, 255, 0.2);
        }

        .button.secondary {
            color: var(--text);
            background: rgba(255,255,255,0.05);
        }

        .pill-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            margin-top: 1rem;
        }

        .pill {
            padding: 0.45rem 0.7rem;
            font-size: 0.84rem;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,0.12);
            color: #dfe7ff;
            background: rgba(255,255,255,0.04);
        }

        .side-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100%;
        }

        .quote {
            font-size: clamp(1.05rem, 1.6vw, 1.28rem);
            line-height: 1.6;
            color: #f7f6ff;
            margin: 0 0 0.8rem;
        }

        .muted {
            color: var(--muted);
            margin: 0;
            line-height: 1.7;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }

        .stat {
            padding: 0.8rem;
            border-radius: 16px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
        }

        .stat strong {
            display: block;
            font-size: 1.05rem;
            margin-bottom: 0.2rem;
            color: #fefefe;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.8rem;
        }

        .card {
            padding: 1rem;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.1);
            background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.025));
            min-height: 150px;
        }

        .card h3 {
            margin: 0 0 0.35rem;
            font-size: 1rem;
        }

        .card p {
            margin: 0;
            color: var(--muted);
            line-height: 1.7;
            font-size: 0.95rem;
        }

        .accent-line {
            display: block;
            width: 46px;
            height: 3px;
            border-radius: 999px;
            background: linear-gradient(90deg, var(--accent), var(--accent-2));
            margin-bottom: 0.6rem;
        }

        .footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.9rem 1.2rem 1.2rem;
            color: var(--muted);
            font-size: 0.95rem;
        }

        .cursor {
            position: fixed;
            left: 0;
            top: 0;
            width: 30px;
            height: 30px;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 110ms ease-out;
            filter: drop-shadow(0 0 12px rgba(0,228,255,0.55));
        }

        .cursor .ring {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 1px solid rgba(0,228,255,0.95);
            box-shadow: 0 0 10px rgba(0,228,255,0.6), inset 0 0 6px rgba(0,228,255,0.25);
        }

        .cursor .dot {
            position: absolute;
            inset: 7px;
            border-radius: 50%;
            background: radial-gradient(circle, #ffffff 0%, #7ef2ff 35%, #00a8c8 70%, transparent 74%);
        }

        .cursor.clicking {
            transform: translate(-50%, -50%) scale(0.82);
        }

        .cursor-trail {
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(0,228,255,0.55) 45%, transparent 75%);
            opacity: 0.75;
            transform: translate(-50%, -50%);
        }

        @media (max-width: 900px) {
            .hero { grid-template-columns: 1fr; }
            .grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 720px) {
            .stats { grid-template-columns: 1fr; }
            .content { padding: 1rem; }
            .topbar, .footer { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
            .page { padding: 0.8rem; }
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

    <main class="page">
        <section class="shell">
            <header class="topbar">
                <div class="brand">
                    <span class="brand-mark"></span>
                    <span>EinSof Labs</span>
                </div>
                <nav class="nav">
                    <a href="#home">Home</a>
                    <a href="#focus">Focus</a>
                    <a href="https://youtube.com/@ein_sof_labs?si=xYB2BiNI0u-2Nk8i" target="_blank" rel="noopener noreferrer">YouTube</a>
                </nav>
            </header>

            <div class="content">
                <section class="hero" id="home">
                    <div class="hero-card">
                        <p class="eyebrow">Think tank · films · research · future</p>
                        <h1>We are building the next horizon.</h1>
                        <p class="lead">EinSof Labs exists to bridge the esoteric and the practical. We make films, study technology, math, physics, and philosophy, and turn big ideas into cultural signals that help humanity move forward.</p>
                        <div class="actions">
                            <a class="button primary" href="#focus">Explore the work</a>
                            <a class="button secondary" href="https://youtube.com/@ein_sof_labs?si=xYB2BiNI0u-2Nk8i" target="_blank" rel="noopener noreferrer">Watch the channel</a>
                        </div>
                        <div class="pill-row">
                            <span class="pill">Films</span>
                            <span class="pill">Technology</span>
                            <span class="pill">Math</span>
                            <span class="pill">Physics</span>
                            <span class="pill">Philosophy</span>
                        </div>
                    </div>

                    <aside class="side-card">
                        <div>
                            <p class="eyebrow">Signal</p>
                            <p class="quote">“The future is not built by fear. It is built by those willing to hold strange ideas with discipline and courage.”</p>
                            <p class="muted">We work at the intersection of art, science, and imagination so that serious thinking can become public culture.</p>
                        </div>
                        <div class="stats">
                            <div class="stat">
                                <strong>01</strong>
                                <span>Vision</span>
                            </div>
                            <div class="stat">
                                <strong>02</strong>
                                <span>Research</span>
                            </div>
                            <div class="stat">
                                <strong>03</strong>
                                <span>Impact</span>
                            </div>
                        </div>
                    </aside>
                </section>

                <section id="focus">
                    <div class="grid">
                        <article class="card">
                            <span class="accent-line"></span>
                            <h3>Films</h3>
                            <p>Storytelling becomes a vessel for ideas that would otherwise stay hidden inside academic spaces.</p>
                        </article>
                        <article class="card">
                            <span class="accent-line"></span>
                            <h3>Research</h3>
                            <p>We explore emerging technologies, systems thinking, and the philosophical questions beneath modern tools.</p>
                        </article>
                        <article class="card">
                            <span class="accent-line"></span>
                            <h3>Humanity</h3>
                            <p>Our work is an effort to make the future more legible, more ethical, and more worthy of collective imagination.</p>
                        </article>
                    </div>
                </section>
            </div>

            <footer class="footer">
                <span>EinSof Labs · A place for future-facing thought.</span>
                <span>Built for bold curiosity.</span>
            </footer>
        </section>
    </main>

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
