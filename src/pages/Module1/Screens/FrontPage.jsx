import FrontPageData from "../../../data/Module1/FrontPage/FrontPage";
import styles from "./FrontPage.module.css";
FrontPageData;
const hero = "./images/FrontPage/hero.png";
const FrontPage = () => {
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
        </div>
        <div className={styles.activityWrapper}>
          {/*  <audio loop autoPlay src={data.audio} />
           */}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
