// base imports
import Environment from './environment';
import { useEffect, useState, useContext, createContext } from 'react';
// import useStore, {Context} from './common/ContextBase';
import io from 'socket.io-client';
import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Theme from './theme/theme';

// import pages
import LoginP from './components/pages/LoginP';
import ImagesP from './components/pages/ImagesP';
import { useStore } from './common/Context';


function App() {
  const [socket, setSocket] = useState(true);
  const [load, setLoad] = useState(false);
  const [{token}, dispatch] = useStore();
  
  useEffect(()=>{
    const newSocket = io(Environment.api);
    // setSocket(newSocket);
    setLoad(true);
    return () => newSocket.close();
  },[]);

  // (socket) && socket.on('test', ()=>{
  //   alert(`Test action`);
  // });
  // (socket) && socket.on('new', ()=>{
  //   alert(`New action`);
  // });

  // // localStorage.removeItem('token'); setToken(null);
  if (!token){
    return<LoginP />
  }

  return (socket) 
  ?
    (
      <Theme>
        {load ? (
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<ImagesP />} />
              {/* <Route path="/login" element={<LoginP />} /> */}
            </Routes>
          </BrowserRouter>
        )
        :
          <></>
        }
          {/* {socket ? <MammogramP /> : <div>Error#90 has occured</div>} */}
      </Theme>
    )
  :
    (<CircularProgress color="inherit" />);
}

export default App;
