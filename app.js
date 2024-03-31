const apiKey = '28536f1df07c30136aae125c22711ded';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const contryElement = document.querySelector('#country');
const descriptionElement = document.querySelector("#description");
const messageElement = document.querySelector("#message")

const cameroonCities = {
    "douala": {
      "latitude": 4.0511,
      "longitude": 9.7679,
      "countryCode": "CM"
    },
    "yaounde": {
      "latitude": 3.848,
      "longitude": 11.5021,
      "countryCode": "CM"
    },
    "bamenda": {
      "latitude": 5.9652,
      "longitude": 10.1597,
      "countryCode": "CM"
    },
    "bafoussam": {
      "latitude": 5.475,
      "longitude": 10.4179,
      "countryCode": "CM"
    },
    "garoua": {
      "latitude": 9.3086,
      "longitude": 13.3977,
      "countryCode": "CM"
    },
    "maroua": {
      "latitude": 10.5954,
      "longitude": 14.3229,
      "countryCode": "CM"
    },
    "bertoua": {
      "latitude": 4.5775,
      "longitude": 13.6846,
      "countryCode": "CM"
    },
    "limbe": {
      "latitude": 4.012,
      "longitude": 9.2145,
      "countryCode": "CM"
    },
    "kumba": {
      "latitude": 4.6363,
      "longitude": 9.4445,
      "countryCode": "CM"
    },
    "ebolowa": {
      "latitude": 2.9144,
      "longitude": 11.1581,
      "countryCode": "CM"
    },
    "sangmelima": {
      "latitude": 2.9337,
      "longitude": 11.9833,
      "countryCode": "CM"
    },
    "kribi": {
      "latitude": 2.9475,
      "longitude": 9.9167,
      "countryCode": "CM"
    },
    "tiko": {
      "latitude": 4.0782,
      "longitude": 9.3607,
      "countryCode": "CM"
    },
    "mbouda": {
      "latitude": 5.6294,
      "longitude": 10.2566,
      "countryCode": "CM"
    },
    "ngaoundere": {
      "latitude": 7.3167,
      "longitude": 13.5833,
      "countryCode": "CM"
    },
    "buea": {
      "latitude": 4.155,
      "longitude": 9.2314,
      "countryCode": "CM"
    },
    "kumbo": {
      "latitude": 6.2072,
      "longitude": 10.6879,
      "countryCode": "CM"
    },
    "mokolo": {
      "latitude": 10.7429,
      "longitude": 13.8025,
      "countryCode": "CM"
    },
    "nkongsamba": {
      "latitude": 4.9608,
      "longitude": 9.9429,
      "countryCode": "CM"
    },
    "bafia": {
      "latitude": 4.75,
      "longitude": 11.2333,
      "countryCode": "CM"
    },
    "maroua": {
      "latitude": 10.5954,
      "longitude": 14.3229,
      "countryCode": "CM"
    },
    "nanga-eboko": {
      "latitude": 4.6833,
      "longitude": 12.3667,
      "countryCode": "CM"
    },
    "meiganga": {
      "latitude": 6.5333,
      "longitude": 14.3,
      "countryCode": "CM"
    },
    "melong": {
      "latitude": 5.1167,
      "longitude": 9.95,
      "countryCode": "CM"
    },
    "ebolowa": {
      "latitude": 2.9167,
      "longitude": 11.1667,
      "countryCode": "CM"
    },
    "batouri": {
      "latitude": 4.4333,
      "longitude": 14.3667,
      "countryCode": "CM"
    },
    "bali": {
      "latitude": 5.8833,
      "longitude": 10.0667,
      "countryCode": "CM"
    },
    "eseka": {
      "latitude": 3.65,
      "longitude": 10.7667,
      "countryCode": "CM"
    },
    "tibati": {
      "latitude": 6.4667,
      "longitude": 12.6333,
      "countryCode": "CM"
    },
    "penja": {
      "latitude": 4.6333,
      "longitude": 9.8,
      "countryCode": "CM"
    },
    "mutengene": {
      "latitude": 4.0833,
      "longitude": 9.3167,
      "countryCode": "CM"
    },
    "fontem": {
      "latitude": 5.4667,
      "longitude": 9.8833,
      "countryCode": "CM"
    },
    "idr": {
      "latitude": 4.5,
      "longitude": 9.5833,
      "countryCode": "CM"
    },
    "manjo": {
      "latitude": 5.3,
      "longitude": 9.3,
      "countryCode": "CM"
    },
    "bangangte": {
      "latitude": 5.15,
      "longitude": 10.5,
      "countryCode": "CM"
    },
    "muyuka": {
      "latitude": 4.35,
      "longitude": 9.4333,
      "countryCode": "CM"
    },
    "tiko": {
      "latitude": 4.0782,
      "longitude": 9.3607,
      "countryCode": "CM"
    },
    "bogo": {
      "latitude": 10.7364,
      "longitude": 14.6133,
      "countryCode": "CM"
    },
    "obala": {
      "latitude": 3.5167,
      "longitude": 11.5,
      "countryCode": "CM"
    },
    "kousseri": {
      "latitude": 12.0769,
      "longitude": 15.0306,
      "countryCode": "CM"
    },
    "guidiguis": {
      "latitude": 10.6462,
      "longitude": 14.3456,
      "countryCode": "CM"
    },
    "dizangue": {
      "latitude": 4.3833,
      "longitude": 9.8,
      "countryCode": "CM"
    },
    "eyumojock": {
      "latitude": 5.2,
      "longitude": 9.8833,
      "countryCode": "CM"
    },
    "doume": {
      "latitude": 4.25,
      "longitude": 13.4333,
      "countryCode": "CM"
    },
    "ndikinimeki": {
      "latitude": 4.9667,
      "longitude": 12.3667,
      "countryCode": "CM"
    }
  };
  

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    } else {
        messageElement.textContent = "🌜 Veuillez entrer le nom d'une ville pour rechercher la météo"
    }
});

function fetchWeather(location) {

    if (cameroonCities.hasOwnProperty(location.toLowerCase())) {
        const cityData = cameroonCities[location.toLowerCase()];
        const latitude = cityData.latitude;
        const longitude = cityData.longitude;
        const countryCode = cityData.countryCode;

        const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&lang=fr&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                messageElement.textContent = "";
                locationElement.textContent = data.name;
                temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
                contryElement.textContent = countryCode
                descriptionElement.textContent = data.weather[0].description
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    } else {
        messageElement.textContent = "🌜 Veuillez entrer le nom d'une ville située au Cameroun.";
        locationElement.textContent = "";
        temperatureElement.textContent = "";
        contryElement.textContent = "";
        descriptionElement.textContent = "";
    }
}