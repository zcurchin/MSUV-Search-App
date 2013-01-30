<?php 

	/* Adjust this nigga when online. */
	$art_path = $_SERVER['DOCUMENT_ROOT'].'/MSUV-Search-App/art';

	/* Konfiguracija za bazu */
	$config['db'] = array(
		'host' => 'mysql51.cnt.rs',
		'user' => 'msuv_kolekcija',
		'pass' => 'PB96jecjxmrGT3SG',
		'dbname' => 'msuv_kolekcija'
	);

	$db = new PDO('mysql:host='.$config['db']['host'].';dbname='.$config['db']['dbname'],$config['db']['user'],$config['db']['pass']);	
	$db -> exec("SET CHARACTER SET utf8");

	/* Jezik za naslove */
	$naslovi = array(
		
		'sr' => array('Autor','Godina','Zbirka','Tehnika',
					  'Medij','Ključna reč','Pronađeno',
					  'Nema rezultata za vašu pretragu.','Poništi pretragu'),
		
		'en' => array('Author','Year','Collection','Technique',
					   'Medium','Keyword','Results',
					   'Your search returned no results.','Reset search'),

		'de' => array('Der Autor','Jahr','Sammlung','Technik',
					   'Medien','Werktitel','Gefunden',
					   'Es wurden keine mit Ihrer Suchanfrage übereinstimmenden Dokumente gefunden.',
					   'Die Suche abbrechen')
	);

	/* Jezik za detalje */
	$detalji = array(
		
		'sr' => array('Autor','Naziv','Godina','Dimenzije','Dimenzije lista',
					   'Dimenzije otiska','Zbirka','Tehnika','Medij',
					   'Dužina (ss:mm:ss)','Biografija','Materijal'),
		
		'en' => array('Author','Title','Year','Dimensions','Paper dimensions',
					  'Print dimensions','Collection','Technique','Medium',
					  'Duration (hh:mm:ss)','Biography','Material'),

		'de' => array('Der Autor','Werktitel','Jahr','Dimension','Blattdimension',
					  'Abdruckdimension','Sammlung','Technik','Medien',
					  'Länge (hh:mm:ss)','Biografie','Material')
	);
?>