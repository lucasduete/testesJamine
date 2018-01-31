function calcularConta(litros, tipo) {
	
	const LITRO_GASOLINA = 3.7;
	const LITRO_ALCOOL = 3.2;
	
	const GASOLINA = 'G';
	const ALCOOL = 'A';

	if (litros <= 0) return "Litros Inválido";

	var desconto = 0;

	switch (tipo) {
		case GASOLINA:
			if (litros <= 20) desconto = 0.04
				else desconto = 0.06;
			return (LITRO_GASOLINA * (1 - desconto)) * litros;
			break;
		case ALCOOL:
			if (litros <= 20) desconto = 0.03
				else desconto = 0.05;
			return (LITRO_ALCOOL * (1 - desconto)) * litros;
			break;
		default:
			return "Tipo Inválido";
			break;
	};


};	