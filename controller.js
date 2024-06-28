let emailArray = [];

function checarEmail() {
    const emailField = document.forms[0].email;
    const email = emailField.value;

    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Por favor, informe um email válido");
        return false;
    } else {
        alert("Email informado");
        emailArray.push(email);
        atualizarEmailList();
        emailField.value = "";  // Limpa o campo de email após adicionar
        return false;  // Impede o envio do formulário para que a página não seja recarregada
    }
}

function atualizarEmailList() {
    const emailList = document.getElementById("emailList");
    emailList.innerHTML = "";
    emailArray.forEach(email => {
        const li = document.createElement("li");
        li.textContent = email;
        emailList.appendChild(li);
    });
}