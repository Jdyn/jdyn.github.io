import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/AppContainer";
import Baseline from "./components/Baseline";

const theme = {
  // Whites
  primaryWhite: "#fafafa",
  secondaryWhite: "#f6f9fc",
  tertiaryWhite: "#eef2f7",
  quartinaryWhite: "#e6ebf1",
  // Greys
  primaryGrey: "#d7dadc",
  // Misc
  divider: "rgba(0, 0, 0, 0.05)"
};

const app = (
  <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Baseline>
          <App />
        </Baseline>
      </ThemeProvider>
    </BrowserRouter>
  </>
);

ReactDOM.render(app, document.getElementById("root"));
