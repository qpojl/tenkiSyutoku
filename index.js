"use strict"

//fetch,async/awaitをつかって簡単に天気を表示するアプリを作ってみる。
//APIはOpen-Meteoを用いる

//要件定義
//東京の天気が表示される

main();

async function main (){
    const city = await getCity();
    const weatherInfo = await fetchWeather(city);
    const view = await createView(weatherInfo);
    displayView(view); 
    
}



function fetchWeather(city){
    return fetch(city)
    .then(response => {
        return response.json();
    });
}

function getCity(){
    const tokyo = "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,precipitation_probability,rain&current=temperature_2m,rain&timezone=Asia%2FTokyo";
    return tokyo;
}


function createView(weatherInfo){
    return weatherInfo;
}

function displayView (view){
    console.log(view);
}