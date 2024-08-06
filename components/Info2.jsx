import styled from "styled-components";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";

export default function Info2({info}) {
  return (
    <>
      <Box2>
        <div className="Box2head">
          <h1>Weather Info</h1>
        </div>
        <div className="Box2cards">
          <div className="cardsCont">
            <div>
              <h1>
                <DeviceThermostatIcon />
                Max Temp
              </h1>
              <h2>{info.temp_max}&deg;</h2>
            </div>
            <div>
              <h1>
                <CompareArrowsIcon />
                Pressure
              </h1>
              <h2>{info.pressure}</h2>
            </div>
          </div>
          <div className="cardsCont">
            <div>
              <h1>
                <InvertColorsIcon />
                Humidity
              </h1>
              <h2>{info.humidity}</h2>
            </div>
            <div>
              <h1>
                <AirIcon />
                Wind Speed
              </h1>
              <h2>{info.speed} km/h</h2>
            </div>
          </div>
        </div>
      </Box2>
    </>
  );
}
let Box2 = styled.div`
  width: 80%;
  height: 30vh;
  background-color: rgba(62, 62, 62, 0.8);
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0.8rem;
  box-shadow: 0px 0px 10px #161616;
  .Box2head {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: start;
    align-items: center;
    h1 {
      font-size: 1rem;
      color: #8b8b8b;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .Box2cards {
    width: 100%;
    height: 85%;
    .cardsCont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 50%;
      div {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        h1 {
          color: #8b8b8b;
          font-size: 1.2rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        h2 {
          color: #fff;
          margin-left: 2rem;
          font-weight: 600;
          font-size: 2rem;
        }
      }
    }
  }
`;
