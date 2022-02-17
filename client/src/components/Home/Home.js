import { useState, useEffect } from "react";
import Grow from "@mui/material/Grow";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useDispatch } from "react-redux";
import useStyles from "./styles";

import { getPosts } from "../../actions/post";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          // alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
