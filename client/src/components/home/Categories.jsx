import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import { Category } from "@material-ui/icons";

import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../constants/data";
import { LoginContext } from "../../context/ContextProvider";
import Typer from "./Typer";

const useStyle = makeStyles({
  table: {
    border: "1px solid rgba(224, 224, 224, 1)",
    marginBottom:30
  },
  write: {
    margin: 20,
    width: "85%",
    background: "#6495ED",
    color: "#fff",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    padding:'0px 60px 20px 0px'
  },
});

const Categories = ({ match }) => {
  const classes = useStyle();
  const location = useLocation();

  const [cate, setCate] = useState(location.search?.split("=")[1] || "All");
  const { account, setAccount } = useContext(LoginContext);
  // console.log(location);
  let params = new URLSearchParams(location.search);

  useEffect(() => {
    setCate(location.search?.split("=")[1] || "All");
  }, [location]);
  return (
    <>
      {!account ? (
        <Typer />
      ) : (
        <Link
          to={`/create/${location.search}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" className={classes.write}>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography>Create Blog</Typography>
              <Typography style={{fontSize:12,color:'black'}}>{`${cate}`}</Typography>
            </Box>
          </Button>{" "}
        </Link>
      )}

      <Table className={classes.table}>
        <TableHead style={"All" === cate ? { background: "#d9d7d7" } : {}}>
          <TableCell >
            <Link to={"/"} className={classes.link}>
              All Categories
            </Link>
          </TableCell>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow
              style={category === cate ? { background: "#d9d7d7" } : {}}
            >
              <TableCell>
                <Link to={`/?category=${category}`} className={classes.link}>
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
