function getWeather() {
    fetch('api.openweathermap.org/data/2.5/weather?q=Boston&appid=0c43b8857083042c87517c926a41ff4d')
    .then(res => console.log(JSON.parse(res)))
}

getWeather()