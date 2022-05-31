import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import useStyles from "./styles";

function ImagesT(props) {
    const classes = useStyles();

    return (
        <Layout>
            <Container 
                maxWidth={false}
                className={classes.root}
            >
                <h1>Access!</h1>
            </Container>
        </Layout>
    );
}
export default ImagesT;