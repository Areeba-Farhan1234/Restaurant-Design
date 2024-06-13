import { FunctionComponent } from "react";
import BibGourmond from "./BibGourmond";
import styles from "./ChefsWord.module.css";

export type ChefsWordType = {
  className?: string;
};

const ChefsWord: FunctionComponent<ChefsWordType> = ({ className = "" }) => {
  return (
    <div className={[styles.chefsWord, className].join(" ")}>
      <img className={styles.bgIcon} alt="" src="/bg-2@2x.png" />
      <div className={styles.chefsWord1}>
        <div className={styles.awards}>
          <div className={styles.awards1}>
            <div className={styles.title}>
              <h3
                className={styles.awardsRecognition}
              >{`Awards & recognition`}</h3>
              <div className={styles.spoon}>
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
              </div>
              <b className={styles.ourLaurels}>Our Laurels</b>
            </div>
            <div className={styles.top}>
              <BibGourmond group26="/group-26.svg" bibGourmond="Bib Gourmond" />
              <BibGourmond
                group26="/group-26-1.svg"
                bibGourmond="Rising Star"
                propHeight="79px"
                propDisplay="inline-block"
                propMinWidth="112px"
                propLineHeight="130%"
              />
            </div>
            <div className={styles.bottom}>
              <BibGourmond
                group26="/group-27.svg"
                bibGourmond="AA Hospitality "
                propHeight="69px"
                propDisplay="unset"
                propMinWidth="unset"
                propLineHeight="30px"
              />
              <BibGourmond
                group26="/group-25.svg"
                bibGourmond="Outstanding Chef"
                propHeight="79px"
                propDisplay="unset"
                propMinWidth="unset"
                propLineHeight="130%"
              />
            </div>
          </div>
          <img
            className={styles.awardsChild}
            loading="lazy"
            alt=""
            src="/group-43@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ChefsWord;
