let searchBtnEl = document.querySelector(".search-btn")
let cityNameEl = document.querySelector("#city-name");
let cityInputEl = document.querySelector("#city");
let city = cityInputEl.value;
let historyListEl = document.querySelector("#history-list");

//today's date needs to be displayed in 'date' span element using moment.js
let appendTodaysDate = function () {
    let dateEl = document.querySelector("#date");
    let todaysDate = moment().format("MM/DD/YYYY");
    dateEl.textContent = todaysDate;
}

//dynamically created list/buttons for search history
let historyMaker = function () {
    //create list item with city name
    let listItem = document.createElement("li");
    listItem.textContent = cityInputEl.value;
    let thisCity = listItem.textContent;
    historyList.push(listItem.textContent);
    console.log(historyList);

    //create a button to hold the list item
    let listButton = document.createElement("button");
    listButton.className = "history-list";

    //append the city name to the button and put the button in the list
    listButton.appendChild(listItem);
    historyListEl.appendChild(listButton);
}

//display today's weather
let getWeatherToday = function (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.value + '&appid=f569c1389ce0a742790e8dd21053476d&units=imperial')
        .then(function (city) {
            return city.json();
        })
        .then(function (data) {
            let iconEl = document.querySelector("#icon");
            iconEl.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';

            let todayTempEl = document.getElementById("today-temp");
            let todayTemp = data.main.temp;
            todayTempEl.textContent = Math.floor(todayTemp) + " °F";

            let todayHumidEl = document.getElementById("today-humidity");
            let todayHumid = data.main.humidity;
            todayHumidEl.textContent = todayHumid + '%';

            let windEl = document.getElementById("wind");
            let wind = data.wind.speed;
            windEl.textContent = wind + "mph";

            let latitude = data.coord.lat;
            let longitude = data.coord.lon;
            return fetch('http://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=f569c1389ce0a742790e8dd21053476d')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    let uvIndexEl = document.getElementById("uv-index");
                    let uvIndex = data.value;
                    uvIndexEl.textContent = uvIndex;

                    if (data.value >= 8) {
                        uvIndexEl.className = 'bg-danger';
                    }
                    else if (data.value < 8 && data.value >= 6) {
                        uvIndexEl.className = 'bg-orange';
                    }
                    else if (data.value < 6 && data.value >= 3) {
                        uvIndexEl.className = 'bg-warning';
                    }
                    else if (data.value < 3 && data.value > 0) {
                        uvIndexEl.className = 'bg-success';
                    }
                })
        })
}

//display 5-day forecast
let getForecast = function () {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityInputEl.value + '&appid=f569c1389ce0a742790e8dd21053476d&units=imperial')
        .then(function (city) {
            return city.json();
        })
        .then(function (data) {
            //display weather info for date1
            let date1Icon = document.querySelector("#date1-icon");
            date1Icon.src = 'http://openweathermap.org/img/wn/' + data.list[5].weather[0].icon + '@2x.png';
            date1Icon.className = 'forecast-icon';

            let date1TempEl = document.getElementById("date1-temp");
            let date1Temp = data.list[5].main.temp;
            date1TempEl.textContent = Math.floor(date1Temp) + " °F";

            let date1HumidEl = document.getElementById("date1-humidity");
            let date1Humid = data.list[5].main.humidity;
            date1HumidEl.textContent = date1Humid + '%';

            //display weather info for date2
            let date2Icon = document.querySelector("#date2-icon");
            date2Icon.src = 'http://openweathermap.org/img/wn/' + data.list[13].weather[0].icon + '@2x.png';
            date2Icon.className = 'forecast-icon';

            let date2TempEl = document.getElementById("date2-temp");
            let date2Temp = data.list[13].main.temp;
            date2TempEl.textContent = Math.floor(date2Temp) + " °F";

            let date2HumidEl = document.getElementById("date2-humidity");
            let date2Humid = data.list[13].main.humidity;
            date2HumidEl.textContent = date2Humid + '%';

            //display weather info for date3
            let date3Icon = document.querySelector("#date3-icon");
            date3Icon.src = 'http://openweathermap.org/img/wn/' + data.list[21].weather[0].icon + '@2x.png';
            date3Icon.className = 'forecast-icon';

            let date3TempEl = document.getElementById("date3-temp");
            let date3Temp = data.list[21].main.temp;
            date3TempEl.textContent = Math.floor(date3Temp) + " °F";

            let date3HumidEl = document.getElementById("date3-humidity");
            let date3Humid = data.list[21].main.humidity;
            date3HumidEl.textContent = date3Humid + '%';

            //display weather info for date4
            let date4Icon = document.querySelector("#date4-icon");
            date4Icon.src = 'http://openweathermap.org/img/wn/' + data.list[29].weather[0].icon + '@2x.png';
            date4Icon.className = 'forecast-icon';

            let date4TempEl = document.getElementById("date4-temp");
            let date4Temp = data.list[29].main.temp;
            date4TempEl.textContent = Math.floor(date4Temp) + " °F";

            let date4HumidEl = document.getElementById("date4-humidity");
            let date4Humid = data.list[29].main.humidity;
            date4HumidEl.textContent = date4Humid + '%';

            //display weather info for date5
            let date5Icon = document.querySelector("#date5-icon");
            date5Icon.src = 'http://openweathermap.org/img/wn/' + data.list[37].weather[0].icon + '@2x.png';
            date5Icon.className = 'forecast-icon';

            let date5TempEl = document.getElementById("date5-temp");
            let date5Temp = data.list[37].main.temp;
            date5TempEl.textContent = Math.floor(date5Temp) + " °F";

            let date5HumidEl = document.getElementById("date5-humidity");
            let date5Humid = data.list[37].main.humidity;
            date5HumidEl.textContent = date5Humid + '%';
        });

    //display date1
    let date1El = document.querySelector("#date1");
    let date1 = moment().add(1, 'd').format("MM/DD/YYYY");
    date1El.textContent = date1;

    //display date2
    let date2El = document.querySelector("#date2");
    let date2 = moment().add(2, 'd').format("MM/DD/YYYY");
    date2El.textContent = date2;

    //display date3
    let date3El = document.querySelector("#date3");
    let date3 = moment().add(3, 'd').format("MM/DD/YYYY");
    date3El.textContent = date3;

    //display date4
    let date4El = document.querySelector("#date4");
    let date4 = moment().add(4, 'd').format("MM/DD/YYYY");
    date4El.textContent = date4;

    //display date5
    let date5El = document.querySelector("#date5");
    let date5 = moment().add(5, 'd').format("MM/DD/YYYY");
    date5El.textContent = date5;
}

//when search button is clicked...
searchBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    //append city name to 'city-name' h2 element at top of page
    cityNameEl.textContent = cityInputEl.value;

    getWeatherToday();
    getForecast();
    appendTodaysDate();
    historyMaker();

    //reset input field
    cityInputEl.value = '';
});