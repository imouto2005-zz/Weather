$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
  		var lon = position.coords.longitude;

  		var api = "http://api.wunderground.com/api/1cb96b656e0fe288/geolookup/conditions/q/";
		var api_url = api + lat + ',' + lon + '.json';

		$.ajax({
  			url: api_url,
  			success: function(response) {
  				console.log(response)
			  	var location = response.current_observation.display_location.state_name;
			  	document.getElementById('countryDisplay').innerHTML=location;
			  	var temperatureF = response.current_observation.temp_f;				
			  	document.getElementById('farDisplay').innerHTML=temperatureF + ' °F';
			  	var temperatureC = response.current_observation.temp_c;
			  	document.getElementById('celsiusDisplay').innerHTML=temperatureC + ' °C';
			  	var weather = response.current_observation.weather;
			  	document.getElementById('weatherDisplay').innerHTML=weather;
			  	var weatherIcon = response.current_observation.icon_url;
			  	document.getElementById('iconDisplay').src=weatherIcon;
			 },
		});
	});
	$( "button" ).click(function() {
  		$( "p" ).toggle();
	});
});