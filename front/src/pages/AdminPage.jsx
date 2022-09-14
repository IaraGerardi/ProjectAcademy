import "../css/AdminPage.css";
import Sidebar from "../Header-MenuLateral/Sidebar";
import HeaderInicio from "../Header-MenuLateral/HeaderInicio";
// import Sidebar from "../Header-MenuLateral/Sidebar";
// import HeaderInicio from "../Header-MenuLateral/HeaderInicio";
import SliderOficial from "../SliderCd/SliderOficial";
import { Link } from "react-router-dom";
import UserAdmin from "../UsersAdmin/UserAdmin";
// import UserAdmin from "../UsersAdmin/UserAdmin";

function AdminPage() {
  return (
    <>
      <div className=" h-auto flex">
        <div
          className="h-full w-1/6 overflow-hidden"
        >
          <Sidebar />
        </div>

        <div
          className="
      h-30 w-full overflow-hidden"
        >
          <HeaderInicio />

          <div className=" h-auto">

            <div className=" h-1/5 items-center">

              <div className="flex items-center w-9/12 ml-20 justify-between h-full">
              
              <div>Nuevos orientados1</div>
              
              <div>
                <Link className="navegar" to="/nuevoOrientado">
                  <button className="btn-ingresar-orientado">
                    Ingresar orientado
                  </button>
                </Link>
              </div>
              </div>

            </div>
            {/* ------------------------------------- */}
            <div className=" h-1/5 items-center">

<div className="flex items-center w-9/12 ml-20 justify-between h-auto overflow-hidden">

<div><UserAdmin/></div>

</div>

</div>
{/* -------------A */}
<div className=" h-1/5 items-center">
<div className="flex items-center w-9/12 ml-20 justify-between h-auto">
Ver mas orientados
</div>
</div>

{/* -------------A */}
{/* ------------- */}
<div className=" h-1/5 items-center">
<div className="flex items-center  w-9/12 ml-20 justify-between h-auto">
NOVEDADES
</div>
</div>

{/* ------------- */}

<div className=" h-1/5 items-center">
<div className="flex items-center  w-9/12 ml-20 justify-between h-auto">
<SliderOficial/>
</div>
</div>


{/*  */}

{/* <div className="bg-orange-500 h-1/5 items-center">

              <div className="flex items-center bg-gray-500 w-10/12 ml-20 justify-between h-full">
              
              <div>Nuevos orientados</div>
              
              <div>
                <Link className="navegar" to="/nuevoOrientado">
                  <button className="btn-ingresar-orientado">
                    Ingresar orientado
                  </button>
                </Link>
              </div>
              </div>

            </div> */}

            {/*  */}


          </div>
        </div>


        {/* <div className="bg-green-100
      h-96">hola</div>
      <div className="bg-green-100
      h-96">hola</div>
      <div className="bg-green-100
      h-96">hola</div> */}
      </div>
    </>
  );
}

export default AdminPage;

{
  /* <div className="cont-major">
        <div className="menu-sa">
          <Sidebar />
        </div>

        <div className="header-sa">
          <div className="sa-header-children">
            <HeaderInicio />
          </div>

          

          // <div className="sa-seccion">
          //   <div className="sectionFlex">


          //     <div className="titlecdboton">

          //       <div className="seccionnoio">
          //       <div className="boxbuttoncd">
          //         <h3>Nuevos Orientados</h3>
          //       </div>
          //       <div>
          //         <Link className="navegar" to="/nuevoOrientado">
          //           <button className="btn-ingresar-orientado">
          //             Ingresar orientado
          //           </button>
          //         </Link>
          //       </div>
                
          //       </div>

          //     </div>


          //     <div className="sectioncdusers">
                
          //       <div className="sectioncdusersinicio">
          //         <UserAdmin/>
          //       </div>
                
          //     </div>



          //     <div className="sectioncdnovedad">
          //       {/* <h2 className="novedades">Novedades</h2> */
}
{
  /* <div className="sectionflex">
                  <SliderOficial />
                </div>
              </div> */
}
{
  /* 
            </div>
          </div>

        </div>
      
      </div> } */
}
