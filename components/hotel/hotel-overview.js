import classes from "./hotel-overview.module.css";

function HotelOverview() {
  return (
    <>
      <div className={classes["overview"]}>
        <h1 className={classes["overview__heading"]}>Hotel Las Palmas</h1>
        <div className={classes["overviwe__stars"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["overview__icon-star"]}
            viewBox="0 0 20 20"
          >
            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["overview__icon-star"]}
            viewBox="0 0 20 20"
          >
            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["overview__icon-star"]}
            viewBox="0 0 20 20"
          >
            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["overview__icon-star"]}
            viewBox="0 0 20 20"
          >
            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["overview__icon-star"]}
            viewBox="0 0 20 20"
          >
            <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
          </svg>
        </div>
        <div className={classes["overviwe__location"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["overview__icon-location"]}
            viewBox="0 0 20 20"
            fill="#fff"
          >
            <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"></path>
          </svg>
          <button className={classes["btn-inline"]}>Albufeira, Portugal</button>
        </div>

        <div className={classes["overview__rating"]}>
          <div className={classes["overview__rating-average"]}>0.8</div>
          <div className={classes["overview__rating-count"]}>500 votes</div>
        </div>
      </div>
    </>
  );
}

export default HotelOverview;
