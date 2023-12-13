import React from "react";
import style from "./Programs.module.css";
import { programsData } from "./programsData";
import RightArrow from "/public/rightArrow.png";

const Programs = () => {
  return (
    <div className={style.Programs} id={style.programs}>
        {/*header*/}
        <div className={style.programs_header}>
            <span className={style.stroke_text}>Explora nuestros</span>  
            <span>entrenamientos</span>  
            <span className={style.stroke_text}>para moldearte</span>  
        </div>

        <div className={style.program_categories}>
            {programsData.map((program) =>(
                <div className={style.category}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className={style.join_now}><span>Únete ahora</span><img src={RightArrow} alt=""/></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;