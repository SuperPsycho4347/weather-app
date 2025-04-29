// Variable declarations
const searchBar = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
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
    const locH3 = document.createElement('h3');
    locH3.textContent = location;
    // Temp element creation
    const tempH1 = document.createElement('h1');
    tempH1.textContent = weatherObject.weatherTemp;
    // Description element creation
    const descripP = document.createElement('p');
    descripP.textContent = weatherObject.weatherDescrip;
    // Appending to parent div
    weatherCard.appendChild(locH3)
    weatherCard.appendChild(tempH1);
    weatherCard.appendChild(descripP);
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
})