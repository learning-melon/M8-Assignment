// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    {name:'Adam Smith',ext:111,email:'asmith@company.com',dept:'HR'},
    {name:'Bob Brown',ext:112,email:'bbrown@company.com',dept:'Sales'},
    {name:'Charlotte Webb',ext:113,email:'cwebb@company.com',dept:'CEO'},
    {name:'Deborah Walker',ext:114,email:'dwalker@company.com',dept:'Accounting'},
    {name:'Enoch Johnson',ext:115,email:'ejohnson@company.com',dept:'Engineering'}
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if(localStorage.getItem('employees'))
    employees = localStorage.getItem('employees').split(",")
else localStorage.setItem('employees',employees)

// GET DOM ELEMENTS
const loadTable = (employees)=>{
    let tbody = document.getElementById("empTable").find("tbody")
    let items = ["name","ext","email","dept","action"]
    let tr
    let td
    let btn

    //clear any existing table data
    empty(tbody)
    
    //repopulate table
    for (let employee of employees){
        tr = document.createElement("tr",{"id":"row_"+employee.ext})
        let btn = '<button class="btn btn-danger" id="btn_'+employee.ext+'">DELETE</button>'
        tr.innerHTML = `<td>${employee.name}</td><td>${employee.ext}</td><td>${employee.email}</td><td>${employee.dept}</td><td>${btn}</td>`
        tbody.appendChild(tr)
    }
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = loadTable(employees)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const form = document.querySelector('form');
    const inputElements = form.querySelectorAll('input, select, email');
    for(let i = 0; i < inputElements.length; i++){
        
    }

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};