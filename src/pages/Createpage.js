import React from "react";
import styled from "styled-components";
import { useState } from "react";
import api from "../api/baseurl";
// import axios from "axios";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 5px; */

  /* justify-content: space-around; */
`;
const Div = styled.div`
  /* margin: auto; */
  margin: 2px;
  padding: 15px 30px;
  width: 55vw;
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: space-between;
  border: 0.25px lightgreen solid;
  &:hover {
    background: lightgreen;
    border: 0.25px solid gray;
    transition: ease 0.7s;
  }
`;
const H3 = styled.h3`
  margin: 0;
  padding: 0;
  margin-right: 10px;
`;
const Input = styled.input`
  margin: 20px;
  background: lightgreen;
  border: none;
  padding: 5px 15px;
  &:hover {
    cursor: pointer;
    background: green;
    color: white;
  }
`;
const Topdiv = styled.div`
  text-align: left;
  margin: auto;
  width: 57vw;
`;
const P = styled.p`
  font-weight: 200;
  font-size: 13px;
`;
const Button = styled.button`
  margin: 20px;
  /* background: lightgreen; */
  border: none;
  padding: 5px 15px;
  width: 150px;
  margin-left: 260px;

  &:hover {
    cursor: pointer;
    background: coral;
    color: white;
  }
`;
const Button21 = styled.button`
  margin: 20px;
  /* background: lightgreen; */
  border: none;
  padding: 5px 15px;
  width: 150px;
  margin-left: 260px;

  &:hover {
    cursor: pointer;
    background: green;
    color: white;
  }
`;


const Addhomee = () => {
  //=======================================
  //   // register
  //   const [username, setusername] = useState("");
  //   const [email, setuseremail] = useState("");
  //   const [password, setuserpass] = useState("");
  //   const [isregistered, setisreg] = useState(null);

  //   //=======================================
  //   //=======================================
  //   // lOGIN
  //   const [lemail, setluseremail] = useState("");
  //   const [lpassword, setluserpass] = useState("");
  //   const [isloggedin, setlogin] = useState(null);

  //   //=======================================
  const [title, settitle] = useState("");
  const [subtitletitle, setsubtitle] = useState("");
  //   const [amountcollected, setamountcollected] = useState("");
  const [Pledgedamount, setPledgedamount] = useState("");
  const [coverimg, setcoverimg] = useState(null);
  //   const [Backers, setBackers] = useState("");
  const [Daystogo, setDaystogo] = useState("");
  const [Category, setCategory] = useState("");
  console.log(setCategory);
  //   const [VedioLink, setVedioLink] = useState("");
  const [Campimg1, setCampimg1] = useState(null);
  const [Campimg2, setCampimg2] = useState(null);
  const [Campimg3, setCampimg3] = useState(null);
  //   const [Campimg4, setCampimg4] = useState("");
  //   const [Campimg5, setCampimg5] = useState("");
  //   const [Campimg6, setCampimg6] = useState("");
  //   const [Campimg7, setCampimg7] = useState("");
  //   const [Campimg8, setCampimg8] = useState("");
  //   const [Campimg9, setCampimg9] = useState("");
  //   const [Campimg10, setCampimg10] = useState("");
  //   const [CampVideo1, setCampVideo1] = useState("");
  //   const [CampVideo2, setCampVideo2] = useState("");
  //   const [CampVideo3, setCampVideo3] = useState("");
  //   const [CampVideo4, setCampVideo4] = useState("");
  //   const [CampVideo5, setCampVideo5] = useState("");
  const [Shopingestimatetext, setShopingestimatetext] = useState("");
  const [TermsandConditions, setTermsandConditions] = useState("");
  const [Rates, setRates] = useState("");
  const [Riskandchallanges, setRiskandchallanges] = useState("");
  // console.log(title);setCampVideo1
  const dataObj = {
    title,
    // amountcollected,
    Pledgedamount,
    subtitletitle,
    coverimg,
    // Backers,
    Daystogo,
    Category: Category ? Category : "home",
    // VedioLink,
    Campimg1,
    Campimg2,
    Campimg3,
    // Campimg4,
    // Campimg5,
    // Campimg6,
    // Campimg7,
    // Campimg8,
    // Campimg9,
    // Campimg10,
    // CampVideo1,
    // CampVideo2,
    // CampVideo3,
    // CampVideo4,
    // CampVideo5,
    Shopingestimatetext,
    TermsandConditions,
    Rates,
    Riskandchallanges,
    iscreated: true,
  };
  //   console.log(dataObj)
  //   //=====Regobj=======
  //   const Regobj = {
  //     username,
  //     email,
  //     password,
  //   };

  //   //===============Register
  //   const handleRegister = async (e) => {
  //     e.preventDefault();
  //     console.log(dataObj);
  //     try {
  //       const response = await api.post("/api/auth/register", Regobj);
  //       console.log(response.data);
  //       if (response.data.username === Regobj.username) {
  //         setisreg(true);
  //       } else {
  //         setisreg(false);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   //====LoginObj=====
  //   const Logobj = {
  //     username: lemail,
  //     password: lpassword,
  //   };

  //   //===============login
  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     console.log(Logobj);
  //     try {
  //       const response = await api.post("/api/auth/login", Logobj);
  //       console.log(response.data);

  //       if (response.data.username === Logobj.username) {
  //         setlogin(true);
  //       } else {
  //         setlogin(false);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const [created,setcreated] = useState(false);
  //   //===============submit
  const handleupload1 = async (e) => {
    // console.log(e.target.name);
      let file=e.target.files[0]
      if (file)
      { 
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name",filename)
          data.append("file",file)
          setcoverimg(filename);

           try {
             await api.post("/api/upload", data);
           } catch (err) {
             console.log(err);
           }
      }
     
  };
  const handleupload2 = async (e) => {
    // console.log(e.target.name);
      let file=e.target.files[0]
      if (file)
      { 
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name",filename)
          data.append("file",file)
          setCampimg1(filename);

           try {
             await api.post("/api/upload", data);
           } catch (err) {
             console.log(err);
           }
      }
     
  };
  const handleupload3 = async (e) => {
    // console.log(e.target.name);
      let file=e.target.files[0]
      if (file)
      { 
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name",filename)
          data.append("file",file)
          setCampimg2(filename);

           try {
             await api.post("/api/upload", data);
           } catch (err) {
             console.log(err);
           }
      }
     
  };
  const handleupload4 = async (e) => {
    // console.log(e.target.name);
      let file=e.target.files[0]
      if (file)
      { 
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name",filename)
          data.append("file",file)
          setCampimg3(filename);

           try {
             await api.post("/api/upload", data);
           } catch (err) {
             console.log(err);
           }
      }
     
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dataObj,"submit");
    try {
      const response = await api.post("/api/products", dataObj);
      console.log(response.data);
      if (response.status === 200) setcreated(true);
    } catch (err) {
      console.log(err);
    }
  };
    console.log(dataObj);
  return (
    <Container>
      <Topdiv>
        <h2>New Project </h2>
        <P> by - Rohit Kumar sahu</P>
      </Topdiv>
      <div>
        {/* <h3>Register</h3>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        /> */}
        {/* <input
          type="file"
          placeholder="file"
          
        /> */}
        {/* <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
        /> */}
        {/* <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setuserpass(e.target.value);
          }}
        /> */}
        {/* <input type="text" placeholder="Confirm-password" /> */}
        {/* <br />
        <input
          type="submit"
          onClick={(e) => handleRegister(e)}
          value="Register"
        /> */}
      </div>
      {/* {isregistered != null ? (
        isregistered ? (
          <h4>registered</h4>
        ) : (
          <h4>failed to registered</h4>
        )
      ) : (
        ""
      )} */}
      {/* <br />
      <br /> */}
      {/* <br /> */}
      {/* <br /> */}
      <div>
        {/* <h3>Login</h3> */}
        {/* <input type="text" placeholder="name" /> */}
        {/* <input
          type="text"
          placeholder="User name"
          onChange={(e) => {
            setluseremail(e.target.value);
          }}
        /> */}
        {/* <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setluserpass(e.target.value);
          }}
        /> */}
        {/* <input type="text" placeholder="Confirm-password" /> */}
        {/* <br /> */}
        {/* <input type="submit" onClick={(e) => handleLogin(e)} value="Login" /> */}
      </div>
      {/* {isloggedin != null ? (
        isloggedin ? (
          <h4>Logged in</h4>
        ) : (
          <h4>failed to Login</h4>
        )
      ) : (
        ""
      )} */}
      {/* <br />
        <br /> */}
      <br />
      <br />

      <Form action="" onSubmit={(e) => handleSubmit(e)}>
        <Div>
          <H3>Title :</H3>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </Div>
        <Div>
          <H3>Sub-Title :</H3>
          <input
            type="text"
            placeholder="subtitletitle"
            onChange={(e) => {
              setsubtitle(e.target.value);
            }}
          />
        </Div>
        {/* <input
          type="text"
          placeholder="amountcollected"
          onChange={(e) => {
              setamountcollected(e.target.value);
            }}
        /> */}
        <Div>
          <H3>Pledged Amount :</H3>
          <input
            type="text"
            placeholder="Pledged Amount"
            onChange={(e) => {
              setPledgedamount(e.target.value);
            }}
          />
        </Div>
        {/* <input
          type="text"
          placeholder="Backers"
          onChange={(e) => {
              setBackers(e.target.value);
            }}
        /> */}
        <Div>
          <H3>Time-Limit :</H3>
          <input
            type="text"
            placeholder="No of Days"
            onChange={(e) => {
              setDaystogo(e.target.value);
            }}
          />
        </Div>
        {/* <input
          type="text"
          placeholder="Category"
          onChange={(e) => {
              setCategory(e.target.value);
            }}
        /> */}
        {/* <input
          type="text"
          placeholder="VedioLink"
          onChange={(e) => {
            setVedioLink(e.target.value);
        }}
    /> */}
        {/* <input
          type="text"
          placeholder="Campimg4"
          onChange={(e) => {
              setCampimg4(e.target.value);
            }}
        />
        <input
          type="text"
          placeholder="Campimg5"
          onChange={(e) => {
              setCampimg5(e.target.value);
          }}
          />
        <input
        type="text"
          placeholder="Campimg6"
          onChange={(e) => {
              setCampimg6(e.target.value);
            }}
        />
        <input
          type="text"
          placeholder="Campimg7"
          onChange={(e) => {
            setCampimg7(e.target.value);
        }}
        />
        <input
        type="text"
        placeholder="Campimg8"
        onChange={(e) => {
            setCampimg8(e.target.value);
        }}
        />
        <input
        type="text"
        placeholder="Campimg9"
        onChange={(e) => {
            setCampimg9(e.target.value);
          }}
          />
        <input
        type="text"
          placeholder="Campimg10"
          onChange={(e) => {
            setCampimg10(e.target.value);
        }}
        /> */}
        {/* <input type="text" placeholder="Campimg10"  onChange={(e) => {
            setcoverimg(e.target.value);
          }}/> */}
        {/* <input
          type="text"
          placeholder="CampVideo1"
          onChange={(e) => {
            setCampVideo1(e.target.value);
        }}
        />
        <input
          type="text"
          placeholder="CampVideo2"
          onChange={(e) => {
              setCampVideo2(e.target.value);
          }}
          />
        <input
          type="text"
          placeholder="CampVideo3"
          onChange={(e) => {
            setCampVideo3(e.target.value);
        }}
    /> */}
        {/* <input
          type="text"
          placeholder="CampVideo4"
          onChange={(e) => {
              setCampVideo4(e.target.value);
          }}
          />
          <input
          type="text"
          placeholder="CampVideo5"
          onChange={(e) => {
              setCampVideo5(e.target.value);
            }}
        /> */}
        <Div>
          <H3>Context-1 :</H3>
          <input
            type="text"
            placeholder="Context-1"
            onChange={(e) => {
              setShopingestimatetext(e.target.value);
            }}
          />
        </Div>
        <Div>
          <H3>Context-2 :</H3>
          <input
            type="text"
            placeholder="Context-2"
            onChange={(e) => {
              setTermsandConditions(e.target.value);
            }}
          />
        </Div>
        <Div>
          <H3>Context-3 :</H3>
          <input
            type="text"
            placeholder="Context-3"
            onChange={(e) => {
              setRates(e.target.value);
            }}
          />
        </Div>
        <Div>
          <H3>Context-4 :</H3>
          <input
            type="text"
            placeholder="Context-4"
            onChange={(e) => {
              setRiskandchallanges(e.target.value);
            }}
          />
        </Div>
        <Div>
          <H3>Cover -1 :</H3>
          <input
            type="file"
            placeholder="Cover image"
            onChange={(e) => {
                setcoverimg(e.target.files[0]);
                 handleupload1(e);
            }}
          />
          {/* <ButtonUP>Upload</ButtonUP> */}
        </Div>
        <Div>
          <H3>Image-1 :</H3>
          <input
            type="file"
            placeholder="Image-1"
            onChange={(e) => {
                setCampimg1(e.target.files[0]);
                 handleupload2(e);
            }}
          />
          {/* <ButtonUP>Upload</ButtonUP> */}
        </Div>
        <Div>
          <H3>Image-2 :</H3>
          <input
            type="file"
            placeholder="Image-2"
            onChange={(e) => {
                setCampimg2(e.target.files[0]);
                 handleupload3(e);
            }}
          />
          {/* <ButtonUP>Upload</ButtonUP> */}
        </Div>
        <Div>
          <H3>Image-3 :</H3>
          <input
            type="file"
            placeholder="Image-3"
            onChange={(e) => {
              setCampimg3(e.target.files[0]);

              handleupload4(e);
            }}
          />
          {/* <ButtonUP>Upload</ButtonUP> */}
        </Div>
        <Input type="submit" value="Create Project" name="" />
      </Form>
      { (created)?<h3>Project Created</h3>:""}
      <Button> Discard Project </Button>
      <Button21>Project Pages</Button21>
    </Container>
  );
};

export default Addhomee;
