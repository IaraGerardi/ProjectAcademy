import "../css/AdminPage.css"
import Sidebar from "../Header-MenuLateral/Sidebar";
import HeaderInicio from "../Header-MenuLateral/HeaderInicio";


function AdminPage() {
    return (
        <div>

<div className="box">
    

    <div className="box1"><Sidebar/></div>
    {/* <div className="box2"> <HeaderInicio/></div> */}
    <div className='boxtres'>
        <div className='boxcuatro'><HeaderInicio/></div>
        <div><h1>HOLA SOY SEBAS HINCHA DEL CICLON :p</h1></div>
    </div>

    {/* <div>
    <div>hola</div>
    </div> */}
</div>



        </div>
    );
}

export default AdminPage;
