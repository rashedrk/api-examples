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
            <button onclick="loadCountryDetails('${country.cca2}')"> Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
    
};

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country => {
    const detailsContainer = document.getElementById('country-details');
    detailsContainer.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h3>Name: ${country.name.common}</h3>
    `;
}

loadCountries();