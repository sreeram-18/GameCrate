document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("libraryContainer");
  let library = JSON.parse(localStorage.getItem("library")) || [];

  function render() {
    container.innerHTML = "";
    library.forEach((game, index) => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img src="${game.image}" class="game-image" />
        <h3>${game.title}</h3>
        <button onclick="installGame('${game.title}')">Install</button>
        <button onclick="removeGame(${index})">Remove</button>
      `;
      container.appendChild(card);
    });
  }

  window.removeGame = (index) => {
    const confirmDelete = confirm(`Are you sure you want to remove "${library[index].title}" from your Library?`);
    if (confirmDelete) {
      library.splice(index, 1);
      localStorage.setItem("library", JSON.stringify(library));
      render();
    }
};


  window.installGame = (title) => {
    alert(`Installing ${title}...`);
  };

  render();
});
