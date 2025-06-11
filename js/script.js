document.addEventListener("DOMContentLoaded", () => {
  const games = [
    { title: "PUBG", image: "images/PUBG.jpg", price: "Free" },
    { title: "Valorant", image: "images/Valorant.jpg", price: "Free" },
    { title: "Apex Legends", image: "images/Apex Legends.jpg", price: "Free" },
    { title: "Minecraft", image: "images/Minecraft.jpg", price: 5499 },
    { title: "Black Myth Wukong", image: "images/Black Myth Wukong.jpg", price: 5999 },
    { title: "Elden Ring", image: "images/Elden Ring.jpg", price: 5999 },
    { title: "God Of War", image: "images/God of War.jpg", price: 1999 },
    { title: "Red Dead Redemption II", image: "images/RDR2.jpg", price: 2499 },
    { title: "Hitman III", image: "images/Hitman 3.jpg", price: 1899 },
    { title: "COD: Black OPS", image: "images/COD BLACK OPS.jpg", price: 2199 },
    { title: "Cricket 24", image: "images/Cricket 24.jpg", price: 1599 },
    { title: "F1 25", image: "images/F1 25.jpg", price: 2999 },
    { title: "Forza Horizon 5", image: "images/Forza.jpg", price: 2799 },
    { title: "GTA V", image: "images/GTA V.jpg", price: 1499 },
    { title: "Cyberpunk 2077", image: "images/Cyberpunk.jpg", price: 1799 },
    { title: "GTA Vice City", image: "images/GTA VC.jpg", price: 799 },
    { title: "GTA SanAndreas", image: "images/GTA SA.jpg", price: 899 }
  ];

  const comingSoonGames = [
    { title: "GTA VI", image: "images/GTA VI.png" },
    { title: "Avatar: The Last Airbender", image: "images/Avatar.jpg" },
    { title: "Hitman: World of Assassination - Signature Edition", image: "images/Hitman World of Assassination - Signature Edition.png" }
  ];

  const gameContainer = document.getElementById("gameContainer");
  const comingSoonContainer = document.getElementById("comingSoonContainer");

  function displayGames(filter = "") {
    gameContainer.innerHTML = "";
    games
      .filter(game => game.title.toLowerCase().includes(filter.toLowerCase()))
      .forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
          <img src="${game.image}" alt="${game.title}" class="game-image" />
          <h3>${game.title}</h3>
          <p class="game-price">${typeof game.price === "number" ? `₹${game.price}` : game.price}</p>
          <button class="add-library-btn">Add to Library</button>
        `;

        const addLibraryBtn = card.querySelector(".add-library-btn");

        addLibraryBtn.addEventListener("click", () => addToLibrary(game));

        gameContainer.appendChild(card);
      });
  }

  function displayComingSoonGames() {
    comingSoonContainer.innerHTML = "";
    comingSoonGames.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card coming-soon-card";
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" class="game-image" />
        <h3>${game.title}</h3>
        <span class="coming-soon-label">Coming Soon</span>
      `;
      comingSoonContainer.appendChild(card);
    });
  }

  function addToLibrary(game) {
    let library = JSON.parse(localStorage.getItem('library')) || [];
    const exists = library.some(g => g.title.toLowerCase() === game.title.toLowerCase());

    if (!exists) {
      library.push(game);
      localStorage.setItem('library', JSON.stringify(library));
      alert(`${game.title} added to your library!`);
    } else {
      alert(`${game.title} is already in your library!`);
    }

    window.location.href = "library.html";
  }

  displayGames();
  displayComingSoonGames();
});
