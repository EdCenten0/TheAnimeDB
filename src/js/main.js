const api = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

async function creteAnimeList(animes, container, quantity) {
  container.innerHTML = "";

  animes.forEach((anime) => {
    const animeContainer = document.createElement("div");
    animeContainer.classList.add("card-container");
    animeContainer.addEventListener("click", () => {
      location.hash = "#anime=";
      // + anime.id;
    });

    const animeImg = document.createElement("img");
    animeImg.classList.add("cardImage");
    animeImg.setAttribute("alt", anime.title);
    animeImg.setAttribute("src", anime.jpg.image_url);

    animeContainer.appendChild(animeImg);
    container.appendChild(animeContainer);
  });
}

async function getAnimetrends() {
  const res = await api("top/anime", {
    params: {
      type: "tv",
      filter: "airing",
      rating: "g",
      sfw: true,
    },
  });

  const trendingAnimes = res.data;
  return trendingAnimes;
}
