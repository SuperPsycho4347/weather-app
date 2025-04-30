// Variable declarations
const searchBar = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const convertBtn = document.querySelector('.convert');
const weatherCard = document.querySelector('.weather-card');

// Function to fetch weather through API
async function fetchWeather(location) {
    const apiResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=R933436CZ27FEL5HGBDM6CEHW`, {mode: 'cors'})
    const responseJSON = await apiResponse.json();
    // console.log(responseJSON);
    processJSON(responseJSON);
}

// Function to create object with usable data
function processJSON(json) {
    const myWeather = new usableData(json.address, json.description, json.currentConditions.feelslike, json.currentConditions.temp);
    displayData(myWeather);
}

// Function to display data
function displayData(weatherObject) {
    console.log('hello');
    // Location element creation
    const location = weatherObject.weatherAddress;
    const locH3 = document.createElement('p');
    locH3.textContent = location;
    locH3.classList.add('cityName')
    // Temp element creation
    const tempH1 = document.createElement('h1');
    tempH1.textContent = weatherObject.weatherTemp + " °F";
    tempH1.classList.add('cityTemp')
    // Description element creation
    const descripP = document.createElement('p');
    descripP.textContent = weatherObject.weatherDescrip;
    descripP.classList.add('cityDescrip')
    // Feels like element creation
    const feelsP = document.createElement('p');
    feelsP.textContent = "Feels like " + weatherObject.weatherFeel + " °F";
    feelsP.classList.add('cityFeel')
    // Appending to parent div
    weatherCard.appendChild(locH3)
    weatherCard.appendChild(tempH1);
    weatherCard.appendChild(descripP);
    weatherCard.appendChild(feelsP);
    // Applying color to parent div
    weatherCard.style.backgroundColor = 'white'
    weatherCard.style.border = 'black 1px solid'
}

// Constructor for usableData object
function usableData(address, description, feel, temp) {
    this.weatherAddress = address;
    this.weatherDescrip = description;
    this.weatherFeel = feel;
    this.weatherTemp = temp;
}

// Function calls
// fetchWeather('London');

// Event listeners
submitBtn.addEventListener('click', () => {
    const searchLocation = searchBar.value;
    fetchWeather(searchLocation);
    submitBtn.disabled = true;
})
