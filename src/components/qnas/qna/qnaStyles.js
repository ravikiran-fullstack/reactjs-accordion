import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  question: {
    padding: "1rem 1.5rem",
    border: "2px solid #fcfcfc",
    marginBottom: "1rem",
    borderRadius: "5px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    cursor: "pointer",
    paddingTop: "5px",
    width: "10%",
    textAlign: "center",
  },
}));
