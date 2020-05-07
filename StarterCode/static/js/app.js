// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var dataFilter = 0;
sightings = data

console.log(data);

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});