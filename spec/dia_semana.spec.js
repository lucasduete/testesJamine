describe("Questao 2 - Testes da Função de Dias da Semana", function() {

	it("Verifica se o Valor 1 Retorna o Valor Domingo", function () {
		
		expect(diaSemana(1)).toBe("Domingo");
	});

	it("Verifica se o Valor 7 Retorna o Valor Sábado", function() {

		expect(diaSemana(7)).toBe("Sábado");
	});

	it("Verifica se Valor Negativo Retorna como Inválido", function () {
		
		expect(diaSemana(-1)).toBe("Dia Inválido");
	});

	it("Verifica se Valor Acima de 7 Retorna como Inválido", function () {
		
		expect(diaSemana(8)).toBe("Dia Inválido");
	})

	it("Verifica se Valor 0 Retorna como Inválido", function () {
		
		expect(diaSemana(0)).toBe("Dia Inválido");
	});

});