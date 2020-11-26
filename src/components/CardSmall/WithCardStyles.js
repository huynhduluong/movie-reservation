import { makeStyles } from "@material-ui/core";

export const WithCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px 0px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeight: "100px",
    overflow: "hidden",
  },
  content: {
    overflow: "hidden",
    position: "relative",
  },
  image: {
    minWidth: "100px",
    height: "100%",
  },
  cover: {
    height: 0,
    paddingTop: "100px",
    borderRadius: "20px",
  },
  filmTitle: {
    fontSize: "16px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "clip",
    marginTop: "10px",
    marginBottom: "10px",
  },

  ageLimitButton: {
    fontSize: "13px",
    minWidth: "30px",
    maxHeight: "20px!important",
    lineHeight: "0px",
    padding: "2px",
    marginRight: "8px",
  },
  timeFilm: {
    fontSize: "13px",
  },
  ticketButton: {
    position: "absolute",
    right: 10,
    top: "70%",
    transform: "translateY(-70%)",
    padding: "4px 8px",
    fontSize: "13px",
    minWidth: "none",
  },
  newsTitle: {
    fontSize: "14px",
    width: "90%",
  },
  newsTopic: {
    fontSize: "12px",
    marginBottom: "5px",
    textTransform: "capitalize",
  },
}));
