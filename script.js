function loadingAnimation() {
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
      }, 30);
    },
  });

  tl.to("#animated-div h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 1,
    // delay: 4,
    delay: 0,
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
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 100,
    stagger: 0.2,
  });
}
loadingAnimation();

function createCursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet("#nav-right h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

createCursorAnimation();
