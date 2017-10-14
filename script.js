(function($) {

    $(document).ready(function() {

  		var menu = $("#nav");
		var h_button = $("#hamburger-menu");
		
		h_button.on("click", function(){
			
//			menu.slideToggle();
			
			if(menu.is(":hidden")){
				menu.slideDown(300, function(){
					menu.animate({
						opacity:1,
					});
				});
			}else {
				menu.animate({
					opacity:0,
				}).slideUp();
				
			}
			
		});
		
		
		
		

    });

})(jQuery);