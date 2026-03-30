const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el, idx) => {
  el.style.transitionDelay = `${Math.min(idx * 0.06, 0.3)}s`;
  observer.observe(el);
});
