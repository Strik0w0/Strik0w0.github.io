<?php
	$id = $_REQUEST['id'];
	$pass = $_REQUEST['pass'];
	if (($id == 'admin') && ($pass == 'admin'))  {
		echo "Bonjour, $id <br>";
		echo "Nous sommes le ".Date("j/m/Y")."<br>";
		echo "Il est ".Date("H:i:s")."<br>";
	} else {
		echo "Erreur d'identifiant ou de mot de passe...<br>";
	}
?>
<a href="javascript:history.back()">Retour</a>