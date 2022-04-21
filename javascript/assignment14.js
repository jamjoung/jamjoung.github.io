//Problem 1
let Sam = {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true
}
let Mary = {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true
}

let Bill = {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false
}

console.log("Problem 1", Sam, Mary, Bill)

//Problem 3
let Anna = {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false,
}

//Problem 2
let company = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  "employees": [Sam, Mary, Bill]
}

console.log("Problem 2", company)

//Problem 3 pt 2 (adding Anna to company)
company["employees"].push(Anna);
console.log("Problem 3", company, Anna)


//Problem 4
function totalSalary() {
    total = 0;
    for (let i = 0; i < company["employees"].length; i++) { 
        total += company["employees"][i]["salary"];
        //console.log(company["employees"][i]["salary"])
      }
    
    console.log("Problem 4, Total Salary of Employees = ", total)
}
totalSalary();

//Problem 5
//It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees, 
//write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
function raise(company) {
    for (const emp of company["employees"]) 
    {
        if (emp["raiseEligible"]==true)
        {
            //console.log(emp["firstName"], emp["salary"], emp["raiseEligible"]); //before change
            emp["salary"] += emp["salary"] * 0.1; //raise salary by 10%
            emp["raiseEligible"] = false; //change eligibility to false
            console.log("Problem 5: Employees who received a raise, new salary, raise eligible is false:", emp["firstName"], emp["salary"], emp["raiseEligible"]); //after raise
        }
    }
}

raise(company)

//Problem 6
//Some employees have decided to work from home. The following array indicates who is working from home. 
//Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
//Working from home: ['Anna', 'Sam']
homeArr = ["Anna", "Sam"]

function workHome(company, homeArr){ 
    //set all to false first
    for (const emp of company["employees"]) {
        emp.wfh = false
    }
    
    for (const emp of company["employees"]) 
    {
        for (let i = 0; i<2; i++)
        {
            if (emp["firstName"]==homeArr[i])
            {
                emp.wfh = true;
            }
        }
        console.log("Problem 6: Employees Work at Home: ", emp["firstName"], emp["wfh"])
    }
   
}

workHome(company, homeArr)