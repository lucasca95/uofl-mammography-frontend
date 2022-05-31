import React, { useState } from "react";
import { 
    AppBar, 
    Avatar,
    Container, 
    createTheme, 
    IconButton, 
    Menu, 
    MenuItem, 
    ThemeProvider, 
    Toolbar } from "@mui/material";
import useStyles from "./styles";
import { AccountCircle } from "@mui/icons-material";


function Layout(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ed3300',
            }
        }
    });

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (d) => {
        console.log(d);
        setAnchorEl(null);
      };

    return (
        <ThemeProvider theme={theme}>
            <Container 
                disableGutters={true}
                fixed={false}
                maxWidth={'xl'}
                className={classes.root}
            >
                <AppBar position="static">
                    {/* <Container maxWidth="xl"> */}
                        <Toolbar>
                            <div className={classes.toolBarRoot}>
                                <div className={classes.logo}>
                                    <Avatar style={{background: '#fff', padding:'2%'}} 
                                        alt="cardinal picture" 
                                        src="/cardinal_face.png" 
                                    />
                                    <h3>University of Louisville</h3>
                                </div>
                                <div className={classes.userInfo}>
                                    <span>user@e-mail.com</span>
                                    <IconButton
                                        size="large"
                                        edge="center"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                        onClick={handleMenu}
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transitionDuration={250}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={()=>{alert(`You are logged in as "user@e-mail.com"`)}}>Profile</MenuItem>
                                        <MenuItem onClick={()=>{handleClose('Op2')}}>My account</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </Toolbar>
                    {/* </Container> */}
                </AppBar>
                <div className={classes.children}>
                    {props.children}
                </div>
            </Container>
        </ThemeProvider>
        // <div className={classes.root}>
        //     <div className={classes.topBar}>
        //         <div className={classes.topBarLeft}>
        //             <img src="/UofLImg.png" alt="uoflimg"/>
        //         </div>
        //         <div className={classes.topBarRight}>
        //             <h1>AI for Health and Wellness</h1>
        //         </div>
        //     </div>
        //     <div>
                
        //         <h1>Images Upload Service</h1>
        //         <div>
        //             {props.children}
        //         </div>
        //     </div>
        // </div>
    );
}
export default Layout;