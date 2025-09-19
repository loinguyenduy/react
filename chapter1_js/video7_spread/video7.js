console.log("Video 7 - Spread syntax");
/*
Toán tử 3 dấu chấm cho phép chúng ta copy tất cả (hoặc một phần)
của một array/object sang một array/object khác */

//Array
const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]

const thirdArray = [...firstArray, ...secondArray]
const fourthArray = [...secondArray, ...firstArray]

console.log(thirdArray)
console.log(fourthArray)

let myArr = ["Eric", "HoidanIT", "React"]
//add item in array
// myArr.push("newItem")
myArr = [...myArr, "new item"]

//add item at first of array
// myArr.unshift("new item 2")
myArr = ["new item 3", ...myArr]
console.log(myArr)

///////////////////////////////////////////////////

//Object: adding '{}' to operate with object
const test = {name: "Eric", address: "hoidanit"}
console.log({...test})


const myVehicle = { brand: 'Ford', model: 'Mustang', color: 'red' } 
const updateMyVehicle = { type: 'car', year: 2021, color: 'yellow' }

const update = {...myVehicle, ...updateMyVehicle}
// result: {brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}
// Mảng bên phải sẽ ghi đè lên mảng bên trái nếu có các thuộc tính giống nhau như 'color'
console.log(update)

const state = {
  name: 'Eric',
  age: 26, //update to 30
  address: "Hanoi"
}

const result = {...state, age: 30}
console.log(result)

