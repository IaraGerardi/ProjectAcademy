function FormLogIn() {
    return (
        <form method="POST">
            <div className="emailLogContainer">
                <label for="emailLog">Email</label>
                <input
                    type="email"
                    id="emailLog"
                    name="emailLog"
                    // onChange={verifyLogIn}
                    placeholder="Ingresa tu email" />
            </div>
            <div className="passwordLogContainer">
                <label for='passwordLog'>Contraseña</label>
                <input
                    type="password"
                    id="passwordLog"
                    name="passwordLog"
                    // onChange={verifyLogIn}
                    placeholder="Ingresa tu contraseña" />
            </div>
            <input type="submit" value="Ingresar" />
        </form>
    );
}

export default FormLogIn;