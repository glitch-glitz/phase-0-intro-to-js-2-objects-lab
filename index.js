// Write your solution in this file!
// Step 1: Create an employee object
const employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

// Step 2: Function to update employee without mutating original object
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Step 3: Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Step 4: Function to delete a key from employee without mutation
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Step 5: Function to delete a key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage
console.log(
  updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St")
);
console.log(
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Doe")
);
console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
