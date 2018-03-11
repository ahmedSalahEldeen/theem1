$(document).ready(function(){
      
    //caroussel speed
   $('.carousel').carousel
   ({
      interval:6000
     
   }); 
    

    //Show color div 
    $(".gear-check").click(function()
      {
                           
          $(".color-box").toggle();
         
      });
    
        //change theme color on click 
    var colorLi = $(".color-box ul li")
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#009AFF").end()
    .eq(2).css("backgroundColor","#D917E4").end()
    .eq(3).css("backgroundColor","#22E417").end()
    .eq(4).css("backgroundColor","#DFE417");
    
    colorLi.click (function()
    {
        
      $("link[href*='color']").attr("href",$(this).attr("data-value"))  
        
    });
    
    //Start of Scroll to top
    
    //Caching the scroll top Element
   var scrollButton = $("#scroll-top");
$(window).scroll(function()
{
    console.log($(this).scrollTop());
    
    if($(this).scrollTop()>=700)
     {
         scrollButton.show();
     }
    
    else
    {
        scrollButton.hide();
    }
   });
    //click on button to scroll top
    scrollButton.click(function()
    {
        
       $("html,body").animate({scrollTop:0},600); 
        
    });
});

//Start of loading overlay

$(window).load (function()
 {
    
    $(".loading-overlay .spinner").fadeOut(2000,
    function()
     {
        
      $(this).parent().fadeOut(2000,
       function()
        {
          //body overflow-----
         $("body").css("overflow","auto");
          
          $(this).remove();
          
          
      });  
        
    });
});


