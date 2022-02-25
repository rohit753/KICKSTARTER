import React,{useState} from "react";
// import axios from "axios"
// import { useHistory } from "react-router-dom"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const box = {
  margin: "30px 36% 30px 37%",
  borderRadius: "5px",
  height: "auto",
  width: "26%",
  backgroundColor: "white",
  paddingBottom: "30px",
};
const inputBox = {
  margin: "10px 30px",
  border: "1px solid grey",
  height: "35px",
  width: "85%",
  padding: "10px",
};
const btn = {
  margin: "18px 0px 0px 0px",
  height: "40px",
  width: "85%",
  border: "1px solid rgb(2,123,80)",
  backgroundColor: "rgb(2,123,80)",
  color: "white",
  fontSize: "20px",
};
const fb = {
  margin: "0px 0px 10px 0px",
  height: "40px",
  width: "85%",
  border: "1px solid rgb(57,87,154)",
  backgroundColor: "rgb(57,87,154)",
  color: "white",
  fontSize: "17px",
};

const apple = {
  margin: "15px 30px",
  height: "40px",
  width: "85%",
  border: "1px solid red",
  backgroundColor: "red",
  borderRadius: "5px",
  color: "white",
  fontSize: "20px",
};


export const Register =() => {

    // const history = useHistory()
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    // const register = () => {
    //     const { name, email, password } = user
    //     if( name && email && password ){
    //         axios.post("http://localhost:9002/register", user)
    //         .then( res => {
    //             alert(res.data.message)
    //             history.push("/login")
    //         })
    //     } else {
    //         alert("invlid input")
    //     }
        
    // }

    return (
        <div  style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#f5efff",
          padding: "30px 0px",
        }}>
        
          <div  style={box}>
          <div style={{paddingTop:"20px"}}>
           <p>Have an account?<a href="/" 
           style={{textDecoration: "none"}}
        //    onClick={() => history.push("/login")}
           > Log in</a></p>
        </div>
        <hr/>
            <h1 style={{
              textAlign: "left",
              marginLeft: "30px",
              paddingTop: "20px",
              fontWeight:400,
              fontSize:"30px"
            }}>Sign up
            </h1>
            <input
            style={inputBox}
            type="text"
            value={user.name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <br />
            <input
            style={inputBox}
            type="text"
            value={user.email}
            name="email"
            placeholder="Email"
            onChange={ handleChange }
          />
          <br />
            <input
             style={inputBox}
             type="password"
             value={user.password}
             name="password"
             placeholder="Password"
             onChange={ handleChange }
             />
              <br />
          <a
            style={{
              textDecoration: "none",
              marginLeft: "30px",
              fontSize: "13px",
        
              
            }}
            href="google.com"
          >
            Forget your password?
          </a>
          <button style={btn} 
        //   onClick={register}
          >
            Create account
          </button>
          <div style={{ textAlign: "center" }}>
            {" "}
            {"error" &&<h5>Invalid credentials</h5>}{" "}
          </div>
          <p
            style={{
              margin: "0px 30px",
              fontSize: "13px",
              textAlign:"left",
              textEmphasis: "GrayText",
            }}
          >
           By signing up, you agree to our Privacy Policy, Cookie Policy and Terms of Use.
          </p>
          <a
            style={{
              textDecoration: "none",
              marginLeft: "30px",
              fontSize: "16px",
            }}
            href="google.com"
          >
            Read more
          </a>
          
          <p style={{ textAlign: "center" }}>or</p>
          <button style={apple} >
          <GoogleIcon/> Sign in with Google
          </button>
          <button style={fb}>
          <FacebookIcon/> Continue with Facebook
          </button>
          <p
            style={{
              margin: "0px 30px",
              fontSize: "13px",
              textAlign:"left",
              textEmphasis: "GrayText",
            }}
          >
            Get notified when your friends back and launch projects. We'll never
            post anything on Facebook without your permission.
          </p>
          <a
            style={{
              textDecoration: "none",
              marginLeft: "30px",
              fontSize: "16px",
            }}
            href="google.com"
          >
            Read more
          </a>
         
         
          </div>
          
  
        </div>
      );
     
}