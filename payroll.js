const employees = [
    { name: "Sibongile Nkosi", department: "Development", position: "Software Engineer", salary: 70000 },
    { name: "Lungile Moyo", department: "HR", position: "HR Manager", salary: 80000 },
    { name: "Thabo Molefe", department: "QA", position: "Quality Analyst", salary: 55000 },
    { name: "Keshav Naidoo", department: "Sales", position: "Sales Representative", salary: 60000 },
    { name: "Zanele Khumalo", department: "Marketing", position: "Marketing Specialist", salary: 58000 },
    { name: "Sipho Zulu", department: "Design", position: "UI/UX Designer", salary: 65000 },
    { name: "Naledi Moeketsi", department: "IT", position: "DevOps Engineer", salary: 72000 },
    { name: "Farai Gumbo", department: "Marketing", position: "Content Strategist", salary: 56000 },
    { name: "Karabo Dlamini", department: "Finance", position: "Accountant", salary: 62000 },
    { name: "Fatima Patel", department: "Support", position: "Customer Support Lead", salary: 58000 }
];

const container = document.getElementById("payslip-container");

employees.forEach(emp => {
    const card = document.createElement("div");
    card.classList.add("payslip-card");

    const grossPay = emp.salary.toLocaleString("en-ZA", { style: "currency", currency: "ZAR" });
    const deductions = (emp.salary * 0.1).toLocaleString("en-ZA", { style: "currency", currency: "ZAR" }); // example 10%
    const netPay = (emp.salary * 0.9).toLocaleString("en-ZA", { style: "currency", currency: "ZAR" });

    card.innerHTML = `
        <h3>${emp.name}</h3>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Position:</strong> ${emp.position}</p>
        <table>
            <tr><th>Gross Pay</th><td>${grossPay}</td></tr>
            <tr><th>Deductions (10%)</th><td>${deductions}</td></tr>
            <tr><th>Net Pay</th><td>${netPay}</td></tr>
        </table>
        <button class="print-btn" onclick="window.print()">Print Payslip</button>
    `;
    container.appendChild(card);
});

// Optional logout function
function logout() {
    alert("Logging out...");
    // redirect to login page: window.location.href = "login.html";
}
