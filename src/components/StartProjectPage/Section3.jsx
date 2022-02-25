import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid rgb(23,71,82);
width: 100%;
height: 550px;
background-color: rgb(23,71,82);
color: white;
cursor: pointer;
`;

const Div = styled.div`
border: 1px solid rgb(23,71,82);
width: 61%;
height: 400px;
margin-left: 250px;
margin-top: 70px;
`;

const H1 = styled.div`
border: 1px solid rgb(23,71,82);
width: 100%;
height: 300px;
font-size: 45px;
margin-top: 20px;
font-weight: 300;
`;

const Content = styled.h4`
border: 1px solid rgb(23,71,82);
width: 40%;
height: 40px;
font-size: 18px;
color: white;
margin-top: 20px;
font-weight: 300;
cursor: pointer;

`;

const Section3 = () => {
  return (
    <Container>
      <Div>
        <H1>We see Kickstarter as a home for creative
              minds and a wonderful platform; where
              people who believe, respect, and see the
              vision can support an idea and make it a 
              reality.</H1>
        <Content>
          - DE LA SOUL
        </Content>
      </Div>
    </Container>
  )
}

export default Section3