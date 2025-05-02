gsap.registerPlugin(ScrollTrigger);

gsap.to("#praying-mantis", {
  scrollTrigger: {
    horizontal: true,
    trigger: "#praying-mantis",
    start: "left 20%",
    end: "left left",
    scrub: 1,
  },
  opacity: 0,
});

gsap.from("#white-flowers", {
  scrollTrigger: {
    horizontal: true,
    trigger: "#white-flowers",
    start: "left 20%",
    end: "left left",
    scrub: 1,
  },
  opacity: 1,
});

gsap.to("#crab", {
  scrollTrigger: {
    horizontal: true,
    trigger: "#crab",
    start: "left right",
    end: "left 80%",
    scrub: 1,
  },
  opacity: 1,
});

gsap.from("#crab", {
  scrollTrigger: {
    horizontal: true,
    trigger: "#crab",
    start: "left 20%",
    end: "left left",
    scrub: 1,
  },
  opacity: 1,
});

gsap.to("#frog", {
  scrollTrigger: {
    horizontal: true,
    trigger: "#frog",
    start: "left right",
    end: "left 80%",
    scrub: 1,
  },
  opacity: 1,
});

gsap.from("#frog", {
  scrollTrigger: {
    horizontal: true,
    trigger: "#frog",
    start: "left 20%",
    end: "left left",
    scrub: 1,
  },
  opacity: 1,
});
