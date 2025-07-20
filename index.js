const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "6124d0ba5d647d627659e17f8acc318a";

$(document).ready(function () 
{
  weatherFn("Pune");
});

async function weatherFn(cName) {
  const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
 
  try {
    const res = await fetch(temp);
    console.log("stinct",res);
    const data = await res.json();
    if (res.ok) {
   
      weatherShowFn(data);
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function weatherShowFn(data) {
  $("#city-name").text(data.name);
  $("#date").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  $("#temperature").html(`${data.main.temp}°C`);
  $("#humidity").html(`Humidity: ${data.main.humidity}%`);
  $("#description").text(data.weather[0].description);
  $("#wind-speed").html(`Wind Speed: ${data.wind.speed} m/s`);
  $("#weather-info").fadeIn();
}
