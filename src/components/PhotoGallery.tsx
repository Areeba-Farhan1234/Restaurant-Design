import { FunctionComponent } from "react";
import styles from "./PhotoGallery.module.css";

export type PhotoGalleryType = {
  className?: string;
};

const PhotoGallery: FunctionComponent<PhotoGalleryType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.photoGallery, className].join(" ")}>
      <div className={styles.titleParent}>
        <div className={styles.title}>
          <b className={styles.instagram}>Instagram</b>
          <div className={styles.spoon}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          </div>
          <b className={styles.photoGallery1}>Photo Gallery</b>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </div>
        <button className={styles.button}>
          <b className={styles.viewMore}>View More</b>
        </button>
      </div>
      <div className={styles.gallery}>
        <img className={styles.icon} loading="lazy" alt="" src="/1@2x.png" />
        <img className={styles.icon1} loading="lazy" alt="" src="/2@2x.png" />
        <img className={styles.icon2} loading="lazy" alt="" src="/3@2x.png" />
        <img className={styles.icon3} loading="lazy" alt="" src="/5@2x.png" />
        <img className={styles.icon4} loading="lazy" alt="" src="/7@2x.png" />
      </div>
    </div>
  );
};

export default PhotoGallery;
