function navigation() {
  if (location.hash.startsWith("#home")) {
    homePage();
  } else if (location.hash.startsWith("#trends")) {
    animeTrends();
  }

  location.hash;
}

function homePage() {
  returnArrow.classList.add("inactive");
  headerPrincipal.classList.remove("inactive");
  mainContentDescription.classList.add("inactive");
  contentAside.classList.add("inactive");
  contentSubTitle.classList.add("inactive");
  contentInfo.classList.add("inactive");
  categoryPreviewContainer.classList.add("inactive");
  genericList.classList.remove("inactive");
  footer.classList.remove("inactive");
}

function animeTrends() {
  returnArrow.classList.remove("inactive");
  headerPrincipal.classList.add("inactive");
  mainContentDescription.classList.add("inactive");
  contentAside.classList.add("inactive");
  contentSubTitle.classList.add("inactive");
  contentInfo.classList.add("inactive");
  categoryPreviewContainer.classList.add("inactive");
  genericList.classList.remove("inactive");
  footer.classList.remove("inactive");
  console.log(returnArrow);
}

genericListButton.addEventListener("click", () => {
  location.hash = "#trends";
});

returnArrow.addEventListener("click", () => {
  history.back();
  location.hash = "#home";
});

window.addEventListener("hashchange", navigation, false);
window.addEventListener("DOMContentLoaded", navigation, false);
