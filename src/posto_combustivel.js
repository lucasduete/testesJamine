function calcularConta(litros, tipo) {
	
	const LITRO_GASOLINA = 3.7;
	const LITRO_ALCOOL = 3.2;
	
	const GASOLINA = 'G';
	const ALCOOL = 'A';

	if (litros <= 0) return "Litros Inválido";

	switch (tipo) {
		case GASOLINA:
			if (litros <= 20) {
				var desconto = 0.03 * litros;
				return ((litros * LITRO_GASOLINA) * (1 - desconto));
			} else {
				var desconto = 0.05 * litros;
				return ((litros * LITRO_GASOLINA) * (1 - desconto));
			}
			break;
		case ALCOOL:
			if (litros <= 20) {
				var desconto = 0.04 * litros;
				return ((litros * LITRO_ALCOOL) * (1 - desconto));
			} else {
				var desconto = 0.06 * litros;
				return ((litros * LITRO_ALCOOL) * (1 - desconto));
			}
			break;
		default:
			return "Tipo Inválido";
			break;
	};


};