const express = require('express');
const { users } = require('../data/mockData');

const router = express.Router();

router.post('/login', (req, res) => {
  const { email } = req.body;
  const user = users.find((item) => item.email === email);

  if (!user) {
    return res.status(401).json({ error: 'Пользователь не найден' });
  }

  return res.json({ token: `mvp-token-${user.id}`, user });
});

router.post('/register', (req, res) => {
  const { email, fullName, roleId = 1 } = req.body;

  if (!email || !fullName) {
    return res.status(400).json({ error: 'Требуются поля email и fullName' });
  }

  const existing = users.find((item) => item.email === email);
  if (existing) {
    return res.status(409).json({ error: 'Пользователь с таким email уже существует' });
  }

  const newUser = {
    id: users.length + 1,
    email,
    fullName,
    roleId,
    status: 'active'
  };
  users.push(newUser);
  return res.status(201).json(newUser);
});

module.exports = router;
