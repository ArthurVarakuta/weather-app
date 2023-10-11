// 9478e11105466109c3b8ee83ffaf1798
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api_key = "9478e11105466109c3b8ee83ffaf1798";
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let search_box = document.querySelector('.search input');
let search_button = document.querySelector('.search button');
let wind_speed_local = document.querySelector(".wind_speed_local");
let humidity_local = document.querySelector(".humidity_local");
let lang_container = document.querySelector(".lang-change")
let error_container = document.querySelector(".error-container");
let default_container = document.querySelector(".default-container");
let weather_container = document.querySelector(".weather-container");
let language = 'ru';



async function check_weather(city_input, language) {

    default_container.classList.add("hidden");
    let response = await fetch(api_url + city_input + `&appid=${api_key}`+ "&lang=" + language );
    let data = await response.json();
    if (data.cod==="404"||data.cod==="400"){
        weather_container.classList.add("hidden");
        error_container.classList.remove("hidden")
    }
    else{
        weather_container.classList.remove("hidden");
        error_container.classList.add("hidden")
        city.innerHTML = data.name;
        temp.innerHTML = Math.floor(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";
    }
}


search_button.addEventListener('click', (e) => {
    check_weather(search_box.value, language);
})
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        check_weather(search_box.value, language);

    }
});


lang_container.addEventListener("click", function (e) {
    if (e.target.classList.contains("ru")) {
        language = "ru";
        humidity_local.innerHTML = "Влажность";
        wind_speed_local.innerHTML = "Скорость ветра";
    } else if (e.target.classList.contains("en")) {
        language = "en";
        humidity_local.innerHTML = "Humidity";
        wind_speed_local.innerHTML = "Wind speed";
    }else if (e.target.classList.contains("uk")){
        language="uk";
        humidity_local.innerHTML = "Вологість";
        wind_speed_local.innerHTML = "Швидкість вітру";
    }
})

