-- AutoTradeWeb MVP: логическая схема данных под PostgreSQL
-- Сущности согласованы с практиками 1-8

CREATE TABLE Roles (
  role_id SERIAL PRIMARY KEY,
  role_name VARCHAR(32) UNIQUE NOT NULL
);

CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY,
  role_id INT NOT NULL REFERENCES Roles(role_id),
  full_name VARCHAR(128) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  login VARCHAR(64) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(32),
  status VARCHAR(32) NOT NULL DEFAULT 'active',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Cars (
  car_id SERIAL PRIMARY KEY,
  brand VARCHAR(64) NOT NULL,
  model VARCHAR(64) NOT NULL,
  year INT NOT NULL,
  mileage INT,
  fuel_type VARCHAR(32),
  transmission_type VARCHAR(32),
  body_type VARCHAR(32),
  color VARCHAR(32),
  description TEXT
);

CREATE TABLE Advertisements (
  advertisement_id SERIAL PRIMARY KEY,
  seller_id INT NOT NULL REFERENCES Users(user_id),
  car_id INT NOT NULL REFERENCES Cars(car_id),
  title VARCHAR(255) NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  description TEXT,
  status VARCHAR(32) NOT NULL DEFAULT 'on_moderation',
  published_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Requests (
  request_id SERIAL PRIMARY KEY,
  advertisement_id INT NOT NULL REFERENCES Advertisements(advertisement_id),
  buyer_id INT NOT NULL REFERENCES Users(user_id),
  message TEXT NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Favorites (
  favorite_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES Users(user_id),
  advertisement_id INT NOT NULL REFERENCES Advertisements(advertisement_id),
  added_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, advertisement_id)
);

CREATE TABLE Comparisons (
  comparison_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES Users(user_id),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Comparison_Items (
  comparison_item_id SERIAL PRIMARY KEY,
  comparison_id INT NOT NULL REFERENCES Comparisons(comparison_id) ON DELETE CASCADE,
  advertisement_id INT NOT NULL REFERENCES Advertisements(advertisement_id),
  UNIQUE (comparison_id, advertisement_id)
);

CREATE TABLE Moderation_Logs (
  moderation_log_id SERIAL PRIMARY KEY,
  advertisement_id INT NOT NULL REFERENCES Advertisements(advertisement_id),
  moderator_id INT NOT NULL REFERENCES Users(user_id),
  decision VARCHAR(32) NOT NULL,
  comment TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Action_Logs (
  action_log_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users(user_id),
  action_type VARCHAR(64) NOT NULL,
  entity_type VARCHAR(64),
  entity_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Notifications (
  notification_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES Users(user_id),
  notification_type VARCHAR(64),
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
