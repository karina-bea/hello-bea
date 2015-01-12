$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade').each( function(i){
            var obj = $(this);
            var win = $(window);
            var amountOfObject = 0.1; // 0.1 = 10%, 0.35 = 35%
            
            //var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = obj.position().top + Math.floor(obj.outerHeight() * amountOfObject);
            var bottom_of_window = win.scrollTop() + win.height();
            
            /* If the top of the object is visible in the window, fade it in */
            if( bottom_of_window > top_of_object ){ 
                obj.animate({'opacity':'1'}, 300);
            }
            
        }); 
    
    });
    
});