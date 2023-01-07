jQuery(document).ready(function($){

    /*--------------------------------------------------------------
    Tabs switch
    --------------------------------------------------------------*/

    $('#tabs li').click(function(e) {
		e.preventDefault();

		var id = $(this).attr('id');

		$('#tabs li, #tabs-content .tab').removeClass('active');//Remove all tab class
		$('#tabs #'+id+', #content__'+id+'').addClass('active');//Add current tab class 
	});


});