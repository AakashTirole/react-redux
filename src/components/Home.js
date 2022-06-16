import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  // const [emailData, setEmailData] = useState('');
  // const [numberData, setNumberData] = useState('');
  // const [namerData, setNameData] = useState('');


  const userName =  useSelector(state => state.userName);
  const userNumber=  useSelector(state => state.userNumber);
  const userEmail =  useSelector(state => state.userEmail);
  const userPassword =  useSelector(state => state.userPassword);

  useEffect(() => {
    // setEmailData(window.localStorage.getItem('email'));
    // setNumberData(window.localStorage.getItem('number'));
    // setNameData(window.localStorage.getItem('name'));
  });
  return (
    <div className="wrapper">
      <div className="table">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Number</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userName}</td>
              <td>{userNumber}</td>
              <td>{userEmail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
