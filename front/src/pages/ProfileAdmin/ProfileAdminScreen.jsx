import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import {Sidebar} from "../sidebar-header/components/Sidebar.js"
import CardProfile from "./components/CardProfile";

/* import { useState,useEffect } from "react"; */


function ProfileAdminScreen() {

  return (
  
      
            <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}
               
                <Sidebar /> {/* hijo 1 izquierdo sticky */}

                <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
                    <HeaderInicio propNamePage="Bienvenido/a"/>

                
               <CardProfile/>
              
                    
                    

                    
                </div>

                </div>
  )
}

export default ProfileAdminScreen;
