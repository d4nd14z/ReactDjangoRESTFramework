import { useEffect } from "react";
import { NavBar } from "../components/NavBar";

export const HomePage = () => {

  const url = 'http://127.0.0.1:8000/api/auth/me';

  const pruebaLogin = () => {

    let authtoken = localStorage.getItem("access-token");
    let refreshtoken = localStorage.getItem("refresh-token");
    console.log("Auth Token: ", authtoken);
    console.log("Refresh Token: ", refreshtoken);

  }

  useEffect(() => {
    pruebaLogin();
  }, []);
  

  return (          
    <div className="container">
      <h1>Home Page</h1>
      <pre>Validacion de Token</pre>
      <br/>
      <h1>Logout</h1>
      <pre>Destruir las variables almacenadas en localStorage</pre>
    </div>
  )
}
