import "./login.css"
import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import { getAllUsers } from "../../utils/getAllUsers";


  const Login = () => {
    const passwordRef = useRef()
    const usernameRef = useRef()
    const navigate = useNavigate()
    
    

    const logForm = (e) => {
    e.preventDefault()
    const users = getAllUsers()
    const currentUser = users.find(user => user.email === usernameRef.current.value.toLowerCase().trim())

    if(!currentUser) {
      return alert("User not found")  
    }

    if(usernameRef.current.value.toLowerCase() === currentUser.email && passwordRef.current.value === currentUser.password){
      navigate("/")
    }else{
      alert("Error")
    }

  }
    return(
  <section className="login-sec">
    <div className="login-form">
        <h1 className="sing-h1">Sign In With</h1>
        <div className="btn-cont">
            <button className="fb-btn"><i className="fa-brands fa-square-facebook"></i> Facebook</button>
            <button className="gg-btn"><img src="https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png" alt="google-icon"/> Google</button>
        </div>
        <div className="input-cont">
        <form>
            <input type="email" placeholder="Email" ref={usernameRef}/>
            <input type="password" maxLength={13} minLength={8} placeholder="Password" ref={passwordRef}/>
            <button className="sing-btn" onClick={logForm}>Sign In</button>
        </form>
        <p className="verj">Not a member? <a className="forgot" href="">Sign Up Now</a></p>
        </div>
    </div>

  </section>
    )
  };
  
  export default Login;