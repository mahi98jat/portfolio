import styled from "styled-components";

const DownloadButton = (props) => {
  const Button = styled.button`
    height: 47px;
    width: 50%;
    color: white;
    background-color: blue;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 18px;
  `;
  // const downloadFile = () => {
  //     window.location.href =
  //       "";
  //   };
  //onClick={downloadFile}
  return <Button>Download</Button>;
};
export default DownloadButton;
