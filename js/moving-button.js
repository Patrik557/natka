document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.moving-button');
  const container = document.querySelector('.moving-button-container');
  if (!btn || !container) return;

  let clicks = 0;
  const maxTries = 5; // prvních 5 kliků utíká
  const labels = [
    'Další stránka',
    'Vedle',
    'Už jsi to skoro měla',
    'Začíná to být trapný',
    'Zkus to znovu'
  ];

  // Pomocná funkce: vygeneruje bezpečnou náhodnou pozici v rámci kontejneru
  function getRandomPosition(prevX, prevY) {
    const padding = 16; // větší vnitřní odsazení
    const maxX = Math.max(container.clientWidth - btn.offsetWidth - padding * 2, 0);
    const maxY = Math.max(container.clientHeight - btn.offsetHeight - padding * 2, 0);

    // generuj tak, aby nový bod byl aspoň určitou vzdálenost od předchozího
    const minDistance = 80; // px - "větší odstup"
    let x, y, tries = 0;
    do {
      x = Math.floor(Math.random() * (maxX + 1)) + padding;
      y = Math.floor(Math.random() * (maxY + 1)) + padding;
      tries++;
      if (!isFinite(prevX) || !isFinite(prevY)) break;
    } while (Math.hypot(x - prevX, y - prevY) < minDistance && tries < 30);
    return { x, y };
  }

  // Přesun s krátkým zmizením
  function hopSomewhereElse() {
    // Fade out
    btn.style.opacity = '0';

    // Po krátké prodlevě změň pozici a ukaž zpět
    setTimeout(() => {
      const prevLeft = parseFloat(btn.style.left);
      const prevTop = parseFloat(btn.style.top);
      const { x, y } = getRandomPosition(prevLeft, prevTop);
      btn.style.left = x + 'px';
      btn.style.top = y + 'px';
      // zachovat translate(-50%, -50%) jen při startu; po prvním skoku jej odstraníme
      btn.style.transform = 'scale(1)';
      // Fade in
      requestAnimationFrame(() => {
        btn.style.opacity = '1';
      });
    }, 220);
  }

  // Po načtení zarovnáno na střed, po prvním kliku přepneme na absolutní pixely
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    clicks++;

    // Po prvním kliku odstraň počáteční center translate a převeď na pixelové souřadnice
    if (clicks === 1) {
      const rect = btn.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      const startLeft = rect.left - contRect.left;
      const startTop = rect.top - contRect.top;
      btn.style.left = startLeft + 'px';
      btn.style.top = startTop + 'px';
      btn.style.transform = 'scale(1)';
    }

    // Nastav text podle pořadí kliknutí (1..5)
    const labelEl = btn.querySelector('.text');
    if (labelEl && clicks <= labels.length) {
      labelEl.textContent = labels[clicks - 1];
    }

    if (clicks <= maxTries) {
      hopSomewhereElse();
    } else {
      // 6. klik a více -> přesměrování na stranku2.html
      window.location.href = 'stranku2.html';
    }
  });
});
