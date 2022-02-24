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
    line-height: 1.3rem;
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
const Grid1 = () => {
  return (
    <Container>
        <Border>
            <Div>
            <H3>THE MAKING OF</H3>
            <Grids>
            <Grid>
                <Image1 
                    src="https://ksr-static.imgix.net/4f2ce43055fbe9359a13f3c91379263a_original-4c140d9.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=34a3fc76c549ca19c09eb83b86a33612"
                    alt=""
                />
                <Content1>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">Uusi's Secrets for Kickstarter Success</a></h2>
                            <p>
                                Linnea Gits of the Uusi design studio shares
                                her Kickstarter story and pays it forward with
                                tips for aspiring creators.
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
                    src="https://ksr-static.imgix.net/tin-crop-ed2a47a.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=c072c44dd65b1db6bb9007e61fbc7cb4"
                    alt=""
                />
                <Content2>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">Composer Christopher Tin wants 
                                to create an album to
                                commemorate extinct birds</a></h2>
                            <p>
                                The Grammy-winning artist is back with a
                                requiem that offers some hope-and a
                                warning-for the planet's future.
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
                    src="https://ksr-static.imgix.net/galdem-45-11cf59e.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=b6d4f56070e7f5aec3bafbc97316d8e0"
                    alt=""
                />
                <Content3>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">9 creators share advice from their
                                journey to help guide yours</a></h2>
                            <p>
                                Over the last several weeks, we hosted a series
                                of small workshops for creators of color and 
                                marginally genders in the UK, in
                                collaborative with gal-dem magaine. Here,
                                we open up some of the insights and advice
                                from those sessions to all.
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
                    src="https://ksr-static.imgix.net/Screen_Shot_2021-03-11_at_12-14-34_PM-a2b84ac.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=bdaeae97bc01ea8402b4146f58cfca93"
                    alt=""
                />
                <Content4>  
                <div>
                    <div>
                        <ContentData>
                            <div>
                            <h2><a href="/">Focusing on the artist behind the
                                comics sensation</a></h2>
                            <p>
                                Filmmakers Jim Demonakos and Kevin Hanna
                                are making a documentary about 'Hellboy'
                                creator Mike Mignola.
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

export default Grid1