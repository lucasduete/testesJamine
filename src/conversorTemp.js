function conversorTemp() {

	var clazz = {

		celsiusToFahrenheit: function(celsius) {

			return (celsius * 1.8) + 32;
		},

		fahrenheitToCelsius: function (fahren) {
		
			return (fahren - 32) / 1.8;
		},

		celsiusToKelvin: function (celsius) {
				
			return (celsius + 273.15);
		},

		kelvinToCelsius: function (kelvin) {
					
			return (kelvin - 273.15);
		}
	};

	return clazz;
};	