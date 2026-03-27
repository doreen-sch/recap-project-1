const firstButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

// Bookmark ausgewählt?

if (firstButton) {
  firstButton.addEventListener("click", () => {
    firstButton.classList.toggle("is-active");

    if (firstButton.classList.contains("is-active")) {
      firstButton.setAttribute("aria-pressed", "true");
    } else {
      firstButton.setAttribute("aria-pressed", "false");
    }
  });
}

// answerButton macht Text sichtbar

if (answerButton) {
  answerButton.addEventListener("click", () => {
    const card = answerButton.closest(".card");
    card.classList.toggle("answer-visible");

    if (card.classList.contains("answer-visible")) {
      answerButton.setAttribute("aria-expanded", "true");
    } else {
      answerButton.setAttribute("aria-expanded", "false");
    }
  });
}

// character Counter

const questionInput = document.querySelector('[data-js="question-input"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');
const tagInput = document.querySelector('[data-js="tag-input"]');
const tagCounter = document.querySelector('[data-js="tag-counter"]');

if (questionInput && questionCounter)
  questionInput.addEventListener("input", (event) => {
    const remainingCharacters = 50 - questionInput.value.length;
    questionCounter.textContent = `${remainingCharacters} characters left`;
  });

if (answerInput && answerCounter)
  answerInput.addEventListener("input", (event) => {
    const remainingCharacters = 300 - answerInput.value.length;
    answerCounter.textContent = `${remainingCharacters} characters left`;
  });

if (tagInput && tagCounter)
  tagInput.addEventListener("input", (event) => {
    const remainingCharacters = 20 - tagInput.value.length;
    tagCounter.textContent = `${remainingCharacters} characters left`;
  });

// Adding new Cards

const cardForm = document.querySelector('[data-js="card-form"]');
const main = document.querySelector("main");

if (cardForm && questionInput && answerInput && tagInput && main) {
  cardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    const tag = tagInput.value.trim();

    // safety check
    if (!question || !answer || !tag) {
      return;
    }

    // create new card element
    const newCard = document.createElement("section");
    newCard.classList.add("card");

    newCard.innerHTML = `
      <button
        type="button"
        class="bookmark"
        aria-label="bookmark"
        aria-pressed="false"
      >
        <svg class="bookmark-outline" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
        </svg>
        <svg class="bookmark-filled" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z" />
        </svg>
      </button>

      <h2 class="card__question">${question}</h2>

      <p class="card__answer">${answer}</p>

      <button
        type="button"
        class="card__button"
        aria-expanded="false"
      >
        <span class="show-text">Show Answer</span>
        <span class="hide-text">Hide Answer</span>
      </button>

      <ul class="card__tags">
        <li class="tag">${tag}</li>
      </ul>
    `;

    main.append(newCard);

    // bookmark in new card
    const newBookmarkButton = newCard.querySelector(".bookmark");
    if (newBookmarkButton) {
      newBookmarkButton.addEventListener("click", () => {
        newBookmarkButton.classList.toggle("is-active");

        if (newBookmarkButton.classList.contains("is-active")) {
          newBookmarkButton.setAttribute("aria-pressed", "true");
        } else {
          newBookmarkButton.setAttribute("aria-pressed", "false");
        }
      });
    }

    // answer text in new card
    const newAnswerButton = newCard.querySelector(".card__button");
    if (newAnswerButton) {
      newAnswerButton.addEventListener("click", () => {
        newCard.classList.toggle("answer-visible");

        if (newCard.classList.contains("answer-visible")) {
          newAnswerButton.setAttribute("aria-expanded", "true");
        } else {
          newAnswerButton.setAttribute("aria-expanded", "false");
        }
      });
    }

    // reset form
    cardForm.reset();

    // reset counters
    if (questionCounter) questionCounter.textContent = "50 characters left";
    if (answerCounter) answerCounter.textContent = "150 characters left";
    if (tagCounter) tagCounter.textContent = "20 characters left";
  });
}

//  Reset Button setzt character counter zurück

if (cardForm) {
  cardForm.addEventListener("reset", () => {
    questionCounter.textContent = "50 characters left";
    answerCounter.textContent = "150 characters left";
    tagCounter.textContent = "20 characters left";
  });
}
