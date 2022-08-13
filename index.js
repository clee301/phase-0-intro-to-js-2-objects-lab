// Write your solution in this file!
const employee = {
    name: "me",
    streetAddress: "hello"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
     return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){

    delete employee[key];
    return employee;
}