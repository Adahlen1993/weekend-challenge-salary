function onReady() {
  alert(`Attention Employees! Please Fill Out The Form 
    Below!`);
}
onReady();

const employees = [];
const employeesSalary = [];

let totalExpenses = 0;
let monthlyExpenses = 0;
let monthlySalary = 0;

// 1.Wire up inputs
// 2.Wire up form for submit
function employeeForm(event) {
  event.preventDefault();
  event.target;

  firstName = document.getElementById("first-name");
  lastName = document.getElementById("last-name");
  idNumber = document.getElementById("id-number");
  jobTitle = document.getElementById("job-title");
  annualSalary = document.getElementById("annual-salary");
  // 6. add employees to table

  document.getElementById("added-employee").innerHTML += `
    <tr>
    <td class='emp'>${firstName.value}</td>
    <td class='emp'>${lastName.value}</td>
    <td class='emp' id='empid'>${idNumber.value}</td>
    <td class='emp'>${jobTitle.value}</td>
    <td class='emp' id="salary">${annualSalary.value}</td>
    <td class='emp'><button id="remove-button" onclick='removeRow(event)'>Delete</button></td>
    </tr>
    `;
  let employee = {
    firstname: firstName.value,
    lastname: lastName.value,
    idnumber: idNumber.value,
    jobtitle: jobTitle.value,
    annualsalary: annualSalary.value,
  };
  employees.push(employee);
  // 4.Calculate Monthly costs
  monthlySalary = annualSalary.value / 12;
  monthlyExpenses += monthlySalary;
  // 5.add conditional formatting for monthly costs
  //  if over 20000
  if (monthlyExpenses === 20000) {
    document.getElementById("expenses").innerHTML = `
        <h3 id="expenses" style="background-color:yellow;">$${monthlyExpenses.toFixed(
          2
        )}</h3>
        `;
  } else if (monthlyExpenses > 20000) {
    document.getElementById("expenses").innerHTML = `
            <h3 id="expenses" style="background-color:red;">$${monthlyExpenses.toFixed(
              2
            )}</h3>
            `;
  } else {
    document.getElementById("expenses").innerHTML = `
    <h3 id="expenses" >$${monthlyExpenses.toFixed(2)}</h3>
    `;
  }
  // 3.Clear form after submit
  document.getElementById("employee-form").reset();
}

// 6. create a delete button that clears whole row
function removeRow(event) {
  let salaryAttempt = document.getElementById("salary").innerHTML;
  Number(salaryAttempt);
  totalExpenses += salaryAttempt / 12;
  monthlyExpenses -= totalExpenses;
  if (monthlyExpenses === 20000) {
    document.getElementById("expenses").innerHTML = `
    <h3 id="expenses" style="background-color:yellow;">$${monthlyExpenses.toFixed(
      2
    )}</h3>
    `;
  } else if (monthlyExpenses > 20000) {
    document.getElementById("expenses").innerHTML = `
        <h3 id="expenses" style="background-color:red;">$${monthlyExpenses.toFixed(
          2
        )}</h3>
        `;
  } else {
    document.getElementById("expenses").innerHTML = `
<h3 id="expenses" >$${monthlyExpenses.toFixed(2)}</h3>
`;
  }
  totalExpenses = 0;

  event.target.closest("tr").remove();
}
// potential loop to update dom
// couldn't get splice to work with it
//  let empID = document.getElementById('empid').innerHTML;
//  for (let i=0; i<employees.length; i++) {
//          if(employees[i].idnumber === empID && employees[i].annualsalary === salaryAttempt) {
//                 employees.splice(employees[i],1);
//              }
//          }
//          for (let employee of employees) {
//                  let annSal = 0;
//                  annSal += employee.annualsalary/12;
//                  monthlyExpenses = annSal;
//                  document.getElementById('expenses').innerHTML = monthlyExpenses;

//              }
// let employeeid = document.getElementById(
// for (employee of employees) {
//     if(employees.id === )
// }
// if(loopExpenses < 20000) {
//     document.getElementById('expenses').innerHTML = `
//     <h3 id="expenses" >${loopExpenses}</h3>
//     `;
// } else if(loopExpenses === 20000){
//     document.getElementById('expenses').innerHTML =`
//     <h3 id="expenses" style="background-color:yellow;">${loopExpenses}</h3>
//     `
// }
// else {
//     document.getElementById('expenses').innerHTML =`
//     <h3 id="expenses" style="background-color:red;">${loopExpenses}</h3>
//     `
// }
