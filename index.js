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
    const tokyo = "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=temperature_2m,weather_code,precipitation_probability&current=temperature_2m,weather_code,precipitation,rain&timezone=Asia%2FTokyo";
    return tokyo;
}

function createView(weatherInfo){
    const weatherCode = weatherInfo.current.weather_code;
    return weatherDescriptions[weatherCode];


}

const weatherDescriptions = {
  0:  "快晴",
  1:  "晴れ",
  2:  "一部曇り",
  3:  "曇り",
  45: "霧",
  48: "霧氷",
  51: "霧雨",
  53: "霧雨",
  55: "霧雨",
  61: "弱い雨",
  63: "雨",
  65: "強い雨",
  71: "弱い雪",
  73: "雪",
  75: "強い雪",
  80: "にわか雨",
  81: "にわか雨",
  82: "にわか雨",
  95: "雷雨",
  99: "雷雨と雹"
};

function displayView (view){
    console.log(view);
    const result = document.getElementById("result");
    result.innerHTML = view;
}