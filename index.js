// const obj = {
//   name: 'Elena'
// }
// Object.defineProperty(obj, 'gender', {
//   value: 'female',
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
// console.log(Object.values(obj))


// const obj = {
//   proprietate: 'hi'
// };
// Object.freeze(obj);
// console.log(Object.isFrozen(obj))


// const arr = [2, 9, 16, 10, 3]
// console.log(arr.sort((a, b) => a - b))


// const arr = [2, 9, 16, 10, 3]
// console.log(arr.sort((a, b) => b - a))


// const arr = [
//   {
//     nume: 'Elena'
//   },
//   {
//     nume: 'Lia'
//   },
//   {
//     nume: 'Anastasia'
//   },
//   {
//     nume: 'Victoria'
//   }
// ]
// console.log(arr.sort((a, b) => {
//   if (a.nume > b.nume) {
//     return -1
//   } else if (a.nume < b.nume) {
//     return 1
//   }
//   return 0
// }))


// const arr = [
//   {
//     nume: 'Elena'
//   },
//   {
//     nume: 'Lia'
//   },
//   {
//     nume: 'Anastasia'
//   },
//   {
//     nume: 'Victoria'
//   }
// ]
// console.log(arr.sort((a, b) => {
//   if (a.nume > b.nume) {
//     return 1
//   } else if (a.nume < b.nume) {
//     return -1
//   }
//   return 0
// }))


// const arr = [
//   {
//     nume: 'Elena',
//     age: '25'
//   },
//   {
//     nume: 'Lia',
//     age: '30'
//   },
//   {
//     nume: 'Anastasia',
//     age: '15'
//   },
//   {
//     nume: 'Victoria',
//     age: '40'
//   }
// ]
// console.log(arr.sort((a, b) => a.nume > b.nume ? -1 : 1))


const myJSON = `{ 
'name': 'Elena',
  'age': 25,
    'car': null }`;
// myObj = JSON.parse(myJSON)
console.log(JSON.parse(myJSON))