'use strict'
/*let num = 123;
alert(num);

let num = 1;
let str = 589;
let hand = -44;

let num = 1, str = 589, hand = -44

let num, str, hand;
num = 1;
str = 589;
hand = -44;

let a = 10;
alert(a);

a = 20;
alert(a);

a = 1 + 2 + 3;
alert(a);

alert(1 + 2 + 3);

let a = 10, b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

let c = 10, d = 5;
let result = c + d;
alert(result);

let a = 1, b = 2, c = 3;
alert(a + b + c);

let a = 10, b = 5;
let c = a - b;
let d = 7;
let result = c + d;
alert(result);

let a = 10, b = 5, c, d = 7, result;
c = a - b;
result = c + d;
alert(result);

let a = 1.5, b = 0.75;
alert(a + b);

alert(a = -100);

let a = 20;
alert(-a);

let a = 10, b = 3;
alert(a % b);

alert(2**10);

let str = '!!!';
alert(str);

let a = 'java', 
    b = 'script';
alert(a + b);

let a = 'hello', 
    b = 'world';
alert(a + ' ' + b);

let name = 'Maria';
alert('привет, ' + name);

let age = 23;
alert('мне ' + age + ' года');

let a = 'fdkfsvnkfl'
alert(a.length);

alert('fskjnvaenp;wL;M'.length);

let str = `a
b
c`
alert(str);

let x;
alert(x);

let x = null;
alert(x);

let x = true;
alert(x);

alert(NaN + 333);

alert(-10/0);

alert(1024 * 1024 * 1024);

let r = 15;
let s = 3.14 * r ** 2;
alert(s);

let a = 5;
let s = a ** 2;
alert(s);

let s = '5s' * '2';
alert(s);  //NaN

let a = ' ' + 3 + 1;
alert(a);

let a = '10', b = '20';
alert(Number(a) + Number(b));

let a = '2';
let b = '3';
alert(+a + +b);

let a = parseInt('4px');
let b = parseFloat('7.8px');
alert(a + b + 'px');

let a = 10, b = 3;
alert(String(a) + String(b));

let x = 1894803578271;
alert(String(x).length);


let x = 1894803578271,
    y = 12345;
alert(String(x).length + String(y).length);

let t = Boolean(true);
alert(t);

let t = Boolean(1/0);
alert(t);

let str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);
alert(str[4] + str[3] + str[2] + str[1] + str[0]);

let str = 'abcde';
let num = 3;
alert(str[num]);

let str = 'abcdecdbjcjallp';
alert(str[str.length - 1]);

let pop = '12345';
alert(Number(pop[0]) + Number(pop[1]) +
    Number(pop[2]) + Number(pop[3]) + Number(pop[4]));



let pop = String(12345);
alert(Number(pop[0]) + Number(pop[1]) +
    Number(pop[2]) + Number(pop[3]) + Number(pop[4]));


let pop = String(12345);
alert(Number(pop[0]) * Number(pop[1]) *
    Number(pop[2]) * Number(pop[3]) * Number(pop[4]));



let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);


let num = 10;
num++;
num++;
num--;
alert(num);


let num1 = 3;
let num2 = ++num1;
alert(num1);
alert(num2);

let num1 = 3;
let num2 = num1++;
alert(num1);
alert(num2);

let num1 = 3;
num1++;
let num2 = num1--;
alert(num1++); //3
alert(num2); //4
alert(--num2); //3 

let name = prompt('What\'s your name?');
alert('Your name is ' + name);

alert('Your name is ' + prompt('What\'s your name?'));

let num1 = prompt('first number');
let num2 = prompt('second number');
alert(Number(num1) + Number(num2));

let side = prompt('Введите сторону квадрата');
alert('Площадь квадрата = ' + side ** 2);

let side1 = prompt('Введите сторону прямоугольника');
let side2 = prompt('Введите другую сторону прямоугольника');
alert('Периметр прямоугольника = ' + (2 * (Number(side1) + Number(side2))));*/



//let arr = ['a','b','c','d'];
//alert(arr);
//console.log(arr);
//console.log(arr[1]);
//alert(arr[0] + "+" + arr[1] + "+" + arr[2] + "+" + arr[3]);


/*let arr = [1, 2, 3];
console.log(arr[0] + arr[1] + arr[2]);

let line = [2, 5, 3, 9];
let result = line[0] * line[1] + line[2] * line[3];
console.log(result);

let line = [2, 5, 3, 9, 10, 9, 'hi'];
console.log(line.length);

let line = [2, 5, 3, 9, 10, 9, 'hi'];
console.log(line[line.length - 1]);

let arr = ['a','b','c'];
arr[0] = 1;
console.log(arr);


let arr = [1, 2, 3];
arr[0] += 3;
arr[1] += 3;
arr[2] += 3;
console.log(arr);

let arr = [1, 2, 3];
++arr[0];
arr[1]++;
arr[2]++;
console.log(arr);

let arr = [1, 2, 3];
arr[4] = 9;
arr[6] = 5;
console.log(arr);
console.log(arr.length);
alert(arr[10]);


//Объекты в JavaScript

let obj = {'1a': 'a', '2b': 'b', 'c-c': 'c'};
console.log(obj);

let obj = {key1: 1, key2: 2, key3: 3};
console.log(obj.key1 + obj.key2 + obj.key3);

let user = {name: 'Maria', surname: 'Ametina', patronymic: 'Serg'};
alert(user.surname + ' ' + user.name + ' ' + user.patronymic);


let date = {year: 2020, month: 'july', day: 11};
alert(date.year + '-' + date.month + '-' + date.day);

let obj = {};
obj['a'] = 1;
obj.b = 2;
obj['c'] = 3;
console.log(obj);

let arr = ['a', 'b', 'c'];
let key = 2;
console.log(arr[key]);

let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr[key1] + arr[key2]);


let obj = {'a': 1, 'b': 2, 'c': 3};
let key = 'b';
console.log(obj[key]);


///////////////////////////////////////
//////////////////////////////////////
//Передача объектов по ссылке в JavaScript
//////////////////////////////////////
//////////////////////////////////////

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr2);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[1] = 'b';

console.log(arr1);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2);

///////////////////////////////////////
//////////////////////////////////////
//Конструкция if-else в JavaScript

let test = 8;

if (test >= 10) {
    console.log(true);
} else {
    console.log(false);
}


let test = 10;

if (test == 10) {
    console.log(true);
} else {
    console.log(false);
}



let test = 1;

if (test != 10) {
    console.log(true);
} else {
    console.log(false);
}

let test1 = 20;
let test2 = 30;

if (test1 > test2) {
    console.log('test1 bigger than test2');
} else {
    console.log('test1 smaller than test2');
}

if (0 == '') {
	alert('верно'); // выведет 'верно'
} else {
	alert('неверно');
}

let num = 100;
if (num > 0 && num < 5) {
    alert('true');
} else {
    alert('false');
}

let num1 = -10;
let num2 = 5;
if (num1 <= 1 && num2 >=3) {
    console.log('true');
} else {
    console.log('false');
}


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Инвертирование высказываний в if-else

if ( !(num1 >= 0 || num2 <= 10)) {
	alert('верно');
} else {
	alert('неверно');
}

test = false;

if (test === false) {
    console.log('true');
} else {
    console.log('false');
}


let test = 0;
		
if (test == true) {
	alert('верно');
} else {
	alert('неверно');
}

let test = 3 * 'a';
		
if (test == true) {
	alert('верно');
} else {
	alert('неверно');
}

let test;
		
if (test == true) {
	alert('верно');
} else {
	alert('неверно');
}

let test = '';
		
if (test == false) {
	alert('верно');
} else {
	alert('неверно');
}


let test = true;

if (test) {
	alert('верно');
} else {
	alert('неверно');
}

let test = true;

if (!test) {
	alert('верно');
} else {
	alert('неверно');
}

let test;

if (test) {
	alert('верно');
} else {
	alert('неверно');
}

test = 10;
if (test == 10) {
    console.log('true');
}

let day = 40;
if (day >= 1 && day < 10) {
    console.log('the first decade');
} else if (day >= 10 && day < 20) {
    console.log('the second decade');
} else if (day >=20 && day <= 31) {
    console.log ('the thrid decade');
} else {
    console.log('that\'s wrong');
}


let age = 87;

if (age < 10 || age > 99) {
    console.log('age smaller than 10 or greater than 99');
} else {
    let year = String(age);
    if ((+year[0]+ +year[1]) <= 9) {
        console.log('сумма цифр однозначна');
    }
    else {
        console.log('сумма цифр двузначна');
    }
}


/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//Примеры использования if-else в JavaScript

let min = 70;

if (min >= 0 && min <= 20) {
    console.log('первая треть часа');
} else if (min >= 21 && min <= 40) {
    console.log('вторая треть часа');
} else if (min >= 41 && min <= 59) {
    console.log('последняя треть часа');
} else {
    console.log('в часе только 60 минут')
}

let arr = [1, 7, 12];
if (arr.length == 3) {
    console.log(arr[0] + arr[1] + arr[2]);
} else {
    console.log('в массиве больше 3х элементов');
}

let a = 22;
let b = a % 10;
if (b == 0) {
    console.log('последняя цифра равна 0');
} else {
    console.log('остаток от деления на 10 = ' + b);
}

let a = 133;
let b = a % 2;
if (b == 0) {
    console.log('четное число');
} else {
    console.log('нечетное число, остаток = ' + b);
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//Практика на условия if-else в JavaScript

let month = 7;
if (month >= 1 && month <= 2 || month == 12) {
    console.log('winter');
} else if (month >= 3 && month <= 5) {
    console.log('spring');
} else if (month >= 6 && month <= 8) {
    console.log('summer');
} else if (month >= 9 && month <= 11) {
    console.log('fall');
} else {
    console.log('there\'re only 12 month in a year ;)');
}

let str = 'abcde';
if (str[0] == 'a') {
    console.log('yes');
} else {
    console.log('no');
}

let str = 'abcde';
str[0] == 'b' ? console.log('yes'): console.log('no');

let num = 999445;
let b = String(num);
if (b[0] == 0 || b[1] == 2 || b[2] == 3) {
    console.log('yes');
} else {
    console.log('no');
} 

let a = 999;
let b = String(a);
console.log(+b[0]+ +b[1] + +b[2]); 

let a = 789789;
let b = String(a);
if ((+b[0]+ +b[1] + +b[2]) == (+b[3]+ +b[4] + +b[5])) {
    console.log('yes');
} else {
    console.log('no');
} 

let num = 5;
switch (num) {
    case 1:
        console.log('winter');
    break;
    case 2:
        console.log('spring');
    break;
    case 3:
        console.log('summer');
    break;
    case 4:
        console.log('fall');
    break;
    default:
        console.log('fuck off');
    break;
} 


///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//Тернарный оператор в JavaScript

let num = 10;
let a = num >= 0 ? 1: -1;
console.log(a); 

let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b); 

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b); 

let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b); 

let ask = confirm('Вам есть 18?');
if (ask) {
    console.log('yes');
} else {
    console.log('no');
} 

let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

let i = 11;
while (i >= 11 && i <= 33) {
    console.log(i);
    i++;
}

let i = 2;
while (i <= 100) {
    console.log(i);
    i += 2;
}

let i = 1;
while (i <= 99) {
    console.log(i);
    i += 2;
}

let i = 0;
while (i <= 30) {
    console.log(i);
    i++;
} 


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Цикл for в JavaScript

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (i = 11; i <= 33; i++) {
    console.log(i);
}


for (let i = 0; i <= 100; i += 2) {
   console.log(i);
    
}

for (let i = 1; i <= 99; i += 2) {
    console.log(i);
    
}

for (i = 100; i >= 0; i--) {
    console.log(i);
}

let result = 0;
for (let i = 1; i <= 20; i++) {
    result += i;
}
console.log(result);


let result = 0;
for (let i = 2; i <= 100; i += 2) {
    result += i;
}
console.log(result);

let result = 0;
for (let i = 1; i <= 99; i += 2) {
    result += i;
}
console.log(result);


////////////////////////////////////////////////
///////////////////////////////////////////////
//Цикл for для массивов в JavaScript

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
        console.log(arr[i]);
    }
}

let arr = [1, 2, 3, 4, 5];
let result = 1;
for (i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

let arr = [1, 2, 3, 4, 5];
let result = 0;
for (i = 0; i < arr.length; i++) {
    result += arr[i] ** 2;
}
console.log(result);

let arr = [2, 5, 9, 15, 1, 4];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}


let arr = [2, -5, 5, -7, 9, 15, 1, 0, 4];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}
console.log(result); 

let arr = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log(result);
let arithmeticMean = result / arr.length;
console.log(arithmeticMean); 

let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {

    arr[i] = String(arr[i]);
    
    if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
        console.log(arr[i]);
    }
}



let arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


let arr = [10, 1, 30, 50, 4, 3000];

for(let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i]);
    } 
}

let arr = [10, 1, 30, 50, 4, 3000];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}


let arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'sat' || arr [i] == 'sun') {
        document.write('<strong>' + arr[i] + '</strong>' + '<br>');
    } else {
        document.write(arr[i] + '<br>');
    }
} 

let arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
let day = 2;
for (let i = 0; i < arr.length; i++) {
    if (i == day) {
        document.write('<i>' + arr[i] + '</i>' + '<br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}



////////////////////////////////////////////////
///////////////////////////////////////////////
//Перебор массива циклом for-of в JavaScript


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    console.log(elem);
}


let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum);

let arr = ['jan', 'feb', 'mar', 'apr', 'may',
           'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
for (let elem of arr) {
    console.log(elem);
}

let arr = ['jan', 'feb', 'mar', 'apr', 'may',
           'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
let month = 10;
for (let i = 0; i < arr.length; i++) {
    if (i === month) {
        document.write('<i>' + arr[i] +'</i>' + '<br>');
    } else {
        document.write(arr[i] + '<br>');
    }
    
}



////////////////////////////////////////////////
///////////////////////////////////////////////
//Перебор объекта циклом for-in в JavaScript


let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sum = 0;
for (let key in obj) {
    sum += obj[key];
}
console.log(sum);


////////////////////////////////////////////////
///////////////////////////////////////////////
//Инструкция break в JavaScript

let arr = [1, 2, 3, 4, 5, 9, 0, 9, 8, 6, 0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        console.log('заканчиваем цикл, встретился элемент со значением 0');
        break;
    } else {
        console.log(arr[i]);
    }
}


let arr = [1, 2, 3, 4, 5, -10, 9, 0, 9, 8, 6, 0];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        break;
    } else {
        sum += arr[i];
    }
}
console.log(sum);


let arr = [1, 2, 3, 4, 5, -10, 9, 0, 9, 8, 6, 0];
let sum = 0;
for (let elem of arr) {
    if (elem < 0) {
        break;
    } else {
        sum += elem;
    }
}
console.log(sum);


let arr = [1, 2, 4, 5, -10, 9, 0, 3, 9, 8, 6, 0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 3) {
        console.log(i);
        break;
    }
}



let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;

    if (sum > 100) {
        console.log(i);
        break; 
        
    } 
    
}



////////////////////////////////////////////////
///////////////////////////////////////////////
//Инструкция continue в JavaScript

/*? let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let elem of arr) {
    let result;
    if (elem % 2 == 0) {
        result = elem ** 2;
    } else if (elem % 3 ==0) {
        result = elem **3;
    } else {
        continue;
    }
    console.log(result);
}



//Флаги

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
        break;
    }
}
if (flag === true) {
    console.log('есть');
} else {
    console.log('нет');
}


let num = 13;
let flag = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}
console.log(flag);



////////////////////////////////////////////////
///////////////////////////////////////////////
//Циклы без заданного количества итераций в JavaScript

let num = 90;
let i = 0;
while (num < 1000) {
    i++;
    num *= 3;
}
console.log(num, i);
или
for (var num = 90, i = 0; num < 1000; num *= 3, i++);
console.log(num, i);


////////////////////////////////////////////////
///////////////////////////////////////////////
//Формирование строк через циклы в JavaScript

let str = '';
for (let i = 0; i < 5; i++) {
    str += 0;
}
console.log(str);

let str = '';
for (let i = 1; i <= 9; i++) {
    str += i;
}
console.log(str);

let str = '';
for (let i = 9; i >= 1; i--) {
    str += i;
}
console.log(str);

let str = '-';
for (let i = 1; i <= 9; i++) {
    str = str + i + '-';
}
console.log(str);


for (let i = 10; i <= 1000; i++) {
    let str = String(i);

    if (+str[0] + +str[1] == 5) {
        console.log(i);
    }
} 

let result = '';
for (let i = 1; i <= 30; i++) {
    result += i;
}
console.log(result);


////////////////////////////////////////////////
///////////////////////////////////////////////
//Вложенные циклы в JavaScript

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
}

for (let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
        document.write(String(i) + String(j) + ' ');
    }
}


////////////////////////////////////////////////
///////////////////////////////////////////////
//Заполнение массивов через цикл в JavaScript


let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = i +1;
    console.log(arr[i]);
}

let arr = [];
arr[0] = 'x';
arr[1] = 'x';
arr[2] = 'x';
arr[3] = 'x';
arr[4] = 'x';
console.log(arr);

let arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}
console.log(arr);

let arr = [];

for (let i = 2; i <= 100; i += 2) {
	arr[i] = i;
}

console.log(arr);

let arr = [];

for (let i = 2, j = 0; i <= 100; i += 2, j++) {
	arr[j] = i;
}

console.log(arr);

let arr = [];
for (let i = 1, j = 0; i <= 99; i += 2, j++) {
    arr[j] = i;
}
console.log(arr);




////////////////////////////////////////////////
///////////////////////////////////////////////
//Изменение массива в цикле JavaScript

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}
console.log(arr);

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i]--;
}
console.log(arr);


let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}
console.log(arr);

let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);
console.log(arr);



let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);


let arr = [];
for (let i = 0; i < 10; i++) {
    
    arr.push(i);
    arr[i] = 'x';
}
console.log(arr);

? let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(Math.floor(Math.random(i) * 10) + 1);
}
console.log(arr);




let arr = [-1, 7, -19, 2, 3, 4, -5, 6, 7, -8, 9];
let result = [];
for (let elem of arr) {
    if (elem >= 0) {
        result.push(elem);
    }
}
console.log(result);


let arr = ['a', 'b', 'c', 'd', 'e'];
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}
console.log(result);



//////////////////////////////////////////////
///////////////////////////////////////////////
//Заполнение объектов через цикл в JavaScript

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);


let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i < arr2.length; i++) {
    obj[arr2[i]] = arr1[i];
}
console.log(obj);


let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let result = {};
for (let key in obj) {
    if (obj[key] >= 10 && obj[key] <= 20) {
        result[key] = obj[key]
    }
}
console.log(result);


let obj = {1: 'пн', 2: 'вт', 3: 'ср', 
    4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let result = {};
for (let key in obj) {
    if (key % 2 != 0) {
        result[key] = obj[key];
    }
}
console.log(result);



let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
for (let key in obj) {
    obj[key] = obj[key] ** 2;
}
console.log(obj);


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let result = {};
for (let key in obj) {
    result[obj[key]] = key;
}
console.log(result);



///////////////////////////////////////////////////
//Практика на циклы с массивами и объектами JavaScript

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    obj[key] = obj[key] + obj[key] * 0.1;
}
console.log(obj);

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] = obj[key] + obj[key] * 0.1;  
    }
}
console.log(obj);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let result = {};
for (let i = 0; i < arr1.length; i++) {
    result[arr1[i]] = arr2[i];
}
console.log(result);

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKey = 0;
let sumValue = 0;
let result = 0;
for (let key in obj) {
    sumKey += key;
    sumValue += obj[key];
}
result = sumKey / sumValue
console.log(result);


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];
for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);


let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = []; 
for (let key in obj) {
    let str = String(obj[key]);
    if (+str[0] == 1 || +str[0] == 2) {
        arr.push(str);
    }
}
console.log(arr);



let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 1; i <= arr.length; i++) {
    obj[i] = arr[i - 1];
}
console.log(obj);


let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1;
}
console.log(obj);


////////////////////////////////////////////////////
////////////////////////////////////////////////////
//Подсчет количества элементов в массиве JavaScript

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter++;
    }
}
console.log(counter);

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter1 = 0;
let counter2 = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter1++;
    }
    if (elem == 2) {
        counter2++;
    }
}
console.log(counter1, counter2);

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let obj = {};
for (let elem of arr) {
    if (obj[elem] === undefined) {
        obj[elem] = 1;
    } else {
        obj[elem]++;
    }
}
console.log(obj);


///////////////////////////////////////////////////
//////////////////////////////////////////////////
//Получение соседей элементов в массиве JavaScript

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + arr[i + 1]);
    
}

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
for (let i = 2; i < arr.length; i++) {
    console.log(arr[i - 1] + ',' + arr[i - 2]);
    
}


let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
for (let i = 2; i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i - 2] + arr[i]);
    
}

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i] + arr[i + 1]);
    
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////
//Получение чисел Фибоначчи в JavaScript

let first = 0;
let second = 1;
for (let i = 0; i <= 10; i++) {
    let current = 0;

    current = first + second;

    first = second;
    second = current;

    console.log(current);
    
}

let first = 0;
let second = 1;
let third = 2;
for (let i = 0; i <= 10; i++) {
    let sum = 0;

    sum = first + second + third;

    first = second;
    second = third;
    third = sum;

    console.log(sum);
    
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Вывод пирамидок на JavaScript

let str = '';
for (let i = 0; i < 5; i++) {
    str += 'xx';
    document.write(str + '<br>');
}


for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
        
    }
    document.write('<br>');
}

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i);
    }
    document.write('<br>');
}


for (let i = 1; i <= 9; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    document.write(str + '<br>');
}


for (let i = 1; i <= 9; i = i + 2) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    document.write(str + '<br>');
}


for (let i = 5; i > 0; i--) {
    let str = '';

    for (let j = 0; j < i; j++) {
        str += 'x';
    } 
    document.write(str + '<br>');
}


for (let i = 10; i > 0; i = i - 2) {
    let str = '';

    for (let j = 0; j < i; j++) {
        str += 'x';
    }
    document.write(str + '<br>');
}


for (let i = 9; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write(i);
    }
    document.write('<br>');
}


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Заполнение массивов с накоплением строки в JavaScript

let arr = [];
let str = '';

for (let i = 0; i < 5; i++) {
    str += 'xx';
    arr.push(str);
}
console.log(arr);


let arr = [];
for (let i = 1; i <= 5; i++) {
    let str = '';

    for (let j = 0; j < 7; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Отработка циклов JavaScript

for (let i = 1; i <= 100; i++) {
    console.log(i);
    
}


for (let i = 100; i > 0; i--) {
    console.log(i);
    
}

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
    
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
        
    }
}


let arr = [];
for (let i = 0; i < 10; i++) { 
    let str = '';
    str += 'x';
    arr.push(str);
}
console.log(arr);

let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);


let arr = [-1, 20, 3, -12, 4, 32, 5, 60, 9, 10, 3];
for (let elem of arr) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
        
    }
}

let arr = [-1, 20, 3, -12, 4, 32, 5, 60, 9, 10, 3];
for (let elem of arr) {
    if (elem == 5) {
        console.log('this arr has 5 in it');
        
    }
}


let arr = [-1, 20, 3, -12, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

let arr = [-1, 20, 3, -12, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2;
}
console.log(sum);

let arr = [-1, 20, 3, -12, 4];
let sum = 0;
let arithmeticMean = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
arithmeticMean = sum / arr.length;
console.log(arithmeticMean);

let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;

}
console.log(factorial);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
//Многомерные массивы в JavaScript

let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);


let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for (let subarr of arr) {
    for (let elem of subarr) {
        sum += elem;
    }
}
console.log(sum);


let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sum = 0;
for (let subarr of arr) {
    for (let sub of subarr) {
        for (let elem of sub) {
            sum += elem;
        }
    }
}
console.log(sum); 


let arr = [ [1, 2, 3, [4, 5, [6, 7] ]], [8, [9, 10]] ]; 
let sum = 0;
sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] +
    arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] +
    arr[1][0] + arr[1][1][0] + arr[1][1][1];

console.log(sum); 

let sum = 0;
let arr = [[1, 2, 3], [4, 5], [6]];
for (let subArr of arr) {
    for (let elem of subArr) {
        sum += elem;
    }
}
console.log(sum);

let arr = [[[1, 2], 
    [3, 4]], [[5, 6], [7, 8]]]; 
let sum = 0;   
for (let subArr of arr) {
    for (let subSubArr of subArr) {
        for (let elem of subSubArr) {
            sum += elem;
        }
    }
}
console.log(sum);


let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
        sum += arr[i][j];
    }
}
console.log(sum);


let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]; 
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            console.log(arr[i][j][k]);
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);



/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Заполнение многомерных массивов JavaScript

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i][j] = j + 1;
    }
}
console.log(arr);

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}
console.log(arr);

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        arr[i].push('x');
    }
}
console.log(arr);

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 1; k <= 5; k++) {
            arr[i][j].push(k);
        }
    }
}
console.log(arr);



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Заполнение числами по порядку

let arr = [];
for (let i = 0, k = 1; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++, k++) {
        arr[i][j] = k;
    }
}
console.log(arr);


let arr = [];
for (let i = 0, k = 2; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++, k += 2) {
        arr[i][j] = k;
    }
}
console.log(arr);

let arr = [];
for (let i = 0, k = 1; i < 2; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let l = 0; l < 2; l++, k++) {
            arr[i][j][l] = k;
        }
    }
}
console.log(arr);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//Многомерные объекты в JavaScript

let obj = {
    key1: {
        a: 1,
        b: 2,
        c: 3,
    },
    key2: {
        a: 1,
        b: 2,
        c: 3,
	},
	key3: {
        a: 1,
        b: 2,
        c: 3,
	},
}

let sum = 0;

sum = obj.key1.a + obj.key1.b + obj.key1.c +
obj.key2.a + obj.key2.b + obj.key2.c +
obj.key3.a + obj.key3.b + obj.key3.c;

console.log(sum); 

let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj[2][2], obj[3][1]);

let obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}
let sum = obj.key1.a + obj.key1.b + obj.key1.c.d +
obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h;
console.log(sum); 


let obj = {
    key1: {
        a: 1,
        b: 2,
        c: 3,
    },
    key2: {
        a: 1,
        b: 2,
        c: 3,
	},
	key3: {
        a: 1,
        b: 2,
        c: 3,
	},
}

let sum = 0;

for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        sum += subObj[subKey];
    }
}
console.log(sum); 


let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum = 0;
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        sum += subObj[subKey];
    }
}
console.log(sum); 



///////////////////////////////////////////////////
////////////////////////////////////////////////////
//Ключи из переменных в многомерных структурах JavaScript

let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru';
let month = 5;
console.log(months[lang][month]); 


let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year = '2019';
let month = 12;
let day = 30;
console.log(affairs[year][month][day][0]); 


let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
console.log(obj[key1]['key4']); //24



///////////////////////////////////////////////////
///////////////////////////////////////////////////
//Многомерные массивы и объекты в JavaScript

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let sum = 0;
sum = employees[0]['salary'] + employees[1]['salary'];
console.log(sum); 

let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students['boys'][1], students['girls'][2]);




///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Перебор многомерных комбинаций в JavaScript

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employee of employees) {
    document.write(employee.name + ' - ' + 
    employee.salary + '<br>');
} 

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

let sumSalary = 0;
for (let employee of employees) {
    sumSalary += employee.salary;
}
console.log(sumSalary); 

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let sumSalary = 0;

for (let employee of employees) {
    if (employee.age >= 30) {
        sumSalary += employee.salary;
    }
}
console.log(sumSalary); 



let employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];
for (let employee of employees) {
    if (employee.dismissed == false) {
        document.write(employee.name + ' - ' + employee.salary + '<br>');
    }
}


let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};

for (let groups in data) {
    for (let info of data[groups]) {
        console.log(info);
        
    }
}


let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];

for (let group of data) {
    for (let key in group) {
        console.log(group[key]);  
    }
}

let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];

for (let elem of data) {
    for (let key in elem) {
        for (let info of elem[key]) {
            console.log(info);
        }
    }
}



/////////////////////////////////////////////////
/////////////////////////////////////////////////
//Добавление элементов в многомерные массивы JavaScript

let users = [
	{
		name: 'name1',
		surname: 'surname1',
		age: 30,
	},
	{
		name: 'name2',
		surname: 'surname2',
		age: 31,
	},
	{
		name: 'name2',
		surname: 'surname2',
		age: 32,
	},
];

users.push({
    name: 'Maria',
    surname: 'Ametina',
    age: 23,
});
for (let elem of users) {
    for (let key in elem) {
        console.log(elem[key]);
        
    }
}
for (let elem of users) {
document.write(elem.name + '<br>');
}


///////////////////////////////////////////////////
///////////////////////////////////////////////////
//Добавление элементов в многомерные объекты JavaScript

let affairs = {
	'2019-12-28': ['дело11', 'дело12', 'дело13'],
	'2019-12-29': ['дело21', 'дело22', 'дело23'],
	'2019-12-30': ['дело31', 'дело32', 'дело33'],
}

affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('вот дела', 'еще дела');

affairs['2019-12-29'].push('дела такие', 'дела сякие');

console.log(affairs);


let students = {
	'group1': {
		'subgroup11': [
			'student111', 'student112', 'student113'], 
		'subgroup12': [
			'student121', 'student122', 'student123'], 
	},
	'group2': {
		'subgroup21': [
			'student211', 'student212', 'student213'], 
		'subgroup22': [
			'student221', 'student222', 'student223'], 
	},
	'group3': {
		'subgroup31': [
			'student311', 'student312', 'student313'], 
		'subgroup32': [
			'student321', 'student322', 'student323'], 
	},
};

students.group1.subgroup11.push('Pashka');

students.group1.subgroup666 = [];
students.group4444 = {};
students.group4444.subgroupLOL = [];
students.group4444.subgroupLOL.push('Masha', 'Pasha');

console.log(students);


let affairs = {
	'2019-12-28': ['дело11', 'дело12', 'дело13'],
	'2019-12-39': ['дело21', 'дело22', 'дело23'],
	'2019-12-30': ['дело31', 'дело32', 'дело33'],
}

function addAffair(date, affair) {
    if (affairs[date] === undefined) {
        affairs[date] = [];
    }
    affairs[date].push(affair);
}

addAffair('2019-12-28', 'делишки');
addAffair('2902-=1948', 'дело любимое');
console.log(affairs);





let students = {
	'group1': {
		'subgroup11': [
			'student111', 'student112', 'student113'], 
		'subgroup12': [
			'student121', 'student122', 'student123'], 
	},
	'group2': {
		'subgroup21': [
			'student211', 'student212', 'student213'], 
		'subgroup22': [
			'student221', 'student222', 'student223'], 
	},
	'group3': {
		'subgroup31': [
			'student311', 'student312', 'student313'], 
		'subgroup32': [
			'student321', 'student322', 'student323'], 
	},
};

function addStudent (group, subgroup, student) {
    if (students[group] === undefined) {
        students[group] = {};
    } else if (students[group][subgroup] === undefined) {
        students[group][subgroup] = [];
    }
    students[group][subgroup].push(student);
}

addStudent('group1', 'subgroup11', 'студентка');
addStudent('group2', 'сабка', 'студентик');
addStudent('группа', 'подгруппа', 'студ');

console.log(students); 


?????let affairs = {
	2018: {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	2019: {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

function addAffair(year, month, day, affair) {
    let test = [];
    if (affairs[year] === undefined) {
        affairs[year] = {};
    } else if (affairs[year][month] === undefined) {
        affairs[year][month] = {};
    } else if (affairs[year][month][day] === undefined) {
        affairs[year][month][day] = [];
    }
    affairs[year][month][day].push(affair);
    
}

addAffair(3020, 10, 29, 'delo');
addAffair(2018, 11, 29, 'deloperedelo');
addAffair(2019, 18, 20, 'heh');

console.log(affairs);



/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Практика на многомерные массивы и объекты в JavaScript
let data = {
	2018: {
		11: {
			29: [1, 2, 3],
			30: [4, 5],
		},
		12: {
			30: [6, 7],
			31: [8, 9],
		},
	},
	2019: {
		12: {
			29: [10, 11],
			30: [12, 13],
			31: [14, 15],
		}
	},
}
let arr = [];
for (let key in data) {
    for (let subKey in data[key]) {
        for (let subSub in data[key][subKey]) {
            for (let elem of data[key][subKey][subSub]) {
                arr.push(elem)
                
            }
            
        }
        
        
    }
    
}
console.log(arr);


let affairs = [
	{
		date:  '2019-12-29',
		event: 'name1'
	},
	{
		date:  '2019-12-31',
		event: 'name2'
	},
	{
		date:  '2019-12-29',
		event: 'name3'
	},
	{
		date:  '2019-12-30',
		event: 'name4'
	},
	{
		date:  '2019-12-29',
		event: 'name5'
	},
	{
		date:  '2019-12-31',
		event: 'name6'
	},
	{
		date:  '2019-12-29',
		event: 'name7'
	},
	{
		date:  '2019-12-30',
		event: 'name8'
	},
	{
		date:  '2019-12-30',
		event: 'name9'
	},
]

let arr = [];
for (let elem of affairs) {
    if (elem['date'] == '2019-12-29') {
    arr[0] = elem['date'];   
    } else if (elem['date'] == '2019-12-30') {
        arr[1] = elem['date'];  
    } else if (elem['date'] == '2019-12-31') {
        arr[2] = elem['date'];  
    }
}
console.log(arr); 


let users = [
	{
		name: 'name1',
		age: 31,
		active: true,
	},
	{
		name: 'name2',
		age: 32,
		active: false,
	},
	{
		name: 'name3',
		age: 33,
		active: true,
	},
	{
		name: 'name4',
		age: 34,
		active: false,
	},
	{
		name: 'name5',
		age: 35,
		active: true,
	},
];

for (let elem of users) {
    if (elem['active'] == true) {
        console.log(elem['name']);
        
    }
}


let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
];

let obj = {}, arr = [], arr1 = [];
for (let elem of data) {
    arr.push(elem['country']);
}
console.log(arr);
for (let elem1 of arr) {
    if (obj[elem1] === undefined) {
        obj[elem1]++;
    }
}
console.log(obj);
for (let key in obj) {
    arr1.push(key);
}
console.log(arr1);
console.log(arr1.length); 


let affairs = {
	'2019-12-31': ['массив дел1'],
	'2018-11-29': ['массив дел2'],
	'2018-11-30': ['массив дел3'],
	'2018-12-27': ['массив дел4'],
	'2019-12-29': ['массив дел5'],
	'2019-12-30': ['массив дел6'],
	'2018-12-30': ['массив дел7'],
	'2018-12-31': ['массив дел8'],
}
for (let key in affairs) {
    //console.log(key);
    if (key[3] == 8) {
        console.log(affairs[key]);
    }
    if (key[3] == 8 && key[6] == 2) {
        console.log(affairs[key]);
    }
    
}

???????let users = [
	{
		name: 'name1',
		active: true
	},
	{
		name: 'name2',
		active: false
	},
	{
		name: 'name3',
		active: true
	},
	{
		name: 'name4',
		active: false
	},
	{
		name: 'name5',
		active: true
	},
];
switchActiveTrue(users, 2);
function switchActiveTrue (arr, num) {
    if (arr[num]['active'] == true) {
        arr[num]['active'] = false;
    }
    return arr;
}
console.log(users); */




//////////////////////////////////////////////
///////////////////////////////////////////////
//Удобное хранение данных в JavaScript

// let data = [
// 	{
// 		country: 'Россия',
// 		city:    'Москва',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Минск',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Питер',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Владивосток',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Львов',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Могилев',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Киев',
// 	},
// ];
// let arr = [], arr1 = [], arr2 = [];
// for (let elem of data) {
//     if(elem.country == 'Россия') {
//         arr.push(elem.city);
//     } else if (elem.country == 'Беларусь') {
//         arr1.push(elem.city);
//     } else if (elem.country == 'Украина') {
//         arr2.push(elem.city);
//     }
// }
// console.log(arr, arr.length);
// console.log(arr1, arr1.length);
// console.log(arr2, arr2.length);


//Решение через функции:

// function countryCount (arr, countrys) {
//     let result = 0;
//     for (let elem of arr) {
//         if (countrys == elem.country) {
//             result++;
//             console.log((elem.city));
            
//         }
//     }
//     console.log(result + ' количество городов ' + countrys);
    
// }

// countryCount(data, 'Беларусь');

//более удобная структура, по-моему:
// let data = {
//     Россия: ['Москва', 'Питер', 'Владивосток'],
//     Беларусь: ['Минск', 'Могилев'],
//     Украина: ['Львов', 'Киев'],
// }
// let city = [];
// function cityCount(obj, country) {
//     for (let key in obj) {
//         if (country === key) {
//             city.push(obj[key]);
//         }
        
//     }
// }
// cityCount(data, 'Беларусь');
// console.log(city);


/////////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////
//Даты
// let data = [
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 21,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 25,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 26,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 29,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 30,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 19,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// ]

// let data = {
//     2019: {
//         11: {
//             20: ['массив с данными'],
//             21: ['массив с данными'],
//         },
//         12: {
//             25: ['массив с данными'],
//             26: ['массив с данными'],
//         },
//     },
//     2020: {
//         10: {
//             29: ['массив с данными'],
//             30: ['массив с данными'],
//         },
//         11: {
//             19: ['массив с данными'],
//             29: ['массив с данными'],
//         },
//     }
// }


// let affairs = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9'
// 	},
// ]

// let arr = [];
// for (let elem of affairs) {
//     if (elem.date == '2019-12-30') {
//         arr.push(elem['event']);
//     }
// }
// console.log(arr);



////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
//Конвертация многомерных структур в JavaScript

// let data = [
// 	{
// 		country: 'Россия',
// 		city:    'Москва',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Минск',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Питер',
// 	},
// 	{
// 		country: 'Россия',
// 		city:    'Владивосток',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Львов',
// 	},
// 	{
// 		country: 'Беларусь',
// 		city:    'Могилев',
// 	},
// 	{
// 		country: 'Украина',
// 		city:    'Киев',
// 	},
// ]

// let res = {};
// res['Россия'] = [];
// res['Беларусь'] = [];
// res['Украина'] = [];

// for (let elem of data) {
//     if (elem.country == 'Россия') {
//         res['Россия'].push(elem.city);
//     } else if (elem.country == 'Беларусь') {
//         res['Беларусь'].push(elem.city);
//     } else if (elem.country == 'Украина') {
//         res['Украина'].push(elem.city);
//     }
// }
// console.log(res);


// let events = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9'
// 	},
// ]

// let arr = [], obj = {}, arr1 = [], arr2 = [], arr3 = [];
// for (let elem of events) {
//     arr.push(elem['date']);
// }
// for (let elem1 of arr) {
//     if (obj[elem1] == undefined) {
//         obj[elem1]++;
//     }
// }
// for (let key in obj) {
//     if (key == '2019-12-29') {
//         arr1.push(events.event);

//     } else if (key == '2019-12-30') {
//         arr2.push(events.event);
//     } else if (key == '2019-12-31') {
//         arr3.push(events.event);
//     }
// }
// console.log(obj);

// let obj = {};
// obj['2019-12-29'] = [];
// obj['2019-12-30'] = [];
// obj['2019-12-31'] = [];
// for (let elem of events) {
//     if (elem['date'] == '2019-12-29') {
//         obj['2019-12-29'].push(elem['event']);
//     } else if (elem['date'] == '2019-12-30') {
//         obj['2019-12-30'].push(elem['event']);
//     } else if (elem['date'] == '2019-12-31') {
//         obj['2019-12-31'].push(elem['event']);
//     }
// }
// console.log(obj);


// let affairs = {
// 	'2018-11-29': ['массив данных'],
// 	'2018-11-30': ['массив данных'],
// 	'2018-12-30': ['массив данных'],
// 	'2018-12-31': ['массив данных'],
	
// 	'2019-12-29': ['массив данных'],
// 	'2019-12-30': ['массив данных'],
// 	'2019-12-31': ['массив данных'],
// }

// Давайте напишем код, который переформатирует наш массив вот в такой объект:

// {
// 	'2018': {
// 		11: {
// 			29: ['массив данных'],
// 			30: ['массив данных'],
// 		},
// 		12: {
// 			30: ['массив данных'],
// 			31: ['массив данных'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['массив данных'],
// 			30: ['массив данных'],
// 			31: ['массив данных'],
// 		}
// 	},
// }

// let result = {};
// for (let key in affairs) {
//     let [year, month, day] = key.split('-');

//     if (result[year] == undefined) {
//         result[year] = {};
//     }
//     if (result[year][month] == undefined) {
//         result[year][month] = {};
//     }
//     result[year][month][day] = affairs[key];
// }
// console.log(result);


//Дан список событий за определенные месяцы, хранящийся в следующей структуре:

// let events = [
// 	{
// 		date:  '2019-12',
// 		event: 'name1'
// 	},
// 	{
// 		date:  '2019-12',
// 		event: 'name2'
// 	},
// 	{
// 		date:  '2019-11',
// 		event: 'name3'
// 	},
// 	{
// 		date:  '2019-11',
// 		event: 'name4'
// 	},
// 	{
// 		date:  '2020-10',
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2020-10',
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2020-11',
// 		event: 'name5'
// 	},
// 	{
// 		date:  '2020-11',
// 		event: 'name6'
// 	},
// 	{
// 		date:  '2020-12',
// 		event: 'name7'
// 	},
// 	{
// 		date:  '2020-12',
// 		event: 'name8'
// 	},
// 	{
// 		date:  '2020-12',
// 		event: 'name9'
// 	},
// ]

//Напишите код, которой переделает структуру данных вот в такую:
// let events = {
// 	2019: {
// 		11: ['массив событий'],
// 		12: ['массив событий'],
// 	},
// 	2020: {
// 		10: ['массив событий'],
// 		11: ['массив событий'],
// 		12: ['массив событий'],
// 	}
// }

// let result = {};
// for (let elem of events) {
//     let [year, month] = elem['date'].split('-');
    
//     if (result[year] == undefined) {
//         result[year] = {};
//     }
//     result[year][month] = elem['event'];
// }
// console.log(result);


// let data = [
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 11,
// 		day: 21,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 25,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2019,
// 		month: 12,
// 		day: 26,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 29,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 10,
// 		day: 30,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 19,
// 		data: ['массив с данными']
// 	},
// 	{
// 		year:  2020,
// 		month: 11,
// 		day: 20,
// 		data: ['массив с данными']
// 	},
// ]

// let obj = {};
// for (let elem of data) {
//     let year1 = elem.year;
//     let month1 = elem.month;
//     let day1 = elem.day;

//     if (obj[year1] == undefined) {
//         obj[year1] = {};
//     }
//     if (obj[year1][month1] == undefined) {
//         obj[year1][month1] = {};
//     }
//     if (obj[year1][month1][day1] == undefined) {
//         obj[year1][month1][day1] = elem.data;
//     }
    
// }
// console.log(obj);















//////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Математические методы в JavaScript
//Работа со степенью и корнем

// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(245));

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let elem of arr) {
//     sum += Math.pow(elem, 3);
// }
// console.log(sum);




// console.log(Math.round(Math.sqrt(379)));
// console.log((Math.sqrt(379).toFixed(1)));
// console.log((Math.sqrt(379).toFixed(2)));



// let num = Math.sqrt(587);
// let ceil1 = Math.ceil(num);
// let floor1 = Math.floor(num);
// let obj = {};
// obj['floor'] = floor1;
// obj['ceil'] = ceil1;
// console.log(obj);






////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Нахождение максимального и минимального числа

// let arr = [4, -2, 5, 19, -130, 0, 10];
// let min = Math.min.apply(null, arr);
// let max = Math.max.apply(null, arr);
// console.log(min, max);
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));



////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Работа с рандомом

//Выведите на экран случайное целое число от 1 до 100.

// function getRundom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRundom(1, 100));
 

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);
// }
// console.log(arr);


// let a = 10;
// let b = -77;
// let sum = b - a;
// console.log(Math.abs(sum));




////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Строковые методы JavaScript

// let str = 'js';
// console.log(str.toUpperCase());
// let str = 'JS';
// console.log(str.toLowerCase());


// let str = 'я учу javascript!';
// let verb1 = str.substr(2, 3);
// let verb2 = str.substring(2, 5);
// let verb3 = str.slice(2, 5);
// console.log(verb1, verb2, verb3);


// let str = 'abcde';
// let position = str.indexOf('c');
// console.log(position);


// let str = 'я учу javascript!';
// let position = str.indexOf('a');
// if (position == 0) {
//     console.log('yes');
    
// } else {
//     console.log('no');
// }

// if (str.indexOf('a') == str.length - 1) {
//     console.log('заканчивается на а');
    
// }


// let str = 'http://';
// if (str.indexOf('http://') == 0) {
//     console.log('начинается'); 
// }

// let str = 'http://';
// if (str.startsWith('http://')) {
//     console.log('начинается'); 
// }

// let str = 'googlr.html';
// if (str.endsWith('.html')) {
//     console.log('заканчтвается');
    
// }


// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);


// let str = '12345';
// let arr = str.split('');
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-');
// console.log(str);








//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Методы для массивов в JavaScript

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);
// arr.unshift(4, 5, 6);
// console.log(arr);

// let arr = ['js', 'css', 'jq'];
// let elem = arr.shift();
// console.log(elem);
// let elem1 = arr.pop();
// console.log(elem1);

// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.slice(0, 3);
// console.log(arr1);
// let arr2 = arr.slice(-2);
// console.log(arr2);


// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.splice(1, 2);
// console.log(arr);
// let arr2 = arr.splice(1, 3);
// console.log(arr2);
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

// console.log(arr.indexOf(3));


// let str = 'london';

// let result = str.slice(0, 5) + str.slice(5).toUpperCase();
// console.log(result);
// let result = str.slice(0, 2).toUpperCase() + str.slice(2);
// console.log(result);

// let str = 'London';
// let res = str.slice(0, 1).toLowerCase() + str.slice(1);
// console.log(res);


// let str = 'word1 word2 word3';
// let arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//     arr [i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// let res = arr.join(' ');
// console.log(res);


// let str = 'var_test_text';
// let arr = str.split('_');
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// let res = arr.join('');
// console.log(res);


// let str = 'i love you';
// let res = str.split(' ').reverse().join(' ');
// console.log(res);
























////////////////////////////////////////////////////
////////////////////////////////////////////////////
//Основы работы с пользовательскими функциями в JavaScript

// function name() {
//     alert('Maria');
// }
// name();

// function sum() {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     alert(sum);
// }
// sum();


// function cube(num) {
//     num = Math.pow(num, 3);
//     alert(num);
// }

// cube(7);

// function isPositive(num) {
//     if (num >= 0) {
//         alert('+++');
//     } else {
//         alert('---');
//     }
// }

// isPositive(50.134);


// function fuck(num1, num2, num3) {
//     let sum = 0;
//     sum = num1 + num2 + num3;
//     alert(sum);
// }
// fuck(7, -2, 4);


// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function summa(num1, num2, num3) {
//     alert(num1 + num2 + num3);
// }
// summa(param1, param2, param3);







//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Инструкция return в JavaScript

// function cube(num) {
//     return Math.pow(num, 3);
// }
// let result = cube(3);
// console.log(result);


// function koren(num) {
//     return Math.sqrt(num);
// }
// let result = koren(3) + koren(4);
// console.log(result);



// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// let res = round(sqrt(2));
// console.log(res);




// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
// console.log(res);



// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}	
// 	return num * num;
// }
// alert( func(10) );
// alert( func(-5) );

//сколько первых элементов массива нужно сложить, чтобы сумма стала больше или равна 10
// function func(arr) {
// 	let sum = 0;
	
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
		
// 		// Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и из функции
// 		}
// 	}
// }

// let result = func([1, 2, 3, 4, 5]);
// alert(result);



//сколько целых чисел, начиная с 1, нужно сложить, чтобы результат был больше 100:

// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// alert( func() );


// function smth(num) {
//     let i;
//     for (i = 1; i < 10; i++) {
//         num /= 2;

//         if (num < 10) {
//             return i;
//         }
//         console.log(i);
//     }
    
    
// }
// alert(smth(100));


// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }

// alert(func(3, 4));













//////////////////////////////////////////////////
//////////////////////////////////////////////////
//Примеры на создание функций в JavaScript

// function getSumSquare(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += Math.pow(elem, 2);
//     }
//     return sum;
// }
// let arr1 = [1, 2, 3, 4];
// console.log(getSumSquare(arr1));


// function getDigitsSum(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(getDigitsSum(5));



// function getDivisors(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(getDivisors(20));

// function reverseStr(str) {
//     str = str.split('').reverse().join('');
//     return str;
// }
// console.log(reverseStr('Мама мыла раму'));


// function delElem(element, arr) {
//     let arr1 = [];
//     for (let elem of arr) {
//         if (elem != element) {
//             arr1.push(elem);
//         }
//     }
//     return arr1;
// }
// console.log(delElem(2, [1, 2, 3, 4, 5]));



// function fillArr(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(fillArr(10));


// function getNums(num1, num2) {
//     let arr = [];
//     for (let i = num1; i <= num2; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(getNums(-7, 2));






//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Флаги в функциях JavaScript

// function isEven(arr) {
//     for (let elem of arr) {
//         if (elem % 2 == 0) {
//             return true;
//         }
//     }
//     return false;
// }
// let arr1 = [2, 4, 6];
// console.log(isEven(arr1));


// function isNumEven(num) {
//     let str = String(num);
//     let arr = str.split('');
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// let num1 = 213527;
// console.log(isNumEven(num1));


// function isSame(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// }
// let arr1 = [1, 2, 3, 8, 8, 9];
// console.log(isSame(arr1));











//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Логические операторы без if в функциях JavaScript

// function func(a, b) {
//     return a == b;
// }
// console.log(func(9, 9));


// function func(a, b) {
//     return a != b;
// }
// console.log(func(3, 4));

// function func(a, b) {
//     return (a + b >= 10);
// }
// console.log(func(7, 4));

// function func(num) {
//     return num >= 0;
// }
// console.log(func(-7));



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Правильное использование функций JavaScript

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         arr.push(i);
//     }
// }
// console.log(arr);



// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }
// let arr = [];
// for (let i = 1; i <= 2030; i++) {
//     if (getDigitsSum(i) == 13) {
//         arr.push(i);
//     }
// }
// console.log(arr);


// let nums = [123, 456, 789];
// let arr = [];
// function getRevers(num) {
//     let num1 = String(num).split('').reverse().join('');
//     num1 = Number(num1);
//     return num1;
// }
// for (let elem of nums) {
//     arr.push(getRevers(elem));
// }
// console.log(arr);



// let num1 = 234;
// let num2 = 531;
// function sumNum(num) {
//     let newNum = [];
//     newNum = String(num).split('');
//     let numSum = 0;
//     for (let elem of newNum) {
//         numSum += Number(elem);
//     }
//     return numSum;
// }

// if (sumNum(num1) == sumNum(num2)) {
//     console.log('да, равны');
// }


// let nums = [12, 24, 35, 14];
// function getDivisors(num) {
//     let arr = [];
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// let arr2 = [];
// for (let elem of nums) {
//     arr2.push(getDivisors(elem)); 
// }
// console.log(arr2);






/////////////////////////////////////////////////////
////////////////////////////////////////////////////
//Комбинация вспомогательных функций JavaScript

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
// 	return sum;
// }
// function getDigits(num) {
// 	return String(num).split('');
// }
// let number = 12345;
// let num1 = getSum(getDigits(number));
// console.log(num1);


// function getDivisors (num) {
//     let arr1 = [];
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             arr1.push(i);
//         }
//     }
//     return arr1;
// }
// console.log(getDivisors(20));

// function getAverage (arr) {
//     let sum = 0; 
//     for (let elem of arr) {
//         sum += elem;
//     }
//     return sum / arr.length;
// }
// console.log(getAverage([2, 4, 5, 10]));

// console.log(getAverage(getDivisors(20)));






/////////////////////////////////////////////
/////////////////////////////////////////////
//Вспомогательные функции внутри других функций в JavaScript

// let arr1 = [9, 293, 54, 22, 711, 336, 81];
// let result = [];
// for (let elem1 of arr1) {
//     if (inRange(elem1)) {
//         result.push(elem1);
//     }
// }
// console.log(result);



// function getArrFromNum(num) {
//     return String(num).split('');
// }
// function getSumFromArr(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// }
// function inRange(num) {
//     let res = getSumFromArr(getArrFromNum(num));
//     return res >= 1 && res <= 9;
// }



















///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Дружественные числа на JavaScript

// function getOwnDivisors(num) {
//     let ownDivisors = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             ownDivisors.push(i);
//         }
//     }
//     return ownDivisors;
// }
// console.log(getOwnDivisors(220));

// function getSum(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// }
// console.log(getSum(getOwnDivisors(284)));

// function isFriendly(num1, num2) {
//     let sum1 = getSum(getOwnDivisors(num1));
//     let sum2 = getSum(getOwnDivisors(num2));

//     return (sum1 == num2 && sum2 == num1);
// }
// console.log(isFriendly(210, 284));

// //Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их в виде двухмерного массива вида [ [220, 284], [1184, 1210], [2620, 2924] ]. С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 9000.

// function getFreindly(min, max) {
//     let arr = [];
//     for (min; min < max; min++) {
//         let sum = getSum(getOwnDivisors(min));
//         let compare = getSum(getOwnDivisors(sum));

//         if (min == compare && min != sum) {
//             let tempArr = [];
//             tempArr.push(min, sum);
//             arr.push(tempArr);
//         }
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i][0] == arr[i + 1].reverse()[0]) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }
// console.log(getFreindly(1, 9000));



// function getPerfect (min, max) {
//     let arr = [];

//     for (min; min < max; min++) {
//         let summa = getSum(getOwnDivisors(min));

//         if (summa == min) {
//             arr.push(min);
//         }
//     }
//     return arr;
// }
// console.log(getPerfect(1, 1000));


// // ???function getSimpleDivisors(num1) {
// //     let arr = [];
// //     for (let j = 1; j < num1; j++) {
// //         if (num1 % j == 0 && SimpleNums(j)) {
// //             arr.push(j);
// //         }
// //     }
// //     return arr;
// // }
// // function SimpleNums(num) {
// //     for (let i = 2; i < num; i++) {
// //         return num % i != 0;
// //     }
// // }

// // console.log(getSimpleDivisors(110));









// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //Пересечение массивов на JavaScript

// // function inArray (elem, arr) {
// //     // if (arr.indexOf(elem) == -1) {
// //     //     return false;
// //     // } else {
// //     //     return true;
// //     // }
// //     return arr.indexOf(elem) !== -1;
// // }
// // console.log(inArray(2, [1, 2, 3]));

// // function getInt(arr1, arr2) {
// //     let result = [];

// //     for (let elem of arr1) {
// //         if (inArray(elem, arr2)) {
// //             result.push(elem);
// //         }
// //     }
// //     return result;
// // }
// // console.log( getInt([1, 2, 3], [2, 3, 4, 5]) );



// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //Разность массивов на JavaScript

// function inArray(elem, arr) {
//     return arr.indexOf(elem) !== -1;
// }

// function getFirstDiff(arr1, arr2) {
//     let result = [];

//     for (let elem of arr1) {
//         if (!inArray(elem, arr2)) {
//             result.push(elem);
//         }
//     }

//     return result;
// }

// function getDiff(arr1, arr2) {
//     let diff1 = getFirstDiff(arr1, arr2);
//     let diff2 = getFirstDiff(arr2, arr1);

//     return[].concat(diff1, diff2);
// }

// let array1 = [1, 2, 3];
// let array2 = [2, 3, 4, 5];

// console.log(getDiff(array1, array2));


// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //Наибольший общий делитель на JavaScript


// //находим наибольший общий делитель
// function getDividers(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// function inArray(elem, arr) {
//     return arr.indexOf(elem) !== -1;
// }

// function getCommonDividers(arr1, arr2) {
//     let newArr = [];
//     for (let elem1 of arr1) {
//         if (inArray(elem1, arr2)) {
//             newArr.push(elem1);
//         }
//     }
//     return newArr;
// }

// function getGreatestCommonDivisor(num1, num2) {
//     let array1 = getDividers(num1);
//     let array2 = getDividers(num2);
//     let result = getCommonDividers(array1, array2);
//     return Math.max.apply(null, result);
// }
// console.log(getGreatestCommonDivisor(40, 120));


// //находим взаимно простые числа
// function getBothSimple(num1, num2) {
//     let array1 = getDividers(num1);
//     let array2 = getDividers(num2);
//     let result = getCommonDividers(array1, array2);
//     return Number(result.join('')) == 1;
// }
// console.log(getBothSimple(4, 9));






//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Случайный элемент из массива на JavaScript

// function getRundomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function random(arr) {
//     return arr[getRundomInt(0, arr.length - 1)];
// }

// let arr = [1, 2, 3, 4, 5];
// let sum = random(arr) + random(arr) + random(arr);

// console.log(sum);


// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //Перемешивание массива на JavaScript

// function getRundomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function shuffle(arr) {
//     let result = [];

//     while (arr.length > 0) {
//         let random = getRundomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     return result;
// }

// let array = [1, 2, 3, 4, 5];
// console.log(shuffle(array));


// function range(min, max) {
//     let arr = [];
//     for (min; min <= max; min++) {
//         arr.push(min);
//     }
//     return arr;
// }
// console.log(range(3, 19));

// //Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона. При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle.
// function rangeRand(min, max) {
//     let arr = range(min, max);
//     return shuffle(arr);
// }
// console.log(rangeRand(4, 10));









//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Случайные элементы из массива на JavaScript

// function getRandomInt(min, max) {
//     return Math.floor(Math.random()*(max - min + 1)) + min;
// }

// function shuffle(arr) {
//     let result = [];

//     while (arr.length > 0) {
//         let random = getRundomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         result.push(elem);
//     }

//     return result;
// }

// function first(arr, length) {
//     return arr.splice(0, length);
// }

// function randoms(arr, length) {
//     return first(shuffle(arr, length));
// }

// console.log( first([1, 2, 3, 4, 5], 3) );



///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Счастливые билеты на JavaScript

// function getLuckyTickets() {
//     let result = [];
//     for (let i = 1001; i <= 999999; i++) {
//         if (isLucky(i)) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(getLuckyTickets());


// function isLucky(num) {
//     let ticketNum = normalizeNum(num);

//     let sum1 = Number(String(ticketNum[0])) + Number(String(ticketNum[1])) + Number(String(ticketNum[2]));
//     let sum2 = Number(String(ticketNum[3])) + Number(String(ticketNum[4])) + Number(String(ticketNum[5]));

//     return sum1 == sum2;
// }

// function normalizeNum(num) {
//     let str = String(num);

//     if (str.length == 4) {
//         str = '00' + str;
//     } else if (str.length == 5) {
//         str = '0' + str;
//     }

//     return str;
// }













////////////////////////////////////////////////
///////////////////////////////////////////////
//Счастливые билеты любой длины на JavaScript

// function isLucky(num, digitsAmount) {
//     let str = normalizeNum(num, digitsAmount);
//     let sum1 = 0;
//     let sum2 = 0;
//     if (str.length % 2 == 0) {
//         for (let i = 0; i < (str.length / 2); i++) {
//             sum1 += Number(str[i]);
//         }
//         for (let j = (str.length / 2); j >= (str.length / 2) && j < str.length; j++) {
//             sum2 += Number(str[j]);
//         }
//     }
//     return sum1 == sum2;
// }
// console.log(isLucky(312, 4));


// function normalizeNum(num, digitsAmount) {
//     let str = String(num);
//     return (formStr(0, digitsAmount - str.length)) + str;
// }
// //console.log(normalizeNum(71778,8));

// function formStr(zero, length) {
//     let str = '';
//     for (let i = 0; i < length; i++) {
//         str += zero;
//     }
//     return str;
// }
// //console.log(formStr(0, 3));

// function getLast(digitsAmount) {
//     let lastNum = formStr(9, digitsAmount);
//     return lastNum
// }
// //console.log(getLast(8));

// function getFirst(digitsAmount) {
//     let amount = digitsAmount / 2 - 1;
//     let firstNum = Number('1' + formStr(0, amount) + '1');
//     return firstNum;
// }
// //console.log(getFirst(4));

// function getLuckkyTickets(digitsAmount) {
//     let result = [];

//     let first = getFirst(digitsAmount);
//     let last = getLast(digitsAmount);

//     for (let i = first; i <= last; i++) {
//         let ticketNum = normalizeNum(i, digitsAmount);

//         if (isLucky(ticketNum)) {
//             result.push(ticketNum);
//         }
//     }
//     return result;
// }
// console.log(getLuckkyTickets(4));













// function func() {
// 	num = 2;
// }

// let num = 1;
// func();
// alert(num);


// let func1 = function() {
//     return 1;
// };
// let func2 = function() {
//     return 2;
// };
// let sumF = func1() + func2();
// console.log(sumF);















//////////////////////////////////////////////
///////////////////////////////////////////////
//Function expression и Function declaration в JavaScript

// fun();
// let fun = function() {
//     alert('Mash');
// };


// func();

// alert(
// 	function func() {
// 		alert('!');
// 	}
// );












////////////////////////////////////////////////
////////////////////////////////////////////////
//Массив с анонимными функциями в JavaScript

// let arr = [
//     function() {return 1},
//     function() {return 2},
//     function() {return 3},
// ];
// console.log(arr[0]() + arr[1]() + arr[2]());

// for (let func of arr) {
//     console.log(func());
// }


////////////////////////////////////////////////
////////////////////////////////////////////////
//Объект с анонимными функциями в JavaScript

// let obj = {
//     func1: function() {return 1},
//     func2: function() {return 2},
//     func3: function() {return 3},
// };
// let sum = obj.func1() + obj.func2() + obj.func3();
// console.log(sum);

// for (let ffunc in obj) {
//     console.log(obj[ffunc]());
    
// }



//Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

// let obj = {
//     arr1: function(arr) {
//         let sum = 0;
//         for (let elem of arr) {
//             sum += elem;
//         }
//         return sum;
//     },
//     arr2: function(arr) {
//         let sum = 0;
//         for (let elem of arr) {
//             sum += elem ** 2;
//         }
//         return sum;
//     },
//     arr3: function(arr) {
//         let sum = 0;
//         for (let elem of arr) {
//             sum += elem ** 3;
//         }
//         return sum;
//     },
// };
// let array = [2,3];
// console.log(obj.arr1(array), obj.arr2(array), obj.arr3(array));






//////////////////////////////////////////////
/////////////////////////////////////////////
//Передача функций параметрами в JavaScript

// function test(func1, func2, func3) {
//     console.log(func1() + func2() + func3());
// }
// function funcA() {return 1}
// function funcB() {return 2}
// function funcC() {return 3}

// test(funcA, funcB, funcC);
// test(
//     function() {return 1},
//     function() {return 3},
//     function() {return 4}
// )





// let func1 = function() {return 2};
// let func2 = function() {return 4};
// let func3 = function() {return 7};
// function test(funcA, funcB, funcC) {
//     alert(funcA() + funcB() + funcC());
// }
// test(func1, func2, func3);



// function test(num, func1, func2) {
//     alert(func1(num) + func2(num));
// }
// function exampleSQ(number) {
//     return number ** 2;
// }
// function exampleCU(number) {
//     return number ** 3;
// }
// test(2, exampleSQ, exampleCU);



// function test(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     console.log(arr);
// }

// test([2, 3, 4], function(num) {
//     return num ** 3;
// })





//////////////////////////////////////////////
//////////////////////////////////////////////
//Именованные функциональные выражения в JavaScript


//////////////////////////////////////////////
//////////////////////////////////////////////
//Функция в функции в JavaScript

// function func(num1, num2) {
//     function square(num) {
//         return num ** 2;
//     }
//     function cube(num) {
//         return num ** 3;
//     }

//     return square(num1) + cube(num2);
// }
// console.log(func(3, 4));

//////////////////////////////////////////////
//////////////////////////////////////////////
//Функция в функции и область видимости переменных в JavaScript
// function test() {
// 	let num;
	
// 	function func() {
// 		alert(num);
// 	}
	
// 	num = 1
// 	func();
	
// 	num = 2
// 	func();
// }

// test();

// function test(num1, num2) {
// 	function func() {
// 		alert(num1 + num2);
// 	}
	
// 	num1 = 2;
// 	func();
// }

// test(1, 2);

// function test(num) {
// 	function func(localNum) {
// 		alert(localNum);
// 	}
	
// 	func(num + 1);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	alert(num);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	alert(localNum);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	alert(num);
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		alert(num);
// 	}
	
// 	num = 2;
// 	func(num);
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		alert(num);
// 	}
	
// 	func(num);
// 	num = 2;
// }

// test(1);







//////////////////////////////////////////////
//////////////////////////////////////////////
//Функция, возвращающая функцию в JavaScript

// function func1() {
// 	return function() {
// 		return 1;
// 	}
// }
// function func2() {
// 	return function() {
// 		return 2;
// 	}
// }
// console.log(func1()() + func2()());


// function func() {
// 	return function() {
// 		return function() {
// 			return function() {
// 				return function() {
// 					alert('!');
// 				}
// 			}
// 		}
// 	}
// }
// func()()()()();


// function func(num1) {
// 	let arr = [];
// 	return function(num2) {
// 		return function(num3) {
// 			return function(num4) {
// 				return function() {
// 				 arr = [num1, num2, num3, num4];
// 				 alert(arr);
// 				}
// 			}
// 		}
// 	}
// }
// func(2)(3)(4)(5)();




////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//Лексическое окружение функций в JavaScript

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// let func = test();
// alert(func());

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// alert(test()());

// function test() {
// 	let num1 = 1;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// let num2 = 2;
// let func = test();
// alert(func());


// function test() {
// 	let num = 1;
	
// 	return function() {
// 		return num;
// 	}
// }

// let num = 2;
// let func = test();
// alert(func());




////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//Замыкания в JavaScript

// function test() {
// 	let num = 10;
// 	return function() {
// 		if (num > 0) {
// 			alert(num);
// 			num--;
// 		} else {
// 			alert('отсчет окончен');
// 		}
// 	}
// }
// let func = test();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();

// function func() {
// 	let num = 0;
	
// 	return function() {
// 		alert(num);
// 		num++;
// 	};
// };

// func()();
// func()();
// func()();




// let num = 1;

// function test() {
// 	return function() {
// 		alert(num);
// 		num++;
// 	};
// };

// let func1 = test(); // первый счетчик
// func1();  //выведет 1
// func1();  //выведет 2

// let func2 = test(); // второй счетчик
// func2();  //выведет 3
// func2();  //выведет 4





// let counter = 0;
		
// function test() {
// 	return function() {
// 		alert(counter);
// 		counter++;
// 	};
// };

// let func = test;

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();



// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			alert(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test()();

// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();


// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			alert(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test();

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();







//////////////////////////////////////////////////
//////////////////////////////////////////////////
//Вызов функции на месте в JavaScript

// let result = function() {
// 	return '!';
// };
		
// alert(result);

// let result = function() {
// 	return '!';
// }();
		
// alert(result);

// let result = function() {
// 	return '!';
// };
		
// alert(result());


// let sum = 1 + function() {
// 	return 2;
// }();

// alert(sum); // выведет 3

// let result = function() {return 1;}() + function() {return 2;}();
// alert(result);


// (function() {
// 	alert('!');
// }());

// let result = (function() {
// 	return '!';
// })();

// alert(result);

// let result = (function() {
// 	return '!';
// });

// alert(result);

// let result = (function() {
// 	return '!';
// });

// alert(result());


// (function(str) {
// 	alert(str); // выведет '!!!'
// })('!!!');

// (function(num1, num2) {
// 	alert(num1 + num2);
// })(1, 2);



// (function() {
// 	return function() {
// 		return function() {
// 			alert('!');
// 		}
// 	}
// }()()());


// (function(num1) {
// 	return function(num2) {
// 		console.log(num1 + num2);
			
// 	}
// }(1)(2));

// (function(num1) {
// 	return function(num2) {
// 		return function(num3) {
// 			console.log(num1 + num2 +num3);
// 		}
// 	}
// })(1)(2)(3);



// let func = (function() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	}
// }());
// func();
// func();
// func();
// func();
// func();
// func();


// let func = (function() {
// 	let num = 1;
// 	return function() {
// 		if (num < 6) {
// 			console.log(num);
// 			num++;
// 		} else {
// 			num = 1;
// 		}
// 	}
// }());
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();














/////////////////////////////////////////////////////
////////////////////////////////////////////////////
//Понятие функции-коллбэка в JavaScript
// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }

// function callbackkk(str) {
// 	let st = str.split('').reverse().join('');
// 	return st;
// }

// function TTUp(str) {
// 	let newStr = str.slice(0,1).toUpperCase() + str.slice(1);
// 	return newStr;
// }

// let array = ['hi', 'bye'];

// console.log(each(array, callbackkk));

// console.log(each(array, TTUp));





// function each(arr, callback) {
// 	let result = [];
// 	let i = 0;

// 	for (let elem of arr) {
// 		result.push(callback(elem, i++));
// 	}
// 	return result;
// }
// function callMe(num, i) {
// 	return num * i;
// }
// let arr = [2, 5, 3];

// console.log(each(arr, callMe));




////////////////////////////////////////////////
////////////////////////////////////////////////
//Функция filter
// function filter(arr, callback) {
// 	let result = [];
// 	let i = 0;
// 	for (let elem of arr) {
// 		if (callback(elem, i)) {
// 			result.push(elem);
// 		}
// 		i++;
// 	}
// 	return result;
// }
// function callback(elem) {
// 	if (elem > 0) {
// 		true;
// 		return elem;
// 	} else {
// 		false;
// 	}
	
// }
// console.log(filter([1,-5,3,2,-7], callback));

// function onlyStr(str) {
// 	if (str.length <= 3) {
// 		return str;
// 	}
// }
// console.log(filter(['abcd', 'ab', 'hey'], onlyStr));




////////////////////////////////////////////////
////////////////////////////////////////////////
//Стрелочные функции в JavaScript
// let result = every([1, 2, 3, 4, 5], elem => elem > 0);

// let result1 = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result2 = each(arr, (elem, index) => elem * index > 10);





////////////////////////////////////////////////
////////////////////////////////////////////////
//Работа с рекурсией в JavaScript

// let i = 1;
// function func() {
// 	console.log(i);
// 	i++;

// 	if (i <= 10) {
// 		func();
// 	}
// }
// func();

// function func(arr) {
// 	console.log(arr.shift(), arr);
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }
// func([1, 2, 3]);


//Сумма элементов массива

//Сделайте функцию, которая с помощью рекурсии выведет первые 10 чисел Фибоначчи. Числа Фибоначчи строятся следующим образом: каждое новое число равно сумме двух предыдущих. Первые два числа Фибоначчи - это 1 и 2. Следующее число будет равно 1 + 2 = 3, следующее число будет равно 2 + 3 = 5 и так далее.
// function fibonachi(first, second, i) {
// 	let fibo = first + second;
// 	first = second;
// 	second = fibo;
// 	i++;
// 	console.log(fibo);
	
// 	if (i < 10) {
// 		fibo = fibonachi(first, second, i);
		
// 	}
	
// }
// fibonachi(1, 2, 0);


//??????Модифицируйте предыдущую задачу так, чтобы функция не выводила числа, а возвращала массив первых 10 чисел Фибоначчи:
// function fibonachi(first, second, i) {
// 	let fibo = first + second;
// 	let result = [];
// 	result.push(fibo);
// 	console.log(result);
	
	
	
// 	first = second;
// 	second = fibo;
// 	i++;
// 	if (i < 10) {
// 		fibo = fibonachi(first, second, i);
		
// 	}
	
// }
// fibonachi(1, 2, 0);


// function getSum(arr) {
// 	let sum = arr.shift();

// 	if (arr.length != 0) {
// 		sum += getSum(arr);
// 	}

// 	return sum;
// }

// console.log((getSum([1, 2, 3])));







////////////////////////////////////////////////
////////////////////////////////////////////////
//Редуцирование числа

// function getDigitsSum(num) {
// 	return getSum(getDigits(num));
// }
// function getSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
// 	return sum;
// }
// function getDigits(num) {
// 	return String(num).split('');
// }

// function reduceNum(num) {
// 	let sum = getDigitsSum(num);

// 	if (sum <= 9) {
// 		return sum;
// 	} else {
// 		return reduceNum(sum);
// 	}
// }
// console.log(reduceNum(2187));


////////////////////////////////////////////////
////////////////////////////////////////////////
//Рекурсия и многомерные структуры в JavaScript

// function getArrElem(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			getArrElem(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }
// getArrElem([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// function getObjElem(obj) {
// 	for (let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			getObjElem(obj[elem] );
// 		} else {
// 			console.log(obj[elem]);
// 		}
// 	}
// }
// getObjElem({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, 
// 	j: 6, k: {l: 7, m: {n: 8, o: 9}}}});


// function getArrSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum += getArrSum(elem);
// 		} else {
// 			sum += elem;
// 		}
// 	}
// 	return sum;
// }
// console.log(getArrSum([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// function getObjSum(obj) {
// 	let sum = 0;
// 	for (let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			sum += getObjSum(obj[elem]);
// 		} else {
// 			sum += obj[elem];
// 		}
// 	}
// 	return sum;
// }
// console.log(getObjSum({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, 
// 	j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));


//Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки. С помощью рекурсии слейте элементы этого массива в одну строку.
//лучшим решением будет вместо массива создать str и делать str += elem
// function getStrFromArr(arr) {
// 	let newArr = [];
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			newArr.push(getStrFromArr(elem));
// 		} else {
// 			newArr.push(elem);
// 		}
// 	}
// 	return newArr.join('');
// }
// console.log(getStrFromArr(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));


//Дан многомерный массив произвольного уровня вложенности, Возведите все элементы-числа этого массива в квадрат.
// function getCube(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = getCube(arr[i]);
// 		} else {
// 			arr[i] = arr[i] ** 2;
// 		}
// 	}
// 	return arr;
// }
// console.log(getCube([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));


//Дан многомерный массив произвольного уровня вложенности, Напишите код, который развернет наш многомерный массив в одномерный. 
// let array = [];
// function getNormArr(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			getNormArr(elem);
// 		} else {
// 			array.push(elem);
// 		}
// 	}
// 	return array;
// }
// console.log(getNormArr([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


//Выведите на экран все элементы-массивы, содержащие внутри себя только примитивы
// function getElem(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i]== 'object' && isPrimitive(arr[i])) {
// 			console.log(arr[i]);
// 		} else {
// 			getElem(arr[i]);
// 		}
// 	}
// }
// function isPrimitive(elem) {
// 	for (let i = 0; i < elem.length; i++) {
// 		if (typeof elem[i] == 'object') {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// }
// getElem([1, [2, 7, 8], [3, 4], [5, [6, 7]]]);




//Дан многомерный массив произвольного уровня вложенности. Подсчитайте с помощью рекурсии самый максимальный уровень вложенности этого массива.
// let arrCount = [];
// let count;
// function insetMax(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			count = 1;
// 			arrCount.push(isArrOfArr(arr[i]));
// 		}
// 	}
// 	console.log(arrCount);
// 	return maxCount(arrCount);
// }
// function isArrOfArr(elem) {
// 	for (let i = 0; i < elem.length; i++) {
// 		if (typeof elem[i] == 'object') {
// 			count++;
// 			isArrOfArr(elem[i]);
// 		}
// 	}
// 	return count;
// }
// function maxCount(arrCount) {
// 	return Math.max.apply(null, arrCount);
// }
// console.log(insetMax([1, [2, 7, 8], [3, 4, [55, 56, [57, 58]]], [5, [6, 7, [11, 13, [17, 18, [19, 20, [-2, -3]]]]]]]));














////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Метод map для перебора массива в JavaScript

// let arr = [4, 16, 9, 3];
// let result = arr.map(function(elem) {
// 	return Math.sqrt(elem);
// });
// console.log(result);


// let arr = [1, 2, 3];
// let result = arr.map(function(elem) {
// 	return elem + '!';
// });
// console.log(result);


// let arr = ['hey', 'bye', 'mom'];
// let result = arr.map(function(elem) {
// 	return elem.split('').reverse().join('');
// });
// console.log(result);


// let arr = ['123', '456', '789'];
// let result = arr.map(function(elem) {
// 	let smallArr = [];
// 	smallArr.push(elem.split(''));
// 	return smallArr
// });
// console.log(result);



//////////////////////////////////////////////////
/////////////////////////////////////////////////
//Ключ элемента
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = arr.map(function(elem, index) {
// 	return elem + index;
// });
// console.log(result);


//Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
// let arr = [1, 3, 8.2, 7, 0];
// let result = arr.map(function(elem, index) {
// 	return elem * index;
// });
// console.log(result);



//////////////////////////////////////////////////
/////////////////////////////////////////////////
//Перебор многомерных массивов
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });
// console.log(result);









//////////////////////////////////////////////////
/////////////////////////////////////////////////
//Метод forEach для перебора массива в JavaScript

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = arr.forEach(function(elem, index) {
// 	document.write(index + '. ' + elem + '<br>');
// });


//Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem ** 2;
// });
// console.log(sum);







//////////////////////////////////////////////////
/////////////////////////////////////////////////
//Метод filter для фильтрации массива в JavaScript