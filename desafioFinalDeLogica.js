//variaveis

const vagas = []

//funções

function listarVaga (){
    if(vagas.length > 0){
   for (let i = 0 ; i< vagas.length; i++){
      alert("Lista de vagas existentes: \n"+
            "Indice: "+ (i + 1)+
            "\nNome da vaga: "+ vagas[i].nome +
             "\nNumero de candidatos: " + vagas[i].candidatos.length)
 }
}else{
     alert("Ainda não há vagas existentes" +
       "\nVoltando ao menu!...")
  }
  return
}

function criarVaga (){
 
 
  const nome =  prompt("Qual será o titulo da vaga?")
  const desc =  prompt("Insira uma pequena descrição sobre a vaga:")
  const data =  prompt("Qual será a data limite para que a vaga seja expirada?")
  const confirmacao = confirm("Vaga criada com sucesso \n" +  
                              "Nome da vaga: "+ nome + 
                              "\nDescrição da vaga: " + desc + 
                              "\nData limite: " + data)
  
  if(confirmacao){
   const novaVaga = {nome, desc ,data, candidatos: [] }
         vagas.push(novaVaga)
  }else{
    alert("Voltando ao menu!...")
  }
  console.log(vagas)
 return  
} 

function visualizarVaga (){
 
   if(vagas.length > 0){
        let posicao = parseFloat(prompt("Informe o indice da vaga: "))
        
        if(posicao >= 0 && posicao <= vagas.length){
          const vagasSelecionada = vagas[posicao]
          alert("Nome da vaga: " + vagasSelecionada.nome + 
                              "\nDescrição da vaga: " + vagasSelecionada.desc + 
                              "\nData limite: " + vagasSelecionada.data) 
        }else{
          alert("invalido")
        }

    
  }else{
     alert("Ainda não há vagas existentes" +
       "\nVoltando ao menu!...")
  }
  return
}
  
function candidato (){
 const nomeCandidato = prompt("Informe o nome do candidato: ")
   const posicao = parseFloat(prompt("Informe o indice da vaga: ")) 
        if(posicao >= 0 && posicao <= vagas.length){
          const vagasSelecionada = vagas[posicao]
          let confirmCandidato = confirm ("Deseja adicionar " +"("+ nomeCandidato+ ")" + " na vaga a baixo?"
                                          +"\nNome da vaga: " + vagasSelecionada.nome + 
                                          "\nDescrição da vaga: " + vagasSelecionada.desc + 
                                         "\nData limite: " + vagasSelecionada.data) 
            if(confirmCandidato){
             vagasSelecionada.candidatos.push(nomeCandidato)
              alert("Inscrição realizada")
              console.log(vagas)
            }else{
            alert("Voltando ao menu!...")
            }
        }else{
          alert("invalido")
        }
  return
}  
       
function excluirVaga (){
    if(vagas.length > 0){
  let posicao = parseFloat(prompt("Informe o indice da vaga que sera excluida: ")) 
        if(posicao >= 0 && posicao <= vagas.length){
          const vagasSelecionada = vagas[posicao]
          let confirmExcluir = confirm ("Deseja remover a vaga a baixo?"
                                          +"\nNome da vaga: " + vagasSelecionada.nome + 
                                          "\nDescrição da vaga: " + vagasSelecionada.desc + 
                                         "\nData limite: " + vagasSelecionada.data) 
            if(confirmExcluir){
             vagas.splice(posicao, 1)
              alert("Vaga Excluida")
              
            }else{
            alert("Voltando ao menu!...")
            }
        }else{
          alert("invalido")
        }
      }else{
     alert("Ainda não há vagas existentes" +
       "\nVoltando ao menu!...")
  }
  console.log(vagas)
  return
}  

function executar(){
  let escolha = ""
    
  do{
 escolha = prompt("Programa de gerenciamento de vagas "+ "Vagas cadastradas" + vagas.length +
                 "\n1. Listar vagas \n2. Criar nova vaga \n3. Visualizar vaga \n4. Inscrever um candidato \n5. Excluir uma vaga  \n6. Sair")
  switch(escolha){
    case "1":
      listarVaga()
    break
    case "2":
      criarVaga()    
    break
  
    case "3":
      visualizarVaga()
    break
    case "4":
     candidato ()
    break
      case "5":
    excluirVaga()
      
    break
      case "6":
      alert("Saindo...")
    break
    default:
      alert("Essa opção não é valida!!")
  }
}while(escolha!="6")

}

 //bloco de codigo 
executar()
