const firstButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

// Bookmark ausgewählt?

firstButton.addEventListener("click", () => {
  firstButton.classList.toggle("is-active");

  if (firstButton.classList.contains("is-active")) {
    firstButton.setAttribute("aria-pressed", "true");
  } else {
    firstButton.setAttribute("aria-pressed", "false");
  }
});

// answerButton macht Text sichtbar

answerButton.addEventListener("click", () => {
  const card = answerButton.closest(".card");
  card.classList.toggle("answer-visible");

  if (card.classList.contains("answer-visible")) {
    answerButton.setAttribute("aria-expanded", "true");
  } else {
    answerButton.setAttribute("aria-expanded", "false");
  }
});
