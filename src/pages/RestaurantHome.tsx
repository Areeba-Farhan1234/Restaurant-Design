import { FunctionComponent } from "react";
import Navbar from "../components/componentsNavbar";
import Hero from "../components/componentsHero";
import AboutCheif from "../components/componentsAboutCheif";
import SpecialDrinks from "../components/componentsSpecialDrinks";
import ChefsWord1 from "../components/ChefsWord1";
import ChefsWord from "../components/ChefsWord";
import PhotoGallery from "../components/PhotoGallery";
import FrameComponent from "../components/FrameComponent";
import styles from "./RestaurantHome.module.css";

const RestaurantHome: FunctionComponent = () => {
  return (
    <div className={styles.restaurantHome}>
      <div className={styles.maskGroup}>
        <div className={styles.maskGroupChild} />
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
      </div>
      <img className={styles.restaurantHomeChild} alt="" src="/vector-1.svg" />
      <div className={styles.restaurantHomeInner}>
        <div className={styles.frameParent}>
          <Navbar />
          <Hero />
        </div>
      </div>
      <AboutCheif />
      <SpecialDrinks />
      <ChefsWord1 />
      <img className={styles.restaurantHomeItem} alt="" src="/vector-12.svg" />
      <ChefsWord />
      <img className={styles.restaurantHomeChild1} alt="" src="/group-86.svg" />
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-80.svg" />
        <img className={styles.groupItem} alt="" src="/group-83.svg" />
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupInner} alt="" src="/group-80-1.svg" />
        <img className={styles.groupChild1} alt="" src="/group-83-1.svg" />
      </div>
      <PhotoGallery />
      <div className={styles.waveElementParent}>
        <img className={styles.waveElementIcon} alt="" />
        <img className={styles.bgIcon} alt="" src="/bg-3@2x.png" />
        <img
          className={styles.videoIcon}
          loading="lazy"
          alt=""
          src="/video@2x.png"
        />
        <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
        <img className={styles.bgIcon1} alt="" src="/bg-4@2x.png" />
        <img className={styles.bgIcon2} alt="" src="/bg-5@2x.png" />
      </div>
      <FrameComponent />
    </div>
  );
};

export default RestaurantHome;
