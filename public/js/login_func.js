$(document).ready(function(){
    $("#but_submit").click(function(){
        var useremail = $("#inputEmail").val().trim();
        var password = $("#inputPassword").val().trim();
 
        if( useremail != "" && password != "" ){
              $.ajax({
                  url:'/validaLogin',
                  type:'POST',
                  //cache: false, 
                  data:{useremail:useremail, password:password},
                  success:function(data){
//                      alert('Respuesta:'+data);
//                     // if(data === "NO"){
//                     //    alert('Respuesta:'+data);
//                     //    msg = "Email Invalido";
//                     // }
//                     // if(data === "YES"){
//                     //    alert('Respuesta:'+data);
//                     //    msg = "Email Correcto";
//                     // }
//                     // $("#message").html(msg);
//                  }, error: function(jqXHR, textStatus, err){
//                     alert('text status '+textStatus+', err '+err)
                  }
              });
        }
        // else{
        //     msg = "Ingresar Datos";
        //     $("#message").html(msg);
        // }
        alert('Esta regresado');
    });
});

