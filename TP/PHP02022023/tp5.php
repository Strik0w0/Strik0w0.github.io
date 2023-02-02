<?php
	$a = $_REQUEST['t1'];
	$b = $_REQUEST['t2'];
	$s = $a + $b;
	$p = $a * $b;
	$r = $a % $b;
	$d = $a / $b;
	echo "Voila la somme: $s <br>";
	echo "Voila le produit: $p <br>";
	echo "Voila le reste de la division: $r <br>";
	echo "Voila la division: $d <br>";
?>