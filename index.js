// Write your solution in this file!
const employee = {
   name: "Sam",
   address: ""
    //employee.name = "Sam"
   
    
}
 function updateEmployeeWithKeyAndValue(emloyee, key, value){
   return {
      ...employee,
      [key]:value
   }
   //  const employee = {name: "Sam"};
   //  employee.streetAddress ="11 Broadway";
   //  console.log ("employee");
   //  console.log ("address");
 } 

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam",
    employee.streetAddress ="12 Broadway";
    return employee;
 }

 function deleteFromEmployeeByKey(employee,key) {
    const newEmployee ={...employee, key};
    delete newEmployee.name;
    return newEmployee;
 }

function destructivelyDeleteFromEmployeeByKey(newEmployee, key) {
    newEmployee.name = "Sam";
    delete newEmployee.name;
    return newEmployee;
}



