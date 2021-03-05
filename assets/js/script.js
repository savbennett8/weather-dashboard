//daily forecast displayed in 'daily-container' div element
//outlook forecast displayed in 'outlook-container' div element

let searchBtnEl = document.querySelector(".search-btn")
let cityNameEl = document.querySelector("#city-name");
let cityInputEl = document.querySelector("#city");
let city = cityInputEl.value
let historyList = document.querySelector("#history-list");

//today's date needs to be displayed in 'date' span element using moment.js
let appendTodaysDate = function() {
    let dateEl = document.querySelector("#date");
    let todaysDate = moment().format("MM/DD/YYYY")
    dateEl.textContent = todaysDate;
}

//I need a dynamically created list for search history
let historyMaker = function() {
    let listItem = document.createElement("li");
    listItem.textContent = cityInputEl.value;

    let listButton = document.createElement("button");
    listButton.className = "history-list";
    
    listButton.appendChild(listItem);
    historyList.appendChild(listButton);
}

//fetch api for daily forecast from openweathermap
let getWeatherToday = function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.value + '&appid=f569c1389ce0a742790e8dd21053476d')
    .then(function(city) {
        return city.json();
    })
    .then(function(data) {
        console.log(data.main.temp);
    })
}

//when history list item is clicked, call weather function


searchBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    //append city name to 'city-name' h2 element at top of page
    cityNameEl.textContent = cityInputEl.value;
    appendTodaysDate();
    historyMaker();
    getWeatherToday();
    cityInputEl.value = '';
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

