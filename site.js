(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var lightX = 50;
  var lightY = 28;

  function paintLight() {
    root.style.setProperty("--lx", lightX + "%");
    root.style.setProperty("--ly", lightY + "%");
  }

  function onPoint(event) {
    lightX = (event.clientX / window.innerWidth) * 100;
    lightY = (event.clientY / window.innerHeight) * 100;
    paintLight();
  }

  window.addEventListener("pointermove", onPoint, { passive: true });

  function onScroll() {
    var shift = Math.min(window.scrollY * 0.12, 80);
    root.style.setProperty("--shift", shift + "px");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  paintLight();
  onScroll();
})();
