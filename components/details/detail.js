import Image from "next/image";

import classes from "./detail.module.css";

function Details() {
  return (
    <>
      {" "}
      <div className={classes["detail"]}>
        <div className={classes["description"]}>
          <p className={classes["paragraph"]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <p className={classes["paragraph"]}>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators.
          </p>

          <ul className={classes["list"]}>
            <li className={classes["list__item"]}>Close to the beach</li>
            <li className={classes["list__item"]}>Breakfat included</li>
            <li className={classes["list__item"]}>Free airport shuttle</li>
            <li className={classes["list__item"]}>Free wifi in all rooms</li>
            <li className={classes["list__item"]}>
              Air conditioning and heating
            </li>
            <li className={classes["list__item"]}>Pets allowed</li>
            <li className={classes["list__item"]}>
              Perfect for groups or family
            </li>
            <li className={classes["list__item"]}>We speak all language</li>
          </ul>

          <div className={classes["recommend"]}>
            <p className={classes["recommend__count"]}>
              Ram and other 4 recommend this hotel
            </p>
            <div className={classes["recommend__friends"]}>
              <Image
                className={classes["recommend__photo"]}
                src="/images/1.jpg"
                alt="recomment the photo"
                height={50}
                width={50}
              />
              <Image
                className={classes["recommend__photo"]}
                src="/images/2.jpg"
                alt="recomment the photo"
                height={50}
                width={50}
              />
              <Image
                className={classes["recommend__photo"]}
                src="/images/3.jpg"
                alt="recomment the photo"
                height={50}
                width={50}
              />
              <Image
                className={classes["recommend__photo"]}
                src="/images/4.jpg"
                alt="recomment the photo"
                height={50}
                width={50}
              />
            </div>
          </div>
        </div>

        <div className={classes["user-reviews"]}>
          <figure className={classes["review"]}>
            <blockquote className={classes["review__text"]}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority. There are many variations of passages of Lorem
              Ipsum available, but the majority.
            </blockquote>
            <figcaption className={classes["review__user"]}>
              <Image
                src={`/images/1.jpg`}
                className={classes["review__photo"]}
                alt="User One"
                height={50}
                width={50}
              />
              <div className={classes["review__user-box"]}>
                <p className={classes["review__user-name"]}>Nick Smith</p>
                <p className={classes["review__user-date"]}>Feb 23rd, 2021</p>
              </div>
              <div className={classes["review__rating"]}>8.8</div>
            </figcaption>
          </figure>
          <figure className={classes["review"]}>
            <blockquote className={classes["review__text"]}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority. There are many variations of passages of Lorem
              Ipsum available, but the majority.
            </blockquote>
            <figcaption className={classes["review__user"]}>
              <Image
                src={`/images/2.jpg`}
                className={classes["review__photo"]}
                alt="User One"
                height={50}
                width={50}
              />
              <div className={classes["review__user-box"]}>
                <p className={classes["review__user-name"]}>Steve Job</p>
                <p className={classes["review__user-date"]}>Jan 13rd, 2021</p>
              </div>
              <div className={classes["review__rating"]}>9.3</div>
            </figcaption>
          </figure>

          <button className={classes["btn-inline"]}>
            <span>Show all</span>
          </button>
        </div>
      </div>
      <div className={classes["cta"]}>
        <h2 className={classes["cta__book-now"]}>
          Good news! We have 4 free rooms for your selected dats!
        </h2>

        <button className={classes["btn"]}>
          <span className={classes["btn__visible"]}>Book now</span>
          <span className={classes["btn__invisible"]}>Only 4 rooms left</span>
        </button>
      </div>
    </>
  );
}

export default Details;
