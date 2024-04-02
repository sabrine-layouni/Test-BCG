// Init URL_TEST
var URL_TEST = "http://localhost:3000/api/searchDemand";

// serachDemand implementation
function searchDemand(demandId) {
  $.ajax({
    url: URL_TEST,
    type: "GET",
    data: { demandId: demandId },
    dataType: "json",
    success: function (response) {
      writeResult(response);
    },
    error: function (errorThrown) {
      $("#error").text("Une erreur s'est produite : " + errorThrown.id);
      $("#error").show();
      // hide error after 5 seconds
      $(document).ready(function () {
        setTimeout(function () {
          $("#error").fadeOut();
        }, 5000);
      });
    },
  });
}

// writeResult implementation
function writeResult(data) {
  $("#error").hide();
  var table = $("#result");
  table.empty();
  if ($.isEmptyObject(data)) {
    table.append("<tr><td colspan='2'>Aucun résultat trouvé</td></tr>");
  } else {
    var keys = Object.keys(data);
    var values = Object.values(data);
    var labelRow =
      "<tr><td>ID</td><td>FIRSTNAME</td><td>LASTNAME</td><td>IMMAT</td></tr>";
    var valueRow = "<tr>";
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === "immatriculation") {
        valueRow += "<td class='red-text bold-text'>" + values[i] + "</td>";
      } else {
        valueRow += "<td>" + values[i] + "</td>";
      }
    }
    valueRow += "</tr>";
    table.append(labelRow);
    table.append(valueRow);
  }
}

// searchDemand(4); // uncomment to test empty result case
searchDemand(5); // uncomment to test a data result
