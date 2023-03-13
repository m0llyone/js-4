"use strict";
let arr;
let num;
let sum;

//task1

{
  arr = [1, 2, 3, 4, 5];
  num = 0;
  for(let i = 0; i<arr.length;i++) {
    num = arr[i];
    console.log(`${num}`);
  }
}

//task2

{
  arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
  arr = arr.filter((item) => item > -10 && item < -3)
  console.log(arr)
}

//task3

{
  arr = [];
  let result = 0;
  let i = 23;
  for (; i < 57; i++) {
    result += arr.push(i);
  }
  console.log(arr);
  console.log(`Сумма: ${result}`);
  while(i < 57) {
    i++;
    result +=arr.push(i);
  }
  console.log(arr);
  console.log(`Сумма:${result}`);
}


//task4

{
  arr = ['10', '20', '30', '50', '235', '3000'];
  // arr = arr.filter(i=>/^2/.exec(i));
  // console.log(arr);
  for (let i of arr) {
    if(i[0] === '1' || i[0] === '2' || i[0] === '5') {
      console.log(i);
    }
  }

}

//task5

{
  let array = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
  for (let i = 0; i < array.length; i++) {
    if(array[i] === 'СБ' || array[i] === 'ВС') {
      document.write('<b>'+ array[i] +'</b>' + '<br>');
    } else {
      document.write(array[i] + '<br>')
    }
  }
}

//task6

{
  arr = [];
  num = prompt('Введите что вы хотите закинуть в конец массива: ');
  for (let i=0;i <30;i+=3) {
  arr.push(String(i));
}
  arr.push(num);
  console.log(arr);
  console.log(arr[arr.length - 1]);
  // console.log(arr.at(-1));
}

//task7

{
  arr = [];
  for (let i = 0;i< 10;i++) {
  arr[i] = prompt('Введите число:');
  if(arr[i] === '' || isNaN(arr[i])) {
    break;
  }
  }
  arr.pop();
  console.log(arr);
  console.log(arr.sort());
}

//task8

{
  let i = 0;
  arr = [12, false, 'Текст', 4, 2, -5, 0];
  arr.reverse();
  console.log("inverted array:");
    while(i < arr.length){
        console.log(arr[i++])
    }
}

//task9

{
  arr = [5, 9, 21, , , 9, 78, , , , 6];
  let count = 0;
  for(let i of arr) {
    if(i === undefined){count++;}
  }
  console.log(`Кол-во пустых значений: ${count}`);
}

//task10

{
  arr = [11,18,0,53,66,81,72,0,92,0,22,30,44];
  function myFunction (arr){
  const first = arr.indexOf(0) + 1,
        last = arr.lastIndexOf(0);
  return arr.splice(first, last-first).reduce((a, b)=>a+b, 0)
}
console.log(arr);
console.log(`Сумма чисел от 0 до 0: ${myFunction(arr)}`);
}

//task11

{
  let number = prompt('Введите высоту: ');
  let str = "";
  let space = "";
  let i = 0;
  let j = 0;
  while (i < number) {
  space = "";
  str = "";
  for (j = 0; j < number - i; j++) {space += " ";}
  for (j = 0; j < 2 * i + 1; j++) {str += "^";}
  console.log(space + str);
  i++;
}
}
