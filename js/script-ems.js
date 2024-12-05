// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    {id:1, name:'Adam Smith',extension:111,email:'asmith@company.com',department:'Quality Assurance'},
    {id:2, name:'Bob Brown',extension:112,email:'bbrown@company.com',department:'Sales'},
    {id:3, name:'Charlotte Webb',extension:113,email:'cwebb@company.com',department:'Executive'},
    {id:4, name:'Deborah Walker',extension:114,email:'dwalker@company.com',department:'Administrative'},
    {id:5, name:'Enoch Johnson',extension:115,email:'ejohnson@company.com',department:'Engineering'}
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

if(localStorage.getItem('employees'))
    employees = JSON.parse(localStorage.getItem('employees'))
else localStorage.setItem('employees',JSON.stringify(employees))

// GET DOM ELEMENTS
let form = document.getElementById("addForm")
let empTable = document.getElementById("empTable") 

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = buildGrid(employees)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let inputElements = document.querySelectorAll('input:not([type="submit"]), select');

    let empObject = {}

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    for(let i = 0; i < inputElements.length; i++){
        empObject[inputElements[i].id] = inputElements[i].value
    } 

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(empObject)

    // BUILD THE GRID
    buildGrid(employees)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (confirm("Are you sure you want to delete this row?")){
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex-1,1)

        // BUILD THE GRID
        buildGrid(employees)
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    console.log(employees)
    let items = ["id","name","extension","email","department","action"]
    let tr
    let td
    let btn
    let tbody 

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    document.getElementById("empTable").removeChild(document.querySelector("tbody"))

    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement("tbody")

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    for (let employee of employees){
        tr = document.createElement("tr",{"id":"row_"+employee.id})
        let btn = '<button class="btn btn-danger" id="btn_'+employee.id+'">DELETE</button>'
        tr.innerHTML = `<td>${employee.id}</td><td>${employee.name}</td><td>${employee.extension}</td><td>${employee.email}</td><td>${employee.department}</td><td>${btn}</td>`
        tbody.appendChild(tr)
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    document.getElementById("empTable").appendChild(tbody)

    // UPDATE EMPLOYEE COUNT
    document.getElementById("empCount").innerHTML = employees.length

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees',JSON.stringify(employees))

};