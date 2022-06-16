import { useState } from "react";
import { useSelector } from "react-redux";
function Login(props) {

  const userEmail =  useSelector(state => state.userEmail);
  const userPassword =  useSelector(state => state.userPassword);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [worongCred, checkWorongCred] = useState(false);

  // const getRegisterdEmail = window.localStorage.getItem('email');
  // const getRegisterdpassword = window.localStorage.getItem('password');
  
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    checkWorongCred(false);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
    checkWorongCred(false);
  }
  const handleSingup=()=>{
    if(email != "" && password != ""){
      if(email === userEmail && password === userPassword){
        props.parentCallback("home");
      }else{
        checkWorongCred(true);
      }
    }
  }
  const handleGotoSignup=()=>{
    props.parentCallback("register");
  }
  return (
    <div className="wrapper">
      <div className="ls-form">
          <div className="form">
              <div className="heading">
                  <h2>Welcome Back...</h2>
                  <p>Please fill details to login</p>
              </div>
              <div className="form-group">
                  <input onChange={handleEmail} type="email" className="input" required placeholder="Enter Email" name="" id="" />
              </div>
              <div className="form-group">
                  <input onChange={handlePassword} type="password" className="input" required placeholder="Enter Password" name="" id="" />
              </div>
              {worongCred && <p className="wrong">Wrong Credentials, Please try again</p>}
              <div className="login-btn">
                  <button className="btn1" onClick={handleSingup}>Login</button>
              </div>
          </div>
          <div className="newUserRegistr"><span onClick={handleGotoSignup}>Don't have an account? signup</span></div>
      </div>
    </div>
  );
}

export default Login;
