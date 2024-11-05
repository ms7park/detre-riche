/*     1725925 : 맞춤형 컨텐츠      */
AOS.init();


/*     1725935 : 한줄 텍스트      */


/*     1725945 : 타이틀      */


/*     1725955 : 이미지      */


/*     1730225 : 탭 버튼 이미지      */
jQuery(function($){
	var $obj = $('.img__1730225__');

	$obj.find('> a').on('click', function(){
		var $target = $(this).attr('href');

		$('.fac_tab_btn').removeClass('on');
		$(this).parent().addClass('on');
		$('.fac_tab_cont').hide();
		$($target).show();

		return false;
	});
});

/*     1730235 : 탭 버튼 이미지      */
jQuery(function($){
	var $obj = $('.img__1730235__');

	$obj.find('> a').on('click', function(){
		var $target = $(this).attr('href');

		$('.fac_tab_btn').removeClass('on');
		$(this).parent().addClass('on');
		$('.fac_tab_cont').hide();
		$($target).show();

		return false;
	});
});

/*     1730205 : 탭 컨텐츠 블록 설정      */


/*     1730185 : 이미지      */


/*     1730215 : 탭 컨텐츠 블록 설정      */


/*     1730195 : 이미지      */


/*     1730245 : 이미지      */


