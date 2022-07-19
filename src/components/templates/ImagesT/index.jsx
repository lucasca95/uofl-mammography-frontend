import {CircularProgress, Container, InputBase } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useStore} from '../../../common/Context';
import Layout from '../Layout';
import useStyles from "./styles";
import ImagesTableO from '../../organisms/ImagesTableO';
import { useForm } from 'react-hook-form';

function ImagesT({loading, imagesList=[], uploadImg, handleDownloadFiles}) {
    const classes = useStyles();
    const {register, handleSubmit, resetField} = useForm();

    const data = [
        {id: 19319, name: "MAMO 1"},
        {id: 24389, name: "THIS IS A NAME"},
        {id: 75304, name: "JOSE ALBERTO"},
        {id: 89232, name: "THE RETREAT"},
        {id: 92123, name: "IT'S HOT TODAY"},
        {id: 46777, name: "TESTING TABLE"}
    ];

    const onSubmit = (data) => {
        uploadImg(data);
        // resetField('file');
    };

    return (
        <Layout>
            <Container
                maxWidth={false}
                className={classes.root}
            >
                {(loading)?
                    <CircularProgress />
                :
                <div>
                    <h1>Welcome!</h1>
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.form}>
                            Upload a new image ->
                            &emsp;
                            <InputBase type="file" 
                                name="file" 
                                required 
                                {...register("file", {required: true})} 
                                // style={{display: 'none'}}
                            />
                            <button type='submit'>Upload</button>
                        </div>
                    </form>
                    <br/>
                    {(imagesList.length)
                    ?
                    <ImagesTableO className={classes.table}
                        images={imagesList}
                        handleDownloadFiles={handleDownloadFiles}
                    />
                    :
                    <div><i>There are no images to show</i></div>
                    }
                    
                </div>
                }
            </Container>
        </Layout>
    );
}
export default ImagesT;