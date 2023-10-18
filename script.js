// for my button 
$(document).ready(function() {
  // call my id in the button
  $("#calculate").click(function() {
    // Convert my input numbers into float
    var hours = parseFloat($("#hours").val());
    var rate = parseFloat($("#rate").val());
    // multiply the hours and rate
    var totalPay = hours * rate;
    // display result
    $("#result").text("Total Pay: $" + totalPay.toFixed(2));
  });
});
