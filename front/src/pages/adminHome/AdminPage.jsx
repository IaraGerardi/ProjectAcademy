import "../sidebar-header/style/AdminPage.css";
import { Sidebar } from "../sidebar-header/components/Sidebar.js";
import HeaderInicio from "../sidebar-header/components/HeaderInicio";

import SliderOficial from "./SliderCd/SliderOficial";
import { Link } from "react-router-dom";
import UserAdmin from "./UsersAdmin/UserAdmin";

function AdminPage() {
  return (
    <div className="container-P w-full flex">
      {" "}
      {/*  containedor padre tamaño igual a app */}
      <Sidebar />
      {/* hijo 1 izquierdo sticky */}
      <div className="container-derecho header-sa">
        {/*  hijo2 derecho  column */}
        <HeaderInicio propNamePage="Bienvenido/a" />

        <div>
          <div>
            {/*------------------  */}
            <div className="h-screen flex">
              <div className="h-30 w-full">
                <div className="boxMainAdminHome mt-2">
                  <div className=" h-3/5">

                    <div className="boxcentral h-1/6  items-center">
                      <div className=" boxcentraltwo flex items-center w-9/12 ml-20 justify-between h-full">
                        <div className="text-1xl text-center font-semibold">
                          <div>Nuevos orientados</div>
                          <div className="nuevosorientados bg-cyan-400 h-1 mt-2 w-48" ></div>
                        </div>

                        <div>
                          <Link className="navegar" to="/orientados/nuevo">
                            <button className="btn-ingresar-orientado mr-2">
                              Ingresar orientado
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="Adminbloque mt-3">
                      <UserAdmin />
                    </div>

                    <div className="items-center mt-1">
                      <div className="flex items-center w-9/12 ml-20 justify-between h-auto ">
                        <div className="orientadoscd">
                          <div>
                            <Link className="navegar" to="/orientados">
                              Ver más orientados
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" h-3/1 items-center mt-4">
                      <div className="flex items-center w-8/12 ml-20 justify-between h-auto ">
                        <div>
                          <div>
                            <h1 className="BoxNovedadescd text-3xl text-bold">
                              Novedades
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="boxMainSlider">
                      <div className=" h-3/4 items-center  mt-6/12">
                        <div className="flex items-center  w-9/12 ml-20 justify-between h-auto contentslider">
                          <SliderOficial />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
