$(document).ready(function(){

    // TODO: validate information and submit it to AWS Lambda (be sure to disable fields and buttons while submitting)

    let start = Cookies.get('start');

    if (start) {

        window.location.href = 'quests.html';
    }

    $('#register-form').on('submit', function(e){

        e.preventDefault();

        // Validations.
        if(teamValidations()) {
            Cookies.set('start', true, { expires: 999 });
            window.location.href = 'quests/1_7699.html';

            // TODO: send to Google Spreadsheets
        }

    });

    function teamValidations() {
        if(!$('#team-name').val()) {
            $('.team-name-text').text("Numele echipei este obligatoriu.");

            return false;
        }

        if (!$('.first-member-name').val() || !$('.first-member-email').val()) {
            $('.first-member-text').text("Datele primului membru sunt obligatorii.");

            return false;
        }

        return true;
    }
});