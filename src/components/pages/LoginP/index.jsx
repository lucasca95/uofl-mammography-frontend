import React, { useContext, useEffect, useState } from 'react';
import { useStore } from '../../../common/Context';
import LoginService from '../../../services/LoginService';
import RegisterService from '../../../services/RegisterService';
import LoginT from '../../templates/LoginT';
import RegisterT from '../../templates/RegisterT';

function LoginP({
}){
    // used to show loading circle when communicating with backend
    const [validatingCredentials, setValidatingCredentials] = useState(false);

    // get {user} information from context
    const [{user, needToRegister}, dispatch] = useStore();

    const onSubmit = (data) => {
        setValidatingCredentials(true);
        if (needToRegister) {
            RegisterService.registerPOST(data)
            .then((response)=>{
                console.log(response);
                alert('Check your e-mail to validate your account.');
                if (response.status === 200) {
                    dispatch({
                        type: 'setNeedToRegister',
                        payload: false
                    });
                } else {
                    alert(response.message);
                }
            })
            .catch((error)=>{
                alert(`Bad response`);
                console.warn(error);
            })
            .then(()=>{
                setValidatingCredentials(false);
            })
        } else {
            LoginService.loginPOST(data)
            .then((response)=>{
                console.log(response);
                dispatch({
                    type: 'setToken',
                    payload: response.token
                });

                // Revisar la linea que sigue
                dispatch({
                    type: 'setUser',
                    payload:{ 
                        email: 'lucas.camino@louisville.edu',
                        token: true
                    }
                    // payload: data.userEmail
                });
            })
            .catch((error)=>{console.warn(error)})
            .then(()=>{
                setValidatingCredentials(false);
            })
        }
    }

    return (
        <div>
            {needToRegister 
            ? 
                <RegisterT 
                    validatingCredentials={validatingCredentials}
                    onSubmit={onSubmit}
                />
            : 
                <LoginT
                    validatingCredentials={validatingCredentials}
                    onSubmit={onSubmit}
                />
            }
        </div>
        
    )
}
export default LoginP;