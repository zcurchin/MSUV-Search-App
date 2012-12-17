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

	/* Naslovi */
	if($_POST['lang'] == 'sr'){
		$rezultati['naslovi'] = $naslovi['sr'];
	}else if($_POST['lang'] == 'en'){
		$rezultati['naslovi'] = $naslovi['en'];
	}else if($_POST['lang'] == 'de'){
		$rezultati['naslovi'] = $naslovi['de'];
	}
	
	$jezik = $_POST['lang'];

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
	$query = $db->query("SELECT zbr_naziv_".$jezik." FROM zbirke ORDER BY zbr_naziv_".$jezik." ASC");
	while ($row=$query->fetch(PDO::FETCH_ASSOC)){
		array_push($zbirke, $row['zbr_naziv_'. $jezik]);
	}
	$rezultati['zbirke'] = $zbirke;

	/* Tehnike - SRPSKI */
	$query = $db->query("SELECT teh_naziv_".$jezik." FROM tehnike ORDER BY teh_naziv_".$jezik." ASC");
	while ($row=$query->fetch(PDO::FETCH_ASSOC)){
		array_push($tehnike, $row['teh_naziv_'. $jezik .'']);
	}
	$rezultati['tehnike'] = $tehnike;

	/* Mediji - SRPSKI */
	$query = $db->query("SELECT med_naziv_".$jezik." FROM mediji ORDER BY med_naziv_".$jezik." ASC");
	while ($row=$query->fetch(PDO::FETCH_ASSOC)){
		array_push($mediji, $row['med_naziv_'.$jezik.'']);
	}
	$rezultati['mediji'] = $mediji;

	/* HTML */

	echo '<form id="pretraga" onKeyPress="return disableEnterKey(event)">
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
		echo '<option value="'.$i.'">'.ucfirst($a).'</option>'; $i++;
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

	/* Naslovi */
	if($_POST['lang'] == 'sr'){
		$rezultati['naslovi'] = $naslovi['sr'];
	}else if($_POST['lang'] == 'en'){
		$rezultati['naslovi'] = $naslovi['en'];
	}else if($_POST['lang'] == 'de'){
		$rezultati['naslovi'] = $naslovi['de'];
	}

	$jezik = $_POST['lang'];

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
		zbr_naziv_".$jezik." LIKE '%".$zbirka."%' AND 
		teh_naziv_".$jezik." LIKE '%".$tehnika."%' AND 
		med_naziv_".$jezik." LIKE '%".$medij."%' AND 
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
		else{
			echo '<div class="resoults" style="width:100%;margin-top:25%;text-align:center">';
			echo '<span class="year">'. $rezultati['naslovi'][7] .'</span>';
			echo '</div>';  
			echo '<div id="search-resoults-outer"><div id="search-resoults">';
			echo '</div></div>';
		}
	}
}

function countResults(){

	include('config.php');

	/* Naslovi */
	if($_POST['lang'] == 'sr'){
		$rezultati['naslovi'] = $naslovi['sr'];
	}else if($_POST['lang'] == 'en'){
		$rezultati['naslovi'] = $naslovi['en'];
	}else if($_POST['lang'] == 'de'){
		$rezultati['naslovi'] = $naslovi['de'];
	}

	$jezik = $_POST['lang'];


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
		zbr_naziv_".$jezik." LIKE '%".$zbirka."%' AND 
		teh_naziv_".$jezik." LIKE '%".$tehnika."%' AND 
		med_naziv_".$jezik." LIKE '%".$medij."%' AND 
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

	$jezik = $_POST['lang'];
	
	/* Naslovi */
	if($jezik == 'sr'){
		$rezultati['detalji'] = $detalji['sr'];
	}else if($jezik == 'en'){
		$rezultati['detalji'] = $detalji['en'];
	}else if($jezik == 'de'){
		$rezultati['detalji'] = $detalji['de'];
	}


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
		
		if($medij ==6){ 
		// video
			echo '
			<video id="video" class="video-js vjs-default-skin" controls width="450" height="338" preload="auto" loop data-setup="{}">
			<!-- <source type="video/mp4" src="art/video/'.$id.'.mp4">-->
			<source type="video/webm" src="art/video/'.$id.'.webm">
			</video>
			';

		}
		else{
			echo '<div><a class="feat-img" rel="shadowbox" href="art/master/'. $id .'.jpg"><img id="leading-img" alt="'.$id.'.jpg" src="art/details/'. $id .'.jpg"></a></div>';
			echo '<div id="more-images">';

				for($i=1; $i<5; $i++){				
					if(file_exists($art_path .'/master/'.$id.'-'.$i.'.jpg')){
						echo '<a class="extra-img"><img id="extra-img" alt="'.$id.'-'.$i.'.jpg" src="art/thumbnail/'.$id.'-'.$i.'.jpg"></a>';	
					}else{}
				}
			echo '</div>';
		}

		echo '
		</div>
		<div id="info-box">
		<div class="info-row">
		<span class="label">'.$rezultati['detalji'][0].':</span>
		<span class="info">'.$row['autor'].'
		</div>
		<div class="info-row">
		<span class="label">'.$rezultati['detalji'][1].':</span>
		<span class="info">'.$row['naziv'].'
		</div>
		
		<div class="info-row">
		<span class="label">'.$rezultati['detalji'][2].':</span>
		<span class="info">'.$row['godina'].'.</span>
		</div>';
		
		if($medij==1){
				//grafika
			echo'<div class="info-row">
			<span class="label">'.$rezultati['detalji'][4].':</span>
			<span class="info">'. $row['graf_dim_l'] .' cm</span>
			</div>
			<div class="info-row">
			<span class="label">'.$rezultati['detalji'][5].':</span>
			<span class="info">'. $row['graf_dim_o'] .' cm</span>
			</div>';
		}elseif($medij==2 || $medij==3 || $medij==4 || $medij==5){ 
				// slika, skulptura, crtež, fotografija
			echo'<div class="info-row">
			<span class="label">'.$rezultati['detalji'][3].':</span>
			<span class="info">'. $row['dim'] .' cm</span>
			</div>';
		}
		elseif($medij==6){
				// video
			echo'<div class="info-row">
			<span class="label">'.$rezultati['detalji'][9].':</span>
			<span class="info">'. $row['duzina'] .'</span>
			</div>';
		}

		echo'              
		<div class="info-row">
		<span class="label">'.$rezultati['detalji'][6].':</span>
		<span class="info">'. $row['zbr_naziv_'.$jezik] .'</span>
		</div>
		
		<div class="info-row">
		<span class="label">'.$rezultati['detalji'][7].':</span>
		<span class="info">'. $row['teh_naziv_'.$jezik] .'</span>
		</div>
		
		<div class="info-row last-row">
		<span class="label">'.$rezultati['detalji'][8].':</span>
		<span class="info">'. ucfirst($row['med_naziv_'.$jezik.'']) .'</span>
		</div>
		</div>';

		echo '</div></div>';

	}

}
?>