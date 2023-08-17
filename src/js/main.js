const api = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

function generarColorHexadecimalRandom() {
  const letrasHex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letrasHex[Math.floor(Math.random() * 16)];
  }
  return color;
}

async function createAnimeGenericList(animes, container) {
  container.innerHTML = "";
  animeTrendsListTitle.innerText = "Top Animes";
  animeTrendsListButton.classList.remove("inactive");

  animes.forEach((anime) => {
    const animeContainer = document.createElement("div");
    animeContainer.classList.add("card-container");
    animeContainer.addEventListener("click", () => {
      location.hash = "#anime=" + anime.mal_id;
    });

    const animeImg = document.createElement("img");
    animeImg.classList.add("card-image");
    animeImg.setAttribute("alt", anime.title);
    animeImg.setAttribute("src", anime.images.jpg.image_url);

    animeContainer.appendChild(animeImg);
    container.appendChild(animeContainer);
  });
}

async function createAnimeGallery(animes, container) {
  container.innerHTML = "";
  animes.forEach((anime) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("anime-gallery--container");

    cardContainer.addEventListener("click", () => {
      location.hash = "#anime=" + anime.entry[0].mal_id;
    });

    const animeImg = document.createElement("img");
    animeImg.setAttribute("class", "anime-gallery--container");

    animeImg.setAttribute("src", anime.entry[0].images.jpg.image_url);

    const animeName = document.createElement("p");
    animeName.innerText = anime.entry[0].title;

    cardContainer.append(animeImg, animeName);

    container.appendChild(cardContainer);
  });
}

async function setAnimeDetails(anime) {
  // anime.forEach((anime) => {

  contentAsideImg.innerHTML = "";
  contentTitle.innerHTML = "";
  contentSubTitle.innerHTML = "";
  contentInfo.innerHTML = "";

  contentAsideImg.setAttribute("src", anime.images.webp.large_image_url);
  contentAside.setAttribute("alt", anime.title);
  contentTitle.innerText = anime.title;
  contentSubTitle.innerText = "Produced by " + anime.producers[0].name;
  contentInfo.innerText = anime.synopsis;
  // });
}

async function setAnimeCategories(genres) {
  genres.forEach((genre) => {
    let colorRandom = generarColorHexadecimalRandom();

    const categoryContainer = document.createElement("div");
    const categoryName = document.createElement("div");
    categoryContainer.classList.add("category-container");
    categoryName.classList.add("category--title");

    categoryName.innerText = genre.name;

    categoryContainer.appendChild(categoryName);
    categoryPreviewList.appendChild(categoryContainer);
  });
}

async function setCharactersByAnime(characters) {
  animeTrendsListCarousel.innerHTML = "";
  characters.forEach((character) => {
    animeTrendsListTitle.innerText = "Characters";
    animeTrendsListButton.classList.add("inactive");

    const card_container = document.createElement("div");
    card_container.classList.add("card-container");
    const characterImg = document.createElement("img");
    characterImg.classList.add("card-image");
    characterImg.setAttribute("src", character.character.images.jpg.image_url);
    characterImg.setAttribute("alt", character.character.name);
    const characterName = document.createElement("p");
    characterName.innerText = character.character.name;

    card_container.appendChild(characterImg);
    card_container.appendChild(characterName);
    console.log(card_container);

    animeTrendsListCarousel.appendChild(card_container);
  });
}

async function getAnimetrends() {
  const { data } = await api("top/anime", {
    params: {
      type: "tv",
      filter: "bypopularity",
      sfw: true,
    },
  });

  const animes = data.data;
  console.log(data);
  createAnimeGenericList(animes, animeTrendsListCarousel);
}

async function getRecommendedAnimes() {
  const { data } = await api("recommendations/anime");
  const animes = data.data;
  createAnimeGallery(animes, animeTrendsGallery);
}

async function getAnimeDetailsById(id) {
  const { data } = await api(`anime/${id}/full`);
  const anime = data.data;

  setAnimeDetails(anime);
  setAnimeCategories(anime.genres);
}

async function getAnimeCharacters(id) {
  const { data } = await api(`anime/${id}/characters`);
  console.log(data.data);

  setCharactersByAnime(data.data);
}
