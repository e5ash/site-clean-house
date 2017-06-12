var w = $(window),
	body = $('body'),
	popup = $('#popup'),
	popupContainer = ('#popup .popup-container'),
	popupBg = ('#popup .popup-bg'),
	popupClose = $('#popup .close'),
	popupForm = $('#popup .form'),
	popupMessage = $('#popup .message'),
	speed = 400,
	links = $('.header .panel .links'),
	contacts = $('.header .panel .contacts'),
	menuTop = $('.menu.top'),
	sticks = $('button#sticks'),
	phone = $('button#phone'),
	iconPhone = phone.find('.icon'),
	blockVid = $('.block-vid');


sticks.click(function() {
	sticks.toggleClass('close').toggleClass('green-span');
	menuTop.toggleClass('block');
	iconPhone.addClass('icon-phone-big-blue').removeClass('icon-phone-big-green');
	contacts.removeClass('block');
	links.removeClass('block');
});
phone.click(function() {
	sticks.removeClass('close').removeClass('green-span');
	menuTop.removeClass('block');
	iconPhone.toggleClass('icon-phone-big-blue').toggleClass('icon-phone-big-green');
	contacts.toggleClass('block');
	links.toggleClass('block');
});


$('input[name=tel]').mask("+7 (999) 999-99-99");


function abs(object) {
	var scrollTop = body.scrollTop(),
    	height = body.height();
	object.css('padding-top', scrollTop+20).fadeIn(speed).height(height-scrollTop-20);
}

$('.btnCallBack').click(function() {
	$(this).removeAttr('href');
	abs(popup);
});

popupClose.click(function() {
	popup.fadeOut(speed);
	blockVid.hide();
});

popupForm.find('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});

$('.slider').slick({
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-clients-arrow-prev"></i></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-clients-arrow-next"></i></button>',
	// centerMode: true,
	slidesToShow: 4,
	responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true
      },
      

    }]
})

$('.fancybox').fancybox({
    openEffect  : 'elastic'
});

$('.btnServices').click(function() {
	blockVid.show();
});