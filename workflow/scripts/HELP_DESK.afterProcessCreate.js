function afterProcessCreate(processId){
    
    //variavel global que utiliza o seguinte método para carregar o código do processo no respectivo campo do formulário após sair da atividade inicial do processo.
    hAPI.setCardValue("idticket", processId); 
}