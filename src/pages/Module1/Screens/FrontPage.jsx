import { Link, useNavigate } from "react-router-dom";
import FrontPageData from "../../../data/Module1/FrontPage/FrontPage";

import styles from "./FrontPage.module.css";
import activitiesNavigation from "../Activities/activitiesNavigation";

const send = "./ImagesBtns/btnContinue.png"

FrontPageData;
const hero = "./images/FrontPage/hero.png";
const FrontPage = () => {

const navigate = useNavigate()

  const currentActivity = activitiesNavigation.find(
    (activity) => activity.id === "portada",
  );




  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <header className={styles.header}>
            <h3 className={styles.heading}>{FrontPageData.header.title}</h3>

            <p className={styles.title}>{FrontPageData.header.SubTitle}</p>
            <p className={styles.sub_title}>{FrontPageData.header.module}</p>
          </header>

          <img src={hero} className={styles.bgSlide} alt="image hero" />

          <Link to={currentActivity.next} className={styles.btnContinue}>
          <img src={send} alt="imagen boton de continuar" />
          
          </Link>
        </div>
     
      </div>
    </div>
  );
};

export default FrontPage;
