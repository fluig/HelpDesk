//função que utiliza o seguinte método para capturar os dados o campo zoom e carrega-los nos respectivos campos.
function setSelectedZoomItem(selectedItem) {              
	var description = (selectedItem["dsincidente"]); // variavel receber o valor do dataset (Campo Descriação do incidente)
	var papel = (selectedItem["papel_responsavel"]); // variavel receber o valor do dataset (Campo papel responsável)
        $("#dsIncidente").val(description); 
        $("#idPapelResponsavel").val("Pool:Role:" + papel); // Parãmetro "Pool:Role" é uma string que o fluig utiliza para determinar o tipo de papel.        
}
