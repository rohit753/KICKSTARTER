import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
const Container = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 280px;
`;

const Div = styled.div`
/* border: 1px solid black; */
width: 48%;
height: 220px;
margin-left: 250px;
margin-top: 50px;
`;

const H1 = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 150px;
font-size: 23px;
margin-top: 70px;
`;

const Button = styled.button`
/* border: 1px solid black; */
width: 26%;
height: 40px;
font-size: 17px;
background-color: rgb(35,88,56);
cursor: pointer;
a{
  text-decoration: none;
  color: white;
  background-color: rgb(35,88,56);
}
`;

const Section1 = () => {
  return (
    <Container>
      <Div>
        <H1><h1>Bring your creative project to life.</h1></H1>
        <Link to ="/form" >
        <Button>
          Start a project
        </Button>
        </Link>
      </Div>
    </Container>
  )
}

export default Section1