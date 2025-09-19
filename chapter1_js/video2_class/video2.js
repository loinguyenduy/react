console.log("Hello")

class Person {
  //Constructor
  constructor(name, address) {
    this.name = name
    this.address = address
  }

  getAddress(){
    return "I live in: ", this.address
  }
}

//ex01
class Novel {
  //constructor
  constructor(title, author){
    this.title = title
    this.author = author
  }

  getAuthor() {
    return "Author: ", this.author
  }
}

const test = new Person("Loi", "Hanoi")
console.log("Check test: ", test)
console.log("Check address: ", test.getAddress())

//ex01
let myNovel = new Novel("React Hook Tutorial", "HoidanIT")
console.log("Author:", myNovel.getAuthor())