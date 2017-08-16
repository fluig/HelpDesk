function validateForm(form){
	
	//variavel que recebe o codigo referente ao estado atual do processo.
    var Now_State =parseInt(getValue("WKNumState"));

    // bloco de condição que valida no estado incial do processo se os seguintes campos etão em braco. 
	if (form.getValue("tipo_incidente") == null){
		throw "Necessario Preencher o campo Tipo de Incidente."; 
	}if (form.getValue("dsIncidente") == 0){
		throw "Necessario Preencher o campo Descrição."; 
	}
	// Codição que valida no estado do processo Analisar Suporte (5) o seguinte campo se está em braco.
	if(Now_State == 5){
		if (form.getValue("ds_solucao") == 0){
		    throw "Necessario Preencher o campo Solução."; 
	    }
	
	}
	
	
} 
	
