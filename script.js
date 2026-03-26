/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.filter(emp=>emp.profession==="developer").map(emp=>console.log(emp));
}

function PrintDeveloperbyForEach() {
  arr.forEach(emp=>{
    if (emp.profession==="developer"){
      console.log(emp);
    }
  });
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
  let newEmp={id:4, name:"susan",age:"20", profession:"intern"};
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  arr=arr.filter(emp=>emp.profession!=="admin");
  console.log(arr);
  //Write your code here, just console.log
}

function concatenateArray() {
  let newArr=[
    {id:5, name:"alex", age:"22",profession:"developer"},
    {id:6, name:"mike", age:"23",profession:"designer"},
    {id:7, name:"emmma", age:"21",profession:"intern"}
    ];
  let res=arr.concat(newArr);
  console.log(res);
    
  //Write your code here, just console.log
}
