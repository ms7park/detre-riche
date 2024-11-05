/*     1726775 : 맞춤형 컨텐츠      */
AOS.init();


/*     1726785 : 한줄 텍스트      */


/*     1726795 : 타이틀      */


/*     1730375 : 탭 버튼 이미지      */
jQuery(function($){
	var $obj = $('.img__1730375__');

	$obj.find('> a').on('click', function(){
		var $target = $(this).attr('href');

		$('.fac_tab_btn').removeClass('on');
		$(this).parent().addClass('on');
		$('.fac_tab_cont').hide();
		$($target).show();

		return false;
	});
});

/*     1730385 : 탭 버튼 이미지      */
jQuery(function($){
	var $obj = $('.img__1730385__');

	$obj.find('> a').on('click', function(){
		var $target = $(this).attr('href');

		$('.fac_tab_btn').removeClass('on');
		$(this).parent().addClass('on');
		$('.fac_tab_cont').hide();
		$($target).show();

		return false;
	});
});

/*     1730395 : 탭 컨텐츠 블록 설정      */


/*     1726805 : 이미지      */


/*     1730405 : 탭 컨텐츠 블록 설정      */


/*     1730415 : 이미지      */


