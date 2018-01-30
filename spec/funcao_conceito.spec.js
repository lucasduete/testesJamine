describe("Questao 3 - Testes da Funcao de Calculo de Conceitos", function() {

	it("Testa se Médias Entre 9 e 10 Retornam Conceito A", function() {
		
		expect(funcaoConceito(9,10)).toBe("A");
	});

	it("Testa se Médias entre 7.5 e 8.9 Retornam Conceito B", function() {
		
		expect(funcaoConceito(8.9, 7.5)).toBe("B");
	});

	it("Testa se Médias entre 6 e 7.4 Retornam Conceito C", function() {
		
		expect(funcaoConceito(6, 7.4)).toBe("C");
	});

	it("Testa se Duas Notas 10 Retornam Conceito A", function() {

		expect(funcaoConceito(10, 10)).toBe("A");
	});

	it("Testa se Duas Notas Superiores a 10 Retornam Conceito Inválido", function() {
		
		expect(funcaoConceito(11,10.1)).toBe("Conceito Inválido");
	});

	it("Testa se Médias Abaixo de 6 Retornam Conceito Inválido", function() {
		
		expect(funcaoConceito(5,6)).toBe("Conceito Inválido");
	});

	it("Testa se Média de Valor 0 Retorna Conceito Inválido", function() {
		
		expect(funcaoConceito(0,0)).toBe("Conceito Inválido");
	});

	it("Testa se Média Negativa Retorna Conceito Inválido", function() {
		
		expect(funcaoConceito(-1, -1)).toBe("Conceito Inválido");
	});

});