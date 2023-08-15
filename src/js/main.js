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
