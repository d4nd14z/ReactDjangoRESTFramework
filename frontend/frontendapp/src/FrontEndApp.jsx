import { Routes, Route } from "react-router-dom"
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";

export const FrontEndApp = () => {
  return (
    <div className="application">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="home" element={<HomePage />} />
        </Routes>        
    </div>    
  )
}
