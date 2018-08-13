$(document).ready(function () {

  $.ajax({

           type: "GET",
           url: "static/files/sfsimodels_parameters.csv",
           dataType: "text",
           success: function (data) {
             processData(data);
           }
         });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var lines = [];
  var table = document.getElementById("sfsimodels-parameter-table");

  for (var i = 0; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    console.log(data);
    if (data.length == headers.length) {
      var tarr = [];
      var row = table.insertRow(-1);
      var cells = [row.insertCell(0), row.insertCell(1), row.insertCell(2)];
      for (var j = 0; j < headers.length; j++) {
        cells[j].innerHTML = data[j];
        tarr.push(headers[j] + ":" + data[j]);
      }
      lines.push(tarr);
    }
  }
// alert(lines);

}