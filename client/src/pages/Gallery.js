import React from 'react';

const Gallery = () => {
    // Вказуємо шлях до локальних файлів у папці public/images
    const photos = [
        { id: 1, src: "/images/1.jpg", title: "КрАЗ-6322" },
        { id: 2, src: "/images/2.jpg", title: "ЗІЛ-131" },
        { id: 3, src: "/images/3.jpg", title: "Богдан-2351" },
        { id: 4, src: "/images/4.jpg", title: "КамАЗ-4310" },
        { id: 5, src: "/images/5.jpg", title: "HMMWV (Humvee)" },
        { id: 6, src: "/images/6.jpg", title: "КрАЗ-Спартан" },
    ];

    return (
        <div className="container mt-5 text-white">
            <h2 className="text-center mb-4">📷 Галерея техніки</h2>
            <p className="text-center mb-5">Фотозвіт наявного рухомого складу автопарку.</p>

            <div className="row">
                {photos.map((photo) => (
                    <div key={photo.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card bg-dark border-secondary h-100 shadow">
                            {/* Додали overflow-hidden, щоб фото не вилазило за рамки */}
                            <div style={{ height: '250px', overflow: 'hidden' }}>
                                <img 
                                    src={photo.src} 
                                    className="card-img-top h-100 w-100" 
                                    alt={photo.title} 
                                    style={{ objectFit: 'cover' }} // Це зробить фото гарним і обріже зайве
                                    onError={(e) => {e.target.src = 'https://placehold.co/600x400/333/FFF?text=No+Image'}} // Якщо фото не знайде - покаже заглушку
                                />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-white">{photo.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;