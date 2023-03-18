async function receaveWeather(city) {
    const apiKey = 'aae97860de78632108ecc73036d6d17c';


    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    // console.log(data);
    // let temp = data.main[0].temp;
    // let pressure = data.main[0].pressure;
    // let weather = data.weather[0].main;

    // if (response.status === 400 || response.status === 404) {
    //     console.log("Bad Request");
    //     return;
    // } else {
        console.log(data);
    
        let temp = data.main[0].temp;
        let pressure = data.main[0].pressure;
        let weather = data.weather[0].main;
    
        localStorage.setItem("cityName", `${data.name}`);
        console.log(localStorage.getItem("cityName"));

        let cityNameResult = document.querySelector(".city-name__name");
        cityNameResult.innerHTML = city;
        console.log(cityNameResult);
        let tempResult = document.querySelector(".city-name__temperature");
        tempResult.innerHTML = temp;

        // закончил на добавлении элементов в дом


    // }

}
receaveWeather()

// setInterval( () => {
//     receaveWeather(); // reset
// }, 1000);

function valueFromInput(object) {
    object.addEventListener('input', () => {
        return (object.value);
    })
}

let cityName = document.querySelector('.city-name__input');


cityName.addEventListener('input', () => {
    cityNameValue = cityName.value;
    receaveWeather(cityNameValue);
})