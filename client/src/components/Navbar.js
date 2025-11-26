import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuth, setIsAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
        navigate('/login');
    };

    return (
        // Змінили bg-white на bg-dark (темний фон) і додали рамку знизу
        <header className="bg-dark py-3 border-bottom border-secondary sticky-top">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    
                    {/* Логотип */}
                    <Link className="d-flex align-items-center text-white text-decoration-none" to="/">
                        <div className="bg-danger text-white p-2 rounded me-2 fw-bold">АП</div>
                        <div>
                            <h5 className="m-0 fw-bold text-uppercase" style={{letterSpacing: '1px'}}>Автопарк</h5>
                            <small className="text-white-50" style={{fontSize: '0.7rem'}}>Військового інституту</small>
                        </div>
                    </Link>

                    {/* Меню по центру */}
                    <nav className="d-none d-md-flex gap-4 fw-bold">
                        <Link to="/" className="text-white hover-effect">Головна</Link>
                        <Link to="/gallery" className="text-white hover-effect">Галерея</Link>
                        <Link to="/contacts" className="text-white hover-effect">Контакти</Link>
                        
                        {/* 👇 ОСЬ ТУТ МИ ЗМІНИЛИ КОЛІР НА БІЛИЙ (було text-danger) */}
                        {isAuth && <Link to="/autopark" className="text-white text-decoration-underline">Облік техніки</Link>}
                    </nav>

                    {/* Права частина */}
                    <div className="d-flex align-items-center gap-3">
                        <div className="d-none d-lg-block text-end">
                            <div className="fw-bold text-white">+38 044 123-45-67</div>
                            <small className="text-white-50">Черговий частини</small>
                        </div>
                        
                        {isAuth ? (
                            <button onClick={handleLogout} className="btn btn-outline-danger btn-sm rounded-pill px-3">Вийти</button>
                        ) : (
                            <Link to="/login" className="btn btn-danger btn-sm rounded-pill px-4">Вхід</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;