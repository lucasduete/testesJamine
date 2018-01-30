describe("Questao 4 - Testes da Função que Verifica um Triângulo e Informa seu Tipo", function() {

	it("Testa se um Triangulo Equilátero Retorna como Triângulo Equilátero", function() {
		
		expect(verificaTriangulo(1,1,1)).toBe("Triângulo Equilátero");
	});

	it("Testa se um Triangulo Isóceles Onde Lado A = Lado B Retorna como Triângulo Isóceles", function() {
		
		expect(verificaTriangulo(3,3,5)).toBe("Triângulo Isóceles");
	});

	it("Testa se um Triangulo Isóceles Onde Lado A = Lado C Retorna como Triângulo Isóceles", function() {
		
		expect(verificaTriangulo(3,5,3)).toBe("Triângulo Isóceles");
	});

	it("Testa se um Triangulo Isóceles Onde Lado B = Lado C Retorna como Triângulo Isóceles", function() {
		
		expect(verificaTriangulo(3,5,5)).toBe("Triângulo Isóceles");
	});

	it("Testa se um Triangulo Escaleno Retorna como Triângulo Escaleno", function() {
		
		expect(verificaTriangulo(3,4,5)).toBe("Triângulo Escaleno");
	});

	it("Testa se um Triângulo Inexistente Retorna Triângulo Inválido", function () {
		
		expect(verificaTriangulo(3,4,0)).toBe("Triângulo Inválido");
	});

	it("Testa se um Triângulo Com Lados Negativos Retorna Triângulo Inválido", function () {
		
		expect(verificaTriangulo(-12,-1,-9)).toBe("Triângulo Inválido");
	});

	it("Testa se um Triângulo Com Lados Iguais a 0 Retorna Triângulo Inválido", function () {
		
		expect(verificaTriangulo(0,0,0)).toBe("Triângulo Inválido");
	});
});