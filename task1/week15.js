//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i < 21; i++) {
    if (i % 2 == 0)
        console.log(i);
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i < 11; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let a = 0;
for (let i = 1; i < 101; i++) {
    a += i;
}
console.log(a);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += array[i];
}
console.log(sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
const animals = ['Кошка', 'Тигр', 'Лев', 'Пантера'];
for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
let i = 0;
while (i < str.length) {
    let word = str[i];
    i++;
    console.log(word);
}


//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let arr of array) {
    console.log(arr);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++) {
    let slot = sentences[i].split(' ');
    for (let i = 0; i < slot.length; i++) {
        console.log(slot[i]);
    }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum2 = 0;
for (let num of numbers) {
    sum2 += num;
}
console.log(sum2);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let li of list) {
    console.log(li.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words1 = ['Hello', 'world', '!'];
for (let i = 0; i < words1.length; i++) {
    words1[i] = words1[i].toUpperCase();
}
console.log(words1);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let i = 0; i < greeting.length; i++) {
    for (let a = 0; a < vowels.length; a++) {
        if (greeting[i] == vowels[a])
            vowelCount += 1;
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
word = words.join(' ');
console.log(word);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let h = 1;
while (h < 11) {
    console.log(h);
    h++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let k = 10;
while (k > 0) {
    console.log(k);
    k--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let n = 0;
while (allNumbers[n] >= 0) {
    n++;
    if (allNumbers[n] <= 0) {
        allPositive = false;
        break;
    }
}
console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
r = 0;
do {
    console.log(random[r]);
    r++;
} while (random[r] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
l = 0;
do {
    if (l % 3 != 0) {
        console.log(l);
    }
    l++;
} while (l < 101);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
