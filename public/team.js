$(document).ready(function(){

    // TODO: validate information and submit it to AWS Lambda (be sure to disable fields and buttons while submitting)

    let start = Cookies.get('start');

    if (start) {

        window.location.href = 'quests.html';
    }

    $('#register-form').on('submit', function(event){

        event.preventDefault();

        Cookies.set('start', true, { expires: 999 });

        window.location.href = 'quests/1_7699.html';
    });
});