function firstEntry() {
    var table = document.getElementById("table");               // To get hold of table 
    var row = table.insertRow(1);                               // Insert a row at top
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Filling cell values with the input data with SL.No. being automatically adjusted.
    cell1.innerHTML = "";
    cell2.innerHTML = document.getElementById("details").elements[0].value;
    cell3.innerHTML = document.getElementById("details").elements[1].value;
    cell4.innerHTML = document.getElementById("details").elements[2].value;
    cell5.innerHTML = document.getElementById("details").elements[3].value;
}
function lastEntry() {
    var table = document.getElementById("table");                  // To get hold of table 
    var row = table.insertRow(-1);                                 // Insert a row at bottom
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Filling cell values with the input data with SL.No. being automatically adjusted.

    cell1.innerHTML = "";
    cell2.innerHTML = document.getElementById("details").elements[0].value;
    cell3.innerHTML = document.getElementById("details").elements[1].value;
    cell4.innerHTML = document.getElementById("details").elements[2].value;
    cell5.innerHTML = document.getElementById("details").elements[3].value;
}