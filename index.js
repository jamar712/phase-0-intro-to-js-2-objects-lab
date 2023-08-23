// Write your solution in this file!
const employee = {name:"Tom", streetAddress: "Arthur St"}
 

function updateEmployeeWithKeyAndValue(employee,key,value){
    let  copyofemployee = {...employee}
copyofemployee[key] = value
return (copyofemployee);
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

employee[key] = value;
return(employee)
}
function deleteFromEmployeeByKey(employee, key){
    let copyofemployee = {...employee}
    delete copyofemployee[key]
    return copyofemployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}