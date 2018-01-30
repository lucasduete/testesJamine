function verificaTriangulo(a,b,c) {
	

	if ((a + b > c) && (a + c > b) && (b + c > a)) {

		if (a == b == c) {

			return "Triângulo Equilátero";
		} else if ((a != b) && (a != c) && (b != c)) {

			return "Triângulo Escaleno";
		} else {

			return "Triângulo Isóceles";
		}
	}

	return "Triângulo Inválido";

};