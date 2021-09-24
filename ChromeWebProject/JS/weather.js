const API_KEY = "aa7b9386aea6402f6b5f06d2db012668";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   
    
}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;


function onGeoError(){
    alert("Can't Find You. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
