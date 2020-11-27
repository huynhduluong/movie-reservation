import { makeStyles } from "@material-ui/core";

export const MobileHomeStyles = makeStyles((theme) => ({
  appBarHome: {
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    opacity: 0.95,
  },
  appBarDiscovery: {
    bottom: "auto",
    top: 0,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    opacity: 0.95,
  },
  tabPanel: {
    padding: 0,
  },
  indicatorTop: {
    backgroundColor: theme.palette.action.selected,
  },
  indicatorBottom: {
    backgroundColor: theme.palette.action.selected,
    bottom: "unset",
    top: 0,
  },
  tabBottom: {
    backgroundColor: theme.palette.background.paper,
    fontSize: "8px",
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
  tabTop: {
    fontSize: "12px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    "&:focus": {
      outline: "none",
    },
  },
  maxHeightApp: {
    height: "72px",
  },
  homeTitle: {
    fontSize: "16px",
    margin: theme.spacing(2),
  },
  paperContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    borderRadius: theme.status.borderPaper,
  },
  paperTitle: {
    fontSize: "16px",
  },
}));
