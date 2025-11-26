import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// Імпортуємо іконки соцмереж
import { FaFacebookF, FaTwitter, FaGoogle, FaTelegramPlane } from "react-icons/fa";

const Login = ({ setIsAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://kursuva-1.onrender.com/api/login', { username, password });
            localStorage.setItem('auth', 'true');
            setIsAuth(true);
            navigate('/autopark');
        } catch (error) {
            alert('Невірний логін або пароль');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            {/* Картка входу */}
            <div className="card bg-dark text-white border-secondary shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
                
                {/* 1. Шапка картки (Як на фото: Вхід зліва, Реєстрація справа) */}
                <div className="card-header border-secondary d-flex justify-content-between align-items-center p-4">
                    <h3 className="m-0 text-uppercase" style={{ letterSpacing: '1px' }}>Вхід на сайт</h3>
                    <Link to="/register" className="text-decoration-none text-warning fw-bold">
                        Реєстрація
                    </Link>
                </div>

                {/* 2. Тіло картки (Форма) */}
                <div className="card-body p-4">
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Логін або телефон</label>
                            <input 
                                type="text" 
                                className="form-control bg-black text-white border-secondary py-2" 
                                placeholder="Введіть логін"
                                onChange={e => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label text-secondary">Пароль</label>
                            <input 
                                type="password" 
                                className="form-control bg-black text-white border-secondary py-2" 
                                placeholder="Введіть пароль"
                                onChange={e => setPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        {/* Блок "Запам'ятати мене" та "Забули пароль" */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="form-check">
                                <input className="form-check-input bg-dark border-secondary" type="checkbox" id="rememberMe" />
                                <label className="form-check-label text-secondary" htmlFor="rememberMe">
                                    Запам'ятати мене
                                </label>
                            </div>
                            <a href="#" className="text-decoration-none text-secondary small">Забули пароль?</a>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Увійти</button>
                    </form>
                </div>

                {/* 3. Футер картки (Соцмережі) */}
                <div className="card-footer border-secondary text-center p-3 bg-black bg-opacity-25">
                    <p className="text-secondary small mb-3">Вхід через соцмережі</p>
                    <div className="d-flex justify-content-center gap-3">
                        {/* Кнопки-пустушки для краси */}
                        <button className="btn btn-outline-light rounded-circle" style={{width: '40px', height: '40px', padding: 0}}>
                            <FaGoogle />
                        </button>
                        <button className="btn btn-outline-primary rounded-circle" style={{width: '40px', height: '40px', padding: 0}}>
                            <FaFacebookF />
                        </button>
                        <button className="btn btn-outline-info rounded-circle" style={{width: '40px', height: '40px', padding: 0}}>
                            <FaTwitter />
                        </button>
                        <button className="btn btn-outline-warning rounded-circle" style={{width: '40px', height: '40px', padding: 0}}>
                            <FaTelegramPlane />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;