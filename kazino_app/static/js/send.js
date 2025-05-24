$('#button-submit').click(function() {
    const email = $('#email').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val()
    const submitButton = $(this);

    if(!email) {
        alert('Пожалуйсьа введите емаил');
        return;
    }
    $.ajax({
        url: '/feedback/',
        type: 'POST',
        data: {
            'email': email,
            'crsfmiddlewaretoken': csrf
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data)
            submitButton.text('Oтправилось');
            submitButton.prop('disabled', true);
            submitButton.css({
                'background-color': 'green',
                'color': '#444',
            })
        },

        error: function(error) {
            console.error('Error: ', error);
            submitButton.text('Не отправилось');
            submitButton.prop('disabled', false);
            submitButton.css({
                'background-color': 'red',
                'color': '#fff',
            })
        },
    })
});

JavaScript

send.js
$('#reg-button').click(function() {
    const name = $('#name').val();
    const password = $('#password').val();
    const login = $('#login').val();
    const email = $('#email').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val();

    if (!name || !login || !password || !email) {
        alert = ("Пожалуйста, заполните обязательные поля!")
    }
    
    $.ajax({
        url: '/register/',
        type: 'POST',
        data: {
            'email': email,
            'name': name,
            'login': login,
            'password': password,
            'crsfmiddlewaretoken': csrf
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data)
            submitButton.text('Oтправилось');
            submitButton.prop('disabled', true);
            submitButton.css({
                'background-color': 'green',
                'color': '#444',
            })
        },

        error: function(error) {
            console.error('Error: ', error);
            submitButton.text('Не отправилось');
            submitButton.prop('disabled', false);
            submitButton.css({
                'background-color': 'red',
                'color': '#fff',
            })
        },
    })
});