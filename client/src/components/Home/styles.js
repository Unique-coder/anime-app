import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  mainContainer: {
    flexDirection: "row",
    border: "1px solid blue",
    gap: "150px",
  },
  pagination: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
}));
