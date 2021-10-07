import styled from "styled-components";
import DownloadButton from "./Button";
export default function About() {
  const AboutMe = styled.div`
    display: flex;

    justify-content: space-around;
    & > img {
      margin-top: 10%;
      height: 300px;
      width: 280px;
      border-radius: 50%;
    }
    & > div {
      margin-top: 16%;
    }
    & > div > p {
      width: 40% !important;
      padding: 2%;
      text-align: center;
    }
  `;
  return (
    <>
      <AboutMe>
        <img src="/images/portfoliopic.jpeg"></img>
        <div>
          <h1>Mahipal Singh Haritwal</h1>
          <h3>Full Stack Web Developer (MERN)</h3>
        </div>
      </AboutMe>
      <div>
        <p>
          I am software engineer fresh graduate from Masai school, Bengaluru. I
          have done Bachelor of Engineering in Computer Science and Science in
          year 2020. I belongs to a agregarian background.
        </p>
      </div>
      <DownloadButton >Download</DownloadButton>
    </>
  );
}
