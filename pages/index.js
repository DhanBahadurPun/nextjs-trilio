import { Fragment } from "react";
import Gallery from "../components/hotel/gallery";

import HotelOverview from "../components/hotel/hotel-overview";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Gallery />
      <HotelOverview />
    </Fragment>
  );
}
