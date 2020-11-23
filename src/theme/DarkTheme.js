import { createMuiTheme } from "@material-ui/core";

const DarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E4E6Eb",
    },
    text: {
      primary: "#E4E6Eb",
      secondary: "#B0B3B8",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    background: {
      paper: "#242527",
      default: "#18191a",
    },
  },
  status: {
    commentBackground: "#3a3b3c",
  },
});

export default DarkTheme;
