/* eslint-disable no-unused-vars */

import { useState, useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { commentPost } from "../../actions/post";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const commentsRef = useRef();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClick = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              {c}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        {/* Check if there is a user logged in. If there is, show comments textfield if not hide it. */}
        {user?.result?.name && (
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              rows={4}
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              variant="contained"
              color="primary"
              disabled={!comment}
              onClick={handleClick}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
