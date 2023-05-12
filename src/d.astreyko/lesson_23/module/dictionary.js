import { BY } from './module/by.js';

console.log(BY);

if (true) {
  const module = await import('./module/ru.js');
  const {
    RU,
    trimString,
    Car,
    car
  } = module;
  console.log(RU);
  console.log(trimString('  sdffdf   '));

  console.log(new Car());
  console.log(car);
}

