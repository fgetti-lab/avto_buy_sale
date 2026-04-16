import React from 'react';

const demoCars = [
  { id: 1, title: 'Toyota Camry, 2019', price: '2 050 000 ₽' },
  { id: 2, title: 'Kia Rio, 2021', price: '1 290 000 ₽' }
];

/** Страница каталога автомобилей с демонстрационным списком. */
export default function CatalogPage() {
  return (
    <section>
      <h2>Каталог автомобилей</h2>
      <ul>
        {demoCars.map((car) => (
          <li key={car.id}>
            <strong>{car.title}</strong> — {car.price}
          </li>
        ))}
      </ul>
    </section>
  );
}
