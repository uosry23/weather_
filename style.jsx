let form = document.querySelector("form");
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let div = document.querySelector(".main");
let statues = document.querySelector("#weather");
let speed = document.querySelector("#wind_speed");
let humidtiy = document.querySelector("#humidtiy");
let pressure = document.querySelector("#pressure");
let img = document.querySelector("#img");
let temp = document.querySelector("h5");
let time = document.querySelector("#div_time");
let t = document.querySelector("#time");
btn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inp.value.toLowerCase()}&units=metric&appid=09cf2b1b4ab7f5636d5eef8d4c561acd
`
  )
    .then((t) => {
      return t.json();
    })
    .then((city) => {
      if (city.main) {
        // console.log(imgs);
        // console.log(city.main.temp);
        //     console.log(city.coord);
        statues.innerHTML = city.weather[0].main;
        img.style.display = "block";
        temp.innerHTML = city.main.temp;

        if (statues.innerHTML == "Clouds") {
          // console.log("ok");
          img.setAttribute("src", "images/clouds.png");
        } else if (statues.innerHTML == "Clear") {
          img.setAttribute("src", "images/sun.png");
        } else if (statues.innerHTML == "Cold") {
          img.setAttribute("src", "images/cold.png");
        } else if (statues.innerHTML == "Rain") {
          img.setAttribute("src", "images/rainy.png");
        } else if (statues.innerHTML == "Cold") {
          img.setAttribute("src", "images/cold.png");
        }

        speed.innerHTML = city.wind.speed;
        humidtiy.innerHTML = city.main.humidity;
        pressure.innerHTML = city.main.pressure;
        inp.value = "";
        if (imgs.photos) {
          document.body.style.backgroundRepeat = "no-repeat";

          document.body.style.backgroundSize = "cover";

          let lat = city.coord.lat;
          let lon = city.coord.lon;
          fetch(
            `https://api.timezonedb.com/v2.1/get-time-zone?key=ZLISIQE3PZU9&format=json&by=position&lat=${lat}&lng=${lon}`
          )
            .then((t) => {
              return t.json();
            })
            .then((z) => {
              console.log(z);
              let q = z.formatted;
              t.innerHTML = q;
              time.innerHTML = z.cityName + "/" + z.countryName;

              // console.log(z
              //     );
            });
        } else {
          document.body.style.backgroundImage = `url(clouds-6swlqte8g6dniemk.jpg)`;
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundSize = "cover";
          x;
          t.innerHTML = "";
          time.innerHTML = "";
        }
      } else {
        rest();
      }
    });
});
form.addEventListener("submit", (t) => {
  t.preventDefault();
});
function rest() {
  temp.innerHTML = "";
  statues.innerHTML = "";
  inp.value = "";
  img.style.display = "none";
  speed.innerHTML = "";
  humidtiy.innerHTML = "";
  pressure.innerHTML = "";
  document.body.style.backgroundImage = `url(clouds-6swlqte8g6dniemk.jpg)`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  t.innerHTML = "";
  time.innerHTML = "";
}
