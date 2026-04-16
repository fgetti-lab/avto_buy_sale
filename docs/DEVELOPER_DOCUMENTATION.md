# AutoTradeWeb — Developer Documentation (MVP)

Этот каталог содержит основу документации разработчика для практики 10.

## Что уже подготовлено

- JSDoc-комментарии в ключевых файлах:
  - `backend/src/server.js`
  - `backend/src/routes/*.js`
  - `backend/src/data/mockData.js`
  - `frontend/src/App.jsx`
  - `frontend/src/pages/*.jsx`
- Конфигурация генерации: `jsdoc.config.json`

## Генерация документации

Из корня проекта:

```bash
npm install
npm run docs:developer
```

Результат генерации будет размещён в папке:

- `docs/developer/`

## Минимальный состав разделов developer docs

1. Обзор архитектуры (frontend/backend/database)
2. API-маршруты backend
3. Модель данных и сущности
4. Описание frontend-страниц
5. Инструкции запуска и расширения MVP
