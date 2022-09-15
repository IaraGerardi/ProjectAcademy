import "../sidebar-header/style/AdminPage.css";
import Sidebar from "../sidebar-header/components/Sidebar";
import HeaderInicio from "../sidebar-header/components/HeaderInicio";

import SliderOficial from "./SliderCd/SliderOficial"
import { Link } from "react-router-dom";
import UserAdmin from "./UsersAdmin/UserAdmin";


function AdminPage() {
  return (
    <>
    
      <div className="h-screen flex">
        <div className="h-full w-1/6 overflow-hidden">
          <Sidebar />
        </div>
        
        <div className="h-30 w-full overflow-hidden">
        <HeaderInicio />
      

          <div className="boxMainAdminHome">
          <div className=" h-3/5">
            <div className=" h-1/6  items-center">
              <div className="flex items-center w-9/12 ml-20 justify-between h-full">
                <div className="bordercd text-3xl">Nuevos orientados</div>

                <div>
                  <Link className="navegar" to="/nuevoOrientado">
                    <button className="btn-ingresar-orientado mr-2">
                      Ingresar orientado
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            
                <div>
                  <UserAdmin />
                </div>
            

            <div className="items-center mt-1">
              <div className="flex items-center w-9/12 ml-20 justify-between h-auto overflow-hidden">
                <div className="orientadoscd">
                  <div>
                    <Link className="navegar" to="/nuevoOrientado">
                      Ver más orientados
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className=" h-3/1 items-center mt-4">
              <div className="flex items-center w-9/12 ml-20 justify-between h-auto overflow-hidden">
                <div>
                  <div>
                    <h1 className="text-3xl ">Novedades</h1>
                  </div>
                </div>
              </div>
            </div>

          <div className="boxMainSlider">
            <div className=" h-3/4 items-center  mt-6/12">
              <div className="flex items-center  w-9/12 ml-20 justify-between h-auto">
                <SliderOficial />
              </div>
            </div>
          </div>  
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AdminPage;
