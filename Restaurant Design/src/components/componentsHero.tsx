import { FunctionComponent } from "react";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.gerichtParent}>
          <div className={styles.gericht}>#Gericht</div>
          <div className={styles.bar}>#Bar</div>
        </div>
      </div>
      <div className={styles.contentParent}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.vectorParent}>
              <img className={styles.frameChild} alt="" src="/vector-11.svg" />
              <div className={styles.chaseTheNewFlavourParent}>
                <h3 className={styles.chaseTheNew}>Chase the new Flavour</h3>
                <div className={styles.vectorGroup}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.flavourIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <h1 className={styles.theKeyTo}>The key to Fine dining</h1>
            </div>
            <div
              className={styles.sitTellusLobortis}
            >{`Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus `}</div>
            <button className={styles.button}>
              <b className={styles.exploreMenu}>Explore Menu</b>
            </button>
          </div>
          <img
            className={styles.heroImgIcon}
            loading="lazy"
            alt=""
            src="/hero-img@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.footerLinksParent}>
            <b className={styles.footerLinks}>01</b>
            <div className={styles.footerDividerWrapper}>
              <div className={styles.footerDivider} />
            </div>
            <b className={styles.footerLinks1}>02</b>
            <b className={styles.footerLinks2}>03</b>
            <b className={styles.footerLinks3}>04</b>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameGroup}>
          <div className={styles.scrollIndicatorWrapper}>
            <img
              className={styles.scrollIndicatorIcon}
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <b className={styles.scroll}>Scroll</b>
        </div>
      </div>
    </div>
  );
};

export default Hero;
