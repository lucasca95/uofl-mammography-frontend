import React, { useContext, useEffect, useState } from 'react';
import { useStore } from '../../../common/Context';
import LoginService from '../../../services/LoginService';
import RegisterService from '../../../services/RegisterService';
import LoginT from '../../templates/LoginT';
import RegisterT from '../../templates/RegisterT';

function LoginP({
}){
    const [validatingCredentials, setValidatingCredentials] = useState(false);
    const [{user, token, needToRegister}, dispatch] = useStore();

    const onSubmit = (data) => {
        setValidatingCredentials(true);
        if (needToRegister) {
            // console.log(data);
            RegisterService.registerPOST(data)
            .then((response)=>{
                console.log(response);
                if (response.status === 200) {
                    alert(response.message);
                    dispatch({
                        type: 'setNeedToRegister',
                        payload: false
                    });
                } else {
                    alert(response.message);
                }
            })
            .catch((error)=>{
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
                dispatch({
                    type: 'setUser',
                    payload: data.userEmail
                });
            })
            .catch((error)=>{console.warn(error)})
            .then(()=>{
                setValidatingCredentials(false);
            })
        }
    }

    useEffect(()=>{
        
    },[]);
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