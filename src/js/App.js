import user from "./data";
import Description from "./Description";
import UI from "./UI";

window.addEventListener("DOMContentLoaded", () => {
  const colton = new Description(
    user.colton.image,
    user.colton.fullName,
    user.colton.verified,
    user.colton.review
  );

  const irene = new Description(
    user.irene.image,
    user.irene.fullName,
    user.irene.verified,
    user.irene.review
  );

  const anne = new Description(
    user.anne.image,
    user.anne.fullName,
    user.anne.verified,
    user.anne.review
  );

  const ui = new UI();
  ui.render(colton, irene, anne);
});
