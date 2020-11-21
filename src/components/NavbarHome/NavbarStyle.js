import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    top: "-1px",
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "rgba(255,255,255,.95)",
    boxShadow: "0 0 15px rgba(0,0,0,.3)",
    zIndex: 9,
    transition: "all .2s",
  },
  logo: {
    width: 64,
    height: 64,
    cursor: "pointer",
  },
  maxHeightNavbarHome: {
    height: "64px",
  },
  menuButton: {
    marginRight: 0,
  },
  listNav: {
    position: "absolute",
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    color: "#9b9b9b",
  },
  navRight: {
    position: "absolute",
    right: "24px",
    top: 0,
    height: "64px",
  },
  link: {
    margin: "0px 10px",
    color: "black",
    transition: "all 0.2s",
    display: "inline-block",
    "&:hover": {
      textDecoration: "none",
      color: "#fb4226",
    },
  },
  textLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
    color: "black",
    margin: "0px 16px 0px 0px",
    borderRight: "1px solid #e9e9e9",
    paddingRight: "11px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
}));
