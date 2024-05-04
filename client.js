
function onReady(){
    alert(`Attention Employees! Please Fill Out The Form 
    Below!`)
}
// onReady();

const employees = [];

let monthlyExpenses = 0;
let monthlySalary = 0;

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
    // 6. add employees to table
    document.getElementById('added-employee').innerHTML +=`
    <tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${idNumber.value}</td>
    <td>${jobTitle.value}</td>
    <td>${annualSalary.value}</td>
    <td><button id='remove-row' onclick='removeRow(event)'>Delete</button>
    </tr>
    `;
    let employee = {
        firstname: firstName.value,
        lastname: lastName.value,
        idnumber: idNumber.value,
        jobtitle: jobTitle.value,
        annualsalary: annualSalary.value
    }
    employees.push(employee);
    // 4.Calculate Monthly costs
    monthlySalary = annualSalary.value/12
    monthlyExpenses += monthlySalary;
    // 5.add conditional formatting for monthly costs
    //  if over 20000
    if(monthlyExpenses === 20000){
        document.getElementById('expenses').innerHTML = `
        <h3 id="expenses" style="background-color:yellow;">${monthlyExpenses}</h3>
        `;}
    else if(monthlyExpenses > 20000){
            document.getElementById('expenses').innerHTML = `
            <h3 id="expenses" style="background-color:red;">${monthlyExpenses}</h3>
            `
    } else {document.getElementById('expenses').innerHTML = monthlyExpenses;}
    // 3.Clear form after submit
    document.getElementById('employee-form').reset();
}

// 6. create a delete button that clears whole row
function removeRow(event) {
    event.target;
    document.getElementById('remove-row').closest('tr').remove();
    for (emp of employees) {
    let loopExpenses = 0;
    loopExpenses += emp.annualsalary/12;
        if(loopExpenses < 20000) {
            document.getElementById('expenses').innerHTML = `
            <h3 id="expenses" >${loopExpenses}</h3>
            `;
        } else if(loopExpenses === 20000){
            document.getElementById('expenses').innerHTML =`
            <h3 id="expenses" style="background-color:yellow;">${loopExpenses}</h3>
            `
        }
        else {
            document.getElementById('expenses').innerHTML =`
            <h3 id="expenses" style="background-color:red;">${loopExpenses}</h3>
            `
        }
    }
}

