const materials = [
  { name: "TMT Steel Bars", rate: "₹55/kg", location: "Pune" },
  { name: "Cement (OPC 43)", rate: "₹360/bag", location: "Mumbai" },
  { name: "Red Bricks", rate: "₹6/piece", location: "Nagpur" },
  { name: "M Sand", rate: "₹1200/ton", location: "Thane" },
  { name: "Concrete Blocks", rate: "₹30/piece", location: "Nashik" }
];

function populateTable() {
  const tbody = document.querySelector("tbody");

  materials.forEach(material => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${material.name}</td>
      <td>${material.rate}</td>
      <td>${material.location}</td>
    `;

    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", populateTable);
