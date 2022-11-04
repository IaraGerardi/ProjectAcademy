import { useEffect, useState } from "react";
import axios from "axios";
import "./UserAdmin.css";
import iconuserstwo from "../UsersAdmin/assets/orientedtwocv.svg"
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
        setNewusers(res.data.info.slice(-9));
        setLoadingOriented(false);

      } catch (error) {

      }
    };
    getUserOriented();
  }, []);

  return (
    <div className="flex">
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
        <ul className="ul-users-admin-cv">
          {newusers.map((usersapi) => (
            <Link
              to={`/orientados/StudentInfo/${usersapi.id}`}
              className="box-two"
              key={usersapi.name}
            >
              <div className="flex">
              <img className="img-users" alt="imagen" src={`http://localhost:8000/images/${usersapi.photoProfile}`}/>
                {/* <img
                  className="img-users"
                  src={require(`http://localhost:8000/images/${usersapi.photoProfile}`)}
                  alt="default"
                /> */}
                <div className="p-admin">
                  <p className="p-name">
                    {usersapi.name} {usersapi.lastname}
                  </p>
                  <p className="p-schools">{usersapi.lastname}</p>
                </div>
              </div>

              {usersapi.counselorId ? (
                <div className="icon-cd">
                  <img className="icon-users-cv" src={iconuserstwo} alt="icon users card" />
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
