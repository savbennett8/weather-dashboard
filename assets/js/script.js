//searched city needs to be displayed in 'subtitle' h2 element
//daily forecast displayed in 'daily-container' div element
//outlook forecast displayed in 'outlook-container' div element

//today's date needs to be displayed in 'date' span element using moment.js
let dateEl = document.querySelector("#date");
let todaysDate = moment().format("MM/DD/YYYY")
dateEl.textContent = todaysDate;

let searchBtnEl = document.querySelector(".search-btn")
let cityNameEl = document.querySelector("#city-name");
let cityInputEl = document.querySelector("#city");
let historyList = document.querySelector("#history-list");

//I need a dynamically created list for search history
let historyMaker = function() {
    let listItem = document.createElement("li")
    listItem.addClass("history-list");
    listItem.textContent(cityInputEl.value);
    historyList.appendChild(listItem);

}


//fetch api for daily forecast from openweathermap
/*let getWeatherToday = function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f569c1389ce0a742790e8dd21053476d")
    .then(function(city) {
        return city.json();
    })
    .then(function(city) {
        console.log(data);
    })
}*/

searchBtnEl.addEventListener("click", function() {
    //append city name to 'city-name' h2 element at top of page
    cityNameEl.textContent = cityInputEl.value;
    historyMaker();
});

/*
//fetch api for 5-day forecast from openweathermap
let getWeatherOutlook = function(city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "f569c1389ce0a742790e8dd21053476d")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.weather);
    })
}

let searchSubmitHandler = function(event) {
    event.preventDefault();
    let city = cityInputEl.value.trim();

    if (city) {
        getWeatherToday(city);
        getWeatherOutlook(city);
        searchHistory.push(city);
        localStorage.setitem("city", searchHistory);
        saveCityInput(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city.");
    }
}

/*let saveCityInput = function(city) {
    let text = city;
    
}*/

