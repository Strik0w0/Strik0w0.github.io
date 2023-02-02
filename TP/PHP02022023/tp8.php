<?php
	$v1 = $_POST['v1'];
	$v2 = $_POST['v2'];
	$res1 = 1;
	for ($i = 1; $i <= $v1; $i++)
		$res1 = $res1 * $i;
	echo "Factorielle de $v1: $res1 <br>";

	for ($i = $v1; $i <= $v2; $i++)
		if ($i % 2 == 0)
			echo $i." ";
?>