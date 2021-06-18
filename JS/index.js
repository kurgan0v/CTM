
$(document).ready(function(){
    PopUpHide();
    $("#popup").css("display","flex")
    $("#card1").flip({
        trigger: 'manual'
    });
    PopUpHide();
    $(".toToggle").click(function(){
        $("#card1").flip('toggle');
    });
    $("#personal_area_button").click(function(){
        PopUpShow();
    });

    
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup").show("slow");
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup").hide();
    }

    // $("#cardiology").click(function(){
    //     $("#cardiology").width(870);
    //     $("#cardiology:hover").css("transform","scale(1)",'slow')
    //     $("#gynecology").hide()
    //     $("#urology").hide()
    // });


    $("#cardiology").click(function(){
        if($("#cardiology").width()==250){
            blocksHide();
        }
        setTimeout(()=>{
            
            $("#cardiology:hover").css("transform","scale(1)");
            $("#cardiology").show();
            setTimeout(()=>{$("#cardiology").width(870);})
        },1400)
        
    }); 

    $("#gynecology").click(function(){
        if($("#gynecology").width()==250){
            blocksHide();
        }
        setTimeout(()=>{
            
            $("#gynecology:hover").css("transform","scale(1)");
            $("#gynecology").show();
            setTimeout(()=>{$("#gynecology").width(870);})
        },1400)
        
    }); 

    // $("#gynecology").click(function(){
    //     $("#cardiology").hide();
    //     $("#gynecology:hover").css("transform","scale(1)")
    //     $("#gynecology").width(870);
    //     $("#urology").hide()
    // });

    $("#urology").click(function(){
        if($("#urology").width()==250){
            blocksHide();
        }
        setTimeout(()=>{
            
            $("#urology:hover").css("transform","scale(1)");
            $("#urology").show();
            setTimeout(()=>{$("#urology").width(870);})
        },1400)
        
    });     
    function blocksHide() {
        $(".directions_block:last-child").hide( "0.9",function(){
            // Use arguments.callee so we don't need a named function
              $( this ).prev().hide( "0.9", arguments.callee );
          });
          
      }

});
