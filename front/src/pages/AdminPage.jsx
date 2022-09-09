import "../css/AdminPage.css";
import Sidebar from "../Header-MenuLateral/Sidebar";
import HeaderInicio from "../Header-MenuLateral/HeaderInicio";

function AdminPage() {
  return (
    <>

    <div className="contentcd">
    <div className="contentcdmenu">
        <Sidebar/>
    </div>
    
    <div className="contentcdheader">
        <div className="contentcdheaderone">
            <HeaderInicio/>
        </div>
        <div>HOLA area de trabajo </div>
    </div>
    
    </div>


    </>
  );
}

export default AdminPage;
