import "../css/AdminPage.css";
import Sidebar from "../Header-MenuLateral/Sidebar";
import HeaderInicio from "../Header-MenuLateral/HeaderInicio";

import SliderOficial from "../SliderCd/SliderOficial";
import { Link } from "react-router-dom";
import UserAdmin from "../UsersAdmin/UserAdmin";

function AdminPage() {
  return (
    <>
      <div className=" h-auto flex">
        <div className="h-full w-1/6 overflow-hidden">
          <Sidebar />
        </div>

        <div
          className="
      h-30 w-full overflow-hidden"
        >
          <HeaderInicio />

          <div className=" h-auto">
            <div className=" h-1/5 items-center">
              <div className="flex items-center w-9/12 ml-20 justify-between h-full">
                <div>Nuevos orientados1</div>

                <div>
                  <Link className="navegar" to="/nuevoOrientado">
                    <button className="btn-ingresar-orientado">
                      Ingresar orientado
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className=" h-1/5 items-center">
              <div className="flex items-center w-9/12 ml-20 justify-between h-auto overflow-hidden">
                <div>
                  <UserAdmin />
                </div>
              </div>
            </div>

            <div className=" h-1/5 items-center">
              <div className="flex items-center w-9/12 ml-20 justify-between h-auto">
                Ver mas orientados
              </div>
            </div>

            <div className=" h-1/5 items-center">
              <div className="flex items-center  w-9/12 ml-20 justify-between h-auto">
                NOVEDADES
              </div>
            </div>

            <div className=" h-1/5 items-center">
              <div className="flex items-center  w-9/12 ml-20 justify-between h-auto">
                <SliderOficial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
