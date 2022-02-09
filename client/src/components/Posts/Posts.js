/* eslint-disable no-unused-vars */
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <div>
      <>
        <Post />
        <Post />
        <Post />
      </>
    </div>
  );
};

export default Posts;
