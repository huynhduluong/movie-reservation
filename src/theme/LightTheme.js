import { createMuiTheme } from "@material-ui/core";

const LightTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#000",
      secondary: "#4a4a4a",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
  status: {
    commentBackground: "#fff",
  },
});
export default LightTheme;
