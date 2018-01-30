describe("Questão 1 - Conversor de Temperaturas", function() {

	var conversor = conversorTemp();

	it("Testar Conversão de Celsius para Fahrenheit", function() {

		expect(conversor.celsiusToFahrenheit(10)).toBe(50);
	});

	it("Testar Conversão de Fahrenheit para Celsius", function() {
		
		expect(conversor.fahrenheitToCelsius(50)).toBe(10);
	});

	it("Testar Conversao de Celsius para Kelvin", function() {
		
		expect(conversor.celsiusToKelvin(10)).toBe(283.15);
	});


	it("Testar Conversão de Kelvin para Celsius", function() {
		
		expect(conversor.kelvinToCelsius(283.15)).toBe(10);
	});
});