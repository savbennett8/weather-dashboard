let cityInputEl = document.querySelector("#city");
let searchBtnEl = document.querySelector(".search-btn");
let searchHistory = document.querySelector(".history-list");

let apiURL = function() {
    let userInput = document.querySelector("#city").value;
    fetch("api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=f569c1389ce0a742790e8dd21053476d")
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.data[0]);
        //searchSubmitHandler();
    })
}

let searchSubmitHandler = function(event) {
    event.preventDefault();
    let city = cityInputEl.value.trim();

    if (city) {
        getWeatherToday(city);
        searchHistory.push(city);
        localStorage.setitem("city", searchHistory);
        saveCityInput(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city.");
    }
}

let saveCityInput = function(city) {
    let text = city;
    
}

searchBtnEl.addEventListener("click", searchSubmitHandler);