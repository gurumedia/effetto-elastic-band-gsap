document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("load", (event) => {
    document.querySelectorAll(".box").forEach((box) => {
      const path = box.querySelector("svg path");
      const tweens = { y: 0, x: 0.5, time: Math.PI / 2 };

      if (!path) return;

      gsap.set(tweens, {
        onUpdate: updatePath,
      });

      box.addEventListener("mousemove", onMouseMove);
      box.addEventListener("mouseenter", onMouseEnter);
      box.addEventListener("mouseleave", onMouseLeave);

      function onMouseMove(evt) {
        gsap.to(tweens, {
          y: "+=" + evt.movementY,
          x: (evt.clientX - box.getBoundingClientRect().left) / box.offsetWidth,
          duration: 0.1,
          ease: "sine.out",
          onUpdate: updatePath,
          overwrite: "auto",
        });
      }

      function onMouseEnter() {
        gsap.killTweensOf(tweens);
        gsap.set(tweens, { time: Math.PI / 2 });
      }

      function onMouseLeave() {
        gsap.to(tweens, {
          y: 0,
          time: "+=0",
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          onUpdate: updatePath,
        });
      }
      // `M startX,startY Q controlX,controlY endX,endY`. 'M' represents the start point, 'Q' represents the control point, and the coordinates (startX, startY), (controlX, controlY), and (endX, endY) correspond to the respective points.

      function updatePath() {
        const w = window.innerWidth;
        const d = `M0,100 Q${w * tweens.x},${100 + tweens.y} ${w},100`;
        path.setAttribute("d", d);
      }
    });
  });
});
