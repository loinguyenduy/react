console.log("  Video 5 - map filter")

const myArray = [1, 2, 3, 4]

//bản chất là 1 vòng for, lặp các phần tử và tạo ra mảng mới ko làm thay đổi array ban đầu
const myList = myArray.map((item) => item * 2)

console.log(myList, myArray)

const ages = [32, 33, 16, 40];
const result = ages.filter((value) => {
  return value >= 18
} )

console.log(result)
