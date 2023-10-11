// 9478e11105466109c3b8ee83ffaf1798
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api_key = "9478e11105466109c3b8ee83ffaf1798";
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let city_input = document.querySelector(".city_input");
let search_box = document.querySelector('.search input');
let search_button = document.querySelector('.search button');
let wind_speed_local = document.querySelector(".wind_speed_local");
let humidity_local = document.querySelector(".humidity_local");
let lang_container = document.querySelector(".lang-change")

let language = 'ru';

async function check_weather(city_input, language) {
    if (search_box.value === "") {
        return
    }
    let response = await fetch(api_url + city_input + `&appid=${api_key}`+ "&lang=" + language );
    let data = await response.json();



    if (data.cod==="404"){
        city.innerHTML="PLEASE INPUT CORRECT VALUE"

    }
    else{
        city.innerHTML = data.name;
        temp.innerHTML = Math.floor(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";
        console.log(data);
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





// function toggle_language() {
//     let ru_lang = document.querySelector(".ru");
//     let en_lang = document.querySelector(".en");
//     let ua_lang = document.querySelector(".ua");
//     ru_lang.onclick=()=>{
//         language="ru";
//         humidity_local.innerHTML = "Влажность";
//         wind_speed_local.innerHTML = "Скорость ветра";
//
//         console.log(language)
//
//     }
//     en_lang.onclick=()=>{
//         language="en";
//         humidity_local.innerHTML = "Humidity";
//         wind_speed_local.innerHTML = "Wind speed";
//
//         console.log(language)
//
//     }
//     ua_lang.onclick=()=>{
//         language="uk";
//         humidity_local.innerHTML = "Вологість";
//         wind_speed_local.innerHTML = "Швидкість вітру";
//
//         console.log(language)
//
//     }
// }