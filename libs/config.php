<?php 
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

?>