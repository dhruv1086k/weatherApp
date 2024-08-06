import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ updateWeatherInfo }) {
  let [input, setInput] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f7f9a634fa7072c50ac54cf7ccfe885f";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${input}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        name: jsonResponse.name,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        pressure: jsonResponse.main.pressure,
        humidity: jsonResponse.main.humidity,
        speed: jsonResponse.wind.speed,
        feels_like: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
        weatherImg: jsonResponse.weather[0].main,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let searchInput = (e) => {
    setInput(e.target.value);
  };

  let handleSubmit = async () => {
    try {
      setInput("");
      let info = await getWeatherInfo();
      await updateWeatherInfo(info);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <Input
        onChange={searchInput}
        value={input}
        placeholder={error ? "No such place found" : "Search for cities"}
      />
      <SearchBtn onClick={handleSubmit}>
        <SearchIcon className="SearchIcon" />
      </SearchBtn>
    </>
  );
}

let Input = styled.input`
  font-size: 1rem;
  background-color: rgba(62, 62, 62, 0.8);
  box-shadow: 0px 0px 10px #161616;
  outline: none;
  border: none;
  width: 57%;
  padding: 1.1rem 0.8rem;
  border-radius: 10px;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;
let SearchBtn = styled.div`
  padding: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(62, 62, 62, 0.8);
  box-shadow: 0px 0px 10px #161616;
  border-radius: 10px;
  cursor: pointer;
  .SearchIcon {
    color: #fff;
    font-size: 1.2rem;
  }
`;
