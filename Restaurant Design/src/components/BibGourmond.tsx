import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BibGourmond.module.css";

export type BibGourmondType = {
  className?: string;
  group26?: string;
  bibGourmond?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const BibGourmond: FunctionComponent<BibGourmondType> = ({
  className = "",
  group26,
  bibGourmond,
  propHeight,
  propDisplay,
  propMinWidth,
  propLineHeight,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const bibGourmondStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      lineHeight: propLineHeight,
    };
  }, [propDisplay, propMinWidth, propLineHeight]);

  return (
    <div className={[styles.bibGourmond, className].join(" ")}>
      <img
        className={styles.bibGourmondChild}
        loading="lazy"
        alt=""
        src={group26}
        style={groupIconStyle}
      />
      <div className={styles.bibGourmondParent}>
        <b className={styles.bibGourmond1} style={bibGourmondStyle}>
          {bibGourmond}
        </b>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur.
        </div>
      </div>
    </div>
  );
};

export default BibGourmond;
