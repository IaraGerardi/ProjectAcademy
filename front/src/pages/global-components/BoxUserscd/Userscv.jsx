import { useEffect, useState } from "react";
import axios from "axios";
import "./Userscvcss.css";

function Userscv() {
  const [newusers, setNewusers] = useState([]);

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
        {newusers.map((Usersapi) => {
          return (
              <div className="boxtwo" key={Usersapi.id} >
                <div className="boxtree">
                  <li className="lista" >
                    <div className="boxflex">
                      <div>
                        <img
                          className="ImgUsers"
                          src={require(`../../../img-back/orientados/${Usersapi.photoProfile}`)}
                          alt=""
                        />
                      </div>

                      <div>
                        <h4>
                          {Usersapi.name} {Usersapi.lastname}
                        </h4>
                        <p>{Usersapi.school}</p>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Userscv;
