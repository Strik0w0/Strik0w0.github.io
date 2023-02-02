<?php
	$a = $_REQUEST['t1'];
	$b = $_REQUEST['t2'];
	$op = $_REQUEST['t3'];
	$s = $a + $b;
	$p = $a * $b;
	$r = $a % $b;
	$d = $a / $b;
	if ($op == '+') 
		echo "Voila la somme: $s";
	elseif ($op == '*')
		echo "Voila le produit: $p";
	elseif ($op == '%')
		echo "Voila le reste de la division: $r";
	else
		echo "Voila la division: $d";
?>