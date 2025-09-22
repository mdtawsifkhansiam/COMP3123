# COMP3123 - Lab Exercise 03

Files included:
- Employee.js
- index.js

## What I changed
- Implemented an Employee module (Employee.js) exporting functions:
  - getAll()
  - getNamesSorted()
  - getTotalSalary()
- Fixed index.js to require the module, implement route handlers for:
  - `/` -> HTML welcome
  - `/employee` -> JSON list of employees
  - `/employee/names` -> JSON array of full names sorted ascending
  - `/employee/totalsalary` -> JSON `{ total_salary: number }`
- Proper Content-Type headers and status codes added.

## How to run locally
1. Ensure Node.js is installed.
2. In the project folder run:

```bash
node index.js
```

3. Test endpoints (examples):
```bash
curl http://localhost:8081/
curl http://localhost:8081/employee
curl http://localhost:8081/employee/names
curl http://localhost:8081/employee/totalsalary
```

## GitHub
I cannot push to your GitHub account. To create a GitHub link for submission, run:

```bash
git init
git add .
git commit -m "COMP3123 lab 03 completed"
# create a repo on GitHub, then:
git remote add origin https://github.com/<your-username>/COMP3123-exec03.git
git push -u origin main
```

Once pushed, your GitHub project link will look like:
`https://github.com/<your-username>/COMP3123-exec03`

Replace `<your-username>` with your GitHub username.
