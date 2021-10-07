import Navbar from "../navbar/Navbar";
import styled from "styled-components";
export default function Welcome() {
  const Wel = styled.div`
    height:90%
    width:80%;
    position:relative;
    padding-top:16%;
    background:transparent;
    & > p {
      fond-size: 60px;
    }`;
  return (
    <Wel className="welcome">
      <h1 className="wel-h1">Welcome </h1>
      <h3 className="wel-h3">To My Portfolio</h3>
    </Wel>
  );
}
