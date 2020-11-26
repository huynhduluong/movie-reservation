import { createMuiTheme } from "@material-ui/core";
import { overrides } from "./DarkTheme";

const LightTheme = createMuiTheme({
  overrides,
  palette: {
    primary: {
      main: "#FB4226",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#4a4a4a",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
    action: {
      selected: "#fb4226",
    },
  },
  status: {
    commentBackground: "#fff",
  },
});
export default LightTheme;
