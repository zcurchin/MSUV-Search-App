<?php

include('config.php');

$fn = $_POST['fn'];

/* Kontroler */
if(isset($_POST['fn'])){
    if ($fn == 'setSearchbox'){setSearchbox();}
    if ($fn == 'getResults')  {getResults();}
    if ($fn == 'countResults')  {countResults();}
    if ($fn == 'countAll')  {countAll();}
    if ($fn == 'showDetails')  {showDetails();}
}

function setSearchbox(){

    include('config.php');
    
	$rezultati = array();
    $autori = array();
    $godine = array();
    $zbirke = array();
    $tehnike = array();
    $mediji = array();

	/* Naslovi - SRPSKI */
    $naslovi_sr = array('Autor','Godina','Zbirka','Tehnika','Medij', 'Naziv dela', 'Pronađeno');
    $rezultati['naslovi'] = $naslovi_sr;
    
    /* Ukupno */
    $query = $db->query("SELECT * FROM baza");
    $ukupno = $query->rowCount();

	/* Autori */
    $query = $db->query("SELECT DISTINCT autor FROM baza ORDER BY autor ASC");
    while ($row=$query->fetch(PDO::FETCH_ASSOC)){
    	array_push($autori, $row['autor']);
    }
    $rezultati['autori'] = $autori;

    /* Godine */
    $query = $db->query("SELECT DISTINCT godina FROM baza WHERE godina IS NOT NULL ORDER BY godina ASC");
    while ($row=$query->fetch(PDO::FETCH_ASSOC)){
    	array_push($godine, $row['godina']);
    }
    $rezultati['godine'] = $godine;

    /* Zbirke - SRPSKI */
    $query = $db->query("SELECT zbr_naziv_sr FROM zbirke ORDER BY zbr_naziv_sr ASC");
    while ($row=$query->fetch(PDO::FETCH_ASSOC)){
    	array_push($zbirke, $row['zbr_naziv_sr']);
    }
    $rezultati['zbirke'] = $zbirke;

    /* Tehnike - SRPSKI */
    $query = $db->query("SELECT teh_naziv_sr FROM tehnike ORDER BY teh_naziv_sr ASC");
    while ($row=$query->fetch(PDO::FETCH_ASSOC)){
    	array_push($tehnike, $row['teh_naziv_sr']);
    }
    $rezultati['tehnike'] = $tehnike;

    /* Mediji - SRPSKI */
    $query = $db->query("SELECT med_naziv_sr FROM mediji ORDER BY med_naziv_sr ASC");
    while ($row=$query->fetch(PDO::FETCH_ASSOC)){
    	array_push($mediji, $row['med_naziv_sr']);
    }
    $rezultati['mediji'] = $mediji;

    /* HTML */

    echo '<form>
    <select id="sel_autor" name="Autor">
        <!--  selected="selected" -->
        <option value="0">'.$rezultati['naslovi'][0].'</option>';
        $i=1;
        foreach($autori as $a){
            echo '<option value="'.$i.'">'.$a.'</option>'; $i++;
        }
    echo '</select>';
    
    echo '<input type="text" id="keyword" name="keyword" value="'. $rezultati['naslovi'][5] .'"/>';

    echo '<select id="sel_godina" name="godina">';
        echo '<option value="0">'. $rezultati['naslovi'][1]. '</option>';
        $i=1;
        foreach($godine as $a){
            echo '<option value="'.$i.'">'.$a.'</option>'; $i++;
        }
    echo '</select>';
    
    echo '<select id="sel_zbirka" name="zbirka">';
        echo '<option value="0">'. $rezultati['naslovi'][2]. '</option>';
        $i=1;
        foreach($zbirke as $a){
            echo '<option value="'.$i.'">'.$a.'</option>'; $i++;
        }
    echo '</select>';
    
    echo '<select id="sel_tehnika" name="tehnika">';
        echo '<option value="0">'. $rezultati['naslovi'][3]. '</option>';
        $i=1;
        foreach($tehnike as $a){
            echo '<option value="'.$i.'">'.$a.'</option>'; $i++;
        }        
    echo '</select>';

    echo '<select id="sel_medij" name="medij">';
        echo '<option value="0">'. $rezultati['naslovi'][4]. '</option>';
        $i=1;
        foreach($mediji as $a){
            echo '<option value="'.$i.'">'.$a.'</option>'; $i++;
        }                
    echo '</select>';

    echo '<div id="live-search">
        <span id="live-label">'. $rezultati['naslovi'][6] .'</span><span id="live-score">'. $ukupno .'</span>
    </div>

    <div id="search-btn">
        <span id="search-btn-icon"></span>
        <!-- <input id="submit-search-btn" type="submit" value=""> -->
    </div></form>';
}

function getResults(){
    
    include('config.php');

    if(isset($_POST['upit'])){

        $upit    = $_POST['upit'];
        $autor   = $upit[0];
        $godina  = $upit[1];
        $zbirka  = $upit[2];
        $tehnika = $upit[3];
        $medij   = $upit[4];
        $keyword = $upit[5];

        $upit_sql ="SELECT * FROM baza 
                    LEFT JOIN zbirke ON baza.zbirka=zbirke.zbr_id 
                    LEFT JOIN tehnike ON baza.tehnika=tehnike.teh_id 
                    LEFT JOIN mediji ON baza.medij=mediji.med_id 
                    WHERE autor LIKE '%".$autor."%' AND 
                          godina LIKE '%".$godina."%' AND
                          zbr_naziv_sr LIKE '%".$zbirka."%' AND 
                          teh_naziv_sr LIKE '%".$tehnika."%' AND 
                          med_naziv_sr LIKE '%".$medij."%' AND 
                          naziv LIKE '%".$keyword."%' 
                    ";

        $query = $db->query($upit_sql);
        $pogodaka = $query->rowCount();
        
        if($pogodaka > 0){

            function idToFname($id){
                do    { $id = '0' . $id; } 
                while (strlen($id) < 6);       
                return $id;
            }

            echo '<div id="search-resoults-outer"><div id="search-resoults">';

            while ($row=$query->fetch(PDO::FETCH_ASSOC)){
               echo '     
                <div class="resoults" id="'. idToFname($row['id']) .'">
                <div class="thumb-background">                
                    <span class="thumb-icon"></span>
                    <img src="art/thumbnail/'. idToFname($row['id']) .'.jpg">
                </div>
                <span class="author">'. $row['autor'] .'</span>
                <span class="title">'. $row['naziv'] .'</span>
                <span class="year">'. $row['godina'] .'</span>
                </div>';
            }

            echo '</div></div>';

        }
    }
}

function countResults(){

    include('config.php');

    if(isset($_POST['upit'])){

        $upit    = $_POST['upit'];
        $autor   = $upit[0];
        $godina  = $upit[1];
        $zbirka  = $upit[2];
        $tehnika = $upit[3];
        $medij   = $upit[4];
        $keyword = $upit[5];

        $upit_sql ="SELECT id FROM baza 
                    LEFT JOIN zbirke ON baza.zbirka=zbirke.zbr_id 
                    LEFT JOIN tehnike ON baza.tehnika=tehnike.teh_id 
                    LEFT JOIN mediji ON baza.medij=mediji.med_id 
                    WHERE autor LIKE '%".$autor."%' AND 
                          godina LIKE '%".$godina."%' AND
                          zbr_naziv_sr LIKE '%".$zbirka."%' AND 
                          teh_naziv_sr LIKE '%".$tehnika."%' AND 
                          med_naziv_sr LIKE '%".$medij."%' AND 
                          naziv LIKE '%".$keyword."%' 
                    ";

        $query = $db->query($upit_sql);
        echo $query->rowCount();
    }
}

function countAll(){
    include('config.php');
    $upit_sql ="SELECT * FROM baza";
    $query = $db->query($upit_sql);
    echo $query->rowCount();
}

function showDetails(){

    include('config.php');

    if(isset($_POST['id'])){

        $id = $_POST['id'];
        $upit_sql ="SELECT * FROM baza 
                    LEFT JOIN zbirke ON baza.zbirka=zbirke.zbr_id 
                    LEFT JOIN tehnike ON baza.tehnika=tehnike.teh_id 
                    LEFT JOIN mediji ON baza.medij=mediji.med_id 
                    WHERE id='". $id ."'";

        $query = $db->query($upit_sql);
        $row=$query->fetch(PDO::FETCH_ASSOC);
        $medij=$row['medij'];

        echo '<div id="details-outer"><div id="details"><div id="images-box">';
         
        echo '<a class="feat-img" rel="shadowbox['.$id.']" href="art/master/'. $id .'.jpg"><img src="art/details/'. $id .'.jpg"></a>
                <div id="more-images">
                <a class="extra-img" href="art/details/000004.jpg"><img src="art/thumbnail/000004.jpg"></a>
                <a class="extra-img" href="art/details/000010.jpg"><img src="art/thumbnail/000010.jpg"></a>
                <a class="extra-img" href="art/details/000015.jpg"><img src="art/thumbnail/000015.jpg"></a>
                </div></div>
                <div id="info-box">
                <div class="info-row">
                    <span class="label">Autor:</span>
                    <span class="info">'. $row['autor'] .'
                </div>
                <div class="info-row">
                    <span class="label">Naziv dela:</span>
                    <span class="info">'. $row['naziv'] .'
                </div>
                
                <div class="info-row">
                    <span class="label">Godina:</span>
                    <span class="info">'.$row['godina'].'.</span>
                </div>';
                
                if($medij==1){
                //grafika
                echo'<div class="info-row">
                        <span class="label">Dimenzije lista:</span>
                        <span class="info">'. $row['graf_dim_l'] .' cm</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Dimenzije otiska:</span>
                        <span class="info">'. $row['graf_dim_o'] .' cm</span>
                    </div>';
                }elseif($medij==2 || $medij==3 || $medij==4 || $medij==5){ 
                // slika, skulptura, crtež, fotografija
                    echo'<div class="info-row">
                        <span class="label">Dimenzije:</span>
                        <span class="info">'. $row['dim'] .' cm</span>
                    </div>';
                }
                elseif($medij==6){
                // video
                    echo'<div class="info-row">
                        <span class="label">Dužina (hh:mm:ss):</span>
                        <span class="info">'. $row['duzina'] .'</span>
                    </div>';
                }

                echo'              
                <div class="info-row">
                    <span class="label">Zbirka:</span>
                    <span class="info">'. $row['zbr_naziv_sr'] .'</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Tehnika:</span>
                    <span class="info">'. $row['teh_naziv_sr'] .'</span>
                </div>
                
                <div class="info-row last-row">
                    <span class="label">Medij:</span>
                    <span class="info">'. ucfirst($row['med_naziv_sr']) .'</span>
                </div>
            </div>';


        echo '</div></div>';

    }

}

?>