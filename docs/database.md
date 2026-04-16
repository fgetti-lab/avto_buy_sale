# Database

## Назначение

Файл `database/schema.sql` описывает целевую логическую модель данных AutoTradeWeb для PostgreSQL.

## Сущности

- `Roles`
- `Users`
- `Cars`
- `Advertisements`
- `Requests`
- `Favorites`
- `Comparisons`
- `Comparison_Items`
- `Moderation_Logs`
- `Action_Logs`
- `Notifications`

## Роли и пользователи

- Таблица `Roles` задаёт ролевую модель: покупатель, продавец, модератор, администратор.
- Таблица `Users` хранит учетные данные, статус и ссылку на роль.

## Каталог и объявления

- Таблица `Cars` хранит характеристики автомобиля.
- Таблица `Advertisements` связывает продавца и автомобиль, хранит цену и статус публикации.

## Обращения и пользовательские действия

- `Requests` — заявки покупателей по объявлениям.
- `Favorites` — избранные объявления.
- `Comparisons` и `Comparison_Items` — наборы сравнения автомобилей.

## Модерация, аудит, уведомления

- `Moderation_Logs` — решения модератора по объявлениям.
- `Action_Logs` — журнал критических действий.
- `Notifications` — пользовательские уведомления.

## Связи

Основные связи:

- `Users.role_id -> Roles.role_id`
- `Advertisements.seller_id -> Users.user_id`
- `Advertisements.car_id -> Cars.car_id`
- `Requests.advertisement_id -> Advertisements.advertisement_id`
- `Requests.buyer_id -> Users.user_id`

Данная модель покрывает сценарии из требований проекта и служит основой для последующей интеграции с реальной БД.
