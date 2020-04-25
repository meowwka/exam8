'use strict';
const url = "https://restcountries.eu/rest/v2/all";
const name = "https://restcountries.eu/rest/v2/name/"
const get = 'GET';
const isAsync = false
let countries;
let input = document.getElementById('input').value
console.log(input)

async function getCountries() {
    let urlAll = url;
    let response = await fetch(urlAll);
    let waiting = await response.json();
    // let text = await response.text();
    // let data = await initialize(data);
    return waiting;
}


function main(){
    let button  = document.getElementById("button-addon2")
    button.addEventListener('click', function(e){
        e.preventDefault();

        getCountries().then(data => {

            for(let i =0; i<data.length;i++){
                let names = data[i].currencies[i];
                console.log(names)
                let result = data.results;
                // console.log(result)
                if(input == ""){
                    alert("try")

                }
                else if(input == names){
                    document.querySelector("#flag img").src = data[i].flag;
                    document.querySelector(".name").innerHTML = data[i].name;
                }
        
            }
        });
        

    })
}
main();

// function displayCountryInfo(countryByAlpha3Code) {
//     const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
//     console.log(countryData)
//     document.querySelector("#flag img").src = countryData.flag;
//     document.querySelector("#flag img").alt = `Flag of ${countryData.name}`;  
//     document.getElementById("capital").innerHTML = countryData.capital;
//     // document.getElementById("currencies").innerHTML = `+${countryData.currencies}`;
//     // document.getElementById("region").innerHTML = `+${countryData.region}`
//     document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
//     document.getElementById("region").innerHTML = countryData.region;
//     // document.getElementById("subregion").innerHTML = countryData.subregion;
//   }











