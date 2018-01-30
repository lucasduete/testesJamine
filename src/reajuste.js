function reajuste(salario) {

	if ((salario > 0) && (salario <= 280)) {
		return (salario * 1.2);
	} else if ((salario > 280) && (salario <= 700)) {
		return (salario * 1.15);
	} else if ((salario > 700) && (salario <= 1500)) {
		return (salario * 1.10);
	} else if (salario > 1500) {
		return (salario * 1.05);
	}

	return "Salário Inválido";

};