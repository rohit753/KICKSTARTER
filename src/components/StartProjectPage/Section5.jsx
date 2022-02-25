import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 700px;
background-color: rgb(40,40,40);
`;

const Border = styled.div`
/* border: 1px solid black; */
width: 85%;
height: 600px;
margin-top: 0px;
margin-left: 100px;
display: flex;
flex-direction: row;
cursor: pointer;
`;

const Div1 = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 600px;
margin-top: 0px;
margin-left: 0px;
cursor: pointer;
`;
const Image1 = styled.img`
/* border: 1px solid black; */
width: 94%;
height: 550px;
margin-top: 78px;
margin-left: 50px;
cursor: pointer;
`;

const Section5 = () => {
  return (
    <Container>
        <Border>
            <Div1>
                <Image1 
                    src="https://ksr-static.imgix.net/5ac912ca266060390adbca02a40d49b7_original.png?ixlib=rb-2.1.0&auto=compress%2Cformat&s=4f50c15b1e29598a78b7a12754792928"
                    alt=""
                />
            </Div1>
        </Border>
    </Container>
  )
}

export default Section5