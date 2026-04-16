# Database

## Назначение

Файл `database/schema.sql` описывает целевую логическую модель данных AutoTradeWeb для PostgreSQL.

## Сущности

По актуальным диаграммам проекта используются следующие сущности:

- `ROLES`
- `USERS`
- `BRANDS`
- `MODELS`
- `CARS`
- `ADVERTISEMENTS`
- `ADVERTISEMENT_LOGS`
- `FAVORITES`
- `NOTIFICATIONS`

## Роли и пользователи

- `ROLES` хранит роли системы.
- `USERS` хранит профиль пользователя и ссылку на роль (`role_id`).

Актуальные роли в модели:

- Buyer
- Seller
- Moderator

## Автомобили и объявления

- `BRANDS` — справочник марок автомобилей.
- `MODELS` — справочник моделей с привязкой к марке (`brand_id`).
- `CARS` — карточка автомобиля, содержит ссылки на `brand_id` и `model_id`.
- `ADVERTISEMENTS` — объявление, связанное с пользователем-продавцом (`user_id`) и карточкой авто (`car_id`).

## Избранное и уведомления

- `FAVORITES` — связь пользователя и объявления в избранном.
- `NOTIFICATIONS` — уведомления, связанные с пользователем (`user_id`).

## Логирование действий по объявлениям

- `ADVERTISEMENT_LOGS` фиксирует действия по объявлению:
  - инициатор (`user_id`),
  - объявление (`advertisement_id`),
  - тип действия,
  - состояние и комментарий,
  - момент фиксации (`logged_at`).

## Связи

Ключевые связи по диаграмме:

- `USERS.role_id -> ROLES.id`
- `MODELS.brand_id -> BRANDS.id`
- `CARS.brand_id -> BRANDS.id`
- `CARS.model_id -> MODELS.id`
- `ADVERTISEMENTS.user_id -> USERS.id`
- `ADVERTISEMENTS.car_id -> CARS.id`
- `FAVORITES.user_id -> USERS.id`
- `FAVORITES.advertisement_id -> ADVERTISEMENTS.id`
- `ADVERTISEMENT_LOGS.user_id -> USERS.id`
- `ADVERTISEMENT_LOGS.advertisement_id -> ADVERTISEMENTS.id`
- `NOTIFICATIONS.user_id -> USERS.id`

Эта структура соответствует предметной области AutoTradeWeb и текущим диаграммам (классовой, объектной и табличной модели БД).
