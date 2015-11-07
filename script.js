// CODE BASE
$(document).ready(function() {
  
  // True if the current time is after open time
  function afterOpen(currentH, currentM, openH, openM) {
    return (currentH > openH) || (currentH == openH && curentM >= openM);
  }
  
  // True if the current time is before clize
  function beforeClose(currentH, currentM, closeH, closeM) {
    return (currentH < closeH) || (currentH == closeH && currentM < closeM);
  }
  
  // Open time
  var openHour = 8;
  var openMinute = 0;
  
  // Close time
  var closeHour = 24
  var closeMinute = 0;
  
  // Current time
  var d;
  var currentHour;
  var currentMinute;
  var currentSecond;
  
  function intToTime(n) {
    return n > 9 ? "" + n: "0" + n;
  }
  
  function countDown() {
    var hourDifference = (openHour + 24 - currentHour) % 24;
    var minuteDifference = (openMinute + 60 - currentMinute) % 60;
    var secondDifference = ((60 - currentSecond) % 60);
    var asString = intToTime(hourDifference) + ': ' + intToTime(minuteDifference) + ': ' + 
        intToTime(secondDifference);
    $('h2').html(asString);
  }
  
  // Main function
  // Every second, check to see if it is subway time
  // Increment countdown time if not subway time
  function subwayTime() {
    d = new Date();
    currentHour = d.getHours();
    currentMinute = d.getMinutes();
    currentSecond = d.getSeconds();
    
    if (afterOpen(currentHour, currentMinute, openHour, openMinute) &&
        beforeClose(currentHour, currentMinute, closeHour, closeMinute)) {
      $('h1').css('color', '#346AC7');
      $('h1').html('Yes');
      $('h2').html('');
    }
    else {
      $('h1').css('color', '#C73434');
      $('h1').html('No');
      countDown();
    }
    
  }
  
  subwayTime();
  setInterval(subwayTime, 1000);
});