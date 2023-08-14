function navigation() {
  if (location.hash.startsWith("#trends")) {
    animeTrends();
  } else if (location.hash.startsWith("#anime=")) {
    animeDetails();
  } else {
    homePage();
  }

  location.hash;
}

function homePage() {
  body.classList.add("figures1");
  body.classList.remove("figures2");
  returnArrow.classList.add("inactive");
  headerPrincipal.classList.remove("inactive");
  mainContentDescription.classList.add("inactive");
  contentAside.classList.add("inactive");
  contentSubTitle.classList.add("inactive");
  contentInfo.classList.add("inactive");
  categoryPreviewContainer.classList.add("inactive");
  animeTrendsList.classList.remove("inactive");
  footer.classList.remove("inactive");
  getAnimetrends();
}

function animeTrends() {
  body.classList.add("figures1");
  body.classList.remove("figures2");
  returnArrow.classList.remove("inactive");
  headerPrincipal.classList.add("inactive");
  mainContentDescription.classList.add("inactive");
  contentAside.classList.add("inactive");
  contentSubTitle.classList.add("inactive");
  contentInfo.classList.add("inactive");
  categoryPreviewContainer.classList.add("inactive");
  animeTrendsList.classList.remove("inactive");
  footer.classList.remove("inactive");
  console.log(returnArrow);
}

function animeDetails() {
  body.classList.remove("figures1");
  body.classList.add("figures2");
  returnArrow.classList.remove("inactive");
  headerPrincipal.classList.add("inactive");
  mainContentDescription.classList.remove("inactive");
  contentAside.classList.remove("inactive");
  contentSubTitle.classList.remove("inactive");
  contentInfo.classList.remove("inactive");
  categoryPreviewContainer.classList.remove("inactive");
  genericList.classList.remove("inactive");
  footer.classList.remove("inactive");
  console.log("Si");
}

genericListButton.addEventListener("click", () => {
  location.hash = "#trends";
});

animeTrendsCardImage.addEventListener("click", () => {
  location.hash = "#anime=";
});

returnArrow.addEventListener("click", () => {
  history.back();
  location.hash = "#home";
});

window.addEventListener("hashchange", navigation, false);
window.addEventListener("DOMContentLoaded", navigation, false);
