let movieContainer = document.getElementById('movies');
      let movieUrl = './Movies.json';

      fetch(movieUrl)
        .then((response) => {
          if (!response.ok) {
            console.log('Movies not fetched');
          }
          return response.json();
        })
        .then((data) => {
          let moviesDetails = data.movies;
          for (let i = 0; i < moviesDetails.length; i++) {
            movieContainer.innerHTML += `
            <div class="movie-card">
                <img src="${moviesDetails[i].image_url}" class="movie-image" alt="${moviesDetails[i].title}">
                <div class="movie-content">
                    <h3>${moviesDetails[i].title}</h3>
                    <button class="watch-now-btn" onclick="goToMovieDetails(${i})">Watch Now</button>
                </div>
            </div>
          `;
          }
        });


        const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchContent = document.getElementById('searchContent');

let input = '';

searchInput.addEventListener('change', (e) => {
  input = e.target.value;
});

searchButton.addEventListener('click', () => {
  console.log(input);

  // Clear input field and previous search results
  document.querySelector('input[type="search"]').value = '';
  searchContent.innerHTML = '';

  let searchResult = [];

  fetch(movieUrl)
    .then((response) => {
      if (!response.ok) {
        console.log('Movies not fetched');
        throw new Error('Failed to fetch movies');
      }
      return response.json();
    })
    .then((data) => {
      let moviesDetails = data.movies;
      

      moviesDetails.forEach((movie) => {
        if (movie.title.toLowerCase().includes(input.toLowerCase())) {
          searchResult.push(movie);
        //   console.log(movie)
        }
      });

      if (searchResult.length > 0) {
        for (let i = 0; i < searchResult.length; i++) {
          const div = document.createElement('div');
          div.textContent = searchResult[i].title;

          div.id = 'selected'
          searchContent.appendChild(div);
          div.onclick = () => selectSearch(searchResult[i]);
        }
      } else {
        searchContent.textContent = 'No results found.';
      }

      function selectSearch(props){
        goToMovieDetails(moviesDetails.indexOf(props))
        
        


    }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    

});


     




      // Function to save the selected movie index in localStorage
      function goToMovieDetails(index) {
        localStorage.setItem('movieIndex', index); // Save the movie index to localStorage
        window.location.href = 'details.html'; // Redirect to the movie details page
      }