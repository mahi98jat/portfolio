import styled from "styled-components";

export default function Skills() {
  const Skill = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding-top: 5%;
    background: #efe7e7;
    color: blue;
    text-aligh: center;
    justify-content: space-around;
    & > div > div > h3 {
      color: #58cced;
    }
  `;
  return (
    <Skill>
      <div>
        <h2>Technical Skills</h2>
        <div>
          <h3>JavaScript</h3>
          <h3>React</h3>
          <h3>Algorithms</h3>
          <h3>Data-Structures</h3>
          <h3>Node Js</h3>
          <h3>HTML</h3>
          <h3>CSS</h3>

          <h3>MongoDB</h3>
          <h3>mySQL</h3>
          <h3>Express</h3>
        </div>
      </div>

      <div>
        <h2>Soft Skills</h2>
        <div>
          <h3>Presentation</h3>
          <h3>Leadership</h3>
          <h3>Online Collaboration</h3>
          <h3>Team Work</h3>
        </div>
      </div>
    </Skill>
  );
}
