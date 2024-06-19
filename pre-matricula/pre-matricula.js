function enviarEmail() {
    // Dados para o email
    var nome = document.getElementById('nome').value; // Campo de nome
    var gmail = document.getElementById('gmail').value; // Campo de Gmail
    var telefone = document.getElementById('telefone').value; // Campo de telefone

    // Mensagem pré-definida
    var mensagem = "Nome: " + nome + "\n" +
                   "Gmail: " + gmail + "\n" +
                   "Telefone: " + telefone;

    // Codifica a mensagem para usar na URL
    var mensagemEncoded = encodeURIComponent(mensagem);

    // Email pré-definido para onde enviar
    var emailDestino = "iderlanoliveira19@gmail.com"; // Substitua pelo email desejado

    // Monta o link com o cliente de email padrão do usuário
    var link = "mailto:" + emailDestino +
               "?subject=Formulário de Pré-Matrícula&body=" + mensagemEncoded;

    // Abre o cliente de email padrão com os dados preenchidos
    window.location.href = link;
}