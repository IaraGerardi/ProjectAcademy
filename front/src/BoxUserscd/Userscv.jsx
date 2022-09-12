import { useEffect, useState } from "react";
import axios from "axios";
import "./Userscvcss.css";


function Userscv () {
  const [newusers, setNewusers] = useState([]);

  // console.log(newusers);

  //PEDIDO ASINCRONO

  useEffect(() => {
    const getOrientados = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/orientados");
        setNewusers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrientados();
  }, []);

  return (
    <div className="box-cont">
      <ul>
        {newusers.length === 0 && <p>Cargando...</p>}
        {newusers.map((Usersapi, i) => {
          return (
            <>
              <div className="boxtwo">
                <div className="boxtree">
                  <li key={i}>
                    <div className="boxflex">
                      <div>
                        <img className="ImgUsers" src={require(`../img-back/orientados/${Usersapi.photoProfile}`)} alt="" />
                        {/* <img
                          className="ImgUsers"
                          src=
                          alt="Foto Usuario"
                        /> */}
                      </div>

                      <div>
                        <h4>
                          {Usersapi.name} {Usersapi.lastname}
                        </h4>
                        <p>{Usersapi.school}</p>
                      </div>

                      {/* <div className="classicon"><img className="usericon" src={require('../usuarios/img/user.png')} alt="usuario" /></div> */}
                    </div>
                  </li>
                </div>
              </div>
            </>

            // </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Userscv;
