import style from "./Landing.module.css";
import image from "/logo5.png";
import circle from "/circulo.png";
import orangeX from "/x.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={style.container}>
      <img src={image} alt="logo" className={style.logo} />
      <img src={circle} alt="circle" className={style.circle} />
      <img src={orangeX} alt="circle" className={style.orangeX} />

      <p className={style.title}>POTENCIA TU<br /> MENTE Y<br /> CUERPO</p><br />
      <p className={style.parrafo}>Unete a nosotros y descubre<br /> un nuevo nivel de<br /> entrenamiento.<br /> No te lo pierdas, inscribete ya!</p>

      <Link to="/home">
        <button className={style.btn}>ENTRAR</button>
      </Link>
    </div>
  )

}


export default Landing;