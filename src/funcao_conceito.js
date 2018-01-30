function funcaoConceito(nota1, nota2) {
	

	var media = (nota1 + nota2) / 2;

	if (media <= 10.0 && media >= 9.0)  {
		return "A";
	} else 	if (media <= 8.9 && media >= 7.5) {
		return "B";
	} else if (media <= 7.4 && media >= 6.0) {
		return "C";
	}

	return "Conceito Inválido";
};