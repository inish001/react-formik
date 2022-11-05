// import axios from 'axios'
// import React from 'react'

// const Practise = () => {
//     let p1 = new Promise((resolve,reject)=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts/1")
//         .then((res)=>{
//             // console.log(res.data)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     })
//     let p2 = new Promise((resolve,reject)=>{
//         axios.get("https://jsonplaceholder.typiode.com/posts/1")
//         .then((res)=>{
//             // console.log(res.data)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     })
//     Promise.all([p1,p2]).then((values)=>{
//         console.log(values)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//   return (
//     <div>

//     </div>
//   )
// }

// export default Practise

let arr = [
  {
    firstName: "nishant",
    lastName: "Fulara",
    age: 20,
    gender: "M",
  },
  {
    firstName: "harsh",
    lastName: "mehta",
    age: 21,
    gender: "M",
  },
  {
    firstName: "gaurav",
    lastName: "singh",
    age: 19,
    gender: "M",
  },
  {
    firstName: "deepak",
    lastName: "bhagat",
    age: 27,
    gender: "M",
  },
];
// console.log(arr)

// let result = arr.reduce((acc,curr)=>{
//     acc = curr.firstname + curr.lastname;
//     console.log(curr.firstName+curr.lastName);
//     return acc;
//     // console.log(acc)
//   },"")
//   console.log(result)

// let result = arr.reduce((acc,curr)=>{
//     return acc.concat(curr)
// },"")
// console.log(result)

let result = arr.reduce((acc, curr) => {
  return `${acc} ${curr.firstName}${curr.lastName}${curr.age}${curr.gender},`;
}, "");
console.log(result);
