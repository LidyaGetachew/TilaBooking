// import { ThemeProvider } from "@mui/material";
import * as React from "react";
import { Container } from "reactstrap";
import Sidebar from "../uicontrols/SideBar";
import Topbar from "../uicontrols/TopBar";
import NavMenu from "./NavMenu";
import Theme from "../uicontrols/Theme";
import { ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
export default (props: { children?: React.ReactNode }) => (
  // export default () => (
  <>
    <ThemeProvider theme={Theme}>
      <Topbar />
      <Container>{props.children}</Container>
    </ThemeProvider>
  </>
);
