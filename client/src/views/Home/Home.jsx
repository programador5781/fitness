import style from "./Home.module.css";
import imagen from "../../../public/trainingMaxGym.png"

function Home () {
    return (
        <div className={style.container_Home}>
            <p>Esto es Home</p>
            <img src={imagen} alt="Logo" />
        </div>
    )
}

export default Home;