/**
 * @file Точка входа backend MVP проекта AutoTradeWeb.
 */
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');
const carsRoutes = require('./routes/carsRoutes');
const advertisementsRoutes = require('./routes/advertisementsRoutes');
const requestsRoutes = require('./routes/requestsRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'AutoTradeWeb backend mvp' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/cars', carsRoutes);
app.use('/api/advertisements', advertisementsRoutes);
app.use('/api/requests', requestsRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`AutoTradeWeb backend started on port ${PORT}`);
});
