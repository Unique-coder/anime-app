/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { WithContext as ReactTags } from "react-tag-input";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import styles from "./ReactTags.module.scss";

import { getPosts, getPostsBySearch } from "../../actions/post";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  let [tags, setTags] = useState([]);

  const searchPost = () => {
    const tag = tags.map((item) => item.text);

    tags = tag;

    // console.log(tags);
    console.log(search);

    if (search.trim() || tags) {
      // dispatch -> fetch post
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  const handleKeyPress = (e) => {
    if (e.keycode === 13) {
      searchPost();
    }
  };

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag, index) => index !== tagToDelete));

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const onClearAll = () => {
    setTags([]);
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                onKeyDown={handleKeyPress}
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <Chip
                label="Search Tags"
                value={tags}
                style={{ margin: "10px 0" }}
                variant="outlined"
                onAdd={handleAdd}
                onDelete={handleDelete}
              /> */}
              <div className={styles.ReactTags}>
                <ReactTags
                  tags={tags}
                  handleDelete={handleDelete}
                  handleAddition={handleAdd}
                  handleDrag={handleDrag}
                  delimiters={delimiters}
                  onClearAll={onClearAll}
                  placeholder="Search Tags"
                  inputFieldPosition="top"
                  clearAll={true}
                />
              </div>
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Pagination page={page} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
