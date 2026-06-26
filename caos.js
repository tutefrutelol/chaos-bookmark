(() => {
  if (window.__ULTRA_CHAOS__) return;
  window.__ULTRA_CHAOS__ = true;

  // =========================
  // 🔥 OVERLAY INVENCÍVEL
  // =========================
  const overlay = document.createElement("div");
  overlay.style = `
    position: fixed;
    inset: 0;
    z-index: 999999999;
    pointer-events: none;
    overflow: hidden;
  `;
  document.body.appendChild(overlay);

  // =========================
  // 🌈 RGB GLOBAL (não depende do site)
  // =========================
  let h = 0;
  setInterval(() => {
    document.documentElement.style.filter =
      `hue-rotate(${h}deg) saturate(3) contrast(1.2)`;
    h += 3;
  }, 30);

  // =========================
  // 🖱 CURSOR BANANA
  // =========================
  const cursor = document.createElement("div");
  cursor.textContent = "🍌";
  cursor.style = `
    position: fixed;
    font-size: 28px;
    z-index: 1000000000;
    pointer-events: none;
    transform: translate(-50%, -50%);
  `;
  overlay.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // =========================
  // 🌧 CHUVA DE EMOJIS
  // =========================
  const emojis = ["💀", "🔥", "🦆", "🐢", "💥", "😂"];
  setInterval(() => {
    const el = document.createElement("div");
    el.textContent = emojis[Math.random() * emojis.length | 0];
    el.style = `
      position: absolute;
      left: ${Math.random() * innerWidth}px;
      top: -30px;
      font-size: 22px;
      animation: fall 3s linear forwards;
    `;
    overlay.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }, 200);

  // =========================
  // 💿 DVD QUICANDO
  // =========================
  const dvd = document.createElement("div");
  dvd.textContent = "💿";
  dvd.style = `
    position: absolute;
    font-size: 26px;
  `;
  overlay.appendChild(dvd);

  let x = 100, y = 100, vx = 3, vy = 2;

  setInterval(() => {
    x += vx;
    y += vy;

    if (x < 0 || x > innerWidth - 50) vx *= -1;
    if (y < 0 || y > innerHeight - 50) vy *= -1;

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";
  }, 16);

  // =========================
  // 💥 CLIQUE COM PARTICULAS
  // =========================
  document.addEventListener("click", e => {
    for (let i = 0; i < 8; i++) {
      const p = document.createElement("div");
      p.textContent = "✨";
      p.style = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: 18px;
        animation: pop 600ms ease-out forwards;
      `;
      overlay.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }
  });

  // =========================
  // 🎨 CSS
  // =========================
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fall {
      to { transform: translateY(110vh); opacity: 0; }
    }
    @keyframes pop {
      from { transform: scale(1); opacity: 1; }
      to { transform: scale(2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

})();
