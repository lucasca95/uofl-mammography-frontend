import React, { useRef } from "react";
import {useForm} from 'react-hook-form';
import Layout from "../Layout";
import {InputBase} from '@mui/material';
import useStyles from "./styles";
import ImagesListO from "../../organisms/ImagesListO";
import { gridSortColumnLookupSelector } from "@mui/x-data-grid";


function MainTemplate(props) {
    const {register, handleSubmit, resetField} = useForm();
    const classes = useStyles();

    const onSubmit = (data) => {
        props.updateImg(data.file[0]);
        resetField('file');
    };

    return (
        <Layout>
            <div className={classes.root}>
                <h3>Choose a file to upload</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.form}>
                        <InputBase type="file" {...register("file", { required: true})} name="file"/>
                        <button>Upload</button>
                    </div>
                </form>
                <div><br/></div>
                <div className={classes.imagesList}>
                    <ImagesListO />
                </div>
            </div>
        </Layout>
    );
}
export default MainTemplate;