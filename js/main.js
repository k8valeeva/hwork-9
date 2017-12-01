$(document).ready(function (){

    $('.add-class').on('click', function (){
        $(this).addClass('new-btn-color')
    });


    $('.remove-class').on('click', function (){
        $(this).removeClass('remove-class')
    });


    $('.toggle-class').on('click', function (){
        $(this).toggleClass('toggle-effect')
    });


    $('.get-attr').on('click', function (){
        alert( $(this).attr("type"));
    });


    $('.set-attr').on('click', function (){
        let attr = $(this).attr('type', 'button');
    });


    $('.alert').on('click', function (){
        alert ('alertOnClick');
    });


    $('.trigger-alert').on('click', function (){
        alert('trigger-alert').trigger('click');
    });


    $('.clone-this').on('click', function(){
        $(this).clone().appendTo('.container');
    });


    $('.closest').on('click', function(){
        $('.clone-this').hide();
    });


    $('#eachBtnText').on('click', function(){
        var a = $('button').text();
        console.log(a);
    });


    $('#findMe').on('click', function(){
        console.log($('body').find(this));
    });


    $('#fadeInText').on('click', function(){
        $('.fade-text').fadeIn();
    });


    $('#fadeOutText').on('click', function (){
        $('.fade-out-text').fadeOut();
    });


    $('#hideText').on('click', function(){
        $('.hide-text').hide();
    });


    $('#showText').on('click', function(){
        $('.show-text').show();
    });


    $('#dataAboutMe').on('click', function(){
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


    $('.up').on('click', function(){
        $('.slide').slideUp();
    });


    $('.down').on('click', function(){
        $('.slide').slideDown();
    });


    $('.toggle-slide').on('click', function(){
        $('.slide').slideToggle();
    });


    $('#detach').on('click', function(){
        $('.remove').detach();
    });

    $('.remove:eq(0)').css('background-color','yellow');



    $('input').change(function (){
        console.log($(this).val());
    });


    $('#form').submit(function (event){
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


    $('#submit').keypress(function (){
        $('.wrapper').css('background-color', '#cac2c2')
    });
});









