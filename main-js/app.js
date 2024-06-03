const API_KEY = "62b7be77c1616c3f2581d8813fb7e512";


const searchInput = document.getElementById('input');
const searchBtn = document.querySelector('.search-button');
const weatherAppDiv = document.querySelector('.weather-app')
const innerDiv = document.querySelector('.inner-div');
const greetDiv = document.querySelector('.greeting')
const weekdays = document.querySelector('.weekdays');

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();

let day = weekday[currentTime.getDay()];





console.log(currentTime.toLocaleTimeString())
function greeting() {


    let greet;
    if (hours >= 0 && hours <= 12) {
        greet = `Good Morning`;
    } else if (hours >= 12 && hours <= 18) {
        greet = 'Good Afternoon';
    } else {
        greet = `Good Evening `
    }

    displayGreet(greet)
    return greet
}

const displayGreet = (message) => {
    const displayGreet = document.createElement('p');
    displayGreet.className = 'greet-message'
    displayGreet.innerHTML = message;
    greetDiv.appendChild(displayGreet)
}

greeting()









// setInterval(, 1000);


searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userInput = searchInput.value;
    if (userInput === '') {
        weatherAppDiv.innerHTML = ``;
        innerDiv.innerHTML = ``;
        weekdays.innerHTML = '';
        const alertMessage = document.createElement('p');
        alertMessage.innerText = 'Please Enter a city'
        alertMessage.style.margin = "30px";
        weatherAppDiv.appendChild(alertMessage);
    } else {
        try {
            weatherAppDiv.innerHTML = ``;
            innerDiv.innerHTML = ``;
            weekdays.innerHTML = '';

            'api.openweathermap.org/data/2.5/forecast/daily?q={city name}&appid=${API_KEY}'

            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`)
            }
            const data = await response.json();
            console.log(data)

            const city = document.createElement('div');
            city.classList.add('city');
            const cityName = document.createElement('p');
            cityName.innerHTML = userInput;
            city.appendChild(cityName);

            const weatherIcon = document.createElement('div');
            weatherIcon.classList.add('weather-icon');
            const icon = document.createElement('img');
            icon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            icon.height = 150;
            icon.width = 150;
            ;

            const temparature = document.createElement('div');
            temparature.classList.add('temperature');
            const tempValue = document.createElement('p');
            tempValue.innerHTML = `${data.list[0].main.temp.toFixed(1)}&#176C`
            temparature.appendChild(tempValue);



            const dayTime = document.createElement('div');
            dayTime.classList.add('day-time');
            const dateAndTime = document.createElement('p');
            setInterval(() => {
                let d = new Date();

                dateAndTime.innerHTML = `${day} ${currentTime.getDate()} | ${d.toLocaleTimeString()}`
            }, 1000);
            dayTime.appendChild(dateAndTime);



            const weatherCondition = document.createElement('div');
            weatherCondition.classList.add('weather-condition');
            const weather = document.createElement('p');
            weather.innerHTML = data.list[0].weather[0].description;
            weatherCondition.appendChild(weather);

            const tempMin = document.createElement('div');
            tempMin.classList.add('temp-min');
            const tempMinValue = document.createElement('p')
            tempMinValue.innerHTML = 'tempMin'
            const span1 = document.createElement('span');
            span1.textContent = data.list[0].main.temp_min.toFixed(1);
            tempMin.append(tempMinValue, span1);

            const wind = document.createElement('div');
            wind.classList.add('wind');
            const windValue = document.createElement('p')
            windValue.innerHTML = `Wind`
            const span2 = document.createElement('span');
            span2.textContent = `${data.list[0].wind.speed}%`
            wind.append(windValue, span2);

            const humidity = document.createElement('div');
            humidity.classList.add('humidity');
            const humidityValue = document.createElement('p')
            humidityValue.innerHTML = 'Humidity'
            const span3 = document.createElement('span');
            span3.textContent = `${data.list[0].main.humidity}%`
            humidity.append(humidityValue, span3);

            const tempMax = document.createElement('div');
            tempMax.classList.add('temp-max');
            const tempMaxValue = document.createElement('p')
            tempMaxValue.innerHTML = 'tempMax'
            const span4 = document.createElement('span');
            span4.textContent = data.list[0].main.temp_max.toFixed(1);
            tempMax.append(tempMaxValue, span4);


            const mon = document.createElement('div');
            mon.classList.add('mon');
            const monValue = document.createElement('p');
            monValue.innerHTML = 'mon';
            const monTempMin = document.createElement('span');
            monTempMin.innerHTML = data.list[0].main.temp_min.toFixed(1);
            const monTempMax = document.createElement('span');
            monTempMax.innerHTML = data.list[0].main.temp_max.toFixed(1);
            mon.append(monValue, monTempMin, monTempMax);

            const tue = document.createElement('div');
            tue.classList.add('tue');
            const tueValue = document.createElement('p');
            tueValue.innerHTML = 'tue';
            const tueTempMin = document.createElement('span');
            tueTempMin.innerHTML = data.list[1].main.temp_min.toFixed(1);
            const tueTempMax = document.createElement('span');
            tueTempMax.innerHTML = data.list[1].main.temp_max.toFixed(1);
            tue.append(tueValue, tueTempMin, tueTempMax);

            const wed = document.createElement('div');
            wed.classList.add('wed');
            const wedValue = document.createElement('p');
            wedValue.innerHTML = 'wed';
            const wedTempMin = document.createElement('span');
            wedTempMin.innerHTML = data.list[2].main.temp_min.toFixed(1);
            const wedTempMax = document.createElement('span');
            wedTempMax.innerHTML = data.list[2].main.temp_max.toFixed(1);
            wed.append(wedValue, wedTempMin, wedTempMax);

            const thur = document.createElement('div');
            thur.classList.add('thur');
            const thurValue = document.createElement('p');
            thurValue.innerHTML = 'thur';
            const thurTempMin = document.createElement('span');
            thurTempMin.innerHTML = data.list[3].main.temp_min.toFixed(1);
            const thurTempMax = document.createElement('span');
            thurTempMax.innerHTML = data.list[3].main.temp_max.toFixed(1);
            thur.append(thurValue, thurTempMin, thurTempMax);

            const fri = document.createElement('div');
            fri.classList.add('fri');
            const friValue = document.createElement('p');
            friValue.innerHTML = 'fri';
            const friTempMin = document.createElement('span');
            friTempMin.innerHTML = data.list[4].main.temp_min.toFixed(1);
            const friTempMax = document.createElement('span');
            friTempMax.innerHTML = data.list[4].main.temp_max.toFixed(1);
            fri.append(friValue, friTempMin, friTempMax);

            weekdays.append(mon, tue, wed, thur, fri)

            weatherAppDiv.append(
                city,
                icon,
                temparature,
                weatherCondition,
                dayTime,
                innerDiv,
                weekdays
            );

            innerDiv.append(
                tempMin,
                wind,
                humidity,
                tempMax,

            );

            searchInput.value = '';
            return data
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }


})