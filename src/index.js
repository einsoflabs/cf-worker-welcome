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
            --bg: #06070b;
            --panel: rgba(11, 14, 24, 0.72);
            --text: #f5f7fb;
            --muted: #9aa7bc;
            --accent: #79a7ff;
            --accent-2: #ff8e5e;
            --stroke: rgba(255, 255, 255, 0.1);
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: 'Plus Jakarta Sans', sans-serif;
            color: var(--text);
            background:
                radial-gradient(circle at top left, rgba(121, 167, 255, 0.2), transparent 34%),
                radial-gradient(circle at bottom right, rgba(255, 142, 94, 0.16), transparent 30%),
                var(--bg);
            overflow-x: hidden;
        }

        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 54px 54px;
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), transparent 92%);
            pointer-events: none;
        }

        .container {
            width: min(1120px, calc(100% - 2rem));
            margin: 0 auto;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1.4rem;
        }

        .brand {
            text-decoration: none;
            color: var(--text);
            font-size: 0.95rem;
            font-weight: 800;
            letter-spacing: 0.22em;
            text-transform: uppercase;
        }

        .nav-links {
            display: flex;
            gap: 1.1rem;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--muted);
            font-weight: 500;
            transition: color 180ms ease;
        }

        .nav-links a:hover {
            color: var(--text);
        }

        .hero {
            padding: 5rem 0 3rem;
            display: grid;
            gap: 1.2rem;
        }

        .eyebrow {
            margin: 0;
            color: #8da5e2;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.3em;
            text-transform: uppercase;
        }

        h1 {
            margin: 0;
            font-size: clamp(2.8rem, 5.3vw, 4.8rem);
            line-height: 0.95;
            letter-spacing: -0.03em;
        }

        .lead {
            margin: 0;
            max-width: 715px;
            font-size: 1.06rem;
            line-height: 1.8;
            color: var(--muted);
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.85rem;
            margin-top: 0.6rem;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.95rem 1.2rem;
            border-radius: 999px;
            text-decoration: none;
            font-weight: 700;
            transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .button:hover {
            transform: translateY(-2px);
        }

        .button.primary {
            color: white;
            background: linear-gradient(135deg, var(--accent), #4d7cff 55%, var(--accent-2));
            box-shadow: 0 16px 40px rgba(121, 167, 255, 0.22);
        }

        .button.secondary {
            color: var(--text);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--stroke);
        }

        .about-card {
            margin: 0 0 3rem;
            padding: 2rem;
            border-radius: 1.75rem;
            border: 1px solid var(--stroke);
            background: var(--panel);
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
            backdrop-filter: blur(18px);
        }

        .about-card h2 {
            margin: 0.25rem 0 0.8rem;
            font-size: clamp(1.45rem, 2.2vw, 1.9rem);
        }

        .about-card p {
            margin: 0;
            color: var(--muted);
            line-height: 1.8;
        }

        .about-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 1.2rem;
        }

        .stat {
            padding: 1rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat strong {
            display: block;
            margin-bottom: 0.4rem;
            color: var(--text);
        }

        @media (max-width: 760px) {
            .hero {
                padding-top: 3rem;
            }

            .about-grid {
                grid-template-columns: 1fr;
            }

            .about-card {
                padding: 1.4rem;
            }
        }
    </style>
</head>
<body>
    <nav class="container">
        <a class="brand" href="#home">EinSof Labs</a>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="https://youtube.com/@ein_sof_labs?si=xYB2BiNI0u-2Nk8i" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
    </nav>

    <main class="container">
        <section id="home" class="hero">
            <p class="eyebrow">Creator of EinSof Labs</p>
            <h1>Everything is connected.</h1>
            <p class="lead">Movies reveal philosophy. Comedy exposes truth. Technology reshapes culture. Science expands possibility.</p>
            <div class="actions">
                <a class="button primary" href="#about">Explore the philosophy</a>
                <a class="button secondary" href="https://youtube.com/@ein_sof_labs?si=xYB2BiNI0u-2Nk8i" target="_blank" rel="noopener noreferrer">Watch the channel</a>
            </div>
        </section>

        <section id="about" class="about-card">
            <p class="eyebrow">About</p>
            <h2>A think tank for the endlessly curious.</h2>
            <p>This is where engineering meets art, philosophy meets AI, and serious ideas are explored without taking ourselves too seriously.</p>
            <div class="about-grid">
                <div class="stat">
                    <strong>Everything is connected.</strong>
                    <p>Ideas rarely arrive in isolation.</p>
                </div>
                <div class="stat">
                    <strong>Curiosity is a method.</strong>
                    <p>We follow signals across film, comedy, technology, and science.</p>
                </div>
                <div class="stat">
                    <strong>Understanding is the start.</strong>
                    <p>If understanding the world is the first step toward improving it, this is where we begin.</p>
                </div>
            </div>
        </section>
    </main>

    <script>
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
    </script>
</body>
</html>
    `;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
