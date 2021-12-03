import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { LoginContext } from "../../context/ContextProvider";

import { Link } from "react-router-dom";
import LoginDialog from "../login/LoginDialog";
import Profile from '../login/Profile'

const useStyle = makeStyles((theme) => ({
  component: {
    background: "#FFFFFF",
    color: "black",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&  >*": {
      fontFamily: "Rubik",
      fontSize: "20px",
      padding: 20,
      color: "black",
      textDecoration: "none",
    },
  },
  login: {
    color: "black",
    background: "#FFFFFF",
    textTransform: "none",
    // fontWeight: 600,
    borderRadius: 2,
    padding: "0px 20px",
    // height: 32,
    // fontStyle: "Roboto",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      background: "#2874f0",
      color: "#FFFFFF",
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(LoginContext);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Button
            className={classes.login}
            variant="contained"
            onClick={() => openDialog()}
          >
            LOGIN
          </Button>
        )}
        <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />{" "}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
