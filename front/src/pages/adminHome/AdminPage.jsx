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
                  <div className="h-3/5">

                    {/*1 seccion principal nuevos orientados + boton */}
                    <div className="w-full h-20 flex items-center mt-5" >

                      <div className="flex-query-cv w-9/12 h-10 flex justify-between ml-20 items-center">
                        <div className="content-center-cv flex justify-center ml-1">
                          <div className="box-new-oriented-cv">Nuevos Orientados
                          </div>
                          <div className="box-line-oriented"></div>
                        </div>
                        <div className="cont-bu"><Link className="button-add-oriented-two" to="/orientados/nuevo">Ingresar orientado</Link></div>
                      </div>

                    </div>
                    {/* seccion principal nuevos orientados + boton */}

                    {/*2 seccion users */}
                    <div className="box-users-cv w-full h-auto flex items-center" >
                      <div className="box-content-ib-cv w-9/12 h-full ml-20 flex-query-cv ">
                        <UserAdmin />
                      </div>
                    </div>
                    {/* seccion users */}

                    {/*3 seccion medio ver mas y novedades */}
                    <div className="w-full h-10 flex items-center" >
                      <div className="box-content-ib-two w-9/12 h-16 ml-20 flex-query-cv">
                        <div className="mt-3 box-plus-oriented"><Link to="/orientados/newUsers"><u>Ver más orientados</u></Link></div>
                        <div className="box-line-oriented-two"></div>
                      </div>
                    </div>

                    <div className="w-full h-10 flex items-center" >
                      <div className="box-content-ib-two w-9/12 ml-20 flex-query-cv">
                        <div className="box-notice-cv text-3xl mt-10">Novedades</div>
                        <div className="box-line-oriented-tree"></div>
                      </div>
                    </div>
                    {/* seccion medio ver mas y novedades */}

                    {/*4 slider */}
                    <div className="content-slider-one-cv w-full flex items-center h-full" >
                      <div className="box-content-ib-two w-9/12 ml-20 flex-query-cv mt-3">
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
