'use strict'

// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
function isAdult(age) {
  if(isNaN(age)) {
    return null;
  }
  return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(4));


// 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым.
function checkMultiplicity(num1, num2) {
  return num1 % num2 === 0;
}
console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));


// 3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет.
function checkTriangle(a, b, c) {
  if(isNaN(a - b - c)){
    return null;
  }
  return a < b + c && b < a + c && c < a + b;
}
console.log(checkTriangle(12, 5, 5));
console.log(checkTriangle(9, 5, 5));


// 4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника.
function formulaOfRhombusArea1(a, h) {
  if(isNaN(a - h)) {
    return null;
  }
  return a * h;
}

function formulaOfRhombusArea2(d1, d2) {
  if(isNaN(d1 - d2)) {
    return null;
  }
  return 0.5 * d1 * d2;
}

function formulaOfRhombusArea3(a, sinA) {
  if(isNaN(a - sinA)) {
    return null;
  }
  return a ** 2 * sinA;
}

function getAreaOfCylinder(r, h) {
  if(isNaN(r - h)) {
    return null;
  }
  return 2 * Math.PI * r * (h + r);
}

function getAreaOfTriangle(a, b, c) {
  if(isNaN(a - b - c)) {
    return null;
  }
  if (a < b + c && b < a + c && c < a + b) {
    const p = 0.5 * (a + b + c);
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }
  return null;
}