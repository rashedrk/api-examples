const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
};

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h4>Name: ${country.name.common}</h4>
            <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        `;
        countriesContainer.appendChild(countryDiv);
    });
    
};

loadCountries();