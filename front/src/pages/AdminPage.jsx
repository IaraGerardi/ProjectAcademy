import "../css/AdminPage.css";
import Sidebar from "../Header-MenuLateral/Sidebar";
import HeaderInicio from "../Header-MenuLateral/HeaderInicio";

function AdminPage() {
  return (
    <>
      <div className="cont-major">

        <div className="menu-sa"><Sidebar /></div>

        <div className="header-sa">
          <div className="sa-header-children"><HeaderInicio /></div>

          <div className="sa-seccion">




          </div>
        </div>

      </div>


    </>
  );
}

export default AdminPage;
