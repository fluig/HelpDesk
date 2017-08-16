function displayFields(form,customHTML){
	
    form.setShowDisabledFields(false); // desabilita o botão de imprimir 
	form.setHidePrintLink(false); // // desabilita o botão de imprimir 
	
	
	//variavel que recebe o codigo referente ao estado atual do processo.
	var Now_State =parseInt(getValue("WKNumState"));
    
    switch(Now_State){
        case 0:
            // Exemplo de  Função que retorna os dados consultados do dataset "colleague"
            var colaborador = consult_dataset();
            // Exemplo de função que retorna os dados da API do fluig
            var api = consult_API();
            
            form.setValue("name",api.fullName); // Método que carrega no campo input o objeto "nome" carregado pela API do Fluig

			form.setValue("email", colaborador.getValue(0, "mail")); //  método que Carrega no input o email atráve pelo objeto do dataset "Coleague"
			form.setValue("ramal", colaborador.getValue(0, "extensionNr")); // método que Carrega no input o ramal atráve pelo objeto do dataset "Coleague"
		    form.setValue("departamento", colaborador.getValue(0, "currentProject")); //método que Carrega no input o departamento atráve pelo objeto do dataset "Coleague"
            

            // método que desabilita a edição dos seguintes campos do formulário
			form.setVisibleById("ramal", false);
			form.setVisibleById("lbl_ramal", false);
			form.setVisibleById("departamento", false); 	
			form.setVisibleById("lbl_dpto", false); 	
			form.setVisibleById("suporte", false);  	
			form.setVisibleById("feedback", false); 
			form.setVisibleById("idPapelResponsavel", false); 
			form.setVisibleById("papel", false); 
			
			form.setEnabled("name", false); // método que desabilita o input nome 
            form.setEnabled("email", false); // método que desabilita o input email
            
            break;

        case 5:
        	
            
        	//variavel que recebe o objeto da função do dataset
        	var responsavel = consult_dataset();
            form.setValue("sp_responsavel", responsavel.getValue(0, "colleagueName")); // Método que carrega no input o nome do usuario suporte
            form.setValue("sp_email", responsavel.getValue(0, "mail")); // método que Carrega no input o email do usuario suporte 
            form.setValue("sp_ramal", responsavel.getValue(0, "extensionNR")); // método que carrega no input o ramal email do usuario suporte  

            // método que desabilita a edição dos seguintes campos do formulário
		    form.setEnabled("name", false);
		    form.setEnabled("email", false); 
		    form.setEnabled("ramal", false);
		    form.setEnabled("departamento", false);		
		    form.setEnabled("idticket", false);
		    form.setEnabled("dt_ticket", false);
		    form.setEnabled("tipo_incidente",false);
		    form.setEnabled("dsIncidente", false);
            form.setEnabled("sp_responsavel", false); 
            form.setEnabled("sp_email", false); 
            form.setEnabled("sp_ramal", false); 
            
            // método que oculta elementos do formulário 
            form.setVisibleById("feedback", false); 
            form.setVisibleById("idPapelResponsavel", false); 
            form.setVisibleById("papel",false);
		
            // instancia o objeto data -----
            var date = new Date();
            var month = date.getMonth()+ 1;
            
            if (month.length <= 1) {
                month = '0' + month;
            } // ---------------------------
            
            // Formata a exibição da data (Dia/mes/ano 00:00:00) 
            var dataAtual = date.getDate() + "/" + month + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
            //Carrega no input o objeto data
            form.setValue('dt_ticket', dataAtual);

            break;

        case 9:
            // método que oculta elementos do formulário 
            form.setVisibleById("ramal", false); 
            form.setVisibleById("lbl_ramal", false); 
            form.setVisibleById("departamento", false); 	
            form.setVisibleById("lbl_dpto", false); 	
            form.setVisibleById("idPapelResponsavel", false); 
            form.setVisibleById("papel",false); 

            //método que desabilita a edição dos seguintes campos do formulário
            form.setEnabled("name", false); 
            form.setEnabled("email", false); 
            form.setEnabled("tipo_incidente",false);
            form.setEnabled("dsIncidente", false); 
            form.setEnabled("idticket", false);
            form.setEnabled("dt_ticket", false);
            form.setEnabled("ds_solucao", false);
            form.setEnabled("sp_responsavel", false); 
            form.setEnabled("sp_email", false); 
            form.setEnabled("sp_ramal", false); 

            break;

        default:
        
            // método que oculta elementos do formulário 
            form.setVisibleById("ramal", false); 
            form.setVisibleById("lbl_ramal", false); 
            form.setVisibleById("departamento", false); 	
            form.setVisibleById("lbl_dpto", false); 	
            form.setVisibleById("idPapelResponsavel", false); 
            form.setVisibleById("papel",false); 
            form.setVisibleById("feedback", false); 

            //método que desabilita a edição dos seguintes campos do formulário
            
    }
    
    
	customHTML.append("<script>function getWKNumState(){ return " + getValue('WKNumState') + "}</script>");
}