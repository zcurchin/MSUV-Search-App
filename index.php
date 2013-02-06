<?php
if(isset($_GET['lang'])){
    $setlang = $_GET['lang'];
    if     ($setlang=='sr') setcookie('jezik','sr');
    else if($setlang=='en') setcookie('jezik','en');
    else if($setlang=='de') setcookie('jezik','de');
}else{
    if(!isset($_COOKIE['jezik'])){   $setlang = 'sr'; setcookie('jezik','sr');}
    else if($_COOKIE['jezik']=='sr') $setlang = 'sr';
    else if($_COOKIE['jezik']=='en') $setlang = 'en';
    else if($_COOKIE['jezik']=='de') $setlang = 'de';
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
        <title>MSUV | Kolekcija</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="favicon.ico">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css">
        <link rel="stylesheet" href="css/jquery.selectbox.css">
        <link rel="stylesheet" href="css/shadowbox.css">
        <link rel="stylesheet" href="videojs/video-js.min.css">
        <link rel="stylesheet" href="css/360-style.css">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->
        <!-- Application -->
        <a href="index.php"><div id="logo"></div></a>
        <div id="sponsor">
            <span id="sponsor-icon"></span>
            <p><?php 
                if($setlang=='sr')      echo 'Sponzor projekta';
                else if($setlang=='en') echo 'Sponsors';
                else if($setlang=='de') echo 'Projektsponsor';
            ?></p>
            <span id="close-sponsors"></span>
        </div>
        <div id="sponsor-bgd">
            <a href="http://www.artmentor.ch/" target="_blank"><span id="sponsor-logo"></span></a>
        </div>
        <div id="lang-menu">
            <span class="lang-option <?php if($setlang=='sr') echo 'active'; ?>" alt="sr">SR</span>
            <span class="lang-option <?php if($setlang=='en') echo 'active'; ?>" alt="en">EN</span>
            <span class="lang-option <?php if($setlang=='de') echo 'active'; ?>" alt="de">DE</span>
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
                                <p>Viktor Vazareli / Grafika / 1971.</p>
                            </div>
                        </div>
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_2.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Ištvan Sajko / Mlada / 1969.</p>
                            </div>
                        </div> 
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_3.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Borislav Šuput / Pisaća mašina / 1979.</p>
                            </div>
                        </div>
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_4.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Slobodan Bodulić / Struktura / 1980.</p>
                            </div>
                        </div>
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_5.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Atila Černik / Telopis / 1975.</p>
                            </div>
                        </div>
                        <div class="slide">
                            <a href="#"><img src="img/slides/slide_6.jpg" alt="Slide 1"></a>
                            <div class="caption">
                                <p>Bogdanka Poznanović / Libri in labirintum / 1986.</p>
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
                <div id="app-container-shadow"></div>           
            </div>
        </div>       
        <div id="hidden-bottom-menu"></div>
       
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
        <script src="js/vendor/jquery-ui-1.9.0.custom.min.js"></script>
        <script src="js/jquery.mCustomScrollbar.js"></script>
        <script src="videojs/video.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/dopelessRotate.js"></script>
        <!-- Google Analytics -->
        <!--<script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>-->
    </body>
</html>