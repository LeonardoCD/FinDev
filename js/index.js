//Evita o reload da página
document .querySelector("form")
.addEventListener("submit", event => {
  
  //Não vai enviar o formulário
  event.preventDefault()
})

//Função de validação do login
function validaLogin(){

  let nome = document.getElementById('usuario')
  let erroNome = document.getElementById('erro-nome').id
  let senha = document.getElementById('senha')
  let erroSenha = document.getElementById('erro-senha').id
  
  //Valida o input de Nome do usuário
  validaInput(nome.value, erroNome, nome.id, nome.type)
  //Valida o input de Senha do usuário
  validaInput(senha.value, erroSenha, senha.id, senha.type)   
}

//Função que valida cada input
function validaInput(valorInput, smallErro, idInput, tipo){
  
  //Verifica se tem o número de caracteres mínimo
  if(valorInput.length < 8){
    document.getElementById(`${smallErro}`).innerHTML = "Mínimo de 8 caracteres!"
    document.getElementById(`${idInput}`).focus()
    
  }else{
    document.getElementById(`${smallErro}`).innerHTML = ""
  }

  //Verifica se o que foi digitado está no padrão
  document.querySelector(`input[type=${tipo}]`).oninvalid = function() {
    // remove mensagens de erro anteriores
    this.setCustomValidity("")
  
    // reexecuta validação
    if (!this.validity.valid) {
      // se inválido, coloca mensagem de erro
      this.setCustomValidity("8 Caracteres (Somente letras!)");
      if(tipo == 'password'){
        this.setCustomValidity("8 Caracteres (Maiúsculas, minúculas e números!)")
      }
    }
  }
}