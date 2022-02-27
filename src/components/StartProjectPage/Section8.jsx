
import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
const Container = styled.div`
border: 1px solid black;
width: 100%;
height: 450px;
background-color: rgb(249,202,169);
color: Black;
cursor: pointer;
`;

const Div = styled.div`
/* border: 1px solid black; */
width: 65%;
height: 300px;
margin-left: 250px;
margin-top: 100px;
`;

const H1 = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 150px;
font-size: 55px;
margin-top: 40px;
font-weight: 500;
`;

const Content = styled.h4`
/* border: 1px solid black; */
width: 50%;
height: 30px;
font-size: 18px;
color: black;
margin-top: 0px;
font-weight: 300;
cursor: pointer;
`;

const Button = styled.button`
/* border: 1px solid black; */
width: 20%;
height: 48px;
font-size: 17px;
background-color: rgb(70,70,70);
cursor: pointer;
a{
  text-decoration: none;
  color: white;
  background-color: rgb(70,70,70);
}
a:hover{
    color: black;
}
`;

const Section8 = () => {
  return (
    <Container>
      <Div>
        <H1>"A way for every creative person to
            control their destiny."</H1>
        <Content>
          - Brian Fargo, successful Kickstarter project creator
        </Content>
		<Link to="/form">
        <Button>
          Start a project
        </Button>
		</Link>
      </Div>
    </Container>
  )
}

export default Section8