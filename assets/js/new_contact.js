$(document).ready(function () {    // new contact section    // input clear when click clear button    $('.input-clean-div svg').click(function () {        let new_contact_input = $(this).parent().parent().children('.input-div').children().children('input');        new_contact_input.val("")    })    // new contact photo div open ---------    $('#new-contact-img-btn').click(() => {        $('#upload-new-photo-div').removeClass('d-none')    })    let inputs = document.querySelectorAll('.new-contact-bottom input')    for (let input of inputs) {        if(input.value) {            input.classList.add('value')        }    }    $('.new-contact-bottom input').change(function () {        if ($(this).val()) {            $(this).addClass('value')        } else {            $(this).removeClass('value')        }    })})