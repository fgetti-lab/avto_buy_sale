# AutoTradeWeb

Учебный проект по дисциплине «Системная и программная инженерия».

**Тема:** веб-приложение по покупке и продаже автомобилей.  
**Фокус практик 9-10:** организация разработки, MVP-каркас, документация разработчика и пользователя.

## Технологический стек

- Frontend: React + Vite
- Backend: Node.js + Express
- Data model: PostgreSQL schema (SQL-заготовка)
- Documentation: Markdown developer docs + GitHub Wiki
- VCS: Git / GitHub

## Структура проекта

```text
.
├── backend/                 # MVP backend (REST API)
│   ├── src/
│   │   ├── data/mockData.js
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/                # MVP frontend (React)
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── database/
│   └── schema.sql           # Логическая модель БД
├── docs/
│   ├── architecture.md
│   ├── setup.md
│   ├── database.md
│   └── api.md
├── wiki/                    # Заготовки пользовательской документации
├── jsdoc.config.json
├── package.json             # Общие скрипты проекта
└── .gitignore
```

## Что реализовано в учебном MVP

### Frontend-страницы

- Главная
- Каталог автомобилей
- Карточка автомобиля
- Вход/регистрация
- Личный кабинет

### Backend API (минимальный набор)

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/users`
- `GET /api/cars`
- `GET /api/cars/:id`
- `GET /api/advertisements`
- `POST /api/advertisements`
- `GET /api/requests`
- `POST /api/requests`

### Модель данных

Подготовлена SQL-заготовка с сущностями, согласованными с практиками 1-8:

- `Users`
- `Roles`
- `Cars`
- `Advertisements`
- `Requests`
- `Favorites`
- `Comparisons`
- `Comparison_Items`
- `Moderation_Logs`
- `Action_Logs`
- `Notifications`

## Запуск проекта

### 1) Установка зависимостей

Из корня репозитория:

```bash
npm install
npm run install:all
```

### 2) Запуск backend

```bash
npm run dev:backend
```

Backend поднимается на `http://localhost:4000`.

### 3) Запуск frontend

В отдельном терминале:

```bash
npm run dev:frontend
```

Frontend поднимается на стандартном порту Vite (обычно `http://localhost:5173`).

## Документация

### User documentation (Wiki)

Пользовательская документация размещена во встроенной GitHub Wiki репозитория:

- `https://github.com/fgetti-lab/avto_buy_sale/wiki`

### Developer documentation

Документация разработчика вынесена в Markdown-файлы:

- `docs/architecture.md`
- `docs/setup.md`
- `docs/database.md`
- `docs/api.md`

## Важное ограничение для учебного репозитория

В репозиторий не добавляются отчёты и методические материалы (`.docx`, `.pdf`), а также локальный мусор (`node_modules`, `.env`, IDE/OS файлы).
