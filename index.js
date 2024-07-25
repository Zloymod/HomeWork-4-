let car = "mazda";
// car = String("car");
console.log(Number(car), Boolean(car), String(car));

let ageCar = 10;
console.log(Number(ageCar), Boolean(ageCar), String(ageCar));
let carYellow = true;
console.log(
  Number(
    carYellow
  ) /*выводит 1 потому что значение true, если бы установил false, было бы 0*/,
  Boolean(carYellow),
  String(carYellow)
);
let carLiftback = null;
console.log(Number(carLiftback), Boolean(carLiftback), String(carLiftback));
let newCar;
console.log(Number(newCar), Boolean(newCar), String(newCar));
let firstCar = {};
console.log(Number(firstCar), Boolean(firstCar), String(firstCar));
/*Не совсем понимаю, почему он выводит в строке 2 объекта да и вообще не особо понимаю, что происходит с объектом, если с логикой true это понятно, то NaN тоже не особо понятно почему, объект пустой, по идее должно быть Null а если Null то и выводить 0 разве нет? */
let carID = 34n;
console.log(Number(carID), Boolean(carID), String(carID));
let indexCar = Symbol("indexCar");
console.log(Boolean(indexCar), String(indexCar));
/*По большому счёту всё боле менее понятно, кроме ситуации с объектами, я думаю это раскроется чуть дальше, когда будет затронута тема объектов, но был бы не против, если объясните сейчас или подтвердите мою догадку по теме объектов
P.S. Королёв Денис*/
