import "../sidebar-header/style/AdminPage.css";
import { Sidebar } from "../sidebar-header/components/Sidebar.js";
import HeaderInicio from "../sidebar-header/components/HeaderInicio";

import SliderOficial from "./SliderCd/SliderOficial";
import { Link } from "react-router-dom";
import UserAdmin from "./UsersAdmin/UserAdmin";

function AdminPage() {
  return (
    <div className="w-full flex">
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
                    <div className="contentsone h-1/6  items-center mt-8">
                      <div className="contentstwo flex items-center w-9/12 ml-20 justify-between h-full">
                        <div className="text-1xl text-center font-semibold mt-4 ml-2">
                          <div className="colorstextcv">Nuevos orientados</div>
                          <div className="newsorientedcv bg-cyan-400 h-1 mt-2 w-48"></div>
                        </div>

                        <div className="butons_edit">
                          <Link className="" to="/orientados/nuevo">
                              Ingresar orientado
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="Admindblock mt-5">
                      <UserAdmin />
                    </div>

                    <div className="items-center mt-1">
                      <div className="flex items-center w-9/10 ml-20 justify-between h-auto ">
                        <div className="orientedcd">
                          <div className="colorstextcv">
                            <Link className="navegar" to="/orientados/newUsers">
                              <u>Ver más orientados</u>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" h-3/1 items-center mt-4">
                      <div className="flex  w-8/12 textnovedade justify-between h-auto ">
                        <div>
                          <div className="colorstextcv2">
                            <h1 className="boxnoticesone text-2xl text-bold mt-6">
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

