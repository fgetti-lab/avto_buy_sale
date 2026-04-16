import React from 'react';

export default function AuthPage() {
  return (
    <section>
      <h2>Вход и регистрация</h2>
      <form className="form-grid">
        <label>
          Email
          <input type="email" placeholder="user@example.com" />
        </label>
        <label>
          Пароль
          <input type="password" placeholder="••••••••" />
        </label>
        <button type="button">Войти</button>
      </form>
    </section>
  );
}
