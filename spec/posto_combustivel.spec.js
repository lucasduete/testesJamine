describe("Questão 6 - Testes do script de Cálculo de Pagamentos", function() {
	
	it("Testa se o Abastecimento de 1L de Gasolina Gera desconto de 4% p/L", function() {
		
		expect(calcularConta(1, 'G')).toBe(3.552);
	});

	it("Testa se o Abastecimento de 20L de Gasolina Gera desconto de 4% p/L", function() {
		
		expect(calcularConta(20, 'G')).toBe(71.04);
	});

	it("Testa se o Abastecimento de 21L de Gasolina Gera desconto de 6% p/L", function() {
		
		expect(calcularConta(21, 'G')).toBe(73.038);
	});

	it("Testa se o Abastecimento de 1L de Alcool Gera desconto de 3% p/L", function() {
		
		expect(calcularConta(1, 'A')).toBe(3.104);
	});

	it("Testa se o Abastecimento de 20L de Gasolina Gera desconto de 3% p/L", function() {
		
		expect(calcularConta(20, 'A')).toBe(62.08);
	});

	it("Testa se o Abastecimento de 21L de Gasolina Gera desconto de 5% p/L", function() {
		
		expect(calcularConta(21, 'A')).toBe(63.84);
	});	

	it("Testa se o Abastecimento com Litro Valendo 0 para Gasolina Retorna Litros Inválido", function() {

		expect(calcularConta(0, 'G')).toBe("Litros Inválido");
	});

	it("Testa se o Abastecimento com Litro Valendo 0 para Alcool Retorna Litros Inválido", function() {

		expect(calcularConta(0, 'A')).toBe("Litros Inválido");
	});

	it("Testa se Abastecimento com Litros Negativos para Gasolina Retorna Litros Inválido", function() {
		
		expect(calcularConta(-1, 'G')).toBe("Litros Inválido");
	});

	it("Testa se Abastecimento com Litros Negativos para Alcool Retorna Litros Inválido", function() {
		
		expect(calcularConta(-1, 'A')).toBe("Litros Inválido");
	});

	it("Testa se Abastecimento com Litros Válidos mas Tipo Inexistente Retorna Tipo Inválido", function() {
		
		expect(calcularConta(10, 'J')).toBe("Tipo Inválido");
	});

	it("Testa se Abastecimento sem Fornercer o Tipo do Combustível Retorna Tipo Inválido", function() {
		
		expect(calcularConta(10, '')).toBe("Tipo Inválido");
	});

	it("Testa se Abastecimento sem Fornercer Quantidade de Litros Retorna Litros Inválido", function() {
		
		expect(calcularConta(null, 'G')).toBe("Litros Inválido");
	});
});