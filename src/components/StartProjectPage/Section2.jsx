import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 650px;
`;

const Border = styled.div`
/* border: 1px solid black; */
width: 90%;
height: 580px;
margin-top: 0px;
margin-left: 72px;
display: flex;
flex-direction: row;
cursor: pointer;
`;

const Div1 = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 580px;
margin-top: 0px;
margin-left: 0px;
cursor: pointer;
`;
const Image1 = styled.img`
/* border: 1px solid black; */
width: 100%;
height: 580px;
margin-top: 0px;
margin-left: 0px;
cursor: pointer;
`;

const Div2 = styled.div`
/* border: 1px solid black; */
width: 90%;
height: 570px;
margin-top: 0px;
margin-left: 40px;
display: flex;
flex-direction: column;
cursor: pointer;
`;

const Image2 = styled.img`
/* border: 1px solid black; */
width: 100%;
height: 270px;
margin-top: 0px;
margin-left: 0px;
cursor: pointer;
`;

const Image3 = styled.img`
/* border: 1px solid black; */
width: 100%;
height: 270px;
margin-top: 40px;
margin-left: 0px;
cursor: pointer;
`;

const Section2 = () => {
  return (
    <Container>
        <Border>
            <Div1>
                <Image1 
                    src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-1-6e68a182e1340ce87d9b3c9f9a25da52935d14be496a4e88085025ae54bb870d.jpg"
                    alt=""
                />
            </Div1>
            <Div2>
                <Image2 
                    src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-2-8c80ae939629f8b10087e097c965990ff4b3eae72b90b51fc597c7f794420881.jpg"
                    alt=""
                />
                <Image3 
                    src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-3-48fe9583f16524ea8412cbb862901b00af1aaf669fdcf43f466f34af5696fc08.jpg"
                    alt=""
                />
            </Div2>
        </Border>
    </Container>
  )
}

export default Section2