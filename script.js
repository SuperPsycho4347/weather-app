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
    console.log(myWeather);
}

// Constructor for usableData object
function usableData(address, description, feel, temp) {
    this.weatherAddress = address;
    this.weatherDescrip = description;
    this.weatherFeel = feel;
    this.weatherTemp = temp;
}

fetchWeather('London');