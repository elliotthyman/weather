$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<p>It is currently " + data.currently.summary + " and " + data.currently.temperature + " degrees. <p/><p>It feels like " + data.currently.apparentTemperature + " degrees and there is a " + data.currently.precipProbability + " percent chance of rain <p/><p> Tomorrow it will be " + data.daily.data[1].summary
     + " The maximum temperature will be " + data.daily.data[1].temperatureMax + " degrees and the minimum temperature will be " + data.daily.data[1].temperatureMin + " degrees.<p/><p>In two days it will be " + data.daily.data[2].summary + " The maximum temperature will be " + data.daily.data[2].temperatureMax + " degrees and the minimum temperature will be " + data.daily.data[2].temperatureMin + " degrees.<p/><p>In three days it will be " + data.daily.data[3].summary + " The maximum temperature will be " + data.daily.data[3].temperatureMax + " degrees and the minimum temperature will be " + data.daily.data[3].temperatureMin + " degrees."

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
