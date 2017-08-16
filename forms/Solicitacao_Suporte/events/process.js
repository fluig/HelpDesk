
//função que consulta o dataset interno do fluig ("Colleague") passando como parãmetro as contraints(Filtros) para filtrar os registros. 
function consult_dataset (){
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
    var constraints = new Array(c1);
	var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);
    return colaborador;
}


// Função que retona um objeto dos dados do usuário logado através de uma API
function consult_API (){
	return (fluigAPI.getUserService().getCurrent());
}