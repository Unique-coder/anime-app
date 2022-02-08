/* eslint-disable no-unused-vars */
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
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
