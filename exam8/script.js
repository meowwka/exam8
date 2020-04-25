'use strict';
const all = "https://restcountries.eu/rest/v2/all";

class Country{
    constructor(name, capital, flag, currencies, region) {
        this.name=name;
        this.capital=capital;
        this.flag=flag;
        this.currencies=currencies;
        this.region=region;
        // this.link=link;
    }
}

async function getCountries() {
    let url = all;
    let response = await fetch(all);
    return await response.json();
}
