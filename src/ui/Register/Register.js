import "./Register.css"
import { useRef } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../utils/getAllUsers";

const Register = () => {
  const passwordRef = useRef()
  const emailRef = useRef()
  const usernameRef = useRef()
  const navigate = useNavigate()
  const regForm = (e) => {
    e.preventDefault()
    if(emailRef.current.value.trim() && passwordRef.current.value.trim() && usernameRef.current.value.trim()){
      const newUser = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      const users = getAllUsers()

      if(users.find(user => user.email === newUser.email)) {
        return alert("User already exists")
      }

      localStorage.setItem(newUser.username, JSON.stringify(newUser))
      navigate("/")
    }
    
  }
    return(
  <section className="login-sec">
    <div className="login-form">
        <h1 className="sing-h1">Sign Up With</h1>
        <div className="btn-cont">
            <button className="fb-btn"><i className="fa-brands fa-square-facebook"></i> Facebook</button>
            <button className="gg-btn"><img alt="google-icon" src="https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png"/> Google</button>
        </div>
        <div className="input-cont">
        <form>
            <input type="text" maxLength={13} minLength={3} placeholder="Username" ref={usernameRef}/>
            <input type="email"  placeholder="Email" ref={emailRef}/>
            <input type="password" maxLength={13} minLength={8} placeholder="Password" ref={passwordRef}/>
     
            <Link to="/"><button  className="sing-btn" onClick={regForm}>Sing UP</button></Link> 
        </form>
        
        </div>
    </div>

  </section>
    )
  };
  
  export default Register;