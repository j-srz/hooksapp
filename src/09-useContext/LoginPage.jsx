import { useContext } from "react"
import { UserContext } from "./context/UserContex";

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <button 
      className="btn btn-primary"
      onClick={() => setUser({id: 1233, name: 'Andrea', email: 'and@correo.com'})}
      
      >
        Set User
      </button>

    </>
  )
}
  