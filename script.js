/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(element =>{
    if(element.marks > 50){
      console.log(element);
    }
  });
}

function PrintStudentsbyForEach() {
  arr.forEach((element) =>{
    if(element.marks > 50){
      console.log(element);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newstudent = { id: 4, name: "susan", age: "20", marks: 45 } ;
  arr.push(newstudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(ele => ele.marks >=50);
console.log(arr);
}

function concatenateArray() {
   let newstudents = [
    {id:5, name:"shubhu", age:"25",marks:60},
    {id:6, name:"saurabh", age:"28",marks:70},
    {id:7, name:"sumit", age:"26",marks:80}
  ];
  let concatedArray = arr.concat(newstudents);
  console.log(concatedArray);
}
