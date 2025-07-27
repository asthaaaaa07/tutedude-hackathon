const vendors = [
  { name: "BuildPlus", city: "Pune", rating: 4.7 },
  { name: "CementMart", city: "Mumbai", rating: 4.5 },
  { name: "SteelXpress", city: "Delhi", rating: 4.8 },
  { name: "Concrete Hub", city: "Pune", rating: 4.6 },
  { name: "MetroBricks", city: "Mumbai", rating: 4.3 },
  { name: "TataSteel Depot", city: "Delhi", rating: 4.9 },
];

const cityFilter = document.getElementById("cityFilter");
const searchInput = document.getElementById("searchInput");
const vendorList = document.getElementById("vendorList");

function displayVendors(data) {
  vendorList.innerHTML = "";

  data.forEach(vendor => {
    const card = document.createElement("div");
    card.className = "bg-gray-900 p-6 rounded-xl shadow-lg border border-[#00ffd1]";
    card.innerHTML = `
      <h2 class="text-xl font-semibold text-[#00ffd1]">${vendor.name}</h2>
      <p class="text-gray-300">City: ${vendor.city}</p>
      <p class="text-yellow-400">⭐ ${vendor.rating}</p>
    `;
    vendorList.appendChild(card);
  });
}

function filterVendors() {
  const city = cityFilter.value.toLowerCase();
  const search = searchInput.value.toLowerCase();

  const filtered = vendors.filter(v =>
    (!city || v.city.toLowerCase() === city) &&
    v.name.toLowerCase().includes(search)
  );

  displayVendors(filtered);
}

cityFilter.addEventListener("change", filterVendors);
searchInput.addEventListener("input", filterVendors);

// Initial display
displayVendors(vendors);
