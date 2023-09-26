function videoConAnimation() {
  let videoCon = document.querySelector(".video-container");
  let playbtn = document.querySelector(".play");
  videoCon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videoCon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}

videoConAnimation();

function loadingAnimie() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.3,
  });
  gsap.from(".page1 .video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.9,
  });
}

loadingAnimie();
