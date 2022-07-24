import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Theme from './theme/theme';
import ProtectedRoute from './routes/ProtectedRoute';
import { useStore } from './common/Context';

import LoginP from './components/pages/LoginP';
import ImagesP from './components/pages/ImagesP';
import EmailVerificationP from './components/pages/EmailVerificationP';
import Layout from './components/templates/Layout';

function App() {
  const [{user}, dispatch] = useStore();
  const [pageIsLoading, setPageIsLoading] = useState(true);
  
  useEffect(()=>{
    setPageIsLoading(false);
    // dispatch({
    //   type: 'setUser',
    //   payload: {
    //     email: 'lucas.camino@louisville.edu',
    //     token: true
    //   }
    // });
  },[]);

  return (pageIsLoading)
  ?
    <CircularProgress color="inherit" />
  :
    <Theme>
        <BrowserRouter>
          <Routes>
            <Route index element={
              <ProtectedRoute>
                <ImagesP />
              </ProtectedRoute>
            } />
            <Route path="/home" element={
              <ProtectedRoute>
                <ImagesP />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginP />} />
            <Route path="/verifyemail/:token/:email" element={<EmailVerificationP />} />
            <Route path="*" element={
              <div>
                <h1 style={{'textAlign': 'center'}}>Ups!</h1>
                <h2 style={{'textAlign': 'center'}}>404: Page not found</h2>
              </div>
            } />
          </Routes>
        </BrowserRouter>
    </Theme>
  ;
}

export default App;