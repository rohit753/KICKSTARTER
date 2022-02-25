import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 1250px;
`
const Border = styled.div`
/* border: 1px solid black; */
width: 70%;
height: 1000px;
margin-left: 270px;
margin-top: 120px;
`
const Div1 = styled.div`
/* border: 1px solid black; */
width: 90%;
height: 150px;
margin-left: 0px;
margin-top: 0px;
`
const H1 = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 150px;
font-size: 42px;
margin-top: 0px;
font-weight: 600;
`;

const Div2 = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 1000px;
margin-left: 0px;
margin-top: 70px;
display: flex;
flex-direction: row;
`
const Table = styled.table`
/* border: 1px solid black; */
width: 100%;
height: 1000px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: column;
`
const Section1 = styled.table`
/* border: 1px solid black; */
width: 100%;
height: 240px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`
const Section2 = styled.table`
/* border: 1px solid black; */
width: 100%;
height: 200px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`
const Section3 = styled.table`
/* border: 1px solid black; */
width: 100%;
height: 370px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`
const Section = styled.table`
/* border: 1px solid black; */
width: 100%;
height: 220px;
margin-left: 0px;
margin-top: 0px;
display: flex;
flex-direction: row;
`

const Td1 = styled.div`
/* border: 1px solid black; */
width: 35%;
height: 100px;
margin-left: 0px;
margin-top: 0px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 30px;
font-weight:700;

`
const Td2 = styled.div`
/* border: 1px solid black; */
width: 54%;
height: 180px;
margin-left: 80px;
margin-top: 0px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 1.3rem;
a{
    text-decoration: underline;
    color:blue;
}
`
const Td3 = styled.div`
/* border: 1px solid black; */
width: 50%;
height: 320px;
margin-left: 80px;
margin-top: 0px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 1.3rem;
`
const Section4 = () => {
  return (
    <Container>
        <Border>
            <Div1><H1>A Kickstarter project does more than raise
                money. It builds community around your
                work.</H1></Div1>
            <Div2>
            <Table>
                <Section1>
                <Td1>
                    What can I use
                    Kickstarter to fund?                   
                </Td1>
                <Td2>
                    Kickstarter is specifically for crative projects in the
                    following categories: Art, Comics, Crafts, Dance, Design,
                    Fashion, Film & Video, Food, Games, Journalism, Music,
                    Photography, Publishing, Technology, and Theater. Make
                    an album, write a book, create an immersive theater
                    experience, score a film - you name it. Read more about
                    &nbsp;<a href="/">our project guidelines</a>.
                </Td2>
                </Section1>
                <Section2>
                <Td1>
                    Who can I get
                    pledges from?
                </Td1>
                <Td2>
                    Millions of people visit Kickstarter every week, but support 
                    always begins with people you know. Friends, fans, and 
                    the communities you’re a part of will likely be some of 
                    your earliest supporters, not to mention your biggest 
                    resources for spreading the word about your project.
                </Td2>
                </Section2>
                <Section3>
                <Td1>
                    How much work is it 
                    to run a project?
                </Td1>
                <Td3>
                    Every Kickstarter project has its share of exhilarating and 
                    challenging moments, but the amount of work generally 
                    depends on the size and complexity of the project.
                    <br /><br />
                    Expect the first few days after launch to be very busy as 
                    you spread the word to your community, answer questions 
                    from potential backers, and more. You may need to spend 
                    the last few days rallying your social networks in order to 
                    reach your funding goal.
                    <br /><br />
                    Projects sometimes take on a life of their own, and in that 
                    case you should expect to spend more time creating and 
                    fulfilling rewards.
                </Td3>
                </Section3>
                <Section>
                <Td1>
                    How do I get in 
                    touch with questions?              
                </Td1>
                <Td2>
                    You can reach out with your questions through this 
                    &nbsp;<a href="/">contact form</a>. We also recommend taking a look at 
                    &nbsp;<a href="/">our FAQs</a> for more detailed information, along with the 
                    &nbsp;<a href="/">creator handbook</a> for guidance on starting and running a project.
                </Td2>
                </Section>
            </Table>
            </Div2>
        </Border>
    </Container>
  )
}

export default Section4