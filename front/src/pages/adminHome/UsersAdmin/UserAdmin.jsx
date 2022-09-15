import { useEffect, useState } from "react";
import axios from "axios";
import "./UserAdmin.css";
import Icon from "../../global-components/Svg-icon";


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
    
      <div className="box-center">
        <ul className="ulUserAdmin">
          {/* {newusers.length === 0 && <p>Cargando...</p>} */}
          {newusers.map((usersapi) => (
            
           
                <div className="boxtwo"  key={usersapi.name}>
                  <li>
                    <div className="boxflex">
                      <div>
                        <img
                          className="ImgUsers"
                          src={require(`../../../img-back/orientados/${usersapi.photoProfile}`)}
                          alt="default"
                        />
                      </div>

                      <div>
                        <h4>
                          {usersapi.name} {usersapi.lastname}
                        </h4>
                        <p>{usersapi.school}</p>
                      </div>

                      <div className="mt--10">
                      {usersapi.OrientadoreId != null ?
                      <div className="mt--10">
                      <Icon
                        classname=""
                        type="userIcon"
                        width="24" height="24" />
                      </div>
                      : null
          }
                      </div>
                    </div>
                  </li>
                </div>
              
            
          ))}
        </ul>
      </div>
    
  );
}

export default UserAdmin;