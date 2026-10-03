const TELEGRAM_URL = "https://t.me/AIHUSTLERSUNIVERSITY";

document.querySelectorAll(".telegram-link").forEach((link) => {
  link.href = TELEGRAM_URL;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".proof-item, .drop-card, .step-row, .simple-final .final-cta-inner").forEach((element) => {
  element.classList.add("scroll-reveal");
  observer.observe(element);
});
