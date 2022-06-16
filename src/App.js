import './App.css';
import { useState } from "react";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App(props) {
  const [componentState, setcomponentState] = useState('register')
  const sendDataToChild = (childData) => {
    setcomponentState(childData)
  };
  return (
    <div>
      {componentState === 'register' && <Register parentCallback={sendDataToChild}/>}
      {componentState === 'login' && <Login parentCallback={sendDataToChild}/>}
      {componentState === 'home' && <Home/>}
    </div>
  );
}
export default App;
