import { useEffect, useState } from 'react';
import './App.css';

import Environment from './environment';
import io from 'socket.io-client';
import MainPage from './components/pages/MainPage';
import { Context, useStore } from './common/Context';


function App() {
  const [socket, setSocket] = useState(null);
  // const [{s}, dispatch] = useStore();

  const actionTest = (data)=>{
    console.log(`Server is communicating with us\n${data}`);
  };
  const newImgMsg = (data)=>{
    alert(`A new img has been added!`);
  };

  useEffect(()=>{
    const newSocket = io(Environment.api);
    setSocket(newSocket);
    // dispatch({
    //   type: 'setSocket',
    //   payload: socket,
    // });
    return () => newSocket.close();

    // dispatch({
    //   type: "",
    //   payload: socket || io(Environment.socket)
    // });
  },[setSocket]);

  (socket) && socket.on('test', ()=>{
    actionTest();
  });
  (socket) && socket.on('new', ()=>{
    newImgMsg();
  });

  return (
    <Context>
      <div className="App">
        {socket ? <MainPage /> : <div>Error#90 has occured</div>}
      </div>
    </Context>
  );
}

export default App;
