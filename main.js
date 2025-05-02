

const container = document.getElementById("country-container");

async function getName() {
  try {
    let response = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await response.json();

    data.forEach(country => {
      let card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-name", country.name.common.toLowerCase());

      card.innerHTML = `  
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="flag">
        <div class="card-content">
          <h3>${country.name.common}</h3>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

getName();


let searchInput = document.getElementById("search");
searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(query) ? '' : 'none';
  });
});


let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});
