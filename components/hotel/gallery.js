import Image from "next/image";

import classes from "./gallery.module.css";

function Gallery() {
  return (
    <div className={classes["gallery"]}>
      <figure className={classes["gallery__item"]}>
        <Image
          className={classes["gallery__photo"]}
          src="/images/hotel-1.jpg"
          alt="The Hotel 1"
          width={450}
          height={200}
        />
      </figure>
      <figure className={classes["gallery__item"]}>
        <Image
          className={classes["gallery__photo"]}
          src="/images/hotel-2.jpg"
          alt="The Hotel 2"
          width={450}
          height={200}
        />
      </figure>
      <figure className={classes["gallery__item"]}>
        <Image
          className={classes["gallery__photo"]}
          src="/images/hotel-3.jpg"
          alt="The Hotel 3"
          width={400}
          height={200}
        />
      </figure>
    </div>
  );
}

export default Gallery;
