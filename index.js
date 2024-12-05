// Write your solution in this file!
// Initialize the employee object
let employee = {
    name: "Alice",
    streetAddress: "123 Main St"
  };
  
  // 1. updateEmployeeWithKeyAndValue() - Non-destructive update
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue() - Destructive update
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. deleteFromEmployeeByKey() - Non-destructive delete
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey() - Destructive delete
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Bob');
  console.log(updatedEmployee); // { name: 'Bob', streetAddress: '123 Main St' }
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Bob');
  console.log(employee); // { name: 'Bob', streetAddress: '123 Main St' }
  const newEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(newEmployee); // { name: 'Alice' }
  console.log(employee); // { name: 'Alice', streetAddress: '123 Main St' } (original remains unchanged)
  destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(employee); // { name: 'Alice' }
      