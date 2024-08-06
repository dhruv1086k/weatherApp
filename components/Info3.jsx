import styled from "styled-components";

export default function Info3({info}) {
  return (
    <>
      <Box3>
      <div className="Box3Desc">
        <h1>Weather Description</h1>
          <p>
            The Weather can be described as {info.description} and it feels like {info.feels_like}&deg;C
          </p>
        </div>
        <div className="Box3Img">
          <img src="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </Box3>
    </>
  );
}
let Box3 = styled.div`
  width: 80%;
  height: 25vh;
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  .Box3Desc{
    width: 60%;
    height: 100%;
    padding: 0.8rem;
    background-color: rgba(62, 62, 62, 0.8);
    box-shadow: 0px 0px 10px #161616;
    border-radius: 10px;
    h1 {
      font-size: 1rem;
      color: #8b8b8b;
      font-weight: 700;
      text-transform: uppercase;
    }
    p{
        font-size: 1.4rem;
        color: #fff;
        margin-top: 1rem;
        line-height: 1.3;
        font-weight: 600;
        text-align: justify;
    }
}
.Box3Img{
    width: 40%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #161616;
    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
`;
