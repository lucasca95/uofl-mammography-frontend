import React from "react";
import useStyles from "./styles";

function Layout(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.topBar}>
                <div className={classes.topBarLeft}>
                    <img src="/UofLImg.png" alt="uoflimg"/>
                </div>
                <div className={classes.topBarRight}>
                    <h1>University of Louisville</h1>
                </div>
            </div>
            <div>
                
                <h1>Images Upload Service</h1>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Layout;