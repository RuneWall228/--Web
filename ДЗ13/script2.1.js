let numbers = [1, 2, 1, 4, 1];
let number = prompt("Какое число нужно найти");
let lastIndex = -1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == number) {
    lastIndex = i;
  }
}

alert('Последний индекс этого элемента равен '+lastIndex);
