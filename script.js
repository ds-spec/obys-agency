function locomtiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

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
  tl.from("#hero1 h1,#hero2 h1,#hero4 h1", {
    y: 140,
    stagger: 0.4,
  });

  tl.from(
    "#hero1",
    {
      opacity: 0,
    },
    "-=1.3"
  );
  document.querySelectorAll("#hero3 h2").forEach((el) => {
    el.style.transform = ""; // Remove inline transform style
  });

  // Ensure GSAP is properly applied to both h2 elements
  tl.from("#hero3 h1,#hero3 h2", {
    y: 120,
    stagger: 0.3,
    // duration: 1,
    ease: "power2.out",
  });
}
function createCursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  // var cursor = document.querySelector("#video-cursor");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".mousefollower", {
        opacity: 0,
      });
      gsap.to("#video-cursor", {
        left: dets.x - 500,
        top: dets.y - 340,
      });
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    });
    gsap.to("#video-cursor", {
      position: "absolute",
      left: "70%",
      top: "-16%",
    });
  });
  var flag = 0;

  video.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-pause-line"></i>`;
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-play-fill"></i>`;
      flag = 0;
    }
  });

  Shery.makeMagnet("#nav-right h4");
}
function makeImagesStyle() {
  console.log(Shery, "SheryShery");
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    config: {
      a: { value: 2.06, range: [0, 30] },
      b: { value: -0.95, range: [-1, 1] },
      zindex: { value: "-9996999", range: [-9999999, 9999999] },
      aspect: { value: 0.7241195864976497 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.4, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 6.87, range: [0, 100] },
    },
  });
}

loadingAnimation();
createCursorAnimation();
locomtiveScroll();
makeImagesStyle();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#flag", {
    x: dets.x,
    y: dets.y,
  });
});

// Select the elements
const hero3 = document.querySelector("#hero3");
const hero4 = document.querySelector("#hero4");

// Function to handle the opacity change
function handleMouseEnter() {
  gsap.to("#flag", { opacity: 1 });
}

function handleMouseLeave() {
  gsap.to("#flag", { opacity: 0 });
}

// Add event listeners to the selected elements
if (hero3) {
  hero3.addEventListener("mouseenter", handleMouseEnter);
  hero3.addEventListener("mouseleave", handleMouseLeave);
}

if (hero4) {
  hero4.addEventListener("mouseenter", handleMouseEnter);
  hero4.addEventListener("mouseleave", handleMouseLeave);
}
