function sendForm(e) {
    e.preventDefault();
    $.ajax ({
        url:"https://formspree.io/ira.demkovych@gmail.com", 
        method:"POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
        },
    });
    $('#formSend').trigger('reset');
}
$(function() {
  $('#btn-send').click(sendForm);  
});

function sendForm2(e) {
    e.preventDefault();
    $.ajax ({
        url:"https://formspree.io/ira.demkovych@gmail.com", 
        method:"POST",
        data: {
            name:$('#name2').val(),
            email:$('#email2').val(),
        },
    });
    $('#formSend2')[0].reset();
}
$(function() {
  $('#btn-send2').click(sendForm2);  
});