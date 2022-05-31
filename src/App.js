// base imports
import Environment from './environment';
import { useEffect, useState, useContext } from 'react';
import {Context} from './common/ContextBase';
import io from 'socket.io-client';
import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// import pages
import LoginP from './components/pages/LoginP';
import ImagesP from './components/pages/ImagesP';


function App() {
  const [socket, setSocket] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const actionTest = (data)=>{
    console.log(`Server is communicating with us\n${data}`);
  };
  const newImgMsg = (data)=>{
    // alert(`A new img has been added!`);
  };

  useEffect(()=>{
    const newSocket = io(Environment.api);
    setSocket(newSocket);
    return () => newSocket.close();
  },[setToken]);

  // (socket) && socket.on('test', ()=>{
  //   actionTest();
  // });
  // (socket) && socket.on('new', ()=>{
  //   newImgMsg();
  // });
  
  // if (!token){
  //   return <LoginP setToken={setToken} />
  // } else {
  //   // console.log(`Erase token: ${token}`);
  //   // localStorage.removeItem('token'); setToken(null);
  // }

  return (socket) 
  ?
    (
      <Context>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginP />} />
              {/* <Route path="/login" element={<LoginP />} /> */}
              {/* <Route path="/mammograms/login" element={<LoginP setTokenFunction={setToken} />}/> */}
            </Routes>
          </BrowserRouter>
          {/* {socket ? <MammogramP /> : <div>Error#90 has occured</div>} */}
      </Context>
    )
  :
    (<CircularProgress color="inherit" />);
}

export default App;
