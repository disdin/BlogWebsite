import {
  makeStyles,
  Typography,
} from "@material-ui/core";
import Typewriter from "typewriter-effect";

import React from "react";
import { classExpression } from "@babel/types";

const useStyle = makeStyles({
  loginToCreate: {
    textDecoration: "none",
    margin: 10,

    fontSize: 25,
  },
  App: {
    fontFamily: 'Rubik',
    fontWeight:800,
    fontSize:20,
    textAlign: 'center',
    display:'flex',
    justifyContent:'center',
    // alignItems:'center',
    minHeight:'10vh',
    background:'#f1ebff',
    borderRadius:10,
    margin:'10px 0px',
    padding:10
  }
});

function Typer() {
    const classes=useStyle()
return (
	<div className={classes.App}>
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("Start Writing Blogs With Us")
	.pauseFor(2000)
	.deleteAll()
	.typeString("Login ...... ")

    .pauseFor(2000)
	.deleteAll()
	.typeString("Start Writing Blogs With Us").pauseFor(2000)
	.deleteAll()
	.typeString("Login ...... ")

    .pauseFor(2000)
	.deleteAll()
	.typeString("Start Writing Blogs With Us").pauseFor(2000)
	.deleteAll()
	.typeString("Login ...... ")

    .pauseFor(2000)
	.deleteAll()
	.typeString("Start Writing Blogs With Us").pauseFor(2000)
	.deleteAll()
	.typeString("Login ...... ")
    
	.start();
	}}
	/>
	</div>
);
}

export default Typer;
