import { FormControl, FormGroup, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import useStyles from "./styles";

function LoginT(props) {
    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root}>
                <h1>Login</h1>
                <form>
                    <FormGroup>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>

                    </FormGroup>

                </form>
            </div>
            
        </Layout>
    );
}
export default LoginT;