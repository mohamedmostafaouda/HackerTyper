$(function () {
    expression = $('#hacker').html();// Take the code
    $('#hacker').html(''); // empty the div
    let i=0; 
    $('.cursor2').hide();
    
    $(document).keydown( function () {
        var key = event.keyCode || event.charCode;

        if( key == 8 ){
           i-=1;
            if(i<0)i=0;
            while (expression[i]==' ')i-=1;
            while (expression[i]==';')i-=4;
            while (expression[i]=='>')i-=3;
            $('#hacker').html(expression.substr(0,i));
        }
        else{
        $('.cursor').hide();
        $('.cursor2').show();
        while (expression[i]==' ')i+=1;
        while (expression[i]=='<')i+=3;
        while (expression[i]=='&')i+=3;
        var c = document.querySelector("#scroll");
        c.scrollIntoView();
        $('#hacker').html(expression.substr(0,i));
        i++;
        setTimeout(() => {
            $('.cursor').show();
            $('.cursor2').hide();
        }, 2000);
    }
    });
    
})
