import { Link } from "react-router-dom";
import "./NotFound.css";
const hero = "/images/FrontPage/hero.png"
const back = "/images/return.png"
export const NotFound = () => {
  return (
    <div className="container notFound">
      <img src={hero} className='' alt="image hero" />
      <p>404</p>
      <p>Este lugar no esta disponible</p>
      <Link className="btnReturn" to={"/"}>
      <img src={back} alt="" />
      
      </Link>
    </div>
  );
};
