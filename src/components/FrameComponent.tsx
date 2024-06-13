import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.restaurantHomeInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.contentWrapper}>
                <div className={styles.content}>
                  <div className={styles.contact}>
                    <div className={styles.title}>
                      <b className={styles.contact1}>Contact</b>
                      <div className={styles.spoon}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector1.svg"
                        />
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <b className={styles.findUs}>Find Us</b>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.laneEndsBungalow}>
                        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9
                        7SG
                      </div>
                      <div className={styles.openingHours}>
                        <b className={styles.openingHours1}>Opening Hours</b>
                        <div className={styles.schedule}>
                          <div className={styles.monFri}>
                            Mon - Fri: 10:00 am - 02:00 am
                          </div>
                          <div className={styles.satSun}>
                            Sat - Sun: 10:00 am - 03:00 am
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.button}>
                      <b className={styles.visitUs}>Visit Us</b>
                    </button>
                  </div>
                  <img
                    className={styles.imgIcon}
                    loading="lazy"
                    alt=""
                    src="/img@2x.png"
                  />
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.newsletterContent}>
                  <div className={styles.newsletterHeader}>
                    <div className={styles.newsletterTitle}>
                      <b className={styles.newsletter}>Newsletter</b>
                    </div>
                    <div className={styles.newsletterIcon}>
                      <div className={styles.spoon1}>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector1.svg"
                        />
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <h1 className={styles.subscribeToOur}>
                      Subscribe to Our Newsletter
                    </h1>
                  </div>
                </div>
                <div className={styles.updates}>
                  <div className={styles.andNeverMiss}>
                    And never miss latest Updates!
                  </div>
                </div>
                <div className={styles.form}>
                  <div className={styles.person}>
                    <div className={styles.personChild} />
                    <input
                      className={styles.emailAddress}
                      placeholder="Email Address"
                      type="text" id="Email" autoComplete="email"
                    />
                  </div>
                  <div className={styles.subscribeButtonWrapper}>
                    <button className={styles.button1}>
                      <b className={styles.subscribe}>Subscribe</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.footerCurveIcon}
            alt=""
            src="/vector-8-1.svg"
          />
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <b className={styles.top}>Top</b>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactContainer}>
              <div className={styles.contactDetailsContainer}>
                <div className={styles.contactDetailsWrapper}>
                  <h1 className={styles.contactUs}>Contact Us</h1>
                  <div className={styles.addressContainer}>
                    <div className={styles.w53rdSt}>
                      9 W 53rd St, New York, NY 10019, USA
                    </div>
                    <div className={styles.phoneNumber}>
                      <p className={styles.p}>+1 212-344-1230</p>
                      <p className={styles.p1}>+1 212-555-1230</p>
                    </div>
                  </div>
                </div>
                <div className={styles.hoursContainer}>
                  <h1 className={styles.workingHours}>Working Hours</h1>
                  <div className={styles.scheduleContainer}>
                    <div className={styles.mondayFriday0800AmContainer}>
                      <p className={styles.mondayFriday}>Monday-Friday:</p>
                      <p className={styles.am1200Am}>08:00 am -12:00 am</p>
                    </div>
                    <div className={styles.saturdaySunday0700am110Container}>
                      <p className={styles.saturdaySunday}>Saturday-Sunday:</p>
                      <p className={styles.am1100Pm}>07:00am -11:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialLinksContainer}>
              <b className={styles.gericht}>Gerícht</b>
              <div className={styles.socialLinksWrapper}>
                <div className={styles.socialLinksContent}>
                  <blockquote className={styles.theBestWay}>
                    "The best way to find yourself is to lose yourself in the
                    service of others.”
                  </blockquote>
                  <div className={styles.spoon2}>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.socialMedia}>
                    <img
                      className={styles.ufacebookFIcon}
                      loading="lazy"
                      alt=""
                      src="/ufacebookf.svg"
                    />
                    <img
                      className={styles.utwitterAltIcon}
                      loading="lazy"
                      alt=""
                      src="/utwitteralt.svg"
                    />
                    <img
                      className={styles.uinstagramIcon}
                      loading="lazy"
                      alt=""
                      src="/uinstagram.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerContent1}>
            <div className={styles.gerichtAllRights}>
              2021 Gerícht. All Rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
