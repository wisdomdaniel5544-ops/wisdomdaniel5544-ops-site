// Replace this one value with the real Telegram group URL before publishing.
const TELEGRAM_URL = "https://t.me/your_group_here";

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

document.querySelectorAll(".benefit-card, .step-row, .faq-list, .final-cta-inner").forEach((element) => {
  element.classList.add("scroll-reveal");
  observer.observe(element);
});
