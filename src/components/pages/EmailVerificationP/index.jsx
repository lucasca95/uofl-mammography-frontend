import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import VerificationService from "../../../services/VerificationService";

function EmailVerificationP({}) {
    const { token, email } = useParams();
    const [ready, setReady] = useState(false);
    const [tokenIsOK, setTokenIsOK] = useState(false);

    const userData = {
        'token': token,
        'email': email
    }

    VerificationService.verifyEmailPOST(userData)
    .then((response)=>{
        if (response.status === 200){
            setTokenIsOK(true);
            alert("Token was accepted");
        }
    })
    .catch((error)=>{
        console.log(error);
        alert("Token wasn't accepted");
    })
    .then(()=>{
        setReady(true);
    });

    return (
        (ready)
        ?
            <Navigate to='/home' replace />
        :
            <div></div>
    );
}
export default EmailVerificationP;