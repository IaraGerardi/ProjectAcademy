import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import { Sidebar } from "../sidebar-header/components/Sidebar.js"
import CardProfile from "./components/CardProfile";

/* import { useState,useEffect } from "react"; */


function ProfileAdminScreen() {

  return (


    <div className="container-P w-full flex"> 

      <Sidebar /> 
      <div className="container-derecho header-sa">
        <HeaderInicio propNamePage="Bienvenido/a" />

        <CardProfile />

      </div>

    </div>
  )
}

export default ProfileAdminScreen;
