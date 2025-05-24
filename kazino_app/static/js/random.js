// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
// let dots1 = getRandomInt(6);
// let dots2 = getRandomInt(6);

// let cube1 = dots1 + 1;
// let cube2 = dots2 + 1;

// console.log(cube1)
// console.log(cube1)

$(".kosti-button").click(function() {
    let kostiNumbers = [];
    kostiNumbers[0] = Math.abs(Math.floor(Math.random() * 6)) + 1;
    kostiNumbers[1] = Math.abs(Math.floor(Math.random() * 6)) + 1;
    kostiNumbers[2] = Math.abs(Math.floor(Math.random() * 6)) + 1;
    kostiNumbers[3] = Math.abs(Math.floor(Math.random() * 6)) + 1;
    for(let i = 1; i <= 4; i++)
        $('.kosti-pic').eq(i - 1).attr('src','/static/img/' + kostiNumbers[i - 1] + '.png');

    $.ajax({
        url: '/kosti/',
        type: 'POST',
        data: {
            'kosti1': kostiNumbers[0],
            'kosti2': kostiNumbers[1],
            'kosti3': kostiNumbers[2],
            'kosti4': kostiNumbers[3]
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data);
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
})

