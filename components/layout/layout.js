import { Fragment } from "react";
import Header from "../header/header";
import SideBar from "../header/side-bar";

import classes from "./layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <div className={classes["container"]}>
        <Header />
        <div className={classes["content"]}>
          <SideBar />
          <main className={classes["hotel-view"]}>{props.children}</main>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
