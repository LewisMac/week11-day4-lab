var countries = null;
var countryNames = [];
var countryPops = [];
var regionList = [];




var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var populateContinentList = function(){
  countries.forEach(function(country){
    if(!regionList.includes(country.region)){
      regionList.push(country.region);
    }
  });
}

var countriesNames = function(countriesList) {
  countriesList.forEach( function (country) {
    countryNames.push(country.name);
    countryPops.push(country.population);
  })
}

var populateRegionList = function() {
  regionList.forEach(function(region){
    var region = region;
    var countriesPassed = countries.filter(function(country) {
      return (country.region === region);
    })
    countriesNames(countriesPassed)
    console.log(region);
    var div = document.createElement("div");
    var body = document.querySelector("body");
    body.appendChild(div);
    new ColumnChart(region + " countries", region,countryPops,countryNames, div);
    countryPops = [];
    countryNames = [];
  })
  
}

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  populateContinentList();
  populateRegionList();
  
}



var app = function(){
  var url = "https://restcountries.eu/rest/v1/all";
  makeRequest(url, requestComplete);
}



window.onload = function(){
  app();
  // new PieChart();
  
}