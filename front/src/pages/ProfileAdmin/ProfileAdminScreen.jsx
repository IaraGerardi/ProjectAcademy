import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import Sidebar from "../sidebar-header/components/Sidebar"
import CardProfile from "./componentes-Profile/CardProfile";


function ProfileAdminScreen() {
  return (
    <>
      
      <div className="cont-major">

                <div className="menu-sa"><Sidebar /></div>

                <div className="header-sa">
                    <div className="sa-header-children"><HeaderInicio/></div>

                    
                    <CardProfile/>

                    
                </div>

        </div>
    </>
  )
}

export default ProfileAdminScreen;
