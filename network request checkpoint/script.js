document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'VOTRE_API_KEY'; // Remplacez par clé API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const location = data.name;
                document.getElementById('weather-result').innerHTML = `
                    <h2>${location}</h2>
                    <p>Température : ${temp}°C</p>
                    <p>Description : ${description}</p>
                `;
            } else {
                document.getElementById('weather-result').innerHTML = `
                    <p>Ville non trouvée. Veuillez réessayer.</p>
                `;
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            document.getElementById('weather-result').innerHTML = `
                <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
            `;
        });
});


