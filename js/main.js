
$('html').spin();

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
	backButton = $('#back-btn'),
	keyword = $('#keyword'),
	langCall = $('#lang-call'),
	langMenu = $('#lang-menu'),
	sponsorBgd = $('#sponsor-bgd'),
	jezik = document.cookie.split('jezik=');
	jezik = jezik[1].substr(0,2);
	naziv_keyword = ['Ključna reč','Keyword','Werktitel'];

// Slider
$(function(){
	$('#slides').slides({
		preload: true,
		preloadImage: 'img/loading.gif',
		play: 8000,
		pause: 2500,
		hoverPause: true,
		animationStart: function(current){
			$('.caption').animate({
				bottom:0
			},100);
			if (window.console && console.log) {
				// example return of current slide number
				//console.log('animationStart on slide: ', current);
			};
		},
		animationComplete: function(current){
			$('.caption').animate({
				bottom:0
			},200);
			if (window.console && console.log) {
				// example return of current slide number
				//console.log('animationComplete on slide: ', current);
			};
		},
		slidesLoaded: function() {
			$('.caption').animate({
				bottom:0
			},200);
		}
	});
});

function getSearchbox() {

	$.ajax({
	  url: 'libs/ajax.php',
	  type: 'POST',
	  data: {'fn':'setSearchbox','lang':jezik},
	  success: function(data){
	  	searchbox.html(data);

	  	var keyword = $('#keyword');

	  	$('select', searchbox).selectbox({
			onChange: function(val, inst){
				prebrojRezultate();
			},
		});

	  	keyword.focus(function(){			
			if($(this).val()==naziv_keyword[0] || $(this).val()==naziv_keyword[1] || $(this).val()==naziv_keyword[2]){
				$(this).val('').css({'color':'#fff'});
			}
		});

	   	keyword.blur(function(){			
			if($(this).val() == ''){
				if(jezik == 'sr'){ $(this).val(naziv_keyword[0]).css({'color':'#666'}); }
				else if(jezik == 'en'){ $(this).val(naziv_keyword[1]).css({'color':'#666'}); }
				else if(jezik == 'de'){ $(this).val(naziv_keyword[2]).css({'color':'#666'});}
				prebrojRezultate();
			}
		});

		$('html').spin(false);
		$('body').animate({'opacity':'1'});

		/* Poništi pretragu */
		$('#reset-search').click(function(){	
			$('select',searchbox).selectbox("detach");
			$('select').val(0);
			$('select', searchbox).selectbox({
				onChange: function(val, inst){
					prebrojRezultate();
				},
			});

			if     (jezik=='sr') $('#keyword').val(naziv_keyword[0]).css({'color':'#666'});
			else if(jezik=='en') $('#keyword').val(naziv_keyword[1]).css({'color':'#666'});
			else if(jezik=='de') $('#keyword').val(naziv_keyword[2]).css({'color':'#666'});

			prebrojRezultate();
		});

		/* Pretraga tokom kucanja */
		$(keyword).bindWithDelay("keydown", function(){
			if ($(this).val().length >= 4) prebrojRezultate(); 
		}, 400);

    }
	});
}

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
    appContainerWidth_Ls = 960;
    appContainerHeight_Ls = 552;
    appContainerWidth_Fs = windowWidth - 40;
	appContainerHeight_Fs = windowHeight - 80;
	appContainer_marginTop_Ls = Math.round((windowHeight - appContainerHeight_Ls)/2); 
	appContainer_marginTop_Fs = 60;
	//appContainer_marginTop_Fs = (windowWidth > 1600) ? 100 : 60;
	searchboxWidth = searchbox.width();
	appContentWidth = (appContainerWidth_Fs - searchboxWidth) - 20;
	appContentHeight = appContainerHeight_Fs -2;    
};

// Set app container width and height on landing size
function setLandingSize() {
	appContainer_Ls.css({
		'width' : appContainerWidth_Ls,
		'height' : appContainerHeight_Ls,
		'margin-top': appContainer_marginTop_Ls
	});
}

// Set app container width and height on full size
function updateFullSize() {
	appContainer.css({
		'width' : appContainerWidth_Fs+5,
		'height' : appContainerHeight_Fs,
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

// After you are done with ajax, pass this 
// function (handleSearchResoults) as callback 
function showSearchResoults(){
	
	$.ajax({
	  url: 'libs/ajax.php',
	  type: 'POST',
	  data: {'fn':'getResults','upit':pribaviUpit(),'lang':jezik},
	  success: function(data){
		scene1.html(data);
		handleSearchResoults();		
    }
	});
}

function searchClick(){
	if (appContainer.hasClass('landing-size')){
		animateFullSize();
		scene1.css({'display' : 'block'}).addClass('visible');
		setTimeout(showSearchResoults,1200);

	} else {
		// We are on resoults scene
		if (scene1.hasClass('visible')) {
			var	resoultsOuter = $('#search-resoults-outer');
			resoultsOuter.animate({'opacity' : 0});
			appContent.spin();
			showSearchResoults();

		// We are on details scene
		} else {
			var	searchResoults = $('#search-resoults');
			searchResoults.remove();
			scene2.fadeOut(300, function(){			
			appContent.spin();
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
}

$('#search-btn').live('click', function() {	
	searchClick();
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
	    		Shadowbox.init({overlayOpacity : 0.9});
	    		Shadowbox.setup();
	    		});			    	
	    },200);
	});
}

// Show details
$('.resoults').live('click', function() {

	id = $(this).attr('id');

	function loadDetails(){		
		appContent.spin();
		scene2.css({'display' : 'block'});
		
		$.ajax({
		url: 'libs/ajax.php',
		type: 'POST',
		data: {'fn':'showDetails','id':id,'lang':jezik},
		success: function(data){
			window.location.hash = id;
			scene2.html(data);
			handleDetails();

			var fullbio = $('#full-bio'),
				shortbio = $('#short-bio'),
				leadingImg = $('#leading-img'),
				extraImg = $('[id^=extra-img]');

			/* Skripta za dodatne slike */
			extraImg.click(function(){
				stari_path = leadingImg.attr('alt');
				novi_path  = $(this).attr('alt');
				$(this).attr('src','art/thumbnail/'+ stari_path).attr('alt' ,stari_path);
				leadingImg.attr('src','art/details/' + novi_path).attr('alt',novi_path);
				$('#feat-img').attr('href','art/master/' + novi_path);
				Shadowbox.setup();
				Shadowbox.init();
			});

			/* Short bio / Full bio */	
			$('#bio-label').click(function(){
		        if(fullbio.is(':hidden')){
		          shortbio.hide();
		          fullbio.slideDown('fast', function(){
		          	$('#more-text').attr('src','img/less.png');
		          });
		        }
		        else{
		          fullbio.slideUp('fast', function(){
					shortbio.show();
			        $('#more-text').attr('src','img/more.png');
		          });
		        }
		    });


		}
		});

	}

	scene1.animate({
		'left' : '-' + appContentWidth + 'px', leaveTransforms:true
	}, loadDetails);
	scene1.removeClass('visible');
});

// Slide back resoults scene (back button)
backButton.click(function() {		

	window.location.hash = '';	
	window.history.pushState("", document.title, window.location.pathname);

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
	getSearchbox();
	getSizes();
	setLandingSize();
});

$(window).resize(function() {
	getSizes();
	
	if (appContainer.hasClass('full-size')) {
		updateFullSize();
	} else {
		setLandingSize();
	}
});

// Show hide sponsors
$('#sponsor').toggle(function() {
	appContainer.animate({
		'top' : '-=150px', leaveTransforms:true
	});

	$(this).animate({
		'top' : "-=150px", leaveTransforms:true
	}, function (){
		sponsorBgd.animate({'opacity':'1'});
	});

	$('#close-sponsors').animate({'opacity':'1'});

	sponsorBgd.css({
		'display' : 'block'
	});

	}, function() {
	$('#close-sponsors').css({'opacity':'0'});

	appContainer.animate({
		'top' : '+=150px', leaveTransforms:true
	});	

	$(this).animate({
		'top' : "+=150px", leaveTransforms:true
	});

	sponsorBgd.animate({'opacity':'0'}, function (){
		$(this).css({'display':'none'});
	});
});

function pribaviUpit(){
	var upit = [];
	src_autor   = $('#sel_autor option:selected').selectbox();
	src_godina  = $('#sel_godina option:selected').selectbox();
	src_zbirka  = $('#sel_zbirka option:selected').selectbox();
	src_tehnika = $('#sel_tehnika option:selected').selectbox();
	src_medij   = $('#sel_medij option:selected').selectbox();
	keyword = $('#keyword');
	src_autor.val()   != 0 ? upit.push(src_autor.html())   : upit.push('');
	src_godina.val()  != 0 ? upit.push(src_godina.html())  : upit.push('');
	src_zbirka.val()  != 0 ? upit.push(src_zbirka.html())  : upit.push('');
	src_tehnika.val() != 0 ? upit.push(src_tehnika.html()) : upit.push('');
	src_medij.val()   != 0 ? upit.push(src_medij.html())   : upit.push('');
	if(keyword.val()!=naziv_keyword[0] && keyword.val()!=naziv_keyword[1] && keyword.val()!=naziv_keyword[2]) {
		upit.push(keyword.val());
	}else{
		upit.push('');
	}
	return upit;
}

function prebrojRezultate(){

	upit = pribaviUpit();
	livescore = $('#live-score');
	
	if( src_autor.val() > 0   ||
		src_godina.val() > 0  ||
		src_zbirka.val() > 0  ||
		src_tehnika.val() > 0 ||
		src_medij.val() > 0   ||
		keyword.val()     != naziv_keyword[0] &&
		keyword.val()     != naziv_keyword[1] &&
		keyword.val()     != naziv_keyword[2]
	){
		$.ajax({
		  url: 'libs/ajax.php',
		  type: 'POST',
		  data: {'fn':'countResults','upit':upit,'lang':jezik},
		  success: function(data){
		  	livescore.text(data);
		}
		});
	}
	else{
		$.ajax({
		  url: 'libs/ajax.php',
		  type: 'POST',
		  data: {'fn':'countAll','lang':jezik},
		  success: function(data){
		  	livescore.text(data);
		}
		});
	}

}

langCall.click(function(){
	langMenu.toggleClass('on');
});

$('html').click(function() {
  if (langMenu.hasClass('on')){
	langMenu.toggleClass('on');
	}
});

langMenu.click(function(event){
    event.stopPropagation();
});

langCall.click(function(event){
    event.stopPropagation();
});

$('.lang-option').click(function(){
	document.cookie = "jezik="+ $(this).attr('alt');
	location.reload();
});

/* Onesposobi enter dugme na searchbox-u */
function disableEnterKey(e){
     var key;
     if(window.event) key = window.event.keyCode; // IE
     else key = e.which; // Firefox
     if(key == 13){
     	searchClick();
     	return false;
     }else{
     	return true;
     } 
}