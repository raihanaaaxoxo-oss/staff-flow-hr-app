// Dummy employee list
const employees = [
  "Select",
  "Sibongile Nkosi",
  "Lungile Moyo",
  "Thabo Molefe",
  "Keshav Naidoo",
  "Zanele Khumalo",
  "Sipho Zulu",
  "Naledi Moeketsi",
  "Farai Gumbo",
  "Karabo Dlamini",
  "Fatima Patel"
];

// Store reviews in memory
const reviews = {};

// Populate dropdown
const select = document.getElementById("employee-select");
employees.forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  select.appendChild(option);
});

// Handle form submission
document.getElementById("review-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const employee = select.value;
  const review = {
    period: document.getElementById("review-period").value,
    overall: document.getElementById("overall-rating").value,
    strengths: document.getElementById("strengths").value,
    improvements: document.getElementById("improvements").value,
    comments: document.getElementById("comments").value
  };

  if (!reviews[employee]) reviews[employee] = [];
  reviews[employee].push(review);

  e.target.reset();
  displayReviews();
});

// Display reviews
function displayReviews() {
  const container = document.getElementById("reviews-container");
  container.innerHTML = "";

  for (const employee in reviews) {
    const card = document.createElement("div");
    card.className = "review-card";

    card.innerHTML = `<h4>${employee}</h4>`;

    reviews[employee].forEach(r => {
      const div = document.createElement("div");
      div.className = "single-review";
      div.innerHTML = `
        <p><strong>Review Period:</strong> ${r.period}</p>
        <p><strong>Overall Rating:</strong> ${r.overall}</p>
        <p><strong>Strengths:</strong> ${r.strengths}</p>
        <p><strong>Improvements:</strong> ${r.improvements}</p>
        <p><strong>Comments:</strong> ${r.comments}</p>
        <hr>
      `;
      card.appendChild(div);
    });

    container.appendChild(card);
  }
}
