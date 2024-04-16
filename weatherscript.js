const srch = document.querySelector(".srch");
const srchbtn = document.querySelector(".srch-btn");
const Weather_img = document.querySelector(".Weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity p:first-child");
const wind_speed = document.querySelector(".wind-speed p:first-child");

async function checkweather(city) {
  const api_key = "223dc4f1ef9b132174a77ee60b33134f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}% `;
  wind_speed.innerHTML = `${weather_data.wind.speed} Km/h`;

  const currentTime = new Date().getHours();
  const isNight = currentTime < 6 || currentTime > 18;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      Weather_img.src = isNight
        ? "https://imgur.com/qHHbPam.jpeg"
        : "https://imgur.com/tjpFBEU.png";
      break;
    case "Clear":
      Weather_img.src = isNight
        ? "https://imgur.com/yHUypvr.png"
        : "https://imgur.com/A7GiVfm.png";
      break;
    case "Rain":
      Weather_img.src = "https://imgur.com/MY0fgWq.png";
      break;
    case "Mist":
      Weather_img.src = "https://imgur.com/0TCFSRV.png";
      break;
    case "Snow":
      Weather_img.src = "https://imgur.com/m4z0Ceq.png";
      break;
    default:
      Weather_img.src = "https://imgur.com/AVHNHWG.jpeg";
  }
}

srchbtn.addEventListener("click", () => {
  checkweather(srch.value);
});
