const express = require('express');
const { users, roles } = require('../data/mockData');

const router = express.Router();

/**
 * GET /api/users
 * Возвращает пользователей с именами ролей.
 */
router.get('/', (_req, res) => {
  const result = users.map((user) => ({
    ...user,
    role: roles.find((r) => r.id === user.roleId)?.name || 'unknown'
  }));

  return res.json(result);
});

module.exports = router;
