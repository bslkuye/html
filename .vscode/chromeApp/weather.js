const API_KEY = "9f50f4e29c400893ecaa99fa0437d1ab";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} temp: ${data.main.temp}`;
    });
}

function onGerError(){
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGerError);

