/*     1729905 : 맞춤형 컨텐츠      */
AOS.init();


/*     1729955 : 이미지 슬라이드 (기본형)      */
jQuery(function($) {
	var
		def = $.Deferred()
		$owl = $('#owl__1729955__')
	;

	changeSrc($owl,def);

	$(window).on('resize',function(){
		changeSrc($owl,def);
	});

	def.promise().done(function(){
		loadCarousel($owl);
	});

	function changeSrc($owl,def){
		if(Modernizr.mq('only all and (min-width:1024px)')==true){
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src'));
			});
		}else{
			$owl.find('.main_img').each(function(){
				$(this).attr('src',$(this).attr('data-src-m'));
			});
		}
		def.resolve(true);
	}

	function loadCarousel($owl){
		$owl.owlCarousel({
			margin: 0,								// 이미지 간격
			loop: true,								// 무한 반복
			center: false,							// 액티브 슬라이드 가운데 정렬
			mouseDrag: true,						// 마우스 드레그 사용
			touchDrag: true,						// 터치 드레그 사용
			stagePadding: 0,						// 스테이지 여백 (좌우 슬라이드 노출)
			nav: false,					// 방향 네비게이션
			dots: false,				// 하단 네비게이션
			dotsEach: false,						// 하단 네비게이션 (페이지별 출력,항목별 출력)
			autoplay: true,							// 자동 재생
			autoplayTimeout: 5000,					// 자동 재생 속도
			smartSpeed: 250,						// 슬라이드 속도
			responsiveRefreshRate: 0,				// 반응형 체크 시간
			startPosition: 0,						// 시작 슬라이드 번호
			autoplayHoverPause: false,				// 마우스 오버시 일시정지
			responsiveClass: false,					// 반응형 class명 사용 (owl-reponsive-0)
			navContainer: false,					// 방향 네비게이션 커스터마이징
			dotsContainer: false,					// 하단 네비게이션 커스터마이징
			items: 1,								// 한 화면 출력수
			slideBy: 1,								// 한번에 슬라이드 되는 수
			animateOut: 'fadeOut'	// 슬라이드(''), 페이드(fadeOut)
		})
	}
});

/*     1730155 : 이미지 슬라이드 (기본형)      */
jQuery(function($) {
	$('#owl__1730155__').owlCarousel({
		margin: 0,								// 이미지 간격
		loop: true,								// 무한 반복
		center: false,							// 액티브 슬라이드 가운데 정렬
		mouseDrag: true,						// 마우스 드레그 사용
		touchDrag: true,						// 터치 드레그 사용
		stagePadding: 0,						// 스테이지 여백 (좌우 슬라이드 노출)
		nav: false,					// 방향 네비게이션
		dots: true,				// 하단 네비게이션
		dotsEach: false,						// 하단 네비게이션 (페이지별 출력,항목별 출력)
		autoplay: true,							// 자동 재생
		autoplayTimeout: 5000,					// 자동 재생 속도
		smartSpeed: 250,						// 슬라이드 속도
		responsiveRefreshRate: 0,				// 반응형 체크 시간
		startPosition: 0,						// 시작 슬라이드 번호
		autoplayHoverPause: false,				// 마우스 오버시 일시정지
		responsiveClass: false,					// 반응형 class명 사용 (owl-reponsive-0)
		navContainer: false,					// 방향 네비게이션 커스터마이징
		dotsContainer: false,					// 하단 네비게이션 커스터마이징
		items:1,								// 한 화면 출력수
		slideBy:1,								// 한번에 슬라이드 되는 수
		animateOut: ''	// 슬라이드(''), 페이드(fadeOut)
	})
});

/*     1729985 : 이미지 슬라이드 (기본형)      */
jQuery(function($) {
	$('#owl__1729985__').owlCarousel({
		margin: 0,								// 이미지 간격
		loop: true,								// 무한 반복
		center: false,							// 액티브 슬라이드 가운데 정렬
		mouseDrag: true,						// 마우스 드레그 사용
		touchDrag: true,						// 터치 드레그 사용
		stagePadding: 0,						// 스테이지 여백 (좌우 슬라이드 노출)
		nav: true,					// 방향 네비게이션
		dots: false,				// 하단 네비게이션
		dotsEach: false,						// 하단 네비게이션 (페이지별 출력,항목별 출력)
		autoplay: true,							// 자동 재생
		autoplayTimeout: 5000,					// 자동 재생 속도
		smartSpeed: 250,						// 슬라이드 속도
		responsiveRefreshRate: 0,				// 반응형 체크 시간
		startPosition: 0,						// 시작 슬라이드 번호
		autoplayHoverPause: false,				// 마우스 오버시 일시정지
		responsiveClass: false,					// 반응형 class명 사용 (owl-reponsive-0)
		navContainer: false,					// 방향 네비게이션 커스터마이징
		dotsContainer: false,					// 하단 네비게이션 커스터마이징
		items:1,								// 한 화면 출력수
		slideBy:1,								// 한번에 슬라이드 되는 수
		animateOut: ''	// 슬라이드(''), 페이드(fadeOut)
	})
});

/*     1730175 : 이미지      */


/*     1730055 : 한줄 텍스트      */


/*     1730065 : 타이틀      */


/*     1730075 : 장문 텍스트      */


/*     1730095 : YouTube 동영상 플레이어      */
if(typeof youtubeApi=='undefined'){
	var youtubeApi = document.createElement('script');

	youtubeApi.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(youtubeApi, firstScriptTag);

	var youtubeReady = false;

	function onYouTubeIframeAPIReady() {
		youtubeReady = true;
	}
}

var player__1730095__;
var timer__1730095__  = setInterval(onYouTubeReady__1730095__,200);

function onYouTubeReady__1730095__(){
	if(youtubeReady==true){
		onYouTubePlayer__1730095__();
	}
}

function onYouTubePlayer__1730095__(){
	player__1730095__ = new YT.Player('youtube_player__1730095__', {
		videoId: 'hC6yECVUCqQ',
		playerVars: {
			'autoplay':	0,	// 자동재생
			'mute': (0) ? 1 : 0,  // 음소거 - 음소거를 사용하지 않을 경우 크롬 브라우저에서 자동재생이 되지 않습니다.
			'loop':	0,	// 반복
			'playlists': 'hC6yECVUCqQ',	// 반복재생을 위한 목록
			'controls':	1,	// 동영상 컨트롤 출력
			'rel': 0,	// 재생 종료시 관련 동영상 표시 (0:안함)
			'showinfo': 0	// 재생 시작전에 동영상 정보 표시 (0:안함)
		}
	});

	clearInterval(timer__1730095__);
}

/*     1730125 : 이미지      */


/*     1730165 : YouTube 동영상 플레이어      */
if(typeof youtubeApi=='undefined'){
	var youtubeApi = document.createElement('script');

	youtubeApi.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(youtubeApi, firstScriptTag);

	var youtubeReady = false;

	function onYouTubeIframeAPIReady() {
		youtubeReady = true;
	}
}

var player__1730165__;
var timer__1730165__  = setInterval(onYouTubeReady__1730165__,200);

function onYouTubeReady__1730165__(){
	if(youtubeReady==true){
		onYouTubePlayer__1730165__();
	}
}

function onYouTubePlayer__1730165__(){
	player__1730165__ = new YT.Player('youtube_player__1730165__', {
		videoId: 'b0wDpaRD2d8',
		playerVars: {
			'autoplay':	0,	// 자동재생
			'mute': (0) ? 1 : 0,  // 음소거 - 음소거를 사용하지 않을 경우 크롬 브라우저에서 자동재생이 되지 않습니다.
			'loop':	0,	// 반복
			'playlists': 'b0wDpaRD2d8',	// 반복재생을 위한 목록
			'controls':	1,	// 동영상 컨트롤 출력
			'rel': 0,	// 재생 종료시 관련 동영상 표시 (0:안함)
			'showinfo': 0	// 재생 시작전에 동영상 정보 표시 (0:안함)
		}
	});

	clearInterval(timer__1730165__);
}

/*     1730135 : 한줄 텍스트      */


/*     1730145 : 맞춤전송폼 - 기본폼      */


