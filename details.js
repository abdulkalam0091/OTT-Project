// movie-details.js

const movieIndex = localStorage.getItem("movieIndex");  // Retrieve the saved movie index from localStorage
const movieUrl = './Movies.json';  // Path to the movie JSON file

if (movieIndex !== null) {
  fetch(movieUrl)
    .then((response) => {
      if (!response.ok) {
        console.error("Failed to load movie data.");
        return;
      }
      return response.json();
    })
    .then((data) => {
      const movie = data.movies[movieIndex]; // Get the movie object based on the index
      const movieDetailContainer = document.getElementById("movie-detail-container");

      // Construct the HTML content to display all details
      movieDetailContainer.innerHTML = `
        <div class="movie-detail">
          <img src="${movie.image_url}" alt="${movie.title}" class="movie-detail-image">
          
          <div class="movie-detail-info">
            <h2>${movie.title} (${movie.release_year})</h2>
            <p><strong>Genre:</strong> ${movie.genre.join(", ")}</p>
            <p><strong>Language:</strong> ${movie.language || 'N/A'}</p>
            <p><strong>Director:</strong> ${movie.director || 'N/A'}</p>
            <p><strong>Plot:</strong> ${movie.plot}</p>

            <!-- Cast List -->
            ${movie.cast && movie.cast.length > 0 ? `
              <h3>Cast:</h3>
              <ul>
                ${movie.cast.map(actor => `<li>${actor}</li>`).join('')}
              </ul>
            ` : ''}

            <!-- Producers -->
            ${movie.producers && movie.producers.length > 0 ? `
              <h3>Producers:</h3>
              <ul>
                ${movie.producers.map(producer => `<li>${producer}</li>`).join('')}
              </ul>
            ` : ''}

            <!-- Production Companies -->
            ${movie.production_companies && movie.production_companies.length > 0 ? `
              <h3>Production Companies:</h3>
              <ul>
                ${movie.production_companies.map(company => `<li>${company}</li>`).join('')}
              </ul>
            ` : ''}

            <!-- Additional Details -->
            ${movie.music ? `<p><strong>Music Composer:</strong> ${movie.music}</p>` : ''}
            ${movie.cinematography ? `<p><strong>Cinematography:</strong> ${movie.cinematography}</p>` : ''}
            ${movie.editing ? `<p><strong>Editing:</strong> ${movie.editing}</p>` : ''}
            ${movie.status ? `<p><strong>Status:</strong> ${movie.status}</p>` : ''}
            ${movie.popularity ? `<p><strong>Popularity:</strong> ${movie.popularity}</p>` : ''}
            ${movie.location ? `<p><strong>Location:</strong> ${movie.location}</p>` : ''}
            ${movie.theme ? `<p><strong>Theme:</strong> ${movie.theme}</p>` : ''}
            ${movie.inspired_by ? `<p><strong>Inspired By:</strong> ${movie.inspired_by}</p>` : ''}
            
            <!-- MCU Sequel -->
            ${movie.mcu_sequel ? `<p><strong>MCU Sequel:</strong> Yes</p>` : ''}
            
            <!-- Previous Movies -->
            ${movie.previous_movies && movie.previous_movies.length > 0 ? `
              <h3>Previous Movies:</h3>
              <ul>
                ${movie.previous_movies.map(prevMovie => `<li>${prevMovie}</li>`).join('')}
              </ul>
            ` : ''}

            <!-- Awards -->
            ${movie.awards && movie.awards.length > 0 ? `
              <h3>Awards:</h3>
              <ul>
                ${movie.awards.map(award => `<li>${award}</li>`).join('')}
              </ul>
            ` : ''}

            <!-- Banned Countries -->
            ${movie.countries_banned && movie.countries_banned.length > 0 ? `
              <h3>Banned Countries:</h3>
              <ul>
                ${movie.countries_banned.map(country => `<li>${country}</li>`).join('')}
              </ul>
            ` : ''}

            <!-- Box Office & Budget -->
            ${movie.box_office ? `<p><strong>Box Office:</strong> ${movie.box_office}</p>` : ''}
            ${movie.budget ? `<p><strong>Budget:</strong> ${movie.budget}</p>` : ''}
            
            <!-- Trailer -->
            ${movie.trailer_url ? `<p><strong>Trailer:</strong> <a href="${movie.trailer_url}" target="_blank">Watch Trailer</a></p>` : ''}
          </div>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Error loading movie details:", error);
    });
} else {
  // If no movie is selected, redirect to home page
  window.location.href = 'index.html';
}
