(() => {
  if (window.__ULTRA_CHAOS__) return;
  window.__ULTRA_CHAOS__ = true;

  // =========================
  // 🌈 RGB GLOBAL LEVE
  // =========================
  let h = 0;
  setInterval(() => {
    document.documentElement.style.filter =
      `hue-rotate(${h}deg) saturate(2) contrast(1.2)`;
    h = (h + 2) % 360;
  }, 50);

  // =========================
  // 🖱 CURSOR FALSO (banana chaos)
  // =========================
  const cursor = document.createElement("div");
  cursor.textContent = "🍌";
  cursor.style = `
    position: fixed;
    font-size: 28px;
    pointer-events: none;
    z-index: 999999999;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // =========================
  // 🌧 CHUVA DE EMOJIS (leve)
  // =========================
  const emojis = ["💀", "🔥", "🦆", "🐢", "💥"];
  setInterval(() => {
    const el = document.createElement("div");
    el.textContent = emojis[Math.random() * emojis.length | 0];
    el.style = `
      position: fixed;
      left: ${Math.random() * innerWidth}px;
      top: -20px;
      font-size: 20px;
      z-index: 999999;
      pointer-events: none;
      animation: fall 3s linear forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }, 250);

  // =========================
  // 💿 DVD QUICANDO
  // =========================
  const dvd = document.createElement("div");
  dvd.textContent = "💿 DVD";
  dvd.style = `
    position: fixed;
    font-size: 24px;
    font-weight: bold;
    z-index: 999999;
    pointer-events: none;
  `;
  document.body.appendChild(dvd);

  let x = 100, y = 100, vx = 3, vy = 2;

  setInterval(() => {
    x += vx;
    y += vy;

    if (x < 0 || x > innerWidth - 80) vx *= -1;
    if (y < 0 || y > innerHeight - 40) vy *= -1;

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";
  }, 16);

  // =========================
  // 💥 CLIQUE COM CONFETE SIMPLES
  // =========================
  document.addEventListener("click", e => {
    for (let i = 0; i < 6; i++) {
      const p = document.createElement("div");
      p.textContent = "✨";
      p.style = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        animation: pop 600ms ease-out forwards;
      `;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }
  });

  // =========================
  // 🎨 CSS LEVE (CRT + shake suave)
  // =========================
  const style = document.createElement("style");
  style.textContent = `
    * {
      transition: transform 0.2s;
    }

    @keyframes fall {
      to { transform: translateY(110vh); opacity: 0; }
    }

    @keyframes pop {
      from { transform: scale(1); opacity: 1; }
      to { transform: scale(2); opacity: 0; }
    }

    body {
      animation: shake 2s infinite;
    }

    @keyframes shake {
      0% { transform: translate(0,0); }
      25% { transform: translate(1px,-1px); }
      50% { transform: translate(-1px,1px); }
      75% { transform: translate(1px,1px); }
      100% { transform: translate(-1px,-1px); }
    }
  `;
  document.head.appendChild(style);

})();
