(function($) {

    $(document).ready(function() {

  		var menu = $("#nav");
		var h_button = $("#hamburger-menu");
		
		h_button.on("click", function(){
			
			menu.slideToggle();
			
//			if(menu.is(":hidden")){
//				menu.slideDown();
//			}else {
//				menu.slideUp();
//			}
			
		});
		
		
		
		

    });

})(jQuery);