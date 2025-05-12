
    document.getElementById("city").addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        let city = this.value.trim();
        if (!city) return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76807b89ad89fb673e54355ef97c6617&units=metric`)
          .then(res => res.json())
          .then(data => {
            let output = `
              <h2>${data.name}, ${data.sys.country}</h2>
              <h1>${Math.round(data.main.temp)}°C</h1>
              <p>${data.weather[0].main}</p>
              <p>Humidity: ${data.main.humidity}%</p>
              <p>Wind: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weather").innerHTML = output;
          })
          .catch(() => {
            document.getElementById("weather").innerHTML = "<p style='color:red;'>City not found</p>";
          });
      }
    });