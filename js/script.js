async function receaveWeather(city) {
    const apiKey = 'aae97860de78632108ecc73036d6d17c';

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    // let temp = data.main[0].temp;
    // let pressure = data.main[0].pressure;
    // let weather = data.weather[0].main;

    if (response.status === 400 || response.status === 404) {
        console.log("Bad Request");
        return;
    } else {
        const data = await response.json();
        console.log(data);
        // receaved data from api
        let temperature = Math.round(data.main.temp);
        let image = '<img src="http://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';
        let weather = data.weather[0].main;
        // add receaved data from api to local storage
        localStorage.setItem(`temp${city}`, temperature);
        localStorage.setItem(`weather${city}`, weather);
        localStorage.setItem(`image${city}`, image);

        let receaveWeatherFromLS = localStorage.getItem(`weather${city}`);
        let receaveTemperatureFromLs = localStorage.getItem(`temp${city}`);
        let receaveWeatherImageFromLS = localStorage.getItem(`image${city}`);

         // set receaved data from api to user view
        document.querySelector(".city-name__image").innerHTML = image;
        document.querySelector(".city-name__weather").innerHTML = receaveWeatherFromLS;
        document.querySelector(".city-name__temperature").innerHTML = `${receaveTemperatureFromLs}°C`;


        setInterval(() => {
            receaveWeather(cityNameValue);
            localStorage.clear();
        }, 7.2e+6);
    }
    // 7.2e+6
}


function valueFromInput(object) {
    object.addEventListener('input', () => {
        return (object.value);
    })
}

let cityName = document.querySelector('.city-name__input');

cityName.addEventListener('input', () => {
    cityNameValue = cityName.value;
    receaveWeather(cityNameValue); // reset

})