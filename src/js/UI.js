class UI {
  renderDescription(e) {
    const root = document.getElementById("root"),
      div = document.createElement("div");
    div.className = "reviews__description";
    div.innerHTML = `
          <div class="reviews__text">
            <h1 class="reviews__title">
              10,000+ of our user love our products.
            </h1>

            <p class="reviews__paragraph">
              We only provide great products combined with excellent customer
              service. See what our satisfied customer are saying about our
              service.
            </p>
          </div>

          <div class="reviews__ratesWrap">
            <div class="reviews__rate reviews__rate--first">
              <div class="reviews__rateStars">
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
              </div>
              <span class="reviews__rateDescription"
                >Rated 5 Stars in Reviews</span
              >
            </div>

            <div class="reviews__rate reviews__rate--second">
              <div class="reviews__rateStars">
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
              </div>
              <span class="reviews__rateDescription"
                >Rated 5 Stars in Report Guru</span
              >
            </div>

            <div class="reviews__rate reviews__rate--third">
              <div class="reviews__rateStars">
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
                <img
                  src="./imges/icon-star.svg"
                  alt="icon-star"
                  class="reviews__rateImg"
                />
              </div>
              <span class="reviews__rateDescription"
                >Rated 5 Stars in BestTech</span
              >
            </div>
          </div>
    `;
    root.appendChild(div);
  }

  renderArtticles(e) {
    const root = document.getElementById("root"),
      div = document.createElement("div");
    div.className = "reviews__testimonials";
    div.innerHTML = `
          <article class="reviews__cards reviews__cards--one">
            <div class="reviews__cardWrapper reviews__cardWrapper--one">
              <img
                src="./imges/image-colton.jpg"
                alt="image-colton"
                class="reviews__cardsImg"
              />
              <h2 class="reviews__name">
                <span class="reviews__subtitle">Colton Smith</span>
                <span class="reviews__cardVerify">Verified Buyer</span>
              </h2>
            </div>
            <blockquote>
              <p class="reviews__cardDescription">
                We needed the same printed design as the one we had ordered a
                week prior. Not only did they find the original order, but we
                also received it in time. Exellent!
              </p>
            </blockquote>
          </article>

          <article class="reviews__cards reviews__cards--two">
            <div class="reviews__cardWrapper">
              <img
                src="./imges/image-irene.jpg"
                alt="image-colton"
                class="reviews__cardsImg"
              />
              <h2 class="reviews__name">
                <span class="reviews__subtitle">Irene Roberts</span>
                <span class="reviews__cardVerify">Verified Buyer</span>
              </h2>
            </div>
            <blockquote>
              <p class="reviews__cardDescription">
                Customer service is always excellent and very quick turn around.
                Completely delighted with the simplicity of the purchase and the
                speed of delivery.
              </p>
            </blockquote>
          </article>

          <article class="reviews__cards reviews__cards--three">
            <div class="reviews__cardWrapper">
              <img
                src="./imges/image-anne.jpg"
                alt="image-anne"
                class="reviews__cardsImg"
              />
              <h2 class="reviews__name">
                <span class="reviews__subtitle">Anne Wallace</span>
                <span class="reviews__cardVerify">Verified Buyer</span>
              </h2>
            </div>
            <blockquote>
              <p class="reviews__cardDescription">
                Put an order with this company and can only praise them for the
                very high standard. Will definitely use them again and recommend
                them to everyone!
              </p>
            </blockquote>
          </article>
    `;
    root.appendChild(div);
  }
}
