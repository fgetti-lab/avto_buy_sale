import React from 'react';
import { useParams } from 'react-router-dom';

export default function CarCardPage() {
  const { id } = useParams();

  return (
    <section>
      <h2>Карточка автомобиля</h2>
      <p>Идентификатор автомобиля: {id}</p>
      <p>Здесь отображаются характеристики, описание, цена и статус объявления.</p>
    </section>
  );
}
