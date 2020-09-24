
// for (let numbers = 0; numbers <= 100; numbers++) {
// 	document.write (numbers + '<br>')
// }


// for (let numbers = 11; numbers <= 33; numbers++) {
// 	document.write(numbers + '<br>')
// }

// let numbers = 33;
// while (numbers >= 11){
// 	document.write(numbers + '<br>')
// 	numbers--;
// }

// for (let numbers = 0; numbers <= 100; numbers = numbers + 2) {
// 	console.log(numbers)
// }

// 4 ZAD PROVERKA!!!!!!!!!!!!!
// for (let numbers = 0; numbers <= 100; numbers = numbers + 1) {
// 	console.log(numbers + numbers);
// }
//

// let array = [1, 2, 3, 4, 5]
// for (i = 1; i <= array.length; i++){
// 	console.log(i);
// }

// let array = [1, 2, 3, 4, 5]
// for (i = 1; i <= array.length; i++){
// 	let res = i + i;
// 	console.log(res);
// }

// let obj = {
// 	green: 'зеленый', 
// 	red: 'красный', 
// 	blue: 'голубой'
// }
// for (key in obj) {
// 	console.log(key + ':' + obj[key])
// }

// let obj = {
// 	Kolya: '200',
// 	Vasya: '300',
// 	Petya: '400'
// }
// for (key in obj) {
// 	console.log (key + ' - зарплата ' + obj[key] + ' баксов')
// }

// let array = [2, 5, 9, 15, 0, 4];

// for (i = 0; i < array.length; i++) {
// 	if(array[i] > 3 && array[i] < 10){
// 		console.log(array[i])
// 	}
// }

// let array = [1, 2, 5, 9, 4, 13, 4, 10]
// res = 0;
// for(i = 0; i < array.length; i++){
// 	if (array[i] == 4){
// 		res += array[i]
// 		console.log('Yes')
// 		break;
// 	} 
// }

// let array = [10, 20, 30, 50, 235, 3000]

// for(i = 0; i < array.length; i++){
// 	if (array[i] == 1){
// 		console.log(array[i])
// 	}
// }

// var arr = ['10', '20','30', '50', '235', '3000'];
// for (var i = 0; i < arr.length; i++) {
// if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
// console.log(arr[i]);
// }
// }

// var arr = ['101', '201','30', '50', '235', '30001'];
// for (var i = 0; i < arr.length; i++) {
// if (arr[i][2] == '1') {
// console.log(arr[i]);
// }
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(i=0; i < array.length; i++){
// 	if (array[i] == '1'){
// 		console.log(array[i]);
// 	}
// 	//console.log(array[i] == '9');
// 	//'-1-2-3-4-5-6-7-8-9-'
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var str = '';
// for (var i = 0; i < arr.length; i++) {
// str += '-' + arr[i];
// }
// console.log(str);

// let days = {
// 	first: 'Monday',
// 	second: 'Tuesday',
// 	third: 'Wednesday',
// 	fourth: 'Thursday',
// 	fiveth: 'Friday',
// 	sixth: 'Suturday',
// 	seventh: 'Sunday'
// }
// for (week in days){
// 	console.log(week + ':' + days[week])
// }

// let daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suturday', 'Sunday']

// for(i = 0; i < daysArray.length; i++){
// 	if (i == 1 || i == 2){
// 		document.write('<b> ' + daysArray[3])
// 	} else document.write(daysArray[i] + ' ');
// }

let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suturday', 'Sunday']
let day = 1;

for(i = 0; i < arr.length; i++) {
	if (day == i){
		document.write('<i>' + arr[i] + '</i> <br>')
	} else {document.write(arr[i] + '<br>')}
}

// var arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// var day = 5;
// for (var i = 0; i < arr.length; i++) {
// if (i == day) {
// document.write('<i>' + arr[i] + '</i> <br>');
// } else {
// document.write(arr[i] + '<br>');
// }
// }