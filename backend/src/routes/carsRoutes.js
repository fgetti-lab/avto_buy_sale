const express = require('express');
const { cars } = require('../data/mockData');

const router = express.Router();

router.get('/', (req, res) => {
  const { brand, model } = req.query;

  const filtered = cars.filter((car) => {
    const byBrand = brand ? car.brand.toLowerCase() === String(brand).toLowerCase() : true;
    const byModel = model ? car.model.toLowerCase() === String(model).toLowerCase() : true;
    return byBrand && byModel;
  });

  return res.json(filtered);
});

router.get('/:id', (req, res) => {
  const car = cars.find((item) => item.id === Number(req.params.id));
  if (!car) {
    return res.status(404).json({ error: 'Автомобиль не найден' });
  }
  return res.json(car);
});

module.exports = router;
