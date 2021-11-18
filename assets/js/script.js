// let grades = ["Hasan", 50, "Ahad", 60, "Nurlan", 70, "Nurxan", 80, "Jamal", 90]
// let count = 0;

// let avarage = grades.reduce((total, num) => {
//     if ((typeof num).trim().toLowerCase() != "string") {
//         total += num;
//         count++;
//     }

//     return total;
// }, 0)

// console.log(avarage / count);


// let arr = [1, '', 0, 5, "okay", null, undefined]


// // let arr = truFal.filter(String);

// // console.log(arr);



// arr.push("Ahad");

// // arr.pop();

// arr.shift();

// arr.unshift("Hasan")



// console.log(arr);

let OBJECT_KEY = "username"



let obj = {
    firstname: "Hasan",
    surname: "Nuruzade",
    age: 29,
    [OBJECT_KEY]: "hsn",
    getInfo: function() {
        return `${this.firstname} ${this.surname} ${this.age}`
        return this.firstname + " " + this.surname + " " + this.age
    }
}


// console.log(obj.getInfo());

// let testAnonym = function() {
//     console.log("anonym");
// }


// testAnonym();



// console.log(typeof obj.age);

// obj.groupNo = "P223"


// obj[OBJECT_KEY] = "hsn"

// console.log(obj);

// console.log(obj.groupNo);

// function Test() {
//     console.log("test");
// }

// Test();


//Function constructor

// function Person(firstname = '', surname = '', age = '') {
//     this.firstname = firstname;
//     this.surname = surname;
//     this.age = age;

//     this.getAge = function() {
//         return this.age;
//     }

//     this.getFullname = function() {
//         return `${this.firstname} ${this.surname}`
//     }
// }

// function Student(groupType, groupNo) {
//     this.groupType = groupType;
//     this.groupNo = groupNo;
// }


// Student.prototype = new Person();


// let stu = new Student("P", "223")
//     // Object.setPrototypeOf(stu, new Person("Rufat", "Mazamov", 21))

// stu.firstname = "Hasan"

// let stu1 = new Student("D", "500")


// // let person = new Person("Lala", "Guliyeva", 25);

// console.log(stu.firstname);
// stu1.firstname = "Jamal"
// console.log(stu1.firstname);
// // console.log(person.getFullname());


//Object methods

let user = {
    firstname: "Nurxan",
    surname: "Masimzade",
    age: 20,
    getAge: function() {
        return this.age
    }
}



// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user)[0][1]);

// user.groupNo = "P223"

// Object.defineProperty(user, "groupNo", { value: "P223", writable: false })

// user.groupNo = "P220"

// console.log(user);


// Object Copy

// let user2 = user;

// user2.firstname = "Suleyman"

// let details = {
//     groupNo: "P223",
//     degree: "High honour"
// }

// let user2 = Object.assign(details, user);

// user2.groupNo = "P220"

// console.log(user2);
// console.log(user);
// console.log(details);


// let num1 = 5;

// let num2 = 10;

// num1 = num2

// num1 = 6

// console.log(num1);
// console.log(num2);


// let user3 = {...user };


// user3.surname = "Aliyev"


// let user4 = JSON.parse(JSON.stringify(user));

// user4.firstname = "Ahad"
// console.log(user4);
// console.log(user);

// console.log(user3);
// console.log(user);



//Class

class Person {
    constructor(firstname, surname, age) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;

    }
    getAge = function() {
        return this.age
    }

    getFullname = function() {
        return `${this.firstname} ${this.surname}`
    }
}


class Student extends Person {
    constructor(firstname, surname, age, groupType, groupNo) {
        super(firstname, surname, age)
        this.groupType = groupType;
        this.groupNo = groupNo;
    }
}

let person = new Person("Jamal", "Zeynalli", 98)

let student = new Student("Jamal", "Zeynalli", 98, "P", "223")

console.log(person.getFullname());
console.log(student.getFullname());