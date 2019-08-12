//formata a mascara do cpf

function formatar(mascara, documento) {
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)

  if(texto.substring(0,1) != saida) {
      documento.value += texto.substring(0,1);
  }
}

//Nao deixa digitar letraz

function validar(dom,tipo){
switch(tipo){
 case'text':var regex=/[A-Za-z]/g;break;
 case'num':var regex=/\d/g;break;
}
dom.value=dom.value.replace(regex,'');
}


//Verifica se CPF é válido
function TestaCPF(strCPF) {
 
 var Soma;
 var Resto;
 Soma = 0; 
 strCPF = strCPF.replace(/(\.|\/|\-)/g,"");
 
 if (strCPF.length != 11 || strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || strCPF == "44444444444" || 
 strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" || strCPF == "99999999999") {
         swal({
             type: 'warning',
             text: "CPF, inválido!",
             timer: 2000,
             showConfirmButton: false
         });
         return false;
     }
    
 
 for (i=1; i<=9; i++)
 Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
 Resto = (Soma * 10) % 11;
 if ((Resto == 10) || (Resto == 11)) 
 Resto = 0;
 if (Resto != parseInt(strCPF.substring(9, 10)) ) {
     swal({
         type: 'warning',
         text: "CPF, inválido!",
         timer: 2000,
         showConfirmButton: false
     });
     return false;
 }
 
 
 Soma = 0;
 for (i = 1; i <= 10; i++)
 Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
 Resto = (Soma * 10) % 11;
 if ((Resto == 10) || (Resto == 11)) 
 Resto = 0;
 if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
     swal({
         type: 'warning',
         text: "CPF, inválido!",
         timer: 2000,
         showConfirmButton: false
     });
     return false;
 }
 
     swal({
         type: 'success',
         text: "CPF, válidado com sucesso.",
         timer: 2000,
         showConfirmButton: false
     });
  
 return true;
 }
