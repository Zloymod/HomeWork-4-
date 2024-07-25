/*  ******************************  Lesson 2********************************/
let lesson2 = "Задание 2 смотри ниже";
console.log(lesson2);

console.log(Number("10"), typeof Number("10")); // явное
//1
console.log(Number("50"), typeof Number("50")); //Не явное

//2
console.log(Number("100"), typeof Number("100")); // явное
//3
console.log(Number("") + 1, typeof Number("") + 1); //Не явное
//4
console.log(String("1"), typeof String("1")); // явное
//5
console.log(Boolean(0), typeof Boolean(0)); // явное
//6
console.log(Number("001"), typeof Number("001")); //Не явное
//7
console.log(1 + Number(""), typeof 1 + Number("")); //Не явное
//8
console.log(Boolean(1), typeof Boolean(1)); // явное
//9
console.log(String("001"), typeof String("001")); // явное
//10
console.log(Number("Hello World"), typeof Number("Hello World")); // явное

let lesson3 = "Задание 3 Смотрите ниже";
console.log(lesson3);
/* Задание 3 
console.log
{ name: 'Maxim' }
Symbol('key')
Number
''
0
-10
'-105' */
console.log(
  /*string("console.log"), is not defined*/ Number(console.log),
  Boolean(console.log)
);
console.log(
  //  string({ name: "Maxim" }), syntaxerror
  Number({ name: "Maxim" }),
  Boolean({ name: "Maxim" })
);
console.log(
  //  string("Symbol("key")"), syntaxerror
  // Number(Symbol("key")),
  Boolean(Symbol("key"))
);
console.log(
  // string("Number"), is not defined
  Number(Number),
  Boolean(Number)
); /*Значение число !== число(если я правильно понял)*/
console.log(/*string('""'), is not defined*/ Number(""), Boolean(""));
console.log(/*string("0") is not defined*/ Number(0), Boolean(0));
console.log(/*string("-10"), is not defined*/ Number(-10), Boolean(-10));
console.log(/*string("-105"), is not defined*/ Number("-105"), Boolean("-105"));
/* На моё удивление строка вообще не нашлась ни в одном из примеров, я почему-то думал, что преобразуя в строку, можно всё что угодно преобразовать*/

/*   ******************************* Задание 4 *********************************/
let lesson4 = "Задание 4 смотри ниже";
console.log(lesson4);

// 1
console.log(
  Number(" 1 2 3 4 5")
); /*12345 Я уже посмотрел ответ, но так и не понял почему пробелы считаются как NaN я думал в JS пробелы и отступы не ломают код, соответственно и значения с пробелами или без не меняются*/
// 2
console.log(
  Number("1234 5")
); /*12345 Я уже посмотрел ответ, но так и не понял почему пробелы считаются как NaN я думал в JS пробелы и отступы не ломают код, соответственно и значения с пробелами или без не меняются*/
// 3
console.log(
  Number("12345")
); /*12345 Я уже посмотрел ответ, но так и не понял почему пробелы считаются как NaN я думал в JS пробелы и отступы не ломают код, соответственно и значения с пробелами или без не меняются*/
// 4
console.log(
  String(false)
); /*false, в обеих строчках string эти значение будут считаться просто текстом*/
// 5
console.log(Boolean(0000000)); /*В типе данных boolean 0 имеет значение false */
// 6
console.log(
  Boolean(0.0000001)
); /*Даже такая маленькая цифра уже отлична от 0 поэтому тут будет запись true */
// 7
console.log(
  String(undefined)
); /*undefined, в обеих строчках string эти значение будут считаться просто текстом*/
// 8
console.log(
  Number("100f")
); /*NaN, потому что f это буква, я не уверен какой оператор сработает при такой записи, но в люом случае 100+а или 100*а это не число(Not a Number)*/
// 9
console.log(Number("100")); /*100*/
// 10
console.log(
  Number("000001")
); /*Есть сомнения между 0 и 1 вероятнее всего 1 потому что 0 перед единицей считываться как число не будут в ответе*/
