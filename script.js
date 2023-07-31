$(document).ready(function () {
    $('#add').click(function () { 
         var input = $('input').val();

         if(input=="")
         alert("Attempting to add empty item!!");

         else{
            $('ul').append( '<li>'+input + '<span><i id = "del" class="fa-solid fa-trash "></i></span>'+'</li>');
         }

         $('input').val("");
        
    });
    $('ul').on('click','span', function(event){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
    $('.clear').click(function(){
        $('li').remove();
    });
});