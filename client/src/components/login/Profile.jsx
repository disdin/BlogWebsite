import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    fontSize: 14,
    marginLeft: 20,
    fontFamily: "Rubik",
  },
  accountName: {
    fontFamily: "Rubik",
    fontSize: 20,
    background:'#6495ed',
    borderRadius:5,
    padding: "0px 20px",
    color:'white'
  },
});

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <>
      <Link to="/" onClick={handleClick}>
        <Typography className={classes.accountName}>{account}</Typography>
      </Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />{" "}
          {/* this is for logOut button*/}
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
