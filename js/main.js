// Slider
$(function(){
	$('#slides').slides({
		preload: true,
		preloadImage: 'img/loading.gif',
		play: 15000,
		pause: 2500,
		hoverPause: true,
		animationStart: function(current){
			$('.caption').animate({
				bottom:0
			},100);
			if (window.console && console.log) {
				// example return of current slide number
				console.log('animationStart on slide: ', current);
			};
		},
		animationComplete: function(current){
			$('.caption').animate({
				bottom:0
			},200);
			if (window.console && console.log) {
				// example return of current slide number
				console.log('animationComplete on slide: ', current);
			};
		},
		slidesLoaded: function() {
			$('.caption').animate({
				bottom:0
			},200);
		}
	});
});

// Get searchbox form from server
function getSearchbox() {
	$('#searchbox').load('searchbox.html', function(){
		$('select').selectbox();
		$('#keyword').focus(function () {
			if ($(this).val() == $(this).attr("title")) {
				$(this).val("").css({'color':'#fff'});
			}
		}).blur(function () {
			if ($(this).val() == "") {
				$(this).val($(this).attr("title")).css({'color':'#666'});
			}
		});
	});
}

getSearchbox();

// Store all sizes for app containers
var windowWidth,
	windowHeight,
	appContainerWidth_Ls,
	appContainerHeight_Ls,
	appContainerWidth_Fs,
	appContainerHeight_Fs,
	appContainer_marginTop_Ls,
	appContainer_marginTop_Fs,	
	appContentWidth,
	appContentHeight;

// Get all sizes for app containers
function getSizes() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    appContainerWidth_Ls = (windowWidth > 1600) ? 960 : 960;
    appContainerHeight_Ls = (windowWidth > 1600) ? 500 : 500;
    appContainerWidth_Fs = (windowWidth > 1600) ? 1500 : windowWidth - 40;
	appContainerHeight_Fs = (windowWidth > 1600) ? windowHeight - 150 : windowHeight - 80;
	appContainer_marginTop_Ls = Math.round((windowHeight - appContainerHeight_Ls)/2); 
	appContainer_marginTop_Fs = (windowWidth > 1600) ? 100 : 60;
	searchboxWidth = $('#searchbox').width();
	appContentWidth = (appContainerWidth_Fs - searchboxWidth) - 20;
	appContentHeight = appContainerHeight_Fs -2;    
};

// Cache elements selectors in global variables
var appContainer = $('#app-container'),
	appContainer_Ls = $('#app-container.landing-size'),
	appContainer_Fs = $('#app-container.full-size'),
	appContainer_shadow = $('#app-container-shadow'),
	appContent = $('#app-content'),
	searchbox = $('#searchbox'),
	slider = $('#slides'),
	scene1 = $('#scene-1'),
	scene2 = $('#scene-2'),
	closeButton = $('#close-btn'),
	backButton = $('#back-btn');


// Set app container width and height on landing size
function setLandingSize() {
	appContainer_Ls.css({
		'width' : appContainerWidth_Ls,
		'height' : appContainerHeight_Ls,
		'margin-top': appContainer_marginTop_Ls
	});
}

// Set app container width and height on full size
function setFullSize() {
	appContainer_Fs.css({
		'width' : appContainerWidth_Fs,
		'height' : appContainerHeight_Fs,
		'margin-top': appContainer_marginTop_Fs
	});
	appContent.css({
		'width' : appContentWidth,
		'height' : appContentHeight,
	});	
}

// Transition animation from landing to full size
// When user click on search button from landing size
function animateFullSize(){	
	slider.css({'display':'none'});
	appContainer_shadow.fadeOut(300, function(){		
		appContainer.animate({
			'width' : appContainerWidth_Fs,
			'height' : appContainerHeight_Fs,
			'margin-top': appContainer_marginTop_Fs 
		},300);	
	});
	setTimeout(function(){		
		appContent.css({
			'width' : appContentWidth,
			'height' : appContentHeight
		});
		appContent.fadeIn(300).spin();		
		searchbox.addClass('searchbox-shadow');
		appContainer.removeClass('landing-size').addClass('full-size');

	},700);	
}

// Transition animation from full to landing size
// When user click on close [ X ] button
function animateLandingSize(){	
	var	searchResoults = $('#search-resoults');
	
	appContent.fadeOut(300);
	searchResoults.remove();
	searchbox.removeClass('searchbox-shadow');
	appContainer.removeClass('full-size').addClass('landing-size');
	
	setTimeout(function(){		
		appContainer.animate({
			'width' : appContainerWidth_Ls,
			'height' : appContainerHeight_Ls,
			'margin-top': appContainer_marginTop_Ls 
		},300);
		setTimeout(function(){
			appContainer_shadow.fadeIn(300);
		},300);
	},400);
	
	setTimeout(function(){
		getSearchbox(); // Another call for searchbox
		slider.css({'display':'block'});
	},1000);
}

// Function to handle all element in UI after they been returned from server
function handleSearchResoults() {
	var	resoultsOuter = $('#search-resoults-outer');
	var	searchResoults = $('#search-resoults');

	searchResoults.waitForImages(function() {
		$(this).masonry({
			itemSelector: '.resoults',
			columnWidth: 186,
		});
		resoultsOuter.mCustomScrollbar({
	        scrollButtons:{
	        enable:false
	       	},
	       	scrollInertia: 0,
	       	advanced:{
				updateOnContentResize: true
				}
	    });	

		setTimeout(function(){
	    	resoultsOuter.animate({'opacity' : 1});
	    	appContent.spin(false);
	    	closeButton.show();
	    },200);
	});	
}

//**************** AJAX *****************//
// After you are done with ajax, pass this function (handleSearchResoults) as callback 
function showSearchResoults() {
	scene1.load('resoults.html', handleSearchResoults);
}

$('#search-btn').live('click', function() {	
	if (appContainer.hasClass('landing-size')) {
		animateFullSize();
		scene1.css({'display' : 'block'}).addClass('visible');

		setTimeout(showSearchResoults,1200);

	} else {
		// We are on resoults scene
		if (scene1.hasClass('visible')) {
			showSearchResoults();
		// We are on details scene
		} else {
			var	searchResoults = $('#search-resoults');
			searchResoults.remove();
			scene2.fadeOut(300, function(){			
			scene1.animate({
				'left' : '0px'
				}, function(){
					var	detailsOuter = $('#details-outer');
					detailsOuter.remove();
					backButton.hide();
					closeButton.show();
					detailsOuter.css({'opacity':0});
				});
			});
			scene1.addClass('visible');
			
			setTimeout(showSearchResoults,500);
		}
	}	
});

closeButton.click(function() {	
	animateLandingSize();
	$(this).hide();		
});

// Function to handle all element in UI after they been returned from server
function handleDetails(){	    
    var	details = $('#details');
	var	detailsOuter = $('#details-outer');	
    details.waitForImages(function() {
		detailsOuter.mCustomScrollbar({
	        scrollButtons:{
	        enable:false
	       	},
	       	scrollInertia: 0,
	       	advanced:{
				updateOnContentResize: true
				},
	    },appContent.spin(false));				
		setTimeout(function(){
	    	detailsOuter.animate({'opacity' : '1'}, function(){			    		
	    		backButton.show();
	    		closeButton.hide();
	    		});			    	
	    },200);
	});
}

// Show details
$('.resoults').live('click', function() {
	function loadDetails(){		
		appContent.spin();
		scene2.css({'display' : 'block'});
		
		//**************** AJAX *****************//
		// After you are done with ajax, pass this function (handleDetails) as callback
		scene2.load('details.html', handleDetails);		
	}

	scene1.animate({
		'left' : '-' + appContentWidth + 'px', leaveTransforms:true
	}, loadDetails);
	scene1.removeClass('visible');
});

// Slide back resoults scene (back button)
backButton.click(function() {	
	scene2.fadeOut(300, function(){
		scene1.animate({
		'left' : 0
		}, function(){
			var	detailsOuter = $('#details-outer');
			detailsOuter.remove();
			backButton.hide();
			closeButton.show();
			detailsOuter.css({'opacity':'0'});
		});
	});
	scene1.addClass('visible');
});

$(document).ready(function(){
	getSizes();
	setLandingSize();	
});

$(window).resize(function() {
	getSizes();
	setLandingSize();
	setFullSize();
});

// Show hide sponsors
$('#sponsor').toggle(function() {
	$('#app-container').animate({
		'top' : '-200', leaveTransforms:true
	});
	}, function() {
	$('#app-container').animate({
		'top' : '0'
	});
	
});

