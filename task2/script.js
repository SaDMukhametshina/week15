const cities = ['Шанхай', 'Сеул', 'Гонконг', 'Стамбул', 'Стокгольм'];
let temperature = [];
for (let i = 0; i < cities.length; i++) {
    let degrees = prompt(`Какая температура в городе ${cities[i]}?`, 0);
    temperature[i] = Number(degrees);
}

/*const block = document.querySelector('.cities');

for (let i = 0; i < cities.length; i++) {
    block.appendChild(document.createElement('p').textContent = `Температура в городе ${cities[i]}: ${temperature[i]}.`);
}*/
const newList = document.querySelector('.cities');
let newListItem;

for (let i = 0; i < cities.length; i++) {
    newListItem = document.createElement('li');
    newListItem.textContent = `Температура в городе ${cities[i]}: ${temperature[i]}.℃`;
    newList.append(newListItem);
}
let max = Math.max(...temperature);
let min = Math.min(...temperature);

const newListItem2 = document.createElement('li');
newListItem2.textContent = `Максимальная температура: ${max}℃`;
const newListItem3 = document.createElement('li');
newListItem3.textContent = `Минимальная температура: ${min}℃`;
newList.append(newListItem2, newListItem3);