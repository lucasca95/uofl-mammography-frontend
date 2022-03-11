import React from "react";
import {useForm} from 'react-hook-form';
import Layout from "../Layout";
import {InputBase} from '@mui/material';
import useStyles from "./styles";


function MainTemplate(props) {
    const {register, handleSubmit} = useForm();
    const classes = useStyles();
    const onSubmit = (data) => {
        props.updateImg(data.file[0]);
    };

    return (
        <Layout>
            <div className={classes.root}>
                <h3>Choose a file to upload</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.form}>
                        {/* <input type="file" {...register("file", { required: true})} name="file"/> */}
                        <InputBase type="file" {...register("file", { required: true})} name="file"/>
                        <button>Upload</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
export default MainTemplate;