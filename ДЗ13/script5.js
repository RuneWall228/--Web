function getSortedArray(all,key){
  for (let i = 0; i < all.length - 1; i++) {
    let min = i;
    for (let g = i + 1; g < all.length; g++) {
      if (all[g][key] < all[min][key]) {
        min = g;
      }
    }
    if (min !== i) {
      [all[i], all[min]] = [all[min], all[i]];
    }
  }
  return all;
}

let all = [
    { name: 'Петя', age: 5 },
    { name: 'Лёля', age: 2 },
    { name: 'Сима', age: 3 },
];

let outsortedArray = getSortedArray(all, 'age');

console.log(outsortedArray);
