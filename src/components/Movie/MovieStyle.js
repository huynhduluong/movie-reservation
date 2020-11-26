import { makeStyles } from "@material-ui/core/styles";
export const movieStyles = makeStyles({
  root: {
    margin: "15px",
    height: "400px",
    borderRadius: "20px",
  },
  media: {
    height: 0,
    paddingTop: "400px",
    width: "100%",
  },
  actionArea: {
    position: "relative",
    "&:focus": {
      outline: "none",
    },
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, black, transparent)",
  },
  buttonAge: {
    padding: "5px",
    fontSize: "13px",
    lineHeight: 0,
    minWidth: "none",
    marginRight: "10px",
  },
  title: {
    marginTop: "10px",
  },
  ticketButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: "8px",
    fontSize: "13px",
    minWidth: "none",
    marginBottom: "25px",
    marginRight: "15px",
  },
  score: {
    backgroundColor: "rgba(12,27,54,.8)",
    border: "1px solid #1f2e46",
    top: "12px",
    right: "12px",
    color: "rgba(255,255,255,.7)",
    width: "54px",
    textAlign: "center",
    lineHeight: 1.1,
    position: "absolute",
    padding: "5px",
    fontSize: "16px",
  },
});
