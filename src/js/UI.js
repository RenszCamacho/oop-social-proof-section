class UI {
  render(user1, user2, user3) {
    const reviews = document.getElementById("reviews"),
      div = document.createElement("div");
    div.className = "reviews__testimonials";
    div.innerHTML = `
          <article class="reviews__cards reviews__cards--one">
            <div class="reviews__cardWrapper reviews__cardWrapper--one">
              <img
                src="${user1.image}"
                alt="${user1.fullName}"
                class="reviews__cardsImg"
              />
              <h2 class="reviews__name">
                <span class="reviews__subtitle">${user1.fullName}</span>
                <span class="reviews__cardVerify">${user1.verified}</span>
              </h2>
            </div>
            <blockquote>
              <p class="reviews__cardDescription">
                ${user1.review}
              </p>
            </blockquote>
          </article>

          <article class="reviews__cards reviews__cards--two">
            <div class="reviews__cardWrapper">
              <img
                src="${user2.image}"
                alt="${user2.fullName}"
                class="reviews__cardsImg"
              />
              <h2 class="reviews__name">
                <span class="reviews__subtitle">${user2.fullName}</span>
                <span class="reviews__cardVerify">${user2.verified}</span>
              </h2>
            </div>
            <blockquote>
              <p class="reviews__cardDescription">
                ${user2.review}
              </p>
            </blockquote>
          </article>

          <article class="reviews__cards reviews__cards--three">
            <div class="reviews__cardWrapper">
              <img
                src="${user3.image}"
                alt="${user3.fullName}"
                class="reviews__cardsImg"
              />
              <h2 class="reviews__name">
                <span class="reviews__subtitle">${user3.fullName}</span>
                <span class="reviews__cardVerify">${user3.verified}</span>
              </h2>
            </div>
            <blockquote>
              <p class="reviews__cardDescription">
                ${user3.review}
              </p>
            </blockquote>
          </article>
    `;
    reviews.appendChild(div);
  }
}

export default UI;
