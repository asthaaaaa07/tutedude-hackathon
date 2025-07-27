const vendors = [
  { name: "Shree Steel Traders", location: "Pune, Maharashtra", rating: 4.7 },
  { name: "Balaji Cement Suppliers", location: "Nagpur, Maharashtra", rating: 4.5 },
  { name: "Sai BuildMart", location: "Mumbai, Maharashtra", rating: 4.8 },
  { name: "Siddhi Aggregates", location: "Nashik, Maharashtra", rating: 4.3 },
  { name: "Om Sand Suppliers", location: "Kolhapur, Maharashtra", rating: 4.6 },
  { name: "R K Bricks & Blocks", location: "Aurangabad, Maharashtra", rating: 4.9 },
  { name: "Krishna Plumbing Solutions", location: "Thane, Maharashtra", rating: 4.4 },
  { name: "Star Electricals", location: "Solapur, Maharashtra", rating: 4.2 }
];

const container = document.getElementById("card-container");

const searchInput = document.getElementById("searchInput");
const cityFilter = document.getElementById("cityFilter");

let cardsData = [...vendors]; // this keeps track of all data

function renderCards() {
  container.innerHTML = "";

  let filtered = vendors.filter((vendor) => {
    const searchText = searchInput.value.toLowerCase();
    const cityText = cityFilter.value.toLowerCase();

    const matchesName = vendor.name.toLowerCase().includes(searchText);
    const matchesCity = cityText === "all" || vendor.location.toLowerCase().includes(cityText);

    return matchesName && matchesCity;
  });

  cardsData = filtered; // update current cards stack

  filtered.slice(0, 3).reverse().forEach((data, index) => {
    const card = document.createElement("div");
    card.className = "swipe-card";
    card.innerHTML = `
      <h3>${data.name}</h3>
      <p>📍 ${data.location}</p>
      <p>⭐ ${data.rating}</p>
    `;
    card.style.zIndex = index;
    container.appendChild(card);
  });
}

// Trigger filtering on input change
searchInput.addEventListener("input", renderCards);
cityFilter.addEventListener("change", renderCards);


function swipeCard(liked) {
  const topCard = container.querySelector(".swipe-card:last-child");
  if (!topCard) return;

  topCard.style.transform = `translateX(${liked ? "100%" : "-100%"}) rotate(${liked ? "20" : "-20"}deg)`;
  setTimeout(() => {
    vendors.push(vendors.shift()); // rotate array
    renderCards();
  }, 300);
}

document.getElementById("like").addEventListener("click", () => swipeCard(true));
document.getElementById("dislike").addEventListener("click", () => swipeCard(false));

renderCards();
