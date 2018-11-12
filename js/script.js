$(document).ready(function(){
   
    
    $("#img1").click(function(){
        
        $(".body1").toggle();
        $(".body2").css("display","none");
        $(".body3").css("display","none");

    })
    
    
     $("#img2").click(function(){
        
        $(".body2").toggle();
        $(".body1").css("display","none");
        $(".body3").css("display","none");

    })
    
    
    
     $("#img3").click(function(){
        
        $(".body3").toggle();
        $(".body2").css("display","none");
        $(".body1").css("display","none");

    })
    
});