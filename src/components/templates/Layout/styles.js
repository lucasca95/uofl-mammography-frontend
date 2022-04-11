import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(230,230,230)",
        height: "100vh",
    },
    topBar: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(230,100,100)",
        width: "100vw",
        height: "15%",
    },
    topBarLeft: {
        display: "flex",
        width: "20%",
        // backgroundColor: "rgb(100,100,180)",
        // width: "10",
    },
    topBarRight: {
        display: "flex",
        // backgroundColor: "rgb(100,180,100)",
        width: "40%",
        alignItems: "center",
    },
}));

export default useStyles;
