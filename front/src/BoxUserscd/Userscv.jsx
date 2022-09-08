import { useEffect, useState } from "react";
import axios from "axios";
import "./Userscvcss.css";

function Userscv() {
  const [newusers, setNewusers] = useState([]);

  console.log(newusers);

  //PEDIDO ASINCRONO
  useEffect(() => {
    const obtenerUserscv = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";

      const result = await axios.get(url);

      setNewusers(result.data);
    };
    obtenerUserscv();
  }, []);

  return (
    <div>
      {/* <h1>Nuevos Orientados</h1> */}
      <ul>
        {newusers.length === 0 && <p>Cargando</p>}
        {newusers.map((Usersapi, i) => {
          return (
            <>

              {/* // <div className="box"> */}

              <div className="boxtwo">

                <div className="boxtree">
                <li key={i}>
                <div className="boxflex">
                    
                  <div>
                 {/* <img className="ImgUsers" src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" alt="" /> */}
                 </div>

                <div>
                  <h4>{Usersapi.name}</h4>
                  <p>{Usersapi.username}</p>
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
