let next = document.querySelector('.next');
let prev = document.querySelector('.prev');




function changeNext() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0]);
}

function changePrev() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(items[items.length - 1]);
}

next.addEventListener('click', changeNext);
setInterval(()=>{
  changeNext()
},3000)

prev.addEventListener('click', changePrev);


document.addEventListener("DOMContentLoaded", function () {
  // Get all explore buttons and genre items
  const exploreButtons = document.querySelectorAll(".explore-button");
  const genreItems = document.querySelectorAll(".genre-item");

  exploreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const genreItem = button.closest(".genre-item");
      const genreId = genreItem.querySelector("img").alt.replace(/\s+/g, "-").toLowerCase() + "-container";
      const expandedItems = document.getElementById(genreId);

      // Hide all other expanded items
      genreItems.forEach((item) => {
        const otherGenreId = item.querySelector("img").alt.replace(/\s+/g, "-").toLowerCase() + "-container";
        const otherExpandedItems = document.getElementById(otherGenreId);
        const otherButton = item.querySelector(".explore-button");

        if (otherExpandedItems && otherGenreId !== genreId) {
          otherExpandedItems.classList.add("hidden");
          otherButton.textContent = "Explore more";
          item.style.display = "flex";
        }
      });

      // Toggle visibility for the clicked genre item
      if (expandedItems) {
        if (expandedItems.classList.contains("hidden")) {
          expandedItems.classList.remove("hidden");
          button.textContent = "Show less";
          genreItems.forEach((item) => {
            if (item !== genreItem) {
              item.style.display = "none";
            }
          });
        } else {
          expandedItems.classList.add("hidden");
          button.textContent = "Explore more";
          genreItems.forEach((item) => {
            item.style.display = "flex";
          });
        }
      }
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {
  // Get all explore buttons and genre items
  const exploreButtons = document.querySelectorAll(".explore-button");
  const genreItems = document.querySelectorAll(".genre-item");

  exploreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const genreItem = button.closest(".genre-item");
      const genreId = genreItem.querySelector("img").alt.replace(/\s+/g, "-").toLowerCase() + "-container";
      const expandedItems = document.getElementById(genreId);

      // Hide all other expanded items
      genreItems.forEach((item) => {
        const otherGenreId = item.querySelector("img").alt.replace(/\s+/g, "-").toLowerCase() + "-container";
        const otherExpandedItems = document.getElementById(otherGenreId);
        const otherButton = item.querySelector(".explore-button");

        if (otherExpandedItems && otherGenreId !== genreId) {
          otherExpandedItems.classList.add("hidden");
          otherButton.textContent = "Explore more";
          item.style.display = "flex";
        }
      });

      // Toggle visibility for the clicked genre item
      if (expandedItems) {
        if (expandedItems.classList.contains("hidden")) {
          expandedItems.classList.remove("hidden");
          button.textContent = "Show less";
          genreItems.forEach((item) => {
            if (item !== genreItem) {
              item.style.display = "none";
            }
          });
        } else {
          expandedItems.classList.add("hidden");
          button.textContent = "Explore more";
          genreItems.forEach((item) => {
            item.style.display = "flex";
          });
        }
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Get all explore buttons
  const exploreButtons = document.querySelectorAll(".explore-button");
  const genreItems = document.querySelectorAll(".genre-item");
  exploreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      // Get the genre container (parent div) and its related expanded-items container
      const genreItem = button.closest(".genre-item");
      const genreId = genreItem.querySelector("img").alt.toLowerCase() + "-container";
      const expandedItems = document.getElementById(genreId);
      // Hide all other expanded items and reset their buttons
      genreItems.forEach((item) => {
        const otherGenreId = item.querySelector("img").alt.toLowerCase() + "-container";
        const otherExpandedItems = document.getElementById(otherGenreId);
        const otherButton = item.querySelector(".explore-button");
        if (otherExpandedItems && otherGenreId !== genreId) {
          otherExpandedItems.classList.add("hidden");
          otherButton.textContent = "Explore more";
          item.style.display = "flex"; // Show other items
        }
      });
      // Toggle visibility and button text for the clicked genre item
      if (expandedItems) {
        if (expandedItems.classList.contains("hidden")) {
          expandedItems.classList.remove("hidden");
          button.textContent = "Show less";
          genreItems.forEach((item) => {
            if (item !== genreItem) {
              item.style.display = "none"; // Hide other items
            }
          });
        } else {
          expandedItems.classList.add("hidden");
          button.textContent = "Explore more";
          genreItems.forEach((item) => {
            item.style.display = "flex"; // Show all items
          });
        }
      }
    });
  });
});
    


const renderByGenres = (movies) => {
  const renderedMovies = new Set(); 
  movies.forEach((movie) => {
    if (parseFloat(movie.rating) >= 8.0) {
      movie.genre.forEach((genre) => {
        const genreContainer = document.getElementById(`${genre.toLowerCase()}-container`);
        if (genreContainer && !renderedMovies.has(movie.name)) {
          const buttonLabel = loggedInUserId ?  "More Info" : "More info";
          const buttonLink = `./pages/movie-details.html?name=${encodeURIComponent(movie.name)}`;
          const buttonHTML = `<a href="${buttonLink}" class="btn">${buttonLabel}</a>`;
          const movieHtml = `
            <div class="movie-item">
              <img src="${movie.image}" alt="${movie.name} poster">
              <h1 class="view">${movie.name}</h1>
              <h2><strong>Rating: </strong>${movie.rating}</h2>
              <p><span>Genre:</span> ${genre}</p>
              <div class="buttons">
              ${buttonHTML}
             <i class="fa-regular fa-heart watch-later-btn " data-movie-id="${movie.name}" ></i>
             </div>
            </div>`;
            genreContainer.insertAdjacentHTML("beforeend", movieHtml);
          renderedMovies.add(movie.name); // Mark as rendered
        }
      });
    }
  });
};




