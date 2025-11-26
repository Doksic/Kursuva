import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Повертаємо масив з 10 новинами та посиланнями
    const newsList = [
        {
            id: 1,
            title: "КрАЗ передав партію шасі",
            text: "Автомобілі КрАЗ-63221 будуть використані для монтажу спецнадбудов.",
            link: "https://mil.in.ua/uk/",
            img: "/images/news/news1.jpg"
        },
        {
            id: 2,
            title: "Зимова експлуатація техніки",
            text: "Особливості обслуговування акумуляторних батарей у зимовий період.",
            link: "https://armyinform.com.ua/",
            img: "/images/news/news2.jpg"
        },
        {
            id: 3,
            title: "Санітарні Богдан-2251",
            text: "Додаткова партія санітарних автомобілів надійшла до підрозділів.",
            link: "https://mil.in.ua/uk/",
            img: "/images/news/news3.jpg"
        },
        {
            id: 4,
            title: "Ремонт HMMWV в польових умовах",
            text: "Методичні рекомендації щодо швидкого ремонту ходової частини Humvee.",
            link: "https://defence-ua.com/",
            img: "/images/news/news4.jpg"
        },
        {
            id: 5,
            title: "Нові шини для вантажівок",
            text: "Волонтери передали комплект позашляхових шин для ЗІЛ-131.",
            link: "https://mil.in.ua/uk/",
            img: "/images/news/news5.jpg"
        },
        {
            id: 6,
            title: "Курси водіїв категорії С",
            text: "Розпочато набір на курси підвищення кваліфікації водіїв вантажівок.",
            link: "https://armyinform.com.ua/",
            img: "/images/news/news6.jpg"
        },
        {
            id: 7,
            title: "Модернізація ГАЗ-66",
            text: "Встановлення нових дизельних двигунів на стару техніку.",
            link: "https://defence-ua.com/",
            img: "/images/news/news7.jpg"
        },
        {
            id: 8,
            title: "Паливно-мастильні матеріали",
            text: "Нові норми списання пального для бойової техніки в умовах бездоріжжя.",
            link: "https://mil.in.ua/uk/",
            img: "/images/news/news8.jpg"
        },
        {
            id: 9,
            title: "Броньовані капсули для КамАЗ",
            text: "Тестування нових систем захисту кабіни водія від уламків.",
            link: "https://armyinform.com.ua/",
            img: "/images/news/news9.jpg"
        },
        {
            id: 10,
            title: "Військова автоінспекція інформує",
            text: "Зміни в правилах руху колон військової техніки дорогами загального користування.",
            link: "https://mil.in.ua/uk/",
            img: "/images/news/news10.jpg"
        }
    ];

    return (
        <div className="pb-5">
            {/* 1. HERO SECTION (Банер) */}
            <div className="container mt-4">
                <div 
                    className="p-5 text-white rounded-4 shadow-lg d-flex flex-column justify-content-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://wallpapers.com/images/hd/military-truck-background-2j7d5s6k7j7d5s6k.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '400px'
                    }}
                >
                    <div className="col-md-8">
                        <h1 className="display-4 fw-bold mb-3 text-uppercase" style={{letterSpacing: '2px'}}>Автопарк Інституту</h1>
                        <p className="fs-5 mb-4 text-white-50">Надійність, перевірена часом. Система обліку та контролю.</p>
                        
                        <div className="d-flex gap-3">
                            <Link to="/gallery" className="btn btn-danger btn-lg px-5">Переглянути парк</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Блок НОВИН (Тепер тут усі 10 новин з посиланнями) */}
            <div className="container mt-5">
                <h3 className="text-white text-center mb-4 fw-bold text-uppercase">Головні новини порталу</h3>
                
                <div className="row g-4">
                    {newsList.map(item => (
                        <div key={item.id} className="col-md-3 col-sm-6">
                            <div className="custom-card h-100 d-flex flex-column bg-dark border border-secondary">
                                {/* Картинка зверху */}
                                <div style={{height: '180px', overflow: 'hidden'}}>
                                    <img 
                                        src={item.img} 
                                        className="w-100 h-100" 
                                        style={{objectFit: 'cover'}} 
                                        alt={item.title}
                                        onError={(e) => e.target.src = 'https://placehold.co/400x300/333/FFF?text=No+Photo'} 
                                    />
                                </div>
                                
                                {/* Текст новини */}
                                <div className="p-3 d-flex flex-column flex-grow-1 text-white">
                                    <h6 className="fw-bold mb-2 text-uppercase text-warning">{item.title}</h6>
                                    <small className="text-white-50 mb-3" style={{minHeight: '40px'}}>
                                        {item.text.length > 60 ? item.text.substring(0, 60) + "..." : item.text}
                                    </small>
                                    
                                    {/* Кнопка читати джерело */}
                                    <div className="mt-auto pt-3 border-top border-secondary">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" 
                                           className="btn btn-outline-danger btn-sm w-100 fw-bold">
                                            Читати джерело →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;