import { makeStyles } from "@material-ui/styles";
// import { createTheme } from "@mui/material/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: "8px",
    },
  },
  avatar: {
    margin: "8px",
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "24px",
  },
  submit: {
    margin: "16px 0",
  },
  googleButton: {
    marginBottom: "16px",
  },
}));
