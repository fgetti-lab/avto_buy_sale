/**
 * @file Мок-данные учебного MVP AutoTradeWeb.
 */

/** @type {Array<{id:number,name:string}>} */
const roles = [
  { id: 1, name: 'buyer' },
  { id: 2, name: 'seller' },
  { id: 3, name: 'moderator' },
  { id: 4, name: 'admin' }
];

/** @type {Array<{id:number,email:string,fullName:string,roleId:number,status:string}>} */
const users = [
  { id: 1, email: 'buyer1@autotradeweb.local', fullName: 'Иван Покупатель', roleId: 1, status: 'active' },
  { id: 2, email: 'seller1@autotradeweb.local', fullName: 'Пётр Продавец', roleId: 2, status: 'active' }
];

/** @type {Array<{id:number,brand:string,model:string,year:number,mileage:number,fuelType:string,bodyType:string,color:string}>} */
const cars = [
  { id: 1, brand: 'Toyota', model: 'Camry', year: 2019, mileage: 82000, fuelType: 'petrol', bodyType: 'sedan', color: 'black' },
  { id: 2, brand: 'Kia', model: 'Rio', year: 2021, mileage: 46000, fuelType: 'petrol', bodyType: 'sedan', color: 'white' }
];

/** @type {Array<{id:number,sellerId:number,carId:number,title:string,price:number,status:string,publishedAt:string}>} */
const advertisements = [
  { id: 1, sellerId: 2, carId: 1, title: 'Toyota Camry, 2019', price: 2050000, status: 'published', publishedAt: '2026-04-10T10:00:00Z' },
  { id: 2, sellerId: 2, carId: 2, title: 'Kia Rio, 2021', price: 1290000, status: 'published', publishedAt: '2026-04-12T11:30:00Z' }
];

/** @type {Array<{id:number,advertisementId:number,buyerId:number,message:string,status:string,createdAt:string}>} */
const requests = [
  { id: 1, advertisementId: 1, buyerId: 1, message: 'Можно посмотреть авто в выходные?', status: 'new', createdAt: '2026-04-13T09:00:00Z' }
];

module.exports = { roles, users, cars, advertisements, requests };
