import "../sidebar-header/style/AdminPage.css";
import { Sidebar } from "../sidebar-header/components/Sidebar.js";
import HeaderInicio from "../sidebar-header/components/HeaderInicio";
import SliderOfficial from "./SliderCd/SliderOficial";
import UserAdmin from "./UsersAdmin/UserAdmin";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="container-derecho header-sa">
        <HeaderInicio propNamePage="Bienvenido/a" />
        <div>
          <div>
            <div className="h-screen flex">
              <div className="h-30 w-full">
                <div className="mt-2">
                  <div className=" h-3/5">


                    {/*1 seccion principal nuevos orientados + boton */}
                    <div className=" w-full h-20 flex items-center justify-center " >
                      <div className="flex-query-cv box-content-ib-two w-9/12 h-10 flex justify-between items-center">
                        <div className="content-center-cv flex justify-center ml-1">
                          <div className="box-new-oriented-cv">Nuevos Orientados
                          </div>
                          <div className="box-line-oriented"></div>
                        </div>
                        <div>
                          <button className="Buttons-one-cv">
                            <Link to="/orientados/nuevo">Ingresar Orientado</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* seccion principal nuevos orientados + boton */}

                    {/*2 seccion users */}
                    <div className="box-users-cv w-full h-auto flex items-center justify-center" >
                      <div className="box-content-ib-cv w-9/12 h-full ">
                        <UserAdmin />
                      </div>
                    </div>
                    {/* seccion users */}


                    {/*3 seccion medio ver mas y novedades */}
                    <div className="w-full h-10 flex items-center justify-center " >
                      <div className="box-content-ib-two w-9/12 h-16 ml-4">
                        <div className="mt-4 box-novedade-cv"><Link to="/orientados/newUsers"><u>Ver más orientados</u></Link></div>
                        <div className="box-line-oriented-two"></div>
                      </div>
                    </div>
                    <div className="w-full h-10 flex items-center justify-center" >
                      <div className="box-content-ib-two w-9/12 ml-4">
                        <div className="box-notice-cv text-3xl mt-10">Novedades</div>
                        <div className="box-line-oriented-tree"></div>
                      </div>
                    </div>
                    {/* seccion medio ver mas y novedades */}

                    {/*4 slider */}
                    <div className="content-slider-one-cv w-full flex items-center justify-center" >
                      <div className="box-content-ib-two w-9/12">
                        <SliderOfficial />
                      </div>
                    </div>
                    {/* slider */}

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

