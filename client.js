
function onReady(){
    alert(`Attention Employees! Please Fill Out The Form 
    Below!`)
}
// onReady();

const employees = [];



// 1.Wire up inputs
// 2.Wire up form for submit
function employeeForm(event) {
    event.preventDefault();
    event.target;
    
    firstName = document.getElementById('first-name');
    lastName = document.getElementById('last-name');
    idNumber = document.getElementById('id-number');
    jobTitle = document.getElementById('job-title');
    annualSalary = document.getElementById('annual-salary');
    document.getElementById('added-employee').innerHTML +=`
    <tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${idNumber.value}</td>
    <td>${jobTitle.value}</td>
    <td>${annualSalary.value}</td>
    <td><button>Delete</button>
    </tr>
    `;
    let employee = {
        firstname: firstName.value,
        lastname: lastName.value,
        idnumber: idNumber.value,
        jobtitle: jobTitle.value,
        annualsalary: annualSalary.Value
    }
    employees.push(employee);
    
    
}
console.log(employees);
// 3.Clear form after submit
// 4.Calculate Monthly costs
// 5.add conditional formatting for monthly costs
//  if over 20000
// 6. add employees to table
// 6. create a delete button that clears whole row
