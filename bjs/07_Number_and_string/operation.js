let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = "sum";
    inputWindow.value = '';
    
})
document.getElementById('btn_def').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "def";
  inputWindow.value = '';
  
})
document.getElementById('btn_multi').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "multi";
  inputWindow.value = '';
  
})
document.getElementById('btn_degree²').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "degree²";
  inputWindow.value = '';
  
})
document.getElementById('btn_divis').addEventListener('click', function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "divis";
  inputWindow.value = '';
  
})


document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum'){
      const result = lastOperand + parseInt(inputWindow.value);
      operation = null;
      lastOperand = 0;
      inputWindow.value = result;
 
    }
    if (operation === 'def'){
     const result = lastOperand - parseInt(inputWindow.value);
     operation = null;
     lastOperand = 0;
     inputWindow.value = result;
 
   }
   if (operation === 'multi'){
     const result = lastOperand * parseInt(inputWindow.value);
     operation = null;
     lastOperand = 0;
     inputWindow.value = result;
 
   }
   if (operation === 'divis'){
     const result = lastOperand / parseInt(inputWindow.value);
     operation = null;
     lastOperand = 0;
     inputWindow.value = result;
 
   }
   if (operation === 'degree²'){
     const result = lastOperand * lastOperand;
     inputWindow.value = result;
    
   }
 
 })
 
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})
