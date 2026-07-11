function countUp(el, duration) {

  
    const num = parseInt(el.textContent.replace(/[^0-9]/g, ""), 10);
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = `${Math.floor(progress * num)}+`;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = `${num}+`;
  }
  requestAnimationFrame(tick);
}
