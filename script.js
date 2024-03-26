const numbers = [400, 122, 132, 111, 1100, 688, 900];




for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      
      const temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log(numbers.join(', '));
