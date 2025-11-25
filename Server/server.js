const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// 1. Налаштування
app.use(cors());
app.use(express.json());

// 2. Підключення до БД (Локальна)
const dbURL = 'mongodb://127.0.0.1:27017/autopark';

mongoose.connect(dbURL)
  .then(() => console.log('✅ БАЗА ДАНИХ ПІДКЛЮЧЕНА'))
  .catch((err) => console.log('❌ Помилка підключення:', err));

// -------------------------------------------------
// 3. МОДЕЛІ (Схеми даних)
// -------------------------------------------------

// Модель Автомобіля
const VehicleSchema = new mongoose.Schema({
    mark: { type: String, required: true },
    number: { type: String, required: true },
    type: { type: String, default: 'Вантажний' },
    driver: { type: String },
    status: { type: String, default: 'Справний' }
});
const Vehicle = mongoose.model('Vehicle', VehicleSchema);

// Модель Користувача
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('AuthUser', UserSchema);

// -------------------------------------------------
// 4. API МАРШРУТИ
// -------------------------------------------------

// === АВТОМОБІЛІ ===
app.get('/api/vehicles', async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
});

app.post('/api/vehicles', async (req, res) => {
    const newVehicle = new Vehicle(req.body);
    await newVehicle.save();
    res.json(newVehicle);
});

app.delete('/api/vehicles/:id', async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: 'Видалено' });
});

// === АВТОРИЗАЦІЯ ===

// Реєстрація
app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Перевірка, чи є такий юзер
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Користувач вже існує' });
        }

        // Створення нового
        const newUser = new User({ username, password });
        await newUser.save();
        
        console.log(`✅ Зареєстровано нового користувача: ${username}`);
        res.status(201).json({ message: 'Успішно створено' });
    } catch (err) {
        console.error("Помилка реєстрації:", err);
        res.status(500).json({ message: 'Помилка сервера' });
    }
});

// Вхід
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'Користувача не знайдено' });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: 'Невірний пароль' });
        }

        res.json({ message: 'Вхід успішний', username: user.username });
    } catch (err) {
        res.status(500).json({ message: 'Помилка сервера' });
    }
});

// 5. Запуск
app.listen(PORT, () => {
    console.log(`🚀 Сервер працює на порту ${PORT}`);
});