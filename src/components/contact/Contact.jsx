import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Contact() {
  const Social = styled.div`
    display: flex;
    justify-content: space-around;
    background: #EFE7E7;
    height: 100%;
    color: blue;
    padding-top: 10%;
  `;
  const FormContainer = styled.div`
  height:90%
  width:90%;
  `;
  const Box = styled.input`
    width: 80%;
    height: 300px;
  `;
  return (
    <Social>
      <div>
        <Link to="https://github.com/mahi98jat">
          <h1>GitHub</h1>
        </Link>
        <Link to="www.linkedin.com/in/jtmahi">
          <h1>Linkedin</h1>
        </Link>
      </div>
      <div>
        <h1>7024370634</h1>
        <h1>mahi98jat@gmail.com</h1>
      </div>
      <FormContainer>
        <input type="email" placeholder="type your email here"></input>
        <br />
        <Box type="text" placeholder="comments"></Box>
        <br />
        <button>Submit</button>
      </FormContainer>
    </Social>
  );
}
