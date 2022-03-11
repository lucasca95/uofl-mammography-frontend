import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "rgb(0,0,0)",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& input": {
            paddingLeft: "15%",
            marginTop: "5%",
            marginBottom: "5%",
        }
    },
}));

export default useStyles;
