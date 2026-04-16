# Architecture

## Общая схема

AutoTradeWeb реализован как учебное клиент-серверное веб-приложение.

- Клиентская часть (React) отвечает за интерфейс и навигацию пользователя.
- Серверная часть (Node.js + Express) предоставляет REST API.
- Уровень данных представлен SQL-схемой под PostgreSQL.

## Frontend

Папка: `frontend/`

Ключевые элементы:

- `src/App.jsx` — корневой роутинг страниц MVP.
- `src/pages/HomePage.jsx` — главная страница.
- `src/pages/CatalogPage.jsx` — каталог автомобилей.
- `src/pages/CarCardPage.jsx` — карточка автомобиля.
- `src/pages/AuthPage.jsx` — вход и регистрация.
- `src/pages/ProfilePage.jsx` — личный кабинет.

Frontend использует `react-router-dom` для перехода между пользовательскими сценариями.

## Backend

Папка: `backend/`

Ключевые элементы:

- `src/server.js` — точка входа API-сервиса.
- `src/data/mockData.js` — мок-данные MVP.
- `src/routes/authRoutes.js` — авторизация/регистрация.
- `src/routes/usersRoutes.js` — пользователи и роли.
- `src/routes/carsRoutes.js` — каталог и карточка авто.
- `src/routes/advertisementsRoutes.js` — объявления.
- `src/routes/requestsRoutes.js` — заявки покупателей.

## Database

Папка: `database/`

- `schema.sql` содержит логическую структуру хранения данных, согласованную с практиками 1–8.

## Взаимодействие компонентов

1. Пользователь выполняет действие на frontend-странице.
2. Frontend обращается к backend REST API.
3. Backend обрабатывает запрос по соответствующему маршруту.
4. Backend возвращает JSON-ответ для отображения в интерфейсе.
5. При переходе к полноценной реализации мок-данные заменяются подключением PostgreSQL.
