jQuery(document).ready(function($){

    /*--------------------------------------------------------------
    Tabs switch
    --------------------------------------------------------------*/

    $('#tabs li').click(function(e) {
		e.preventDefault();

		var id = $(this).attr('id');

		$('#tabs li, #content-tabs .tab').removeClass('active');//Remove all tab class
		$('#tabs #'+id+', #content-'+id+'').addClass('active');//Add current tab class 
	});


	/*--------------------------------------------------------------
    Home blog slider
    --------------------------------------------------------------*/

	if ($('#content-tabs__home__actuality__blog').length > 0) {
        $('#content-tabs__home__actuality__blog').slick({
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            centerMode: true,
        });

    }

});