function autenticar(){
    var txtEmail  = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;
    console.log(txtEmail+ ' / ' + txtSenha);
    // MONTEI O corpo da mensagem
    var msgBody = {
        email: txtEmail,
        senha : txtSenha
    }
       // como é solicitacao POST, temos que montar um objeto de cabeçalho
    // como se fizessemos a seleção la no POSTMAN, indicnado que o método é
    // POST, o corpo é o objeto msgBody convertido para String e o cabeçalho é
    // par aindicar que essa STRING vai no formato JSON)
    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers : {
                'Content-Type' : 'application/json'
        }
    }
fetch("http://localhost:8080/login", cabecalho)
    .then(res => res.json())
    .then(res => logar(res))
    .catch(err => trataErro(err));
}

function logar(res){
    //alert("login bem sucedido!!!");
    console.log (res);
    localStorage.setItem("VMuser", JSON.stringify(res));
    window.location = "perfil.html";
}

function trataErro(err){
        console.log(err);
        document.getElementById("msg").style="visibility:visible";
}