$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock'); // что бы не было скрола под меню, важно для юзабилити
    });
    $('#news').click(function(event) {
        $('.fi-1').toggleClass('active');
        $('.pt-1').toggleClass('active');

    });
    $('#paper').click(function(event) {
        $('.fi-2').toggleClass('active');
        $('.pt-2').toggleClass('active');
    });
    $('#tournament').click(function(event) {
        $('.fi-3').toggleClass('active');
        $('.pt-3').toggleClass('active');
    });
    $('#media').click(function(event) {
        $('.fi-4').toggleClass('active');
        $('.pt-4').toggleClass('active');
    });
});