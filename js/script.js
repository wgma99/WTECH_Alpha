window.addEventListener('load', function(){
	new Glider(document.querySelector('.main__computers--container'), {
		slidesToShow: 6,
		slidesToScroll: 2,
		draggable: true,
		dots: '.dots',
		arrows: {
			prev: '.main__computers--top-left',
			next: '.main__computers--top-right'
		}
	}); 
});