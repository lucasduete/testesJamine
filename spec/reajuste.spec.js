describe("Questao 5 - Testes na Função de Reajuste de Salário da Empresa Tabajara", function() {
	

	it("Testa se Salário Até 280 Recebe Reajuste de 20% no Limite Inferior.", function() {

		var limite = 1;

		expect(reajuste(limite)).toBe(limite * 1.20);
	});

	it("Testa se Salário Até 280 Recebe Reajuste de 20% no Limite Superior.", function() {

		var limite = 280;

		expect(reajuste(limite)).toBe(limite * 1.20);
	});

	it("Testa se Salário Entre 280 e 700 Recebe Reajuste de 15% no Limite Inferior", function() {

		var limite = 281;

		expect(reajuste(limite)).toBe(limite * 1.15);
	});

	it("Testa se Salário Entre 280 e 700 Recebe Reajuste de 15% no Limite Superior", function() {

		var limite = 700;

		expect(reajuste(limite)).toBe(limite * 1.15);
	});


	it("Testa se Salário Entre 700 e 1500 Recebe Reajuste de 10% no Limite Inferior", function() {

		var limite = 701;

		expect(reajuste(limite)).toBe(limite * 1.10);
	});

	it("Testa se Salário Entre 700 e 1500 Recebe Reajuste de 10% no Limite Superior", function() {

		var limite = 1500;

		expect(reajuste(limite)).toBe(limite * 1.10);
	});

	it("Testa se Salário Acima de 1500 Recebe Reajuste de 5%", function() {

		var limite = 1501;
		
		expect(reajuste(limite)).toBe(limite * 1.05);
	});

	it("Testa se Salário com Valor 0 Retorna Salário Inválido", function() {
		
		expect(reajuste(0)).toBe("Salário Inválido");
	});

	it("Testa se Salário com Valor Negativo Retorna Salário'Inválido", function() {
		
		expect(reajuste(-1)).toBe("Salário Inválido");
	});

});