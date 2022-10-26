import { useEffect, useState } from "react";
import axios from "axios";
import "./UserAdmin.css";
import Icon from "../../global-components/Svg-icon";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

function UserAdmin() {
  const [newusers, setNewusers] = useState([]);
  const [loadingOriented, setLoadingOriented] = useState(true);

  useEffect(() => {
    const getUserOriented = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/oriented`, {
          withCredentials: true,
        });
        setNewusers(res.data.slice(-9));
        setLoadingOriented(false);
        
      } catch (error) {
        console.log(error);
      }
    };
    getUserOriented();
  }, []);

  return (
    <div className="box-center flex justify-center">
      {loadingOriented ? (
        <div className="flex justify-center mt-7">
          {" "}
          <BeatLoader
            color="#1EC5BB"
            cssOverride={{}}
            margin={5}
            size={10}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <ul className="ulUserAdmin">
          {newusers.map((usersapi) => (
            <Link
              to={`/orientados/StudentInfo/${usersapi.id}`}
              className="boxtwo"
              key={usersapi.name}
            >
              <div className="flex">
                <img
                  className="ImgUsers"
                  src={require(`../../../img-back/orientados/${usersapi.photoProfile}`)}
                  alt="default"
                />

                <div className="padmin">
                  <p className="pname">
                    {usersapi.name} {usersapi.lastname}
                  </p>
                  <p className="pschools">{usersapi.lastname}</p>
                </div>
              </div>

              {usersapi.counselorId ? (
                <div className="iconcd">
                <Icon
                  classname="h-8"
                  type="assignUser"
                  width="17"
                  height="24"
                />
                </div>
              ) : (
                null
              )}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserAdmin;
