/* eslint-disable no-unused-vars */

import { useState, useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState();

  const handleClick = () => {};

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              Comments {i}
            </Typography>
          ))}
        </div>
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
            disabled={!comment}
            onclick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
