import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
/* border: 1px solid black; */
border-color: #E8E8E8;
border-bottom: 0.1rem solid #DCDEDD;
margin: 0;
padding: 0;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: inherit;
font-weight: inherit;
vertical-align: baseline;
line-height: 1.5;
color: #282828;
-webkit-font-smoothing: antialiased;

`;

const Border = styled.div`
width: 100%;
height: 700px;
border-top: 5px solid black;
padding-top: 4.8rem !important;
padding-bottom: 4.8rem !important;

@media (min-width: 795px){
    padding-left: 60px;
    padding-right: 60px;
}

max-width: 1400px;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;
margin: 0;
border: 0;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: inherit;
font-weight: inherit;
vertical-align: baseline;
display: flex;
flex-direction: row;

@media (min-width: 600px){
    flex-basis: 100%;
}
/* border: 1px solid black; */
`;

const Div = styled.div`
width: 100%;
height: 590px;
/* border: 1px solid black; */
margin: 0 auto;

`
const H3 = styled.h3`
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
text-transform: uppercase;
margin-bottom: 1rem;
margin-top: 0rem;
font-weight: 600;
color: #656969;

@media (min-width: 795px){
font-size: 0.9rem;
line-height: 0.9rem;
}

box-sizing: inherit;
h3 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
/* border: 1px solid black; */
`
const Grids = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 550px;
justify-content: space-between;
/* flex-wrap: wrap; */
display: flex;
flex-direction: row;
-webkit-font-smoothing: antialiased;
`
const Grid = styled.div`
/* border: 1px solid black; */
width: 25%;
height: 550px;
justify-content: space-between;
flex-wrap: wrap;
display: flex;
flex-direction: row;
-webkit-font-smoothing: antialiased;
div:hover{
    color: #2F7463;
    text-decoration: underline;
}
`

const Image1 = styled.img`
/* border: 1px solid black; */
display: flex;
width: 92%;
height: 350px;
flex-direction: row;
margin-left: 0px;
padding: 0;

@media (min-width: 600px){
    flex-basis: 50%;
}
img:hover{
    color: blue;
}
cursor: pointer;
margin-bottom: 20px;
`
const Image2 = styled.img`
/* border: 1px solid black; */
display: flex;
width: 92%;
height: 350px;
flex-direction: row;
margin-left: 9px;
padding: 0;

@media (min-width: 600px){
    flex-basis: 50%;
}
cursor: pointer;
margin-bottom: 20px;
`
const Image3 = styled.img`
/* border: 1px solid black; */
display: flex;
width: 92%;
height: 350px;
flex-direction: row;
margin-left: 15px;
padding: 0;

@media (min-width: 600px){
    flex-basis: 50%;
}
cursor: pointer;
margin-bottom: 20px;
`
const Image4 = styled.img`
/* border: 1px solid black; */
display: flex;
width: 92%;
height: 350px;
flex-direction: row;
margin-left: 23px;
padding: 0;

@media (min-width: 600px){
    flex-basis: 50%;
}
cursor: pointer;
margin-bottom: 20px;
`

const Content1 = styled.div`
/* border: 1px solid black; */
display: flex;
margin-left: 0px;
flex-direction: row;
padding: 0;

@media (min-width: 600px){
    flex-basis: 100%;
}
font-size: 0.9em;
`;

const Content2 = styled.div`
/* border: 1px solid black; */
display: flex;
margin-left: 9px;
flex-direction: row;
padding: 0;

@media (min-width: 600px){
    flex-basis: 100%;
}
font-size: 0.9em;
`;

const Content3 = styled.div`
/* border: 1px solid black; */
display: flex;
margin-left: 15px;
flex-direction: row;
padding: 0;

@media (min-width: 600px){
    flex-basis: 100%;
}
font-size: 0.9em;
`;

const Content4 = styled.div`
/* border: 1px solid black; */
display: flex;
margin-left: 23px;
flex-direction: row;
padding: 0;

@media (min-width: 600px){
    flex-basis: 100%;
}
font-size: 0.9em;

`;

const ContentData = styled.div`
/* border: 1px solid black; */
margin-left: 0px;
width: 92%;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: inherit;
height: 130px;
color: #282828;
line-height: 1.2;
font-size: 0.9em;
text-decoration: none;

a{
    text-decoration: none;
    color: #282828;
}
a:hover{
    color: #2F7463;
    text-decoration: underline;
}
p:hover{
    color: #2F7463;
    text-decoration: underline;
}
h2{
    margin-top: 0px;
    color: #656969;
    font-size: 1rem;
    line-height: 1.4rem;
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
}
`;

const H5 = styled.h5`
margin-top: 30px;
a{
    text-decoration: none;
    color: #656969;
}
a:hover{
    text-decoration: underline;
}
`
const Grid2 = () => {
  return (
    <Container>
        <Border>
            <Div>
            <H3>CREATOR SUCCESS STORIES</H3>
            <Grids>
            <Grid>
                <Image1 
                    src="https://ksr-static.imgix.net/CaseStudy_WaxPoetics-400x500-3-e9aa7fd.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=e553548f556bd28d6d687a39f918be87"
                    alt=""
                />
                <Content1>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">Reviving 'Wax Poetics,' the cult 
                                magazine for long-form music
                                journalism and vinyl culture</a></h2>
                            <p>
                                After the magazine closed down, longtime
                                readers Alex Bruh and David Holt launched a
                                campaign to rally an existing and expanding
                                community.
                            </p>
                            </div>
                        </ContentData>
                        <H5><a href="/">Read more</a></H5>
                    </div>
                </div>
                </Content1>
            </Grid>
            <Grid>
                <Image2 
                    src="https://ksr-static.imgix.net/CS_Kaleidadope_Creator-400x500-2456f02.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=33c391dff83f1230bc44832272b63e74"
                    alt=""
                />
                <Content2>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">How tarot creator Krystal Banner
                                strengthens her intuition-and
                                business-on Kickstarter</a></h2>
                            <p>
                                The all-or-nothing crowdfunding model can
                                serve as a poll on what projects are worh her
                                time.
                            </p>
                            </div>
                        </ContentData>
                        <H5><a href="/">Read more</a></H5>
                    </div>
                </div>
                </Content2>
            </Grid>
            <Grid>
                <Image3 
                    src="https://ksr-static.imgix.net/ClaudiaCastro_400x500-1-ba11cf5.jpg?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f436a67aa9ecf0a55639fed3913ae147"
                    alt=""
                />
                <Content3>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">Creators: Plan what you can, but
                                prepare for twists and turns</a></h2>
                            <p>
                                This poet and printer wanted to engage the
                                communities along the Columbia River. It
                                didn't go exactly as planned, but their go-with-
                                the-flow attitude brought them through.
                            </p>
                            </div>
                        </ContentData>
                        <H5><a href="/">Read more</a></H5>
                    </div>
                </div>
                </Content3>
            </Grid>
            <Grid>
                <Image4 
                    src="https://ksr-static.imgix.net/final-craighton-berman_case-studies_4-5-9dd3995.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=fa1a9330f8eef4b62ec9b0f48bec40e4"
                    alt=""
                />
                <Content4>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">Craighton Berman's advice for
                                simple creative campaigns</a></h2>
                            <p>
                                This designer relies on big campaigns to build
                                his independent practice. But, here's how he 
                                gives himself a break-and new opportunities
                                -with smaller campaigns.
                            </p>
                            </div>
                        </ContentData>
                        <H5><a href="/">Read more</a></H5>
                    </div>
                </div>
                </Content4>
            </Grid>
            </Grids>
            </Div>
        </Border>
    </Container>
  )
}

export default Grid2