const API_KEY = "aa7b9386aea6402f6b5f06d2db012668";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}
//aa7b9386aea6402f6b5f06d2db012668

//api.openweathermap.org/data/2.5/weather?lat=37.7533672&lon=127.1169957&appid=aa7b9386aea6402f6b5f06d2db012668&units=metric



function onGeoError(){
    alert("Can't Find You. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
