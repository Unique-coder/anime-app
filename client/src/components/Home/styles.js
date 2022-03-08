import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export default makeStyles(() => ({
  mainContainer: {
    flexDirection: "row",
    // border: "1px solid blue",
    // gap: "150px ",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  pagination: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    justifyContent: "center",
  },
}));
