import { useEffect, useState } from "react";
import axios from "axios";
import "../call-students.css"

function CallStudents() {
    const [newusers, setNewusers] = useState([]);

    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/orientados");
                setNewusers(res.data);

                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getOrientados();
    }, []);

    return (
        <div className="cont-students">

            <ul>
                {newusers.length === 0 && <p>Cargando...</p>}
                {newusers.map((Usersapi) => {
                    return (
                        <div className="box-students" key={Usersapi.id} >



                            <div className="content-students">

                                <img
                                    className="ImgUsers"
                                    src={require(`../../../img-back/orientados/${Usersapi.photoProfile}`)}
                                    alt="Foto perfil orientado"
                                />
                                <div>

                                    <h4>
                                        {Usersapi.name} {Usersapi.lastname}
                                    </h4>
                                    <p>{Usersapi.school}</p>
                                </div>

                            </div>
                        </div>

                    );
                })}
            </ul >
        </div >
    );
}


export default CallStudents;
