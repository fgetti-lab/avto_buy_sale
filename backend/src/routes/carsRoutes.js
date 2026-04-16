const express = require('express');
const { cars } = require('../data/mockData');

const router = express.Router();

/**
 * GET /api/cars
 * Выдача каталога автомобилей с фильтрацией по brand/model.
 */
router.get('/', (req, res) => {
  const { brand, model } = req.query;

  const filtered = cars.filter((car) => {
    const byBrand = brand ? car.brand.toLowerCase() === String(brand).toLowerCase() : true;
    const byModel = model ? car.model.toLowerCase() === String(model).toLowerCase() : true;
    return byBrand && byModel;
  });

  return res.json(filtered);
});

/**
 * GET /api/cars/:id
 * Возвращает карточку автомобиля.
 */
router.get('/:id', (req, res) => {
  const car = cars.find((item) => item.id === Number(req.params.id));
  if (!car) {
    return res.status(404).json({ error: 'Автомобиль не найден' });
  }
  return res.json(car);
});

module.exports = router;
