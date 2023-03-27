import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  margin-bottom: 10px;    
`;

//defines a styled component called Container that is a div element with a width of 100%, 
//a height of 8vh, and a margin-bottom of 10px.

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

//defines a styled component called Wrapper that is a div element with a width and height of 100%, 
//a display property of flex, and an align-items property of center. 
//It also has a box-shadow property and a border-radius of 10px.

export const Image = styled.img`
  width: 180px;
  height: 40px;
  margin: 10px;
`;

//defines a styled component called Image that is an img element with a width of 180px, a height of 40px, and a margin of 10px