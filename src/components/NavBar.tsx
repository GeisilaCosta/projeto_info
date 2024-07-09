import React from 'react';
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../App.css';

const NavBar: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img
                        src="src/assets/img/logo2.jpg"
                        width="100"
                        height="100"
                        className="rounded-logo"
                        alt="Logo"
                        tabIndex={0}  aria-label="logo do site influencers for you"// Torna a imagem focável
                    />
                </div>
                <div className="navbar-links">
                    <Link to="/" tabIndex={0} aria-label="link para a pagina home">Home</Link> 
                    <Link to="/campanha" tabIndex={0} aria-label="link para a pagina de campanhas">Campanhas</Link> 
                    <Link to="/influencers" tabIndex={0} aria-label="link para a pagina de influencers ">Influenciadores</Link> 
                    <Link to="/profile" tabIndex={0}  aria-label="link para a pagina de perfil">Perfil</Link> 
                </div>
                <button onClick={toggleDarkMode} className="btn btn-link" tabIndex={0} aria-label="botão para alteral os modos claro e escuro da pagina">
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;





