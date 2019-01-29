$(function () {
	var X_COEF = 5;
	var Y_COEF = 10;

	function calcRotation(x, y) {
		var transformYval = x <= 100 ?
			(20 - x / X_COEF) * -1 :
			(x - 100) / X_COEF;
		var transformXval = y <= 150 ?
			20 - y / Y_COEF :
			((y - 150) / Y_COEF) * -1;
		return 'rotateX(' + transformXval +'deg) rotateY(' + transformYval + 'deg)';;
	}

	function calcTranslate(x, y) {
		var translateXval = x <= 100 ?
			20 - x / X_COEF :
			((x - 100) / X_COEF) * -1;
		var translateYval = y <= 150 ?
			20 - y / Y_COEF :
			((y - 150) / Y_COEF) * -1;
		return 'translateX(' + translateXval +'px) translateY(' + translateYval + 'px)';
	}

	function handleMousmove (event) {
		var cardBlock = this;
		var card = $(cardBlock).find('.card');
		var cardImage = $(card).find('.card-image');
		var cardBorder = $(card).find('.border');
		var cardText = $(cardBorder).find('.text');
		var cardBlacout = $(card).find('.blackout');
		var xOfset = event.offsetX;
		var yOfset = event.offsetY;
		var rotate = calcRotation(xOfset, yOfset);
		var translate = calcTranslate(xOfset, yOfset);
		card.css('transform', rotate);
		cardImage.css('transform', translate);
		cardText.css('top', '185px');
		cardBlacout.css('background-color', 'rgba(0,0,0, 0)')
	}
	function handleMouseout () {
		var cardBlock = this;
		var card = $(cardBlock).find('.card');
		var cardImage = $(card).find('.card-image');
		var cardBorder = $(card).find('.border');
		var cardText = $(cardBorder).find('.text');
		var cardBlacout = $(card).find('.blackout');
		setTimeout(function() {
			$(card).css('transform', '');
			$(cardImage).css('transform', '');
			$(cardText).css('top', '232px');
			$(cardBlacout).css('background-color', 'rgba(0,0,0, 0.3)')
		}, 500)
	}

	$('.card-block').on('mousemove', handleMousmove);

	$('.card-block').on('mouseout', handleMouseout);
})