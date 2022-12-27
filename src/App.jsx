import Input from "./components/Input"
import { useState } from "react"

const App = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState ()
  const [button, setButton] = useState (true)

  return (
    <div className="d-flex vw-100 vh-100 text-center flex-column align-items-center justify-content-center">
      <Input 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        button={button}
        setButton={setButton}
      ></Input>
    </div>
  )
}

export default App