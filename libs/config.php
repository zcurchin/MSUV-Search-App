<?php 
	/* Phpmyadmin
	   https://p3nlmysqladm001.secureserver.net/dgrid50/115 
	*/

	/* Adjust this nigga when online. */
	$art_path = $_SERVER['DOCUMENT_ROOT'].'/MSUV-Search-App/art';

	/* Konfiguracija za bazu */
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

	/* Jezik za naslove */
	$naslovi = array(
		
		'sr' => array('Autor','Godina','Zbirka','Tehnika',
					  'Medij','Naziv dela','Pronađeno',
					  'Nema rezultata za vašu pretragu.'),
		
		'en' => array('Author','Year','Collection','Technique',
					   'Medium','Title','Results',
					   'Your search returned no results.')
	);

	/* Jezik za detalje */
	$detalji = array(
		
		'sr' => array('Autor','Naziv','Godina','Dimenzije','Dimenzije lista',
					   'Dimenzije otiska','Zbirka','Tehnika','Medij',
					   'Dužina (ss:mm:ss)','Biografija','Materijal'),
		
		'en' => array('Author','Title','Year','Dimensions','Paper dimensions',
					  'Print dimensions','Collection','Technique','Medium',
					  'Duration (hh:mm:ss)','Biography','Material')
	);
?>