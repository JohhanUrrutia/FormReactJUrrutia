const valueEmail = (e) => {
    console.log(e.target.value)
}



const Input = ({email, setEmail, password, setPassword, button, setButton}) => {

    const valuePassword = (e) => {
        let passwordIngresado = parseInt(e.target.value)
        setPassword(password = passwordIngresado)

        if (password === 252525){
            setButton (button = false)
        } else{
            setButton (button = true)
        }
    }

    return (
        <div className="d-flex justify-content-center flex-column m-0 p-0">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Desafío Estado De Los Componentes & Eventos</h1>
                <p>Johhan Urrutia</p>
            </div>
            <form className="d-flex flex-column gap-3 align-items-center">
                <input className="w-25" onChange={valueEmail} type="text" placeholder="Ingrese email"/>
                <input className="w-25" onChange={valuePassword} type="password" placeholder="Ingrese Password"/>
                <button hidden={button} type="submit">Enviar</button>
            </form>
        </div>
    )
}
    
export default Input