import { FunctionComponent } from "react";
import styles from "./ChefsWord1.module.css";

export type ChefsWord1Type = {
  className?: string;
};

const ChefsWord1: FunctionComponent<ChefsWord1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.chefsWord, className].join(" ")}>
      <img className={styles.bgIcon} alt="" src="/bg-1@2x.png" />
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className={styles.chefsWordInner}>
        <div className={styles.frameParent}>
          <div className={styles.chefsWordParent}>
            <b className={styles.chefsWord1}>Chef’s Word</b>
            <div className={styles.spoon}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            </div>
            <h1 className={styles.whatWeBelieve}>What we believe in</h1>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
              <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
                <i className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                  sit .
                </i>
              </div>
            </div>
            <i className={styles.auctorSitIaculis}>
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </i>
          </div>
          <div className={styles.kevinLuoParent}>
            <h1 className={styles.kevinLuo}>Kevin Luo</h1>
            <div className={styles.chefFounder}>{`Chef & Founder`}</div>
          </div>
          <h1 className={styles.kevinLuo1}>Kevin Luo</h1>
        </div>
      </div>
    </div>
  );
};

export default ChefsWord1;
