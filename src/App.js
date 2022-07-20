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
import MammogramP from './components/pages/MammogramP';
import { useStore } from './common/Context';
import TokenVerificationP from './components/pages/TokenVerificationP';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  // const [socket, setSocket] = useState(true);
  const [load, setLoad] = useState(false);
  const [{token}, dispatch] = useStore();
  const url = window.location.href.split("/")[3];
  
  useEffect(()=>{
    // const newSocket = io(Environment.api);
    // setSocket(newSocket);
    setLoad(true);
    // return () => newSocket.close();
  },[]);

  // (socket) && socket.on('test', ()=>{
  //   alert(`Test action`);
  // });
  // (socket) && socket.on('new', ()=>{
  //   alert(`New action`);
  // });

  if ((!token)){
    return<LoginP />
  }

  // return (socket) 
  return (true)
  ?
    (
      <Theme>
        {load ? (
          <BrowserRouter>
            <Routes>
              {/* <Route element={<ProtectedRoute reqPermission={true} token={token} />}>
              </Route> */}
              <Route path="/" element={<ImagesP />} />
              {/* <Route path="/verifytoken/:token" element={<TokenVerificationP />} /> */}
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
