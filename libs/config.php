<?php 
	
	$art_path = $_SERVER['DOCUMENT_ROOT'] . '/MSUV-Search-App/art';

	$config['db'] = array(
		'host' => 'digitalizacija.db.4078236.hostedresource.com',
		'user' => 'digitalizacija',
		'pass' => 'Muzej666!',
		'dbname' => 'digitalizacija'
	);

	$db = new PDO(
		'mysql:host='.  $config['db']['host'].
		';dbname='. 	$config['db']['dbname'],
		$config['db']['user'],
		$config['db']['pass']
	);

	$db -> exec("SET CHARACTER SET utf8");

	/* Jezik */
	$naslovi = array(
		'sr' => array('Autor','Godina','Zbirka','Tehnika','Medij', 'Naziv dela', 'Pronađeno','Nema rezultata za vašu pretragu.'),
		'en' => array('Author','Year','Collection','Technique','Medium','Title','Results','Your search returned no results.')
	);

	$detalji = array(
		'sr' => array('Autor','Naziv','Godina','Dimenzije','Dimenzije lista','Dimenzije otiska','Zbirka','Tehnika','Medij','Dužina (hh:mm:ss)'),
		'en' => array('Author','Title','Year','Dimensions','Paper dimensions','Print dimensions','Collection','Technique','Medium','Duration (hh:mm:ss)')
	);
?>