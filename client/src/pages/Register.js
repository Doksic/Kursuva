import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://kursuva-1.onrender.com/api/register', { username, password });
            alert('Успішно! Тепер увійдіть.');
            navigate('/login');
        } catch (error) {
            alert('Помилка реєстрації');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="card bg-dark text-white border-secondary shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
                
                <div className="card-header border-secondary d-flex justify-content-between align-items-center p-4">
                    <h3 className="m-0 text-uppercase">Реєстрація</h3>
                    <Link to="/login" className="text-decoration-none text-warning fw-bold">
                        Вхід
                    </Link>
                </div>

                <div className="card-body p-4">
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="form-label text-secondary">Придумайте Логін</label>
                            <input 
                                type="text" 
                                className="form-control bg-black text-white border-secondary py-2" 
                                onChange={e => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label text-secondary">Придумайте Пароль</label>
                            <input 
                                type="password" 
                                className="form-control bg-black text-white border-secondary py-2" 
                                onChange={e => setPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Зареєструватися</button>
                    </form>
                </div>
                
                <div className="card-footer border-secondary text-center p-3 bg-black bg-opacity-25">
                    <small className="text-muted">Всі дані захищено військовим шифруванням</small>
                </div>
            </div>
        </div>
    );
};

export default Register;