import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid white;
width: 100%;
height: 850px;
`
const Border = styled.div`
border: 1px solid white;
width: 70%;
height: 800px;
margin-left: 270px;
margin-top: 120px;
`
const Div1 = styled.div`
border: 1px solid white;
width: 90%;
height: 150px;
margin-left: 0px;
margin-top: 0px;
`
const H1 = styled.div`
border: 1px solid white;
width: 100%;
height: 150px;
font-size: 42px;
margin-top: 0px;
font-weight: 600;
`;

const Div2 = styled.div`
border: 1px solid white;
width: 100%;
height: 700px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`
const Table = styled.table`
border: 1px solid white;
width: 100%;
height: 550px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: column;
`
const Section1 = styled.table`
border: 1px solid white;
width: 100%;
height: 180px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;

`
const Section2 = styled.table`
border: 1px solid white;
width: 100%;
height: 180px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`

const Section = styled.table`
border: 1px solid white;
width: 100%;
height: 180px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`

const Td1 = styled.div`
border: 1px solid white;
width: 30%;
height: 100px;
margin-left: 0px;
margin-top: 0px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 30px;
font-weight:700;

`
const Td2 = styled.div`
border: 1px solid white;
width: 60%;
height: 180px;
margin-left: 90px;
margin-top: 0px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 1.3rem;
`

const Section4 = () => {
  return (
    <Container>
        <Border>
            <Div1><H1>Why Kickstarter?</H1></Div1>
            <Div2>
            <Table>
                <Section1>
                <Td1>
                    Kickstarter is just for
                    creative projects.                   
                </Td1>
                <Td2>
                    We built Kickstarter as a tool for artists, designers, makers, 
                    musicians, and creative people everywhere. We’re proud 
                    to be the only platform that’s fully dedicated to building 
                    community around creative projects.
                </Td2>
                </Section1>
                <Section2>
                <Td1>
                    All-or-nothing
                    funding works.
                </Td1>
                <Td2>
                    Kickstarter’s all-or-nothing model allows you to choose a 
                    funding goal and a set number of days to reach that goal.
                    This way, you don’t get stuck without enough funds to 
                    realize your project. It also gives backers incentive to 
                    pledge more to help you reach your goal.
                </Td2>
                </Section2>
                <Section>
                <Td1>
                    Our community 
                    wants to support you.             
                </Td1>
                <Td2>
                    Millions of backers agree — helping to create something 
                    new is exciting. People love peeking behind the creative
                    curtain and directly supporting the creative process. In 
                    fact, 13.9 million people have pledged more than $3.39 
                    billion to bring Kickstarter projects to life over the years.
                </Td2>
                </Section>
            </Table>
            </Div2>
        </Border>
    </Container>
  )
}

export default Section4