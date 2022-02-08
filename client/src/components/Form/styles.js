import { makeStyles } from "@material-ui/styles";

const userStyles = makeStyles(() => ({
  // root: {
  //   "& .MuiTextField-root": {
  //     margin: theme.spacing(1),
  //   },
  // },
  // paper: {
  //   padding: theme.spacing(2),
  // },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

export default userStyles;
