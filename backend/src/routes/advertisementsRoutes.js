const express = require('express');
const { advertisements, cars } = require('../data/mockData');

const router = express.Router();

/**
 * GET /api/advertisements
 * Каталог объявлений со встроенными данными автомобиля.
 */
router.get('/', (_req, res) => {
  const result = advertisements.map((ad) => ({
    ...ad,
    car: cars.find((car) => car.id === ad.carId) || null
  }));

  return res.json(result);
});

/**
 * POST /api/advertisements
 * Создание объявления в статусе on_moderation.
 */
router.post('/', (req, res) => {
  const { sellerId, carId, title, price } = req.body;
  if (!sellerId || !carId || !title || !price) {
    return res.status(400).json({ error: 'Поля sellerId, carId, title и price обязательны' });
  }

  const ad = {
    id: advertisements.length + 1,
    sellerId,
    carId,
    title,
    price,
    status: 'on_moderation',
    publishedAt: new Date().toISOString()
  };

  advertisements.push(ad);
  return res.status(201).json(ad);
});

module.exports = router;
