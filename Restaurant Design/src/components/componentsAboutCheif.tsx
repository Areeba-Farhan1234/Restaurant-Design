import { FunctionComponent } from "react";
import styles from "./AboutCheif.module.css";

export type AboutCheifType = {
  className?: string;
};

const AboutCheif: FunctionComponent<AboutCheifType> = ({ className = "" }) => {
  return (
    <div className={[styles.aboutWrapper, className].join(" ")}>
      <div className={styles.about}>
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <div className={styles.aboutInner}>
          <div className={styles.aboutUsParent}>
            <b className={styles.aboutUs}>About Us</b>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </div>
              <button className={styles.button}>
                <b className={styles.knowMore}>Know More</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.gParent}>
            <img className={styles.gIcon} alt="" src="/g.svg" />
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.vectorGroup}>
                <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <img
            className={styles.savernakeKnivesF4jl2ezowumUIcon}
            loading="lazy"
            alt=""
            src="/savernakeknivesf4jl2ezowumunsplash-2@2x.png"
          />
        </div>
        <div className={styles.aboutChild}>
          <div className={styles.frameGroup}>
            <div className={styles.ourHistoryParent}>
              <b className={styles.ourHistory}>Our History</b>
              <div className={styles.adipiscingTempusUllamcorper}>
                Adipiscing tempus ullamcorper lobortis odio tellus arcu
                volutpat. Risus placerat morbi volutpat habitasse interdum mi
                aliquam In sed odio nec aliquet.
              </div>
            </div>
            <button className={styles.button1}>
              <b className={styles.knowMore1}>Know More</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCheif;
