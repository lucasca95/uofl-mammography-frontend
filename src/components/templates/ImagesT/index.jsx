import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useStore} from '../../../common/Context';
import Layout from '../Layout';
import useStyles from "./styles";

function ImagesT(props) {
    const classes = useStyles();
    // const context = useContext(UserContext);
    const [{ useAux }, dispatch] = useStore();
    // console.log(context);

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