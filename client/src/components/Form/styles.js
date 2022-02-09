import { makeStyles } from "@material-ui/styles";

const userStyles = makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      margin: "2px",
    },
  },
  paper: {
    padding: "16px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // border: "1px solid red",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: "10px",
  },
}));

export default userStyles;
