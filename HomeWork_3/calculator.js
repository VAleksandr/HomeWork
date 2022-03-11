const inputText = document.querySelector('#inp_display');
let expression = [];
const sign = ['+', '-', '*', '/'];

document.querySelectorAll('button').forEach( button => {
  button.onclick = () => {
    if (button.innerText === 'С') {
      inputText.value = '';
      arr = [];
    } else if (button.innerText === '=') {
      expression.push(+inputText.value); 
      inputText.value = '';
      inputText.value = calculate(expression[0], expression[1], expression[2]);
    } else { 
      let oldInputTex = inputText.value;

      inputText.value = oldInputTex + button.innerText;
    } 

    sign.forEach( item => {
      if (item === button.innerText) {
        expression = [];   
        expression.push(+inputText.value.slice(0, -1), `${button.innerText}`); 
        inputText.value = '';
      }
    });
  }
});

const calculate = (first, operation, second) => {
  let result;

  switch (operation) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    case '/':
      result = second ? first / second : 'Error';
      break;
  }

  return result;
};
