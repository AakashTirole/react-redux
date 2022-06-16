import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from '../state/index'
function Register(props) {

  // const userData = {
  //   userName: useSelector(state => state.userName),
  //   userNumber:  useSelector(state => state.userNumber),
  //   userEmail: useSelector(state => state.userEmail),
  //   userPassword: useSelector(state => state.userPassword)
  // }

  const dispatch = useDispatch();
  const {handleSetName, handleSetNumber, handleSetEmail, handleSetPassword} = bindActionCreators(actionCreators, dispatch)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  // const [zip, setZip] = useState('');

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleNumber=(e)=>{
    setNumber(e.target.value)
  }
  const handleName=(e)=>{
    setName(e.target.value)
  }
  // const handleZipcode=(e)=>{
  //   if(e.target.value.length === 5){
  //     setZip(e.target.value);
  //   }
  //   if(e.target.value.length > 5 ){
  //     if(e.target.value.charAt(5) === '-' && e.target.value.length <= 10){
  //       setZip(e.target.value);
  //     }
  //   }
  //   else{
  //     console.log("It cant be more than 5 digit");
  //   }
  // }
  const handleSingup=(e)=>{
    if(email != '' && password != '' && number != ''){
      // window.localStorage.setItem("email", email);
      // window.localStorage.setItem("password", password);
      // window.localStorage.setItem("name", name);
      // window.localStorage.setItem("number", number);
      handleSetName(name);
      handleSetNumber(number);
      handleSetEmail(email);
      handleSetPassword(password);
      props.parentCallback("login");
    }else{
      alert("Please fill all details");
    }
  }
  const handleGotoLogin=()=>{
    props.parentCallback("login");
  }
  return (
    <div className="wrapper">
      <div className="ls-form">
          <div className="form">
              <div className="heading">
                  <h2>Welcome To Our Site</h2>
              </div>
              {/* <div className="form-group">
                  <input onChange={handleZipcode} type="text" className="input" required placeholder="Zip" name="" id="" />
              </div> */}
              <div className="form-group">
                  <input onChange={handleName} type="text" className="input" required placeholder="Enter Full Name" name="" id="" />
              </div>
              <div className="form-group">
                  <input onChange={handleNumber} type="text" className="input" required placeholder="Enter Number" name="" id="" />
              </div>
              <div className="form-group">
                  <input onChange={handleEmail} type="email" className="input" required placeholder="Enter Email" name="" id="" />
              </div>
              <div className="form-group">
                  <input onChange={handlePassword} type="password" className="input" required placeholder="Enter Password" name="" id="" />
              </div>
              <div className="login-btn">
                  <button className="btn1" onClick={handleSingup}>signup</button>
              </div>
          </div>
          <div className="newUserRegistr"><span onClick={handleGotoLogin}>Already signup? Login</span></div>
      </div>
    </div>
  );
}

export default Register;
