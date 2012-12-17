<?php

if(!isset($_COOKIE['lang'])){
    setcookie('lang','sr');
    $lang = array('sr','Izbor jezika','Sponzor projekta');
}else if($_COOKIE['lang'] == 'sr'){
    $lang = array('sr','Izbor jezika','Sponzor projekta');
}else if($_COOKIE['lang'] == 'en'){
    $lang = array('en','Language','Sponsors');
}else if($_COOKIE['lang'] == 'de'){
    $lang = array('de','','','','','');
}
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>MSUV</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css">
        <link rel="stylesheet" href="css/jquery.selectbox.css">
        <link rel="stylesheet" href="css/shadowbox.css">
        <link rel="stylesheet" href="videojs/video-js.min.css" /></code>

        
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->

        <!-- Application -->
        
        <a href="index.php"><div id="logo"></div></a>
        <div id="sponsor"><span id="sponsor-icon"></span><p><?php echo $lang[2] ?></p></div>
        
        <p id="lang-call"><?php echo $lang[1] ?></p>
        <div id="lang-menu">
            <p class="lang-option" title="sr">Srpski</p>
            <p class="lang-option last-option" title="en">English</p>
        </div>

        <div id="container">

            <!-- Application container -->
            <div id="app-container" class="landing-size">            
                
                <!-- Searchbox -->
                <div id="searchbox"></div>                        
                
                <!-- Slider -->
                <div id="slides">
                    <div class="slides_container">
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_1.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Viktor Vazareli / Naslov dela / 1987.</p>
                            </div>
                        </div>
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_2.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Viktor Vazareli / Naslov dela / 1987.</p>
                            </div>
                        </div> 
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_3.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Viktor Vazareli / Naslov dela / 1987.</p>
                            </div>
                        </div> 
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_4.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Viktor Vazareli / Naslov dela / 1987.</p>
                            </div>
                        </div>                  
                    </div>
                    <a href="#" class="prev"><img src="img/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>
                    <a href="#" class="next"><img src="img/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>
                </div>           

                <!-- Application content -->
                <div id="app-content">            
                    <!--controls-->
                    <div id="close-btn"></div>
                    <div id="back-btn"></div>

                    <!--scenes-->
                    <div id="scene-1"></div>
                    <div id="scene-2"></div>
                </div> 

                <div id="app-container-shadow">            
            </div>

        </div>
        
        <div id="hidden-bottom-menu"></div>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
        <script src="js/vendor/jquery-ui-1.9.0.custom.min.js"></script>
        <script src="videojs/video.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics -->
        <!--<script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>-->
    </body>
</html>