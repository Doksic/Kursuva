import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Імпортуємо іконки
import { FaTrash, FaPlus, FaTruckMoving } from "react-icons/fa";

const AutoPark = () => {
    // Стан для списку машин
    const [vehicles, setVehicles] = useState([]);
    
    // Стан для форми додавання
    const [formData, setFormData] = useState({
        mark: '', number: '', type: 'Вантажний', driver: '', status: 'Справний'
    });

    // Завантажуємо дані при вході на сторінку
    useEffect(() => {
        fetchVehicles();
    }, []);

    // Функція отримання даних з сервера
    const fetchVehicles = async () => {
        try {
            const res = await axios.get('https://kursuva.onrender.com/api/vehicles');
            setVehicles(res.data);
        } catch (error) {
            console.error('Помилка завантаження:', error);
        }
    };

    // Функція додавання нової машини
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://kursuva.onrender.com/api/vehicles', formData);
            // Очищаємо форму після успішного додавання
            setFormData({ mark: '', number: '', type: 'Вантажний', driver: '', status: 'Справний' });
            fetchVehicles(); // Оновлюємо таблицю
        } catch (error) {
            alert('Помилка додавання. Перевірте сервер.');
        }
    };

    // Функція видалення
    const handleDelete = async (id) => {
        if(window.confirm('Ви впевнені, що хочете списати цю техніку?')) {
            try {
                await axios.delete(`https://kursuva.onrender.com/api/vehicles/${id}`);
                fetchVehicles();
            } catch (error) {
                alert('Помилка видалення');
            }
        }
    };

    return (
        <div className="container mt-5 mb-5">
            
            {/* 1. ЗАГОЛОВОК СТОРІНКИ */}
            <div className="d-flex align-items-center mb-4 text-white">
                <div className="bg-danger p-3 rounded-3 me-3 shadow">
                    <FaTruckMoving size={30} color="white" />
                </div>
                <div>
                    <h2 className="fw-bold text-uppercase m-0" style={{ letterSpacing: '1px' }}>
                        Облік транспорту
                    </h2>
                    <small className="text-white-50">Панель управління автопарком інституту</small>
                </div>
            </div>

            {/* 2. КАРТКА ДОДАВАННЯ (ФОРМА) */}
            <div className="card bg-dark text-white border-secondary shadow-lg mb-5 rounded-4 overflow-hidden">
                <div className="card-header border-secondary bg-black bg-opacity-25 p-3">
                    <h5 className="m-0 text-uppercase text-success">
                        <FaPlus className="me-2"/> Додати нову техніку
                    </h5>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit} className="row g-3 align-items-end">
                        <div className="col-md-3">
                            <label className="form-label text-secondary small text-uppercase fw-bold">Марка</label>
                            <input type="text" className="form-control bg-black text-white border-secondary" 
                                placeholder="напр. КрАЗ-6322" 
                                value={formData.mark} onChange={e => setFormData({...formData, mark: e.target.value})} required />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label text-secondary small text-uppercase fw-bold">Номер</label>
                            <input type="text" className="form-control bg-black text-white border-secondary" 
                                placeholder="00-00 А1" 
                                value={formData.number} onChange={e => setFormData({...formData, number: e.target.value})} required />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label text-secondary small text-uppercase fw-bold">Водій</label>
                            <input type="text" className="form-control bg-black text-white border-secondary" 
                                placeholder="Прізвище І.Б." 
                                value={formData.driver} onChange={e => setFormData({...formData, driver: e.target.value})} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label text-secondary small text-uppercase fw-bold">Стан</label>
                            <select className="form-select bg-black text-white border-secondary" 
                                value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                                <option>Справний</option>
                                <option>Потребує ремонту</option>
                                <option>Списаний</option>
                            </select>
                        </div>
                        <div className="col-12 mt-4">
                            <button type="submit" className="btn btn-success w-100 fw-bold py-2 shadow-sm text-uppercase">
                                Додати до реєстру
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* 3. ТАБЛИЦЯ (РЕЄСТР) */}
            <div className="card bg-dark text-white border-secondary shadow-lg rounded-4 overflow-hidden">
                <div className="card-header border-secondary bg-black bg-opacity-25 p-3 d-flex justify-content-between align-items-center">
                    <h5 className="m-0 text-uppercase">📋 Реєстр техніки</h5>
                    <span className="badge bg-secondary rounded-pill">Всього авто: {vehicles.length}</span>
                </div>
                
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle mb-0">
                        <thead className="bg-black text-secondary text-uppercase small">
                            <tr>
                                <th className="py-3 ps-4">Марка / Модель</th>
                                <th className="py-3">Номер</th>
                                <th className="py-3">Водій</th>
                                <th className="py-3 text-center">Статус</th>
                                <th className="py-3 text-end pe-4">Дії</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Перебір масиву машин */}
                            {vehicles.map((car) => (
                                <tr key={car._id} style={{borderBottom: '1px solid #333'}}>
                                    <td className="ps-4 fw-bold text-warning">
                                        {car.mark}
                                    </td>
                                    <td>
                                        <span className="bg-secondary bg-opacity-25 px-2 py-1 rounded font-monospace border border-secondary">
                                            {car.number}
                                        </span>
                                    </td>
                                    <td className="text-white-50">{car.driver || '—'}</td>
                                    <td className="text-center">
                                        <span className={`badge rounded-pill px-3 py-2 ${
                                            car.status === 'Справний' ? 'bg-success bg-opacity-75' : 
                                            car.status === 'Потребує ремонту' ? 'bg-warning text-dark' : 'bg-danger'
                                        }`}>
                                            {car.status}
                                        </span>
                                    </td>
                                    <td className="text-end pe-4">
                                        <button onClick={() => handleDelete(car._id)} 
                                            className="btn btn-outline-danger btn-sm rounded-circle p-2" 
                                            title="Списати">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {/* Якщо список порожній */}
                            {vehicles.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-5 text-muted">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaTruckMoving size={40} className="mb-3 opacity-25"/>
                                            <p className="m-0">База даних порожня.</p>
                                            <small>Додайте перший транспорт через форму вище.</small>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AutoPark;