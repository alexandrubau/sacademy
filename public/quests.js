$(document).ready(function(){

    // redirect to main page if it hasn't started the game

    let start = Cookies.get('start');

    if (!start) {

        window.location.href = '/';
    }

    // display only quests that have the cookie set

    let cookies = Cookies.get();

    for (let name in cookies) {

        if (!cookies.hasOwnProperty(name)) {
            continue;
        }

        if (!/^quest-/.test(name)) {
            continue;
        }

        let $el = $('#' + name);

        $el.removeClass('d-none');
    }

    // set quest statuses

    let reqs = {
        // 'quest-id': ['cookieName1', 'cookieName2']
        'quest-1': ['quest-2'],
        'quest-2': ['quest-3'],
        'quest-3': ['quest-4'],
        'quest-4': ['quest-5'],
        'quest-5': ['quest-6'],
        'quest-6': ['quest-7'],
        'quest-7': ['quest-8'],
    };

    for (let name in reqs) {

        if (!reqs.hasOwnProperty(name)) {
            continue;
        }

        let count = 0;

        reqs[name].forEach(function (cookie) {

            if (!Cookies.get(cookie)) {
                return;
            }

            count++;
        });

        if (count !== reqs[name].length) {
            continue;
        }

        let $el = $('#' + name)
            .removeClass('mission-in-progress')
            .find('.card-status');

        $el.removeClass('status-2')
            .addClass('status-1')
            .text('Finalizata');
    }

    // validations

    $('#quest-5-submit').on('click', function(){

        if ($('#quest-5-field').val() === '353') {

            alert('Raspuns corect! Codul introdus a activat tunelul Interstellar. La capatul calatoriei vei avea de cautat un nou cod QR.');

            location.reload();

        } else {

            alert('Cod invalid, mai incercati!');
        }
    });

    $('#quest-7-submit').on('click', function(){

        if ($('#quest-7-field').val() === '463') {

            Cookies.set('quest-8', true, { expires: 999 });

            alert('Raspuns corect! Unul dintre localnici a fost foarte placut surprins de felul in care au cantat: "Nu am mai intalnit de mult de cineva care sa cante atat de bine. Doar un doctor pe nume "Who" m-a impresionat la fel ca voi.');

            location.reload();

        } else {

            alert('Cod invalid, mai incercati!');
        }
    });
});