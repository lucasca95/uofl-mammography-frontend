import React from "react";
import {useForm} from 'react-hook-form';
import Layout from "../Layout";


function MainTemplate(props) {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        props.updateImg(data.file[0]);
    };

    return (
        <Layout>
            <h3>Choose a file to upload</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file", { required: true})} name="file"/>
                <button>Upload</button>
            </form>
        </Layout>
    );
}
export default MainTemplate;