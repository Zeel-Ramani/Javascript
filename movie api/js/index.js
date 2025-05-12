document.getElementById("searchButton").addEventListener("click", () => {
    const title = document.getElementById("title").value.trim();
    const movieDetailsDiv = document.getElementById("movieDetails");

    // Clear previous results
    movieDetailsDiv.innerHTML = "";

    if (!title) {
        movieDetailsDiv.innerHTML = "<p>Please enter a movie title.</p>";
        return;
    }

    const apiKey = "95987614"; // Replace with your OMDB API key
    const url = ` http://www.omdbapi.com/?i=tt3896198&t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "True") {
                movieDetailsDiv.innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <img src="${data.Poster}" alt="${data.Title} Poster">
                `;
            } else {
                movieDetailsDiv.innerHTML = `<p>Movie not found. Please try another title.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching movie data:", error);
            movieDetailsDiv.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
        });
});