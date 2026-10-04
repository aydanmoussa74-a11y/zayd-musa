(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var lightX = 50;
  var lightY = 30;

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
  window.addEventListener("pointerdown", onPoint, { passive: true });

  function onScroll() {
    var y = window.scrollY;
    var height = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    var progress = Math.min(y / height, 1);
    root.style.setProperty("--shift", (y * 0.18) + "px");
    root.style.setProperty("--lift", (progress * -72) + "px");
    root.style.setProperty("--sheet", (progress * -24) + "px");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  paintLight();
  onScroll();
})();
