let aray = [2, 5, 1, 6, 3, 8, 0];
let lastsIndex = parseInt(prompt('Введите число'));

for (let i = 0; i < aray.length - 1; i++) {
  let min = i;
  for (let g = i + 1; g < aray.length; g++) {
    if (aray[g] < aray[min]) {
      min = g;
    }
  }
  if (min !== i) {
    [aray[i], aray[min]] = [aray[min], aray[i]];
  }
}

let findIndex = aray.indexOf(lastsIndex);

if (findIndex == -1) {
  console.log('Элемент не найден');
} else {
  console.log('Индекс элемента в отсортированном массиве: ' + foundIndex);
}
