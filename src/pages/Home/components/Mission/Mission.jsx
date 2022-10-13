import React from "react";
import "./Mission.css";

export default function Mission() {
  return (
    <div className="content">
      <div className="content_two">
        <h1 className="paragraph_misions font-bold text-xl">Misión</h1>
        <p className="paragraph_fontsize">
          Acompañamos a las personas en sus procesos de transformación personal
          y profesional para que logren construir una vida con sentido
      </p>

        <p className="paragraph_bold">
          Quienes viven la experiencia V_Camp aprenden a:
        </p>

      <ul className="list">
          <li className="lis">
            <p className="paragraph">
              Conocerse, Valorarse y hacerse cargo de su potencial.
            </p>
          </li>

          <li className="lis">
            <p className="paragraph">Construir su proposito.</p>
          </li>

          <li className="lis">
            <p className="paragraph">
              Crear su propia carrera personalprofesional.
            </p>
          </li>
      </ul>

      </div>
    </div>
  );
}
