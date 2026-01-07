//let student = [
//  { name: "smith", rollnumber: "31", marks: 80 },
//{ name: "jenny", rollnumber: "32", marks: 69 },
//{ name: "john", rollnumber: "33", marks: 35 },
// { name: "tiger", rollnumber: "34", marks: 55 }
//]
//let anuj = student.filter((item, index, arr) => {
//if (item.marks > 60) {
//  return true;
//}
//}).map((item) => {/*
//   return item.name;
//})
//console.log(anuj)
//const user = [{
// name: "anuj",
//  order: [
////    { amount: 300, status: "d" },
// { amount: 50, status: "p" },
/**{ amount: 300, status: "d" }
    ]
}, {
    name: "divyanshu",
    order: [
        { amount: 300, status: "c" },
        { amount: 50, status: "d" }
    ]
}];

let x = user.map(() => {
    return {
        name:item.name,
        orders:item.orders.filter((item)=>){
            if(item.status=='')
        }

    }

})
console.log(x)**/
//let a = 0;
//let arr = [23, 45, 66, 84, 24];
//let redusel = arr.reduce((acc, item, ind, arr) => {



//return acc + item;
//  return ind * 5;

//}, 0)
//console.log(redusel);
let b = 25;
let c = 75;
let d = 20;
let arr = [
    { firstname: "manan", lastname: "pratap", age: 25 },
    { firstname: "anuj", lastname: "chaudhary", age: 20 },
    { firstname: "divyanshu", lastname: "pratap", age: 75 },
    { firstname: "manish", lastname: "pratap", age: 25 },

];
let a = arr.reduce((acc, item, index, arr) => {
    if (acc[item.age]) {

        console.log(c)

    }
    else{
        acc
    }
   

}, 0)