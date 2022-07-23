import Link from "next/link";

import classes from "./side-bar.module.css";

function SideBar() {
  return (
    <nav className={classes["sidebar"]}>
      <ul className={classes["side-nav"]}>
        <li
          className={`${classes["side-nav__item"]} ${classes["side-nav__item--active"]}`}
        >
          <Link href="/">
            <a className={classes["side-nav__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["side-nav__icon"]}
                viewBox="0 0 20 20"
              >
                <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"></path>
              </svg>
              <span className={classes["side-nav__title"]}>Hotel</span>
            </a>
          </Link>
        </li>
        <li className={classes["side-nav__item"]}>
          <Link href="/">
            <a className={classes["side-nav__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["side-nav__icon"]}
                viewBox="0 0 20 20"
              >
                <path d="M19.87 6.453c0.119 0.257 0.127 1.29-4.884 3.642l-4.913 2.306c-1.71 0.803-4.191 1.859-5.285 2.151-0.766 0.204-1.497-0.316-1.497-0.316s-2.206-1.975-2.792-2.419c-0.585-0.444-0.535-0.67 0.215-0.91 0.467-0.149 3.13 0.493 4.265 0.78 1.339-0.8 2.562-1.486 3.141-1.798-1.396-1.033-4.008-2.962-4.841-3.55-0.799-0.565 0.010-0.768 0.010-0.768 0.368-0.099 1.162-0.228 1.562-0.144 2.721 0.569 7.263 2.071 7.611 2.186 0.832-0.436 2.128-1.092 2.922-1.465 2.075-0.974 4.327-0.037 4.486 0.305z"></path>
              </svg>
              <span className={classes["side-nav__title"]}>Flight</span>
            </a>
          </Link>
        </li>
        <li className={classes["side-nav__item"]}>
          <Link href="/">
            <a className={classes["side-nav__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["side-nav__icon"]}
                viewBox="0 0 20 20"
              >
                <path d="M17.691 4.725c-0.503-2.977-3.22-4.967-6.069-4.441s-5.256 2.816-4.753 5.795c0.107 0.641 0.408 1.644 0.763 2.365l-5.175 7.723c-0.191 0.285-0.299 0.799-0.242 1.141l0.333 1.971c0.058 0.342 0.372 0.572 0.7 0.514l1.516-0.281c0.328-0.059 0.744-0.348 0.924-0.639l2.047-3.311 0.018-0.022 1.386-0.256 2.39-3.879c0.785 0.139 1.912 0.092 2.578-0.031 2.848-0.526 4.087-3.67 3.584-6.649zM15.166 6.252c-0.784 1.17-1.584 0.346-2.703-0.475-1.119-0.818-2.135-1.322-1.352-2.492s2.326-1.455 3.447-0.635c1.12 0.819 1.391 2.432 0.608 3.602z"></path>
              </svg>
              <span className={classes["side-nav__title"]}>Car Rental</span>
            </a>
          </Link>
        </li>
        <li className={classes["side-nav__item"]}>
          <Link href="/">
            <a className={classes["side-nav__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes["side-nav__icon"]}
                viewBox="0 0 20 20"
              >
                <path d="M19.447 3.718l-6-3c-0.281-0.141-0.613-0.141-0.895 0l-5.63 2.815-5.606-1.869c-0.306-0.102-0.64-0.051-0.901 0.138s-0.415 0.49-0.415 0.811v13.001c0 0.379 0.214 0.725 0.553 0.894l6 3c0.141 0.070 0.294 0.106 0.447 0.106s0.307-0.035 0.447-0.106l5.63-2.814 5.606 1.869c0.305 0.1 0.64 0.049 0.901-0.139s0.415-0.49 0.415-0.81v-13.002c0.001-0.379-0.213-0.725-0.552-0.894zM8 5.231l4-2v11.763l-4 2v-11.763zM2 4l4 1.333v11.661l-4-2v-10.994zM18 16.227l-4-1.334v-11.662l4 2v10.996z"></path>
              </svg>
              <span className={classes["side-nav__title"]}>Tour</span>
            </a>
          </Link>
        </li>
      </ul>
      <div className={classes["legal"]}>
        2017 by trillo. All rights reserved.
      </div>
    </nav>
  );
}

export default SideBar;
