import React from 'react';

const Contacts = () => {
    return (
        <div className="container mt-5 text-white">
            <h2 className="text-center mb-4">📞 Контакти</h2>

            <div className="row">
                {/* Ліва частина: Текст */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-white border-secondary h-100">
                        <div className="card-body">
                            <h4 className="card-title">Військовий Інститут</h4>
                            <p className="card-text mt-3">
                                <strong>Адреса:</strong><br />
                                м. Київ, вул. Героїв Оборони, 18
                            </p>
                            <p className="card-text">
                                <strong>Телефон чергового:</strong><br />
                                +38 (044) 123-45-67
                            </p>
                            <p className="card-text">
                                <strong>Електронна пошта:</strong><br />
                                info@mil.gov.ua
                            </p>
                            <p className="card-text">
                                <strong>Графік роботи:</strong><br />
                                Пн-Пт: 08:00 - 18:00<br />
                                Сб-Нд: Вихідний
                            </p>
                        </div>
                    </div>
                </div>

                {/* Права частина: Карта Google */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark border-secondary h-100">
                        <div className="card-body p-1">
                            {/* Вставка карти через iframe */}
                            <iframe 
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.646624329666!2d30.50961331572916!3d50.39185497946743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8b7b7c7b7b7%3A0x7b7b7b7b7b7b7b7b!2sKyiv!5e0!3m2!1sen!2sua!4v1633000000000!5m2!1sen!2sua" 
                                width="100%" 
                                height="300" 
                                style={{ border: 0, minHeight: '300px' }} 
                                allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;