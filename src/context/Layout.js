import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GlobalContext } from "./globalContext";

import colors from "../css/colors.js";
import typography from "../css/typography";

// 1.
export const GlobalStyle = createGlobalStyle`
  // Panel colors
  ${colors}
  //Typography
  ${typography}
`;

// 2.
const Layout = ({ children }) => {
  const darkTheme = {
    // Main
    background: "#141625",

    // Navbar
    navBackground: "#1E2139",

    //Header
    header_h1: "#FFFFFF",
    header_total: "#FFFFFF",

    //User
    user_cardBg: "#1E2139",
    user_StatusPaidBg: "#1F2B3F",
    user_StatusPendingBg: "#2B2736",
    user_StatusDraftBg: "#292C44",
    user_StatusDraft: "#DFE3FA",
    user_id_total: "#FFFFFF",
    user_name: "#FFFFFF",
    user_due: "#DFE3FA",
  };

  const lightTheme = {
    //Main
    background: "#F2F2F2",

    //Navbar
    navBackground: "#373B53",

    //Header
    header_h1: "#0C0E16",
    header_total: "#888EB0",

    // User
    user_cardBg: "#FFFFFF",
    user_StatusPaidBg: "#f3fcf9",
    user_StatusPendingBg: "#fff8f0",
    user_StatusDraftBg: "#f3f3f5",
    user_StatusDraft: "#373B53",
    user_id_total: "#0C0E16",
    user_name: "#7E88C3",
    user_due: "#7E88C3",
  };

  // 3.
  const currentTheme = useContext(GlobalContext);

  // 4.
  let theme;
  switch (currentTheme.theme) {
    case "dark":
      theme = darkTheme;
      break;
    case "light":
      theme = lightTheme;
      break;
    default:
      theme = lightTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
