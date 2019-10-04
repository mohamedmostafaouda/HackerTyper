$(function () {
    expression = $('#hacker').html();// Take the code
    $('#hacker').html(''); // empty the div
    let i=0; 
    $('.cursor2').hide();
    
    $(document).keypress( function () {
        $('.cursor').hide();
        $('.cursor2').show();
        while (expression[i]==' ')i+=1;
        $('#hacker').html(expression.substr(0,i));
        i++;
        setTimeout(() => {
            $('.cursor').show();
            $('.cursor2').hide();
        }, 2000);
    });
    
})