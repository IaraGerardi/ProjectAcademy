import { useEffect, useState } from "react";
import axios from "axios";
import "./UserAdmin.css";

function UserAdmin() {
  const [newusers, setNewusers] = useState([]);

  useEffect(() => {
    const getOrientados = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/orientados");
        setNewusers(res.data.slice(-6));

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
                        <img
                          className="ImgUsers"
                          src={require(`../img-back/orientados/${Usersapi.photoProfile}`)}
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
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default UserAdmin;
