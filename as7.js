// jQuery Selectors 1 and 2.     
    
// Fading in and out, and clicking list element to 
// make it go away.     

// jQuery Selector 3: Announcing the number of times the window is resized.     

// jQuery Selector 4: Click Selector; clicking on a paragraph caused an alert button to apper. 

/* jQuery Selector 5: Click Selector; it makes the text animated - it enlarges the text as it flies off  to the lower right of the page. */ 

/* jQuery Selector 6: As the user scrolls down the page, an animated ad appears to the user, from the lower right corner of the page. */ 
    
$(function(){
    
    var resize = 0; 
   
    $('h2').hide().slideDown(); 
    var $li = $('li');
    
    $li.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700);         
    }); 
    
    $li.on('click', function() {
        $(this).fadeOut(700); 
    }); 
    
    
    var $h3 = $("h3");
    var $h4 = $("h4"); 
    
    $(window).resize(function(){
        $("span").text(resize += 1); 
    });
    
    $h4.bind("click", function(){
    alert("Catepillar Brand Used Tractor Parts - 20% off until Sunday!");    
    
    $h3.on('click', function(){
        $(this).animate({
            opacity: 0.0, 
            paddingLeft: '+=350', 
            fontSize: '+=50', 
            }, 900, function(){
                $(this).remove(); });    
        }); 
    

    // This doesn't work yet. 
    var $window = $(window); 
        var $slideAd = $('#slideAd'); 
        var endZone = $('#footer').offset().top - $window.height() - 500; 
        
        $window.on('scroll', function() {
            
            if (endZone < $window.scrollTop()) {
                $slideAd.animate({'right': '0px' }, 250);
            } else { 
                $slideAd.stop(true).animate({ 'right': '-360px'}, 250); 
            }
            
        });
    
    
    }); 
    
}); 
    
    
    
