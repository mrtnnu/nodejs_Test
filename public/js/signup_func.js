$(document).ready(function () {
    //delegated submit handlers for the forms inside the table
    $('#signup_form').on('submit', function (e) {
        e.preventDefault();
        hideAlert();
        if(signupValidations()){
            submitForm($(this).serialize());
        }
        showAlert();
    })
});a

function submitForm(sendData){
    alert(sendData);
    $.ajax({
        type: "POST",
        url: "/sign_up",
        data: sendData, // $(this).serialize()
        success: function(outData) { setAlertMsg( "New User Added Successfully", "success" ); },
            //setInterval(function () { var url = "index.hml"; $(location).attr('href', url); }, 3000);
        error: function() { setAlertMsg("There was an error please try again later", "danger") }
    })
}

function hideAlert() {
    setAlertText("");
    cleanAlertClasses();
    $('#signup_form_alert').addClass('hidden');
}

function showAlert() {
    $('#signup_form_alert').removeClass('hidden');
    //document.forms[0].checkValidity();
    document.forms[0].reportValidity();
}

function setAlertText(alertText) {
    $("#signup_form_alert_content").html( alertText );
}

function setAlertMsg(alertText, alertType) {
    cleanAlertClasses();
    var alertClass = 'alert-' + alertType + ' ';
    $('#signup_form_alert').addClass(alertClass);

    setAlertText( alertText );
}

function validatePass() {
    var isValid = false;
    var pass  = $('#inputPassword').val(); 
    var cpass = $('#inputConfPass').val(); 
    if(pass == cpass){
        isValid = true;
    }else{
        setAlertMsg("Passwords are different", "warning")
    }
    return isValid;
}

function signupValidations() {
    return true && true && validatePass()
    ;
}

function cleanAlertClasses() {
    $('#signup_form_alert').removeClass('alert-success');
    $('#signup_form_alert').removeClass('alert-warning');
    $('#signup_form_alert').removeClass('alert-danger');
}