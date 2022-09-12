import "../css/AdminPage.css";
import Sidebar from "../Header-MenuLateral/Sidebar";
import HeaderInicio from "../Header-MenuLateral/HeaderInicio";
import Userscv from "../BoxUserscd/Userscv";
import SliderOficial from "../SliderCd/SliderOficial";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <div className="cont-major">
        <div className="menu-sa">
          <Sidebar />
        </div>

        <div className="header-sa">
          <div className="sa-header-children">
            <HeaderInicio />
          </div>

          <div className="sa-seccion">
            <div className="sectionFlex">
              <div className="titlecdboton">
                <div className="boxbuttoncd">
                  <h3>Nuevos Orientados</h3>
                </div>
                <div>
                  <Link className="navegar" to="/nuevoOrientado">
                    <button className="btn-ingresar-orientado">
                      Ingresar orientado
                    </button>
                  </Link>
                </div>
              </div>
              <div className="sectioncdusers">
                <Userscv />
              </div>
              <div className="sectioncdnovedad">
                <h2 className="novedades">Novedades</h2>
                <div className="sectionflex">
                  <SliderOficial />
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
