//$(document.ready(function() {
	$("#login-wrap").click(function() {
		$(this).addClass('active');
		$('#register-wrap').removeClass('active');
		$(".login-wrap").show();
		$(".register-wrap").hide();
	})
	$("#register-wrap").click(function() {
		$(this).addClass('active');
		$('#login-wrap').removeClass('active');
		$(".login-wrap").hide();
		$(".register-wrap").show();
	})

	$(".remeber").click(function() {

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
		} else {
			$(this).addClass('active');
		}
	})
	$("#forget-btn").click(function() {
		$(".login-register-wrap").hide();
		$(".forget-wrap").show();
	})
	$("#reset-btn").click(function() {
		$(".login-register-wrap").show();
		$(".forget-wrap").hide();

	})
//}))