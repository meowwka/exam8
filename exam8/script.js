'use strict';
window.addEventListener('load', function () {

const name = "https://restcountries.eu/rest/v2/name/"
const get = 'GET';
let countries;
let input = document.getElementById('input').value
console.log(input)
const google = "https://www.google.com/search?q=";
const wiki = "https://ru.m.wikipedia.org/wiki/";

async function getCountries(country) {
    return await fetch(name + country)
}
function addingMain(e) {
    document.getElementById('main').prepend(e);
}


function create(country) {
    if(country === undefined) {
        return 'Country in sot found! Try Again ';
    }
    let card = document.createElement('div');
    card.style = 'width: 30rem';
    card.innerHTML = 
                '<img class="bd-placeholder-img card-img" src="' + country.flag + '"' + 'alt="' + country.name + '">' +
                  '<h5 class="card-title">' + country.name + '</h5>' +
                '<p class="capital">Capital: ' + country.capital + '</p>' +
                '<p class="region">Region: ' + country.region + '</p>' +
                '<p class="currency">Currency: ' + country.currencies[0].name + "<br><br>Symbol: "+country.currencies[0].symbol+ '</p>' +
                    '<a class="button" href="https://www.google.com/search?q=' + country.name + '" target="_blank">Google</a>' +
                    '<br><a class="button" href="https://ru.m.wikipedia.org/wiki/' + country.name + '" target="_blank">Wikipedia</a><hr style="height:2px;border-width:0;color:gray;background-color:gray">' ;
    return card;
    
}

function main(){
    let button  = document.getElementById("button-addon2")
    button.addEventListener('click', function(e){
        e.preventDefault();

        getCountries().then(data => {

            for(let i =0; i<data.length;i++){
                let names = data[i].name;
                console.log(names)
                // let result = data.results;
                // console.log(result)
                if(input == names){
                    document.querySelector("#flag").src = data[i].flag;
                    document.querySelector(".name").innerHTML = data[i].name;
                }
        
            }
        });
    })
}

const addForm = this.document.getElementById("addingForm");
addForm.addEventListener('submit', addingCountry);

function addingCountry(e){
    e.preventDefault();
    const form  = e.target;
    const country = new FormData(form).get('country');
    if(country === '' && country.length < 2){
        window.alert("Try Again!");
        document.getElementById("addingForm").reset();
        return false;
    }
    else {
        getCountries(country).then(res => {
            if(res.ok){
                res.json().then(data => addingMain(create(data[0])));
                console.log(res)
                document.getElementById("addingForm").reset();
                return true;
            }else{
                window.alert(country+' is not found. Try again!');
                document.getElementById("addingForm").reset();
                return false;
            }
        })
    }

}
// main();
})










