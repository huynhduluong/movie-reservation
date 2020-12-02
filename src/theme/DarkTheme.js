import { createMuiTheme } from "@material-ui/core";

export const overrides = {
  MuiTab: {
    // general overrides for your material tab component here
    root: {
      "&$selected": {
        color: "#fb4226",
      },
    },
  },
  MuiTabPanel: {
    root: {
      padding: 0,
    },
  },
  MuiCardContent: {
    root: {
      padding: 0,
      paddingLeft: "15px",
    },
  },
  MuiPaper: {
    elevation1: {
      boxShadow: "none",
    },
  },
  MuiCardMedia: {
    root: {
      backgroundPosition: "top",
    },
  },
  MuiCardActionArea: {
    focusHighlight: {
      opacity: "0!important",
    },
  },
  MuiAccordion: {
    root: {
      "&$expanded": {
        margin: 0,
      },
    },
  },
  MuiAccordionSummary: {
    root: { minHeight: "64px" },
    content: {
      margin: "0",
      "&$expanded": {
        margin: "0",
      },
    },
  },
  MuiAccordionDetails: {
    root: {
      display: "block",
      padding: "0px",
    },
  },
  MuiDialog: {
    paperScrollPaper: {
      background: "transparent",
      height: "80%",
      boxShadow: "none",
    },
  },
};

const DarkTheme = createMuiTheme({
  overrides,
  palette: {
    primary: {
      main: "#FB4226",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00ac4d",
      contrastText: "#fff",
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
    action: {
      selected: "#fb4226",
    },
  },
  status: {
    commentBackground: "#3a3b3c",
    borderPaper: "20px",
  },
  shape: {
    borderRadius: "4px",
  },
  spacing: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
});

export default DarkTheme;
