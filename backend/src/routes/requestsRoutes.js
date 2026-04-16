const express = require('express');
const { requests } = require('../data/mockData');

const router = express.Router();

/**
 * GET /api/requests
 * Список заявок покупателей.
 */
router.get('/', (_req, res) => res.json(requests));

/**
 * POST /api/requests
 * Создание обращения по объявлению.
 */
router.post('/', (req, res) => {
  const { advertisementId, buyerId, message } = req.body;
  if (!advertisementId || !buyerId || !message) {
    return res.status(400).json({ error: 'Поля advertisementId, buyerId и message обязательны' });
  }

  const newRequest = {
    id: requests.length + 1,
    advertisementId,
    buyerId,
    message,
    status: 'new',
    createdAt: new Date().toISOString()
  };

  requests.push(newRequest);
  return res.status(201).json(newRequest);
});

module.exports = router;
