import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AutoPark from './pages/AutoPark';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  // Перевірка при завантаженні: чи ми вже увійшли?
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Меню */}
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

        {/* Основний контент */}
        <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contacts" element={<Contacts />} />
              
              <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
              <Route path="/register" element={<Register />} />

              {/* Захищений маршрут для Автопарку */}
              <Route 
                path="/autopark" 
                element={isAuth ? <AutoPark /> : <Navigate to="/login" />} 
              />
            </Routes>
        </div>

        {/* Підвал */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;