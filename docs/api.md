# API

Базовый префикс всех маршрутов:

- `/api`

## Health

### `GET /api/health`

Проверка работоспособности backend-сервиса.

## Auth

### `POST /api/auth/login`

Упрощённый вход по email для учебного MVP.

Пример тела запроса:

```json
{
  "email": "buyer1@autotradeweb.local"
}
```

### `POST /api/auth/register`

Регистрация пользователя в мок-хранилище.

Пример тела запроса:

```json
{
  "email": "new.user@autotradeweb.local",
  "fullName": "Новый Пользователь",
  "roleId": 1
}
```

## Users

### `GET /api/users`

Список пользователей с именем роли.

## Cars

### `GET /api/cars`

Каталог автомобилей.

Поддерживаемые query-параметры:

- `brand`
- `model`

Пример:

- `GET /api/cars?brand=Toyota`

### `GET /api/cars/:id`

Карточка автомобиля по идентификатору.

## Advertisements

### `GET /api/advertisements`

Список объявлений со встроенными данными автомобиля.

### `POST /api/advertisements`

Создание объявления в статусе `on_moderation`.

Пример тела запроса:

```json
{
  "sellerId": 2,
  "carId": 1,
  "title": "Toyota Camry, 2019",
  "price": 2050000
}
```

## Requests

### `GET /api/requests`

Список заявок покупателей.

### `POST /api/requests`

Создание заявки по объявлению.

Пример тела запроса:

```json
{
  "advertisementId": 1,
  "buyerId": 1,
  "message": "Можно посмотреть авто в выходные?"
}
```

## Ограничения MVP

- Валидация упрощена.
- Авторизация токеном демонстрационная.
- Хранение данных в памяти процесса.
- Для production требуется полноценный слой БД, аутентификации и тестирования.
