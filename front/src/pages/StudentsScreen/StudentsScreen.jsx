
import HeaderInicio from "../sidebar-header/components/HeaderInicio.jsx";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import "./orientados.css"
import CallStudents from "./components/CallStudents";
/* import { Link } from "react-router-dom"; */
import { useState } from "react";
import FormOrientado from "../StudentsScreen/componentes-nuevoOrientado/FormOrientado";



function StudentsScreen() {

     const  [renderformOrientado,setRenderFormOrientado]=useState(false);

     const handleRenderForm=()=>{
    
        if(renderformOrientado===false){
            setRenderFormOrientado(true);
        }
     }

    return (
        <>
            <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}

                <Sidebar /> {/* hijo 1 izquierdo sticky */}

                <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
                    <HeaderInicio propNamePage="Orientados" />

                    <div>

                        {renderformOrientado===false ?
                         <>
                         <div className="cont-ingresar-orientado">
                            <p className="text-new-user">Nuevos usuarios a orientar</p>


                       
                                <button className="btn-ingresar-orientado" onClick={handleRenderForm}>Ingresar orientado</button>
                          
                        </div> {/*Texto y Boton que redirije a la Página de ingresar orientados.*/}


                        <div className="cont-users">
                            <CallStudents /> {/*Buscador y Llamado de usuarios*/}
                        </div>
                        </> : <FormOrientado/>}
                    
                        

                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentsScreen;