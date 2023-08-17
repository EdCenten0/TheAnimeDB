function navigation() {
  if (location.hash.startsWith("#trends")) {
    animeRecomendations();
  } else if (location.hash.startsWith("#anime=")) {
    animeDetails();
  } else if (location.hash.startsWith("#search=")) {
    searchAnimeView();
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
  headerPrincipal.classList.remove("searchHeader");
  mainContentDescription.classList.add("inactive");
  contentAside.classList.add("inactive");
  contentSubTitle.classList.add("inactive");
  contentInfo.classList.add("inactive");
  categoryPreviewContainer.classList.add("inactive");
  animeTrendsList.classList.remove("inactive");
  animeTrendsGallery.classList.add("inactive");
  footer.classList.remove("inactive");
  getAnimetrends();
}

function animeRecomendations() {
  body.classList.add("figures1");
  body.classList.remove("figures2");
  returnArrow.classList.remove("inactive");
  headerPrincipal.classList.add("inactive");
  mainContentDescription.classList.add("inactive");
  contentAside.classList.add("inactive");
  contentSubTitle.classList.add("inactive");
  contentInfo.classList.add("inactive");
  categoryPreviewContainer.classList.add("inactive");
  animeTrendsList.classList.add("inactive");
  animeTrendsGallery.classList.remove("inactive");
  footer.classList.remove("inactive");
  console.log(returnArrow);

  getRecommendedAnimes();
}

function animeDetails() {
  body.classList.remove("figures1");
  body.classList.add("figures1");
  returnArrow.classList.remove("inactive");
  headerPrincipal.classList.add("inactive");
  mainContentDescription.classList.remove("inactive");
  contentAside.classList.remove("inactive");
  contentSubTitle.classList.remove("inactive");
  contentInfo.classList.remove("inactive");
  categoryPreviewContainer.classList.remove("inactive");
  animeTrendsList.classList.remove("inactive");
  animeTrendsGallery.classList.add("inactive");
  footer.classList.remove("inactive");
  console.log("Si");

  let [_, animeId] = location.hash.split("=");
  getAnimeDetailsById(animeId);
  getAnimeCharacters(animeId);
}

function searchAnimeView() {
  body.classList.add("figures1");
  body.classList.remove("figures2");
  returnArrow.classList.remove("inactive");
  headerPrincipal.classList.remove("inactive");
  headerPrincipal.classList.add("searchHeader");
  mainContentDescription.classList.add("inactive");
  contentAside.classList.add("inactive");
  contentSubTitle.classList.add("inactive");
  contentInfo.classList.add("inactive");
  categoryPreviewContainer.classList.add("inactive");
  animeTrendsList.classList.add("inactive");
  animeTrendsGallery.classList.remove("inactive");
  footer.classList.remove("inactive");

  let [_, query] = location.hash.split("=");

  getAnimeBySearch(query);
}

animeTrendsListButton.addEventListener("click", () => {
  location.hash = "#trends";
});

animeTrendsCardImage.addEventListener("click", () => {
  location.hash = "#anime=";
});

returnArrow.addEventListener("click", () => {
  history.back();
  location.hash = "#home";
});

headerSearchButton.addEventListener("click", () => {
  location.hash = "#search=" + headerInput.value;
});

window.addEventListener("hashchange", navigation, false);
window.addEventListener("DOMContentLoaded", navigation, false);
