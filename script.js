var tl = gsap.timeline();
gsap.from(".line h1", {
  y: 150,
  duration: 0.6,
  stagger: 0.2,
  // delay: 0.3,
});

tl.from("#line1-p1", {
  opacity: 0,
  delay: 1,
  onStart: function () {
    var timer = document.querySelector("#line1-p1 h5");
    var counter = 0;
    setInterval(function () {
      if (counter < 100) {
        counter++;
      } else {
        counter = 100;
      }
      timer.innerHTML = counter;
    }, 45);
  },
});

tl.to("#animated-div h2", {
  animationName: "anime",
  opacity: 1,
});

tl.to("#loader", {
  opacity: 0,
  duration: 1,
  delay: 4,
  ease: "power2.out",
});

tl.from("#page1", {
  y: 1200,
  delay: 0.4,
  opacity: 0,
  duration: 0.4,
  ease: Power4,
});

tl.to("#loader", {
  display: "none",
});
