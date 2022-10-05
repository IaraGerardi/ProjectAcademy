import { useEffect, useState } from "react";
import axios from "axios";
import "./UserAdmin.css";
import Icon from "../../global-components/Svg-icon";
import { Link } from "react-router-dom";

function UserAdmin() {
  const [newusers, setNewusers] = useState([]);

  useEffect(() => {
    const getOrientados = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/orientados", { withCredentials: true });
        setNewusers(res.data.slice(0,6));

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
        {newusers.map((usersapi) => (
          <Link to={`/orientados/StudentInfo/${usersapi.id}`}className="boxtwo" key={usersapi.name}>
            <div className="boximagepi flex">
              <img
                className="ImgUsers"
                src={require(`../../../img-back/orientados/${usersapi.photoProfile}`)}
                alt="default"
              />

              <div className="padmin">
                <p className="pname">
                  {usersapi.name} {usersapi.lastname}
                </p>
                <p className="pschools">{usersapi.school}</p>
              </div>
            </div>

            {usersapi.OrientadoreId != null ? (
              <div className="iconcd">
                <Icon classname="h-8" type="userIcon" width="17" height="24" />
              </div>
            ) : 
            <div className="iconcd">
                <Icon classname="h-8" type="assignUser" width="17" height="24" />
              </div>
            }
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default UserAdmin;
