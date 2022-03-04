//--1.-------------------------
const chessBoard = (str) => {
  const arr = [];

  for (let i = 0; i < 8; i++) {
    i % 2 === 0 ? 
      arr.push(str.repeat(4), '\n') : 
      arr.push(str.repeat(4).split('').reverse().join(''), '\n');
  }

  return str = arr.join('');
}

console.log(chessBoard('# '));

//--2.-------------------------

const Factorial = n => {
  for (let i = n - 1; i > 1; i--) {
    n = n * i;
  } 
  return n;
} 

console.log(Factorial(17));

//--3.-------------------------

const arr = [9, 8, 7, 1, 5, 9, 6, 5, 10, 4, 3, 2, 1, 0];

for (let x = 0; x < arr.length - 1; x++) {
  for (let i = 0; i < arr.length - 1 - x; i++) {
    const temp = arr[i];
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    
  }
}

console.log(arr);

//--4.-------------------------

const convertByte = (size, unit) => {
  const arr = ['Kb', 'Mb', 'Gb'];
  let result;

  arr.forEach((item, index) => {
    if (item === unit) {
      result = size * 1024 ** (index + 1);
    }
  });
  
  return result + ' byte';
}

console.log(convertByte(120, 'Kb'));
