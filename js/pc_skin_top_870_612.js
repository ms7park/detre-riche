$(function(){
	// 필수 스크립트
	// voice
	$("body").on({
		click : function(e){
			var onoff="on";
			if($(e.target).hasClass("state_voice_on")) onoff="off";
			SetCookie('bg_voice_onoff',onoff);
			if(onoff == 'on'){
				$("#voice_guide_wrap").addClass("off").removeClass("on");
			}else{
				$("#voice_guide_wrap").addClass("on").removeClass("off");
			}
			if(document.getElementById('bg_voice_player')){
				if(onoff == 'off'){
					// 현재 재생 중이면 stop() 처리
					document.getElementById('bg_voice_player').pause();
					document.getElementById('bg_voice_player').currentTime = 0;
				}else{
					// 다시 paly() 처리
					document.getElementById('bg_voice_player').play();
				}
			}
			return false;
		}
	}, "#voice_guide_wrap > a");

//toggle
	$('.side_menu [role=toggle] > a').on('click', function(e){
		var
		$li = $(this).parent()
		,$lis = $(this).closest('ul').children()
		,$active = $(this).parent().parent().children('.active')
		;
		if ($li.hasClass('active')){
			$li.removeClass('active');
		} else {
			$active.removeClass('active');
			$li.addClass('active');
		}
		return false;
	});

//side
	var
		$htmlbody = $('html,body')
		,$viewport = $('#viewport')
		,$toggleLeft = $('#toggle_left')
		,$toggleRight = $('#toggle_right')
		,$closeSide = $('#close_side')
		,$mainSlide = $('#owl_mslide')
		,$sideMenu = $("#left_side, #right_side")
	;

	$toggleLeft.on('click',function(e){
		openLeft();
	});

	$toggleRight.on('click',function(e){
		openRight();
	});

	$closeSide.on('click',function(e){
		closeSide();
	});

	function openLeft(){
		$htmlbody.scrollTop(0);
		$viewport.addClass('left-open');
		$toggleLeft.addClass('on');
		$mainSlide.trigger('stop.owl.autoplay');
		return false;
	}

	function openRight(){
		$htmlbody.scrollTop(0);
		$viewport.addClass('right-open');
		$toggleRight.addClass('on');
		$mainSlide.trigger('stop.owl.autoplay');
		return false;
	}

	function closeSide(){
		$htmlbody.scrollTop(0);
		$sideMenu.scrollTop(0);
		$viewport.removeClass('left-open');
		$viewport.removeClass('right-open');
		$toggleLeft.removeClass('on');
		$toggleRight.removeClass('on');
		$mainSlide.trigger('play.owl.autoplay');
	}

	//상단으로 이동
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('#btn_site_top').addClass('on');
		}else{
			$('#btn_site_top').removeClass('on');
		}
	});

	$('#btn_site_top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 400);

		return false;
	});

	function mypage_snb(target){
		if(target.scrollLeft()<40){
			target.parent().find(".prev").hide();
		}else{
			target.parent().find(".prev").show();
		}
		if(target.scrollLeft()-40<target.find(".dep1").width()-target.parent().width()){
			target.parent().find(".next").show();
		}else{
			target.parent().find(".next").hide();
		}
	}
	$(".snb > div").scroll(function(){
		mypage_snb($(this));
	});
	mypage_snb($(".snb > div"));
	if($(".snb > div").find(".on").length>0) $(".snb > div").scrollLeft($(".snb > div").find(".on").offset().left-$(".snb > div").width()/2+$(".snb > div").find(".on").width()/2);

	//footer
	$('#footer .btn_f_cont_toggle').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('#footer .f_cont_hide').slideUp(200);
		}else{
			$(this).addClass('on');
			$('#footer .f_cont_hide').slideDown(200);
			$('body, html').animate({
				scrollTop: $('#viewport').height()
			}, 200);
		}
		return false;
	});

	//PC 상단바
	$(window).on('load scroll', function(){
		if($(window).scrollTop() > 0){
			$('#header').addClass('on');
		}else{
			$('#header').removeClass('on');
		}
	});

	//PC LNB
	var $lnb_pc = $('.lnb_p');

	$lnb_pc.find('.dep1 > li').on('mouseenter', function(){
		var delay_time = 0;

		$(this).find('.dep2 > li').each(function(){
			delay_time += 0.04;
			$(this).find('> a').css({
				'opacity' : '1',
				'transform' : 'translateX(0)',
				'transition-delay' : delay_time + 's'
			});
		});
	});

	$lnb_pc.find('.dep1 > li').on('mouseleave', function(){
		$(this).find('.dep2 > li > a').removeAttr('style');
	});

	//PC LNB ALL
	var $lnb_all_wrap = $('.lnb_p_all_wrap');

	$lnb_all_wrap.find('.btn_lnb_all_p').on('click', function(){
		if($lnb_all_wrap.hasClass('on')){
			$lnb_all_wrap.removeClass('on');
		}else{
			$lnb_all_wrap.addClass('on');
		}
		return false;
	});
})