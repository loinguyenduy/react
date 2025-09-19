let user = {} // a user without "address" property
// console.log(user.address) //error! undefined
// console.log(user.address.street) //error! Uncaught

//Dùng ? (câu điều kiện) để truy cập object kể cả nó ko tồn tại nhưng ko gây ra error
console.log(user.address ? user.address.street : undefined) //undefined

// Dùng ? (optional chaining)
console.log(user?.address?.street) //undefined

console.log(user?.address?.street??"Not found user") //not found user

/*
Other variants: ?.() dùng để truy cập 1 function có thể ko tồn tại mà ko gây ra lỗi
 */
let userAdmin = { 
  admin() 
  { 
    alert("I am Eric"); 
  } 
};

let userGuest = {}
// userAdmin.admin() //alert("I am Eric")

// userGuest.admin() //Uncaught TypeError: userGuest.admin is not a function
// userGuest.?admin() //chỉ kiểm tra xem hàm admin có tồn tại hay ko
userGuest?.admin?.() //kiểm tra xem userGuest có tồn tại hay ko, sau đó check đến hàm admin

/*
Truy cập thuộc tính thông qua []
 */

let key = "firstName";
let user1 = { firstName: "Hoi Dan IT" };
let user2 = null;
// alert( user1?.[key] ); // Hoi Dan IT 
// alert( user2?.[key] ); // undefined


//Thao tác với object
//object?. a?. b?. c //undefined
//object?. a?. b?. c ?? "Not found"  //not found

//Thao tác function
//object.function?.() // check function available
let obj = {
  name: 'eric',
  channel: 'hoidanit',
  address: {
    street: 'abc',
    province: 'Hoan Kiem'
  }
}
// console.log(obj.address.xyz.daz) //Uncaught TypeError
console.log(obj?.address?.xyz?.daz) //Undefined

////////////
const test = undefined
// test.map(item => item) //Uncaught TypeError: Cannot read properties of undefined (reading 'map')
test?.map?.(item => item) //undefined