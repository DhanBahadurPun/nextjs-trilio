import { Fragment } from "react";
import Details from "../components/details/detail";
import Gallery from "../components/hotel/gallery";

import HotelOverview from "../components/hotel/hotel-overview";

export default function Home() {
  return (
    <Fragment>
      <Gallery />
      <HotelOverview />
      <Details />
    </Fragment>
  );
}
