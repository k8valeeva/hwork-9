$(document).ready(function () {

    $('.add-class').click (function () {
        $(this).addClass('new-btn-color')
    });


    $('.remove-class').click (function () {
        $(this).removeClass('remove-class')
    });


    $('.toggle-class').click (function () {
        $(this).toggleClass('toggle-effect')
    });


    $('.get-attr').click (function () {
        alert( $(this).attr("type"));
    });


    $('.set-attr').click (function () {
        let attr = $(this).attr('type', 'button');
    });


    $('.alert').click (function () {
        alert ('alertOnClick');
    });


    $('.trigger-alert').click(function () {
        alert('trigger-alert').trigger('click');
    });


    $('.clone-this').click(function() {
        $(this).clone().appendTo('.container');
    });


    $('.closest').click(function() {
        $('.clone-this').hide();
    });


    $('#eachBtnText').click(function() {
        var a = $('button').text();
        console.log(a);
    });


    $('#findMe').click(function(){
        console.log($('body').find(this));
    });


    $('#fadeInText').click(function(){
        $('.fade-text').fadeIn();
    });


    $('#fadeOutText').click(function () {
        $('.fade-out-text').fadeOut();
    });


    $('#hideText').click(function(){
        $('.hide-text').hide();
    });


    $('#showText').click(function(){
        $('.show-text').show();
    });


    $('#dataAboutMe').click(function(){
        var btnInfo = [
            $(this).height(),
            $(this).width(),
            $(this).offset(),
            $(this).attr('type'),
            $(this).parent(),
            $(this).prev(),
            $(this).next(),
            $(this).text()
        ];
        console.log(btnInfo);
    });


    $('.up').click(function(){
        $('.slide').slideUp();
    });


    $('.down').click(function(){
        $('.slide').slideDown();
    });


    $('.toggle-slide').click(function(){
        $('.slide').slideToggle();
    });


    $('#detach').click(function(){
        $('.remove').detach();
    });

    $('.remove:eq(0)').css('background-color','yellow');



    $('input').change(function () {
        console.log($(this).val());
    });


    $('#form').submit(function (event) {
        event.preventDefault();
        $('#form').find('input, option').each(function(){
            console.log(this.name +  ' = ' + this.value);
        });
    });


    $('input').keydown(function(){
        $(this).css('background-color', 'yellow');
    });


    $('#name').keyup(function(){
        $('#user').text(', ' + $(this).val());
    });


    $('#submit').keypress(function () {
        $('.wrapper').css('background-color', '#cac2c2')
    });
});









