const inputText = document.querySelector('#inp_display');
const sign = ['+', '-', '*', '/'];
let flagResult = false;

const calculate = (x, key, y) => {
  const calculator = new Map ([
    ['+', (x, y) => x + y],
    ['-', (x, y) => x - y],
    ['*', (x, y) => x * y],
    ['/', (x, y) => x / y]
  ]);

  return calculator.get(key)(x, y);
};

const calculateStr = (str) => {
  const calcStr = new Map();
  let i = 1;

  str.split(' ').forEach(item => {  
    calcStr.set(i, item);
    i++;

    if (calcStr.has(1) && calcStr.has(2) && calcStr.has(3)) {
      if (+calcStr.get(3) === 0) {
        return calcStr.set(1, 'Error');
      };
      
      const result = calculate(+calcStr.get(1), calcStr.get(2), +calcStr.get(3));
      
      calcStr.clear();
      i = 1;
      calcStr.set(i, result);
      i++;
    };
  });

  return calcStr.get(1);
};

const checkNewCalculation = flag => flagResult = flag;

document.querySelectorAll('button').forEach( button => {
  button.onclick = () => {
    const findOperator = !!sign.find(item => item === button.innerText);

    if (button.innerText === 'С') {
      return inputText.value = '';
    }; 
    
    if (button.innerText === '=') {
      const strInput = inputText.value;

      checkNewCalculation(true);
      return inputText.value = calculateStr(strInput);
    }; 
      
    if (findOperator) {
      checkNewCalculation(false);
      return inputText.value = inputText.value + ` ${button.innerText} `; 
    }; 

    if (flagResult) {
      inputText.value = '';
      checkNewCalculation(false);    
      return inputText.value = inputText.value + button.innerText;;      
    };

    inputText.value = inputText.value + button.innerText;    
  };
});
