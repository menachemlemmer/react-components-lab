import "./App.css";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.jsx";

const App = () => {
  const weatherForecasts = [
    {
      day: "Mon",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
    },
    {
      day: "Tue",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
    },
    {
      day: "Wed",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
    },
    {
      day: "Thu",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
    },
    {
      day: "Fri",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
    },
  ];

  return (
    <>
      <h1 className="px-4 py-12 text-center text-6xl font-semibold">
        Local Weather
      </h1>
      <section className="flex w-1/2">
        {weatherForecasts.map((forecast, index) => (
          <WeatherForecast key={index} {...forecast} />
        ))}
      </section>
    </>
  );
};

export default App;
