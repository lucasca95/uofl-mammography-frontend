import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, CircularProgress, Container, TextField } from '@mui/material';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import LoginService from '../../../services/LoginService';
import LoginT from '../../templates/LoginT';

function LoginP(props){
    // const {register, handleSubmit, resetField} = useForm();
    // const [validatingCredentials, setValidatingCredentials] = useState(false);

    // const onSubmit = (data) => {
    //     resetField('userEmail');resetField('userPassword');
    //     setValidatingCredentials(true);
    //     LoginService.loginPOST(data)
    //     .then((response)=>{
    //         console.log(response);
    //         localStorage.setItem('token', response.token);
    //         alert("");
    //         props.setToken(response.token);
    //         setValidatingCredentials(false);
    //     })
    //     .catch((error)=>{console.warn(error)})
    // }
    // useEffect(()=>{
    //     console.log(props);
    // },[]);
    return (
        <LoginT />
        // <Container className={classes.root}>
        //     <h1>Welcome!</h1>
        //     {(!validatingCredentials) ?
        //         <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        //             <div className='element'>
        //                 <TextField
        //                 {...register("userEmail",{ required: true })}
        //                 required
        //                 id="outlined-required"
        //                 label="Email address"
        //                 defaultValue=""
        //                 type="email"
        //                 />
        //             </div>
        //             <div className='element'>
        //                 <TextField
        //                 {...register("userPassword", { required: true })}
        //                 required
        //                 id="outlined-required"
        //                 label="Password"
        //                 type="password"
        //                 />
        //             </div>
        //             <p className={classes.description}></p>
        //             <div className={classes.buttonArea}>
        //                 <Button 
        //                     className={classes.buttonRegister} 
        //                     variant="outlined"
        //                     onClick={()=>{alert("Not implemented yet")}}>
        //                     Register
        //                 </Button>
        //                 <Button type='submit' variant="contained">Log in</Button>
        //             </div>
        //         </form>
        //     :
        //     <CircularProgress color="inherit" />
        //     }
        // </Container>
    )
}
export default LoginP;