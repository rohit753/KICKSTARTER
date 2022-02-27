import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
const Container = styled.div`
border: 1px solid white;
border-top: 1px solid grey;
width: 100% !important;
height: 1000px;
`
const Border = styled.div`
border: 1px solid white;
width: 78% ;
height: 900px;
margin-top: 40px;
margin-left: 160px;
`
const Div1 = styled.div`
border: 1px solid white;
width: 60%;
height: 140px;
margin-left: 0px;
margin-top: 0px;
`;
const H1 = styled.h1`
border: 1px solid white;
width: 100%;
height: 140px;
font-size: 45px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 700;
margin-top: 0px;
`;
const Div2 = styled.div`
border: 1px solid white;
width: 100%;
height: 350px;
margin-left: 0px;
margin-top: 50px;
display: flex;
flex-direction: row;
`;
const Section1 = styled.h1`
border: 1px solid white;
width: 94%;
height: 140px;
font-size: 23px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 400;
margin-top: 0px;
`;
const Section2 = styled.div`
border: 1px solid white;
width: 90%;
height: 340px;
font-size: 1.3rem;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 700;
margin-top: 0px;
margin-left: 0px;
`;

const Div = styled.div`
border: 1px solid black;
width: 80%;
height: 280px;
font-size: 1.1rem;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
margin-top: 20px;
margin-left: 108px;
`;
const DivDiv = styled.div`
/* border: 1px solid white; */
width: 90%;
height: 260px;
font-size: 1.1rem;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
margin-top: 10px;
margin-left: 20px;
`;

const Para1 = styled.p`
font-size: 18px;
margin-top: 5px;
font-weight: 300;
`
const Para2 = styled.p`
font-size: 15px;
margin-top: 5px;
font-weight: 200;
a{
    text-decoration: none;
}
a:hover{
    color: black;
}
`
const Button = styled.button`
border: 1px solid white;
width: 32%;
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

const Div3 = styled.div`
border: 1px solid white;
width: 100%;
height: 348px;
margin-left: 0px;
margin-top: 0px;
`;

const Section3 = styled.div`
border: 1px solid white;
width: 100%;
height: 346px;
margin-left: 0px;
margin-top: 0px;
`;

const Para3 = styled.p`
border: 1px solid white;
font-size: 1rem;
margin-top: 5px;
font-weight: 500;
color: rgb(73,73,73);
`
const Grid = styled.div`
border: 1px solid white;
width: 100%;
height: 200px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`;

const GridCard1 = styled.img`
border: 1px solid white;
width: 22%;
height: 180px;
margin-left: 0px;
margin-top: 0px;
cursor: pointer;
`
const GridCard2 = styled.img`
border: 1px solid white;
width: 22%;
height: 180px;
margin-left: 40px;
margin-top: 0px;
cursor: pointer;
`
const GridCard3 = styled.img`
border: 1px solid white;
width: 22%;
height: 180px;
margin-left: 40px;
margin-top: 0px;
cursor: pointer;
`
const GridCard4 = styled.img`
border: 1px solid white;
width: 22%;
height: 180px;
margin-left: 40px;
margin-top: 0px;
cursor: pointer;
`
const Content = styled.div`
border: 1px solid white;
width: 100%;
height: 80px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`;
const Content1 = styled.a`
border: 1px solid white;
width: 22%;
height: 40px;
margin-left: 0px;
margin-top: 0px;
cursor: pointer;
font-size: 0.9rem;
margin-top: 5px;
font-weight: 500;
color: rgb(50,50,50);
`
const Content2 = styled.a`
border: 1px solid white;
width: 22%;
height: 40px;
margin-left: 40px;
margin-top: 0px;
cursor: pointer;
font-size: 0.9rem;
margin-top: 5px;
font-weight: 500;
color: rgb(50,50,50);
`
const Content3 = styled.a`
border: 1px solid white;
width: 22%;
height: 40px;
margin-left: 40px;
margin-top: 0px;
cursor: pointer;
font-size: 0.9rem;
margin-top: 5px;
font-weight: 500;
color: rgb(50,50,50);
`
const Content4 = styled.a`
border: 1px solid white;
width: 22%;
height: 40px;
margin-left: 40px;
margin-top: 0px;
cursor: pointer;
font-size: 0.9rem;
margin-top: 5px;
font-weight: 500;
color: rgb(50,50,50);
`

const Section7 = () => {
  return (
    <Container>
        <Border>
            <Div1>
                <H1>
                    Create a project in any of the
                    following categories
                </H1>
            </Div1>
            <Div2>
                <Section1>
                    From backyard performances to large public murals, 
                    thousands of arts projects have broken new ground, 
                    sparked meaningful dialogue, and given people the 
                    opportunity to share their work with the world.
                </Section1>
                <Section2>
                    <Div>
                        <DivDiv>
                        <h4>Interested?</h4>
                        <Para1>Click start and get sketching. See how it
                            looks. Then share it with your friends!</Para1>
                            <Link to="/form">
                                <Button>
                                    Start a project
                                </Button>
                                </Link>
                        <Para2>
                            We're here for you! Our Community Managers know all 
                            about running projects in each of our categories. Drop us a 
                            line about your project idea: <a href="/">art@kickstarter.com</a>. Got 
                            questions about something else? Visit our <a href="/">Help Center</a>.
                        </Para2>
                        </DivDiv>
                    </Div>
                </Section2>
            </Div2>
            <Div3>
                <Section3>
                    <Para3>EXAMPLE ARTS PROJECTS</Para3>
                    <Grid>
                        <GridCard1
                            src="https://ksr-ugc.imgix.net/assets/011/536/188/8f61f3b115b209d585bfa98902aa9cf4_original.jpeg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1463684144&auto=format&frame=1&q=92&s=fe7299df28edd806aaeef448ebec26b3"
                            alt=""
                        />
                        <GridCard2
                            src="https://ksr-ugc.imgix.net/assets/012/360/277/29d4b2b3a0036e26afae564ed3803791_original.jpg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1463756761&auto=format&frame=1&q=92&s=98f1acc95af568d07260629fc56adbeb"
                            alt=""
                        />
                        <GridCard3
                            src="https://ksr-ugc.imgix.net/assets/012/419/340/8a502f387797c03f24f67035d7d4cd47_original.jpg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1463760324&auto=format&frame=1&q=92&s=20dd5eb32eb2046dac54d56fdcb4d683"
                            alt=""
                        />
                        <GridCard4
                            src="https://ksr-ugc.imgix.net/assets/016/390/591/f8cc6b622812864accca4993bd9a50a3_original.jpg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1493123002&auto=format&frame=1&q=92&s=c23e6e66fa3ab408ef1a00ecaa832d66"
                            alt=""
                        />
                    </Grid>
                    <Content>
                        <Content1>Touching Strangers: Photography by Richard Renaldi</Content1>
                        <Content2>Martha Graham Dance Company Presents: The Next 90!</Content2>
                        <Content3>ugo rondinone: seven magic mountains</Content3>
                        <Content4>Another Fucking Warhol Production</Content4>
                    </Content>
                </Section3>
            </Div3>
        </Border>
    </Container>
  )
}

export default Section7