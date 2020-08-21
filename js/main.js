$(function () {

    $(".load-more").on('click', function (e) {
      const btn = $(this);
      const loader = btn.find('span');
      $.ajax({
      	url: 'data/data.html',
      	type: 'GET',
      	beforeSend: function() {
      		btn.attr('disabled', true);
      		loader.addClass('d-inline-block');
      	},
      	success: function(res){
      		setTimeout(function(){
      			loader.removeClass('d-inline-block');
      			btn.attr('disabled', false);
      			$('.after-posts').before(res);
      		},1300);
      	},
      	error: function(){
      		btn.attr('disabled', false);
      		loader.removeClass('d-inline-block');
      		alert("Error");
      	}
      })
    });
  });

$("#scrollToContent").click(function() {
    $('html, body').animate({
        scrollTop: $(".greed-posts").offset().top 
    }, 1000);
});