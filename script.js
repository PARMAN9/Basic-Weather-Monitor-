const api_key = "YOUR_API_KEY";

async function getWeather(){
 const city = document.getElementById("cityDropdown").value;

 if(city==""){
  alert("Please select a city");
  return;
 }
 console.log(city);
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

 const response = await fetch(url);
 const data = await response.json();

 if (data.cod == 404){
  throw new Error(data.message);
 }
 console.log(data);
 document.getElementById("weatherResult").innerHTML =`
  <h2>${data.name}</h2>
  <h3>Temperature ${data.main.temp}</h3>
  <h3>Humidity ${data.main.humidity}</h3>
  <h3>Wind Speed ${data.wind.speed}</h3>
 `;
}