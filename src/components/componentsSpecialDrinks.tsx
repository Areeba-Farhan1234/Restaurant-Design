import { FunctionComponent } from "react";
import styles from "./SpecialDrinks.module.css";

export type SpecialDrinksType = {
  className?: string;
};

const SpecialDrinks: FunctionComponent<SpecialDrinksType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.restaurantHomeInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.menuThatFitsYouPalatteWrapper}>
              <h3 className={styles.menuThatFits}>
                Menu that fits you palatte
              </h3>
            </div>
            <div className={styles.spoonWrapper}>
              <div className={styles.spoon}>
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
                <img className={styles.spoonIcon} alt="" src="/vector.svg" />
              </div>
            </div>
            <b className={styles.todaysSpecial}>Today’s Special</b>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.wineBeerWrapper}>
              <h1 className={styles.wineBeer}>{`Wine & Beer`}</h1>
            </div>
            <div className={styles.menu}>
              <div className={styles.div}>
                <div className={styles.chapelHillShirazParent}>
                  <h3 className={styles.chapelHillShiraz}>
                    Chapel Hill Shiraz
                  </h3>
                  <div className={styles.auBottle}>AU | Bottle</div>
                </div>
                <div className={styles.cocktailItem}>
                  <div className={styles.cocktailItemChild} />
                </div>
                <b className={styles.cocktailDivider}>$56</b>
              </div>
              <div className={styles.div1}>
                <div className={styles.inner}>
                  <div className={styles.catenaMalbecParent}>
                    <b className={styles.catenaMalbec}>Catena Malbec</b>
                    <div className={styles.arBottle}>AR | Bottle</div>
                  </div>
                </div>
                <div className={styles.child}>
                  <div className={styles.frameChild} />
                </div>
                <b className={styles.secondCocktailDivider}>$59</b>
              </div>
              <div className={styles.div2}>
                <div className={styles.inner1}>
                  <div className={styles.laVieilleRosParent}>
                    <h3 className={styles.laVieilleRos}>La Vieille Rosé</h3>
                    <div className={styles.fr750}>FR | 750 ml</div>
                  </div>
                </div>
                <div className={styles.inner2}>
                  <div className={styles.frameItem} />
                </div>
                <b className={styles.b}>$44</b>
              </div>
              <div className={styles.div3}>
                <div className={styles.inner3}>
                  <div className={styles.rhinoPaleAleParent}>
                    <h3 className={styles.rhinoPaleAle}>Rhino Pale Ale</h3>
                    <div className={styles.ca750}>CA | 750 ml</div>
                  </div>
                </div>
                <div className={styles.inner4}>
                  <div className={styles.frameInner} />
                </div>
                <b className={styles.b1}>$31</b>
              </div>
              <div className={styles.div4}>
                <div className={styles.inner5}>
                  <div className={styles.irishGuinnessParent}>
                    <b className={styles.irishGuinness}>Irish Guinness</b>
                    <div className={styles.ie750}>IE | 750 ml</div>
                  </div>
                </div>
                <div className={styles.inner6}>
                  <div className={styles.rectangleDiv} />
                </div>
                <b className={styles.b2}>$26</b>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.cocktailsWrapper}>
              <b className={styles.cocktails}>Cocktails</b>
            </div>
            <div className={styles.menu1}>
              <div className={styles.div5}>
                <div className={styles.aperolSpritzParent}>
                  <b className={styles.aperolSpritz}>Aperol Spritz</b>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.frameChild1} />
                  </div>
                  <b className={styles.wineDivider}>$20</b>
                </div>
                <div className={styles.aperolVilla}>
                  Aperol | Villa Marchesi prosecco | soda | 30ml
                </div>
              </div>
              <div className={styles.div6}>
                <div className={styles.frameParent2}>
                  <div className={styles.darkNStormyParent}>
                    <h3 className={styles.darkNStormy}>Dark 'N' Stormy</h3>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild2} />
                    </div>
                  </div>
                  <div
                    className={styles.darkRum}
                  >{`Dark rum | Ginger beer | Slice of lime. `}</div>
                </div>
                <b className={styles.b3}>$16</b>
              </div>
              <div className={styles.div7}>
                <div className={styles.frameParent3}>
                  <div className={styles.daiquiriWrapper}>
                    <b className={styles.daiquiri}>
                      <p className={styles.daiquiri1}>Daiquiri</p>
                    </b>
                  </div>
                  <div className={styles.rectangleFrame}>
                    <div className={styles.frameChild3} />
                  </div>
                  <b className={styles.b4}>$10</b>
                </div>
                <div className={styles.rumCitrus}>
                  Rum | Citrus juice | Sugar
                </div>
              </div>
              <div className={styles.div8}>
                <div className={styles.inner7}>
                  <div className={styles.frameParent4}>
                    <div className={styles.oldFashionedParent}>
                      <b className={styles.oldFashioned}>Old Fashioned</b>
                      <div className={styles.rectangleWrapper1}>
                        <div className={styles.frameChild4} />
                      </div>
                    </div>
                    <div className={styles.bourbonBrown}>
                      Bourbon | Brown sugar | Angostura Bitters
                    </div>
                  </div>
                </div>
                <b className={styles.b5}>$31</b>
              </div>
              <div className={styles.div9}>
                <div className={styles.frameParent5}>
                  <div className={styles.negroniWrapper}>
                    <b className={styles.negroni}>Negroni</b>
                  </div>
                  <div className={styles.rectangleWrapper2}>
                    <div className={styles.frameChild5} />
                  </div>
                  <b className={styles.b6}>$26</b>
                </div>
                <div className={styles.ginSweet}>
                  Gin | Sweet Vermouth | Campari | Orange garnish
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <b className={styles.viewMore}>View More</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialDrinks;
