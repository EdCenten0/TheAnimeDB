const api = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

async function createAnimeGenericList(animes, container) {
  container.innerHTML = "";

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
}
