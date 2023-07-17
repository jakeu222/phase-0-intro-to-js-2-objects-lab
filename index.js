// Write your solution in this fil
const employee = {
    name: "Jake",
    streetAddress: "home",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    }

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee

}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }
    delete newEmployee[key]
    return newEmployee

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee

}