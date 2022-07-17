<?php require "config.ini"; ?>

<?php

ini_set ("SMTP","smtp.eb.mil.br");

////////////////////////////////////////////////

// Formail em PHP por SK15 v 1.0 |||

// Esse formulario é uma imitação do formail |||

// com um pequena ponto fraco |||

// ao adicionar um novo campo ele tera |||

// quer ser mudado aqui nesse arquivo |||

/////////////////////////////////////////////|||

// Carrega dados pelo método POST, independente da configuração das variáveis Globais do ini do PHP

$nome=$_POST["nome"];

$email=$_POST["email"];

$telefone=$_POST["telefone"];

$assunto=$_POST["assunto"];

$mensagem=$_POST["mensagem"];

// Verifica se O Campo nome tá preenchido

if (empty($nome)){

// HTML que aparecera o ERRO

echo "<html><head><title>Ocorreu Um ERRO !!!</title></head>";

echo "<body bgcolor=\"#ffffff\">";

echo "<br><br><br>";

echo "<center>É Necessario o Preenchimento do <b>Nome</b></center>";

echo "<br><br><center><a href=\"javascript:history.back(1)\">Volta</a></center>";

echo "</body></html>";

}


// Verifica o Campo E-mail Tá preenchido

elseif (empty($email)){

// HTML que aparecera o ERRO

echo "<html><head><title>Ocorreu Um ERRO !!!</title></head>";

echo "<body bgcolor=\"#ffffff\">";

echo "<br><br><br>";

echo "<center>O E-mail não foi <b>Digitado</b></center>";

echo "<br><br><center><a href=\"javascript:history.back(1)\">Volta</a></center>";

echo "</body></html>";

}

// Verifoca Se o E-mail Contem @

elseif (!(strpos($email,"@")) OR strpos($email,"@") !=strrpos($email,"@")) {

// HTML que aparecera o ERRO

echo "<html><head><title>Ocorreu Um ERRO !!!</title></head>";

echo "<body bgcolor=\"#ffffff\">";

echo "<br><br><br>";

echo "<center>O E-mail <b>Não</b> é <b>válido</b></center>";

echo "<br><br><center><a href=\"javascript:history.back(1)\">Volta</a></center>";

echo "</body></html>";

}

// Verifica se o Campo Está Preenchido

elseif (empty($assunto)){

// HTML que aparecera o ERRO

echo "<html><head><title>Ocorreu Um ERRO !!!</title></head>";

echo "<body bgcolor=\"#ffffff\">";

echo "<br><br><br>";

echo "<center>Você <b>Não</b> Digitou Um <b>Assunto</b></center>";

echo "<br><br><center><a href=\"javascript:history.back(1)\">Volta</a></center>";

echo "</body></html>";

}

// Verifica se o Campo Mensagem tá preenchido

elseif (empty($mensagem)){

// HTML que aparecera o ERRO

echo "<html><head><title>Ocorreu Um ERRO !!!</title></head>";

echo "<body bgcolor=\"#ffffff\">";

echo "<br><br><br>";

echo "<center>Você <b>Não</b> Digitou Uma <b>Mensagem</b></center>";

echo "<br><br><center><a href=\"javascript:history.back(1)\">Volta</a></center>";

echo "</body></html>";

}

else{

// Comfirma o Envio Do E-mail

if ($certo== "1")

{

// Função de envio Do E-mail

//mail ("tadio@estudiodigital.art.br","nome","string message", "string additional_headers");

mail ("$emaildest","$assunto","Nome:$nome\n Email:$email\n Telefone:$telefone\n Mensagem:$mensagem\n IP:$REMOTE_ADDR\n\n ...::: ESTUDIO DIGITAL DF® :::...","From:$nome<$email>");

}

// HTML do redirecionameto e se não redirecionar aparece um link

echo "<html><style>
body{background-color:#003; font-family:Verdana, Geneva, sans-serif; color:#FFF; margin:200px;}
a{color:#FFF; text-decoration:none; width:200px; margin:100px auto;}
</style><head>";

echo "<meta http-equiv=\"refresh\" content=\"0;url=$redirecionar\">";

echo "<title>Redirecionado ...</title>";

echo "</head><body bgcolor=\"#ffffff\">";

echo "<a href=\"$redirecionar\" target=\"_top\">Volta Para O Site</a>";

echo "</body></html>";

}

?>