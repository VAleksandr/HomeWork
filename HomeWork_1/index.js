//--1.-------------------------

console.log('123456'.split('').reverse().join(''));

//--2.-------------------------

const str_2 = 'http://string.html';

const textСheck = str => {
  const arr = str.split('');
  const arrStart = arr.slice(0, 7).join('');
  const arrEnd = arr.slice(arr.length - 5, arr.length).join('');
  
  return arrStart === 'http://' && arrEnd === '.html';
  
}

console.log(textСheck(str_2));

//--3.-------------------------

const dayWeek = (num) => {
  const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

  return days[num - 1];
}

console.log(dayWeek(7));
