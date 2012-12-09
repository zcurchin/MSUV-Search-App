<?php

include('config.php');

$fn = $_POST['fn'];

/* Kontroler */
if(isset($_POST['fn'])){
    if ($fn == 'setSearchbox'){setSearchbox();}
    if ($fn == 'getResults')  {getResults();}
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
        <span id="live-label">'. $rezultati['naslovi'][6] .'</span><span id="live-score">16</span>
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
        
        echo 'Broj pronađenih rezultata: '. $query->rowCount();
    }
}

?>