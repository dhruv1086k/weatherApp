import styled from "styled-components";
import Search from "../components/Search";
import Logo from "../components/Logo";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";
import { useState } from "react";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    name: "Sydney",
    temp: 41.81,
    temp_max: 41.81,
    pressure: 989,
    humidity: 81,
    speed: 3.06,
    feels_like: 47.39,
    description: "broken clouds",
  });

  let updateWeatherInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <WeatherContainer>
        <div className="topCont">
          <Logo />
          <Search updateWeatherInfo={updateWeatherInfo} />
        </div>
        <div className="bodyCont">
          <Info1 info={weatherInfo} />
          <Info2 info={weatherInfo} />
          <Info3 info={weatherInfo} />
        </div>
      </WeatherContainer>
    </>
  );
}

export default WeatherApp;
let WeatherContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #0b131e; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../public/images/bgImg.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .topCont {
    width: 68%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .bodyCont {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
