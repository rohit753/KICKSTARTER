import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import api from "../api/baseurl";
// import { Container } from 'react-bootstrap'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #f0f0f0;
  height: 100%;
  font-size: 14px;
  font-weight: 300;
  /* scale: 0.7; */
  /* align-items: center; */
  /* align-items: center; */
`;
const DivM = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
`
const Div = styled.div`
width: 57vw;
display: flex;
flex-direction: column;
align-items: start;
margin: auto;
`
const DivS = styled.div`
background-color: #fff;
padding: 7px 0px;
margin: auto   ;
width: 59vw;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid lightgray;
margin-top: 5px;
cursor: pointer;
`
const H1 = styled.h1`

`
const P1=styled.p``
const H2 = styled.h3``

const Button = styled.button`
  margin: 20px;
  /* background: lightgreen; */
  border: none;
  padding: 5px 15px;
  width: 150px;
  /* margin-left: 260px; */

  &:hover {
    cursor: pointer;
    background: blue;
    color: white;
  }
`;
const Img=styled.img`
height: 80px;
width: 130px;
background-color: gray;
object-fit: contain;
`
const Pra = styled.p`
width: 20vw;
overflow: hidden    ;
`
const Divnew = styled.div`
margin-top: 20px    ;
width: 80vw;
display: flex;
justify-content: end;

`
const Span = styled.span`
font-weight: 700;
font-size: 14px;
margin-left: 18px;
`

const Projectlist = () =>
{
  const PF =
    "http://localhost:3500/Public/Images/";
  
  const [data, setdata] = useState([]);

  const onload = async() =>
  { 
    try {
      // console.log(handle);
      const res = await api.get("/api/products")
      // handle(user.username);
      // dispatch(LoginSuccess(res.data));
      setdata(res.data)
      console.log(res.data);
    } catch (err) {
      // dispatch(LoginFail());
    }
  }
  // onload();
  useEffect(() => {
    onload();
  },[]);

  return (
      <Container>
          <Divnew>
              <Span>lorem</Span>
              <Span>lore </Span>
              <Span>faef</Span>
              <Span>faef</Span>
              <Span>faefa</Span>
          </Divnew>
      <Div>
        <H1>Created Projects</H1>
        <P1>A place to keep track of all your created projects</P1>
        <H2>Started</H2>
          </Div>
      <DivM>
        {
          data.map((item, index) =>
          {
            return item.iscreated === true ? (
              <DivS key={index}>
                <Img src={PF+item.coverimg} />
                <Pra>
                  { item.title}
                </Pra>
                <Button>Check</Button>
              </DivS>
            ) : (
              ""
            );
          })
                 
              }
              {/* <DivS>
                  <Img />
                  <Pra>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Pra>
                  <Button>Check</Button>
                </DivS>
              <DivS>
                  <Img />
                  <Pra>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Pra>
                  <Button>Check</Button>
                </DivS>
              <DivS>
                  <Img />
                  <Pra>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Pra>
                  <Button>Check</Button>
                </DivS> */}
          </DivM>
    </Container>
  );
}

export default Projectlist