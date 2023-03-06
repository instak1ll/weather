import fetch from 'node-fetch';
const api_key = ''; //cambia el api_key por otro que te sirva, pero tarda dos horas en activarse

console.log("Ciudad: "); //Introucción de ciudad
process.stdin.addListener("data", async (location) => {
  const city = location.toString().trim();
  console.log("Tu ciudad es: " + city);
  const weather = await getWeather(city);
  console.log(weather);
  process.exit();
})

async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`); 
  const data = await response.json(); //Te responde en formato JSON con la información del tiempo
  return data;
}

const miDiv = document.getElementsByClassName("temp-value");
miDiv.innerHTML = data;
