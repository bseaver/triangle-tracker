// Run JS after DOM has loaded
$(document).ready(function() {
  var sideIDsArray = ["side-A", "side-B", "side-C"];
  var sideData = [];

  // function getSideData(sideIDsArray, sideData) {
  //   getSideId.forEach(function(sideID, index) {
  //     sideData[index] =
  //   })
  // }

  $("form#triangle").submit(function(event) {
    alert("#submit");

    event.preventDefault();
  });

}); // End JavaScript
