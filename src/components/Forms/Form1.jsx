import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid white;
width: 100%;
height: 700px;
`
const Border = styled.div`
border: 1px solid white;
width: 60%;
height: 550px;
margin-left: 300px;
margin-top: 70px;
`
const Div1 = styled.div`
border: 1px solid white;
width: 90%;
height: 50px;
margin-left: 50px;
margin-top: 30px;
text-align: center;
`
const H1 = styled.h1`
text-align: center;
font-size: 32px;
font-weight: 400;
margin-top: 0px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
`
const Div2 = styled.div`
border: 1px solid white;
width: 90%;
height: 70px;
margin-left: 50px;
margin-top: 45px;
text-align: center;
`
const H2 = styled.h1`
text-align: center;
font-size: 26px;
font-weight: 300;
margin-top: 0px;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
`

const Div3 = styled.div`
border: 1px solid white;
width: 90%;
height: 60px;
margin-left: 50px;
margin-top: 10px;
text-align: center;
`
const H3 = styled.h1`
text-align: center;
font-size: 20px;
font-weight: 400;
margin-top: 0px;
color: rgb(70,70,70);
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
`

const Div4 = styled.div`
border: 1px solid white;
width: 90%;
height: 150px;
margin-left: 50px;
margin-top: 20px;
text-align: center;

`
const Select1 = styled.select`
border: 1px solid black;
width: 38%;
height: 47px;
cursor: pointer;
font-size: 18px;
background-color: white;
select:hover{
    border-color: green;
}
`
const Select2 = styled.select`
border: 1px solid black;
width: 38%;
height: 47px;
cursor: pointer;
font-size: 18px;
margin-left: 20px;
background-color: white;
`
const Div5 = styled.div`
border: 1px solid white;
width: 29%;
height: 60px;
margin-left: 500px;
margin-top: 20px;

`
const Button = styled.button`
border: 1px solid white;
width: 100%;
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
const Para = styled.p`
border: 1px solid white;
width: 60%;
height: 25px;
margin-left: 300px;
margin-top: 50px;
font-size: 15px;
color: rgb(70,70,70);
cursor: pointer;
text-align: center;
`
const Form1 = () => {
  return (
    <Container>
        <Border>
            <Div1>
                <H1>First, let’s get you set up.</H1>
            </Div1>
            <Div2>
                <H2>
                    Select a primary category and subcategory for your
                    <br />new project.
                </H2>
            </Div2>
            <Div3>
                <H3>
                    These will help backers find your project, and you can change them 
                 <br />later if you need to.
                </H3>
            </Div3>
            <Div4>
                <Select1>
                  <option value="Select">Select</option>
                  <option value="Art">Art</option>
                  <option value="Comics">Comics</option>
                  <option value="Crafts">Crafts</option>
                  <option value="Dance">Dance</option>
                  <option value="Design">Design</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Film & Video">Film & Video</option>
                  <option value="Food">Food</option>
                  <option value="Games">Games</option>
                  <option value="Journalism">Journalism</option>
                  <option value="Music">Music</option>
                  <option value="Photography">Photography</option>
                  <option value="Publishing">Publishing</option>
                  <option value="Technology">Technology</option>
                  <option value="Theater">Theater</option>
                </Select1>
                <Select2>
                <option value="Select">Select</option>
                  <option value="--No subcategory">--No subcategory</option>
                  <option value="Blues">Blues</option>
                  <option value="Chiptune">Chiptune</option>
                  <option value="Classical Music">Classical Music</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Country & Folk">Country & Folk</option>
                  <option value="Electronic Music">Electronic Music</option>
                  <option value="Faith">Faith</option>
                  <option value="Hip-Hop">Hip-Hop</option>
                  <option value="Indie Rock">Indie Rock</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Kids">Kids</option>
                  <option value="Latin">Latin</option>
                  <option value="Metal">Metal</option>
                  <option value="Pop">Pop</option>
                  <option value="Punk">Punk</option>
                  <option value="R & B">R & B</option>
                  <option value="Rock">Rock</option>
                  <option value="World Music">World Music</option>
                </Select2>
            </Div4>
            <Div5>
            <Button>
                <a href="/">Next: Additional subcategory</a>
            </Button>
            </Div5>
        </Border>
        <Para>
            Please note: Your ability to edit, hide, or delete a project is limited after you launch a project.
        </Para>
    </Container>
  )
}

export default Form1