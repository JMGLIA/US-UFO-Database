// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var dataFilter = 0;
incidents = data

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

d3.select("#filter-btn").on("click", function(){
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime");

    var inputValue = inputDate.property("value");

    var resultingtable = incidents.filter(incident => incident.datetime === inputValue);
    console.log(resultingtable)
    buildFilter(resultingtable);

})

function buildFilter(dataFilter) {

    tbody.html("");
    dataFilter.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};