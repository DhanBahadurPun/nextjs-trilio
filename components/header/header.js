import SearchIcon from "../icons/search-icon";
import BookmarkIcon from "../icons/bookmark-icon";
import ChatIcon from "../icons/chat-icon";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes["header"]}>
      <img
        src="images/logo.jpeg"
        alt="logo for head"
        className={classes["logo"]}
      ></img>
      <form className={classes["search"]}>
        <input
          type="text"
          className={classes["search__input"]}
          placeholder="Search hotel"
        />
        <button className={classes["search__button"]}>
          <SearchIcon />
        </button>
      </form>
      <nav className={classes["user-nav"]}>
        <div className={classes["user-nav__icon"]}>
          <BookmarkIcon />
          <span className={classes["user-nav__notification"]}>7</span>
        </div>
        <div className={classes["user-nav__icon"]}>
          <ChatIcon />
          <span className={classes["user-nav__notification"]}>17</span>
        </div>
        <div>
          <img
            src="images/logo.jpeg"
            alt="User Photo"
            className={classes["user-nav__user-photo"]}
          />
          <span className={classes["user-nav__user-name"]}>John</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
