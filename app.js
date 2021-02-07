fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");

    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}
const displayCountryDetail = name =>{
    // url = 'https://restcountries.eu/rest/v2/name/' + name;
    url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then (res => res.json())
    .then (data => renderCountryInfo (data[0]));

    const renderCountryInfo = country =>{
        const countryDetailDiv =document.getElementById("countryDetail");
        countryDetailDiv.innerHTML = `
            <h1>Name: ${country.name}</h1>
            <p><b>Population:</b> ${country.population}</p>
            <p><b>Area:</b> ${country.area}</p>
            <img src="${country.flag}">
        ` 
        countryDetailDiv.style.border = "4px solid green"
    }

}
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");
    //     countryDiv.className ='country';
    //     const countryInfo = `
    //         <h3 class="country-name">${country.name}</h3>
    //         <p>${country.capital}</p>
    //     `;
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);


    // const h3 = document.createElement("h3");
    // h3.innerText = country.name;
    // countryDiv.appendChild(h3);

    // const p = document.createElement("p");
    // p.innerText = country.capital;
    // countryDiv.appendChild(p);