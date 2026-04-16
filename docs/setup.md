# Setup

## Требования

- Node.js 18+
- npm 9+

## Установка зависимостей

Из корня проекта:

```bash
npm install
npm run install:all
```

## Запуск backend

```bash
npm run dev:backend
```

Сервис запускается по адресу:

- `http://localhost:4000`

Проверка доступности:

- `GET /api/health`

## Запуск frontend

В отдельном терминале:

```bash
npm run dev:frontend
```

Обычно frontend доступен по адресу:

- `http://localhost:5173`

## Минимальная проверка MVP

1. Открыть frontend и перейти по страницам:
- Главная
- Каталог
- Карточка авто
- Вход/Регистрация
- Личный кабинет

2. Проверить API через браузер/Postman:
- `GET /api/cars`
- `GET /api/advertisements`
- `GET /api/requests`

3. Проверить создание сущностей:
- `POST /api/auth/register`
- `POST /api/advertisements`
- `POST /api/requests`
